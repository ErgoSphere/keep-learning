/**
 * Created by ErgoSphere on 2021/2/7
 *
 * indexedDB
 *
 **/
const dbName = "es_db";
const tbName = "es_os";
const version = 1;
let DBO, db;

export const dbConnect = (type) => {
  if (!window.indexedDB) return false;
  return new Promise((resolve) => {
    DBO = window.indexedDB.open(dbName, version);
    DBO.onsuccess = (evt) => {
      db = DBO.result;
      displayData(type).then(() => {
        resolve();
      });
    };
    DBO.onerror = (evt) => {
      console.log("Database打开失败, 将停止临时存储工作");
      resolve();
    };
    DBO.onupgradeneeded = (evt) => {
      let ndb = evt.target.result;
      if (!ndb.objectStoreNames.contains(tbName)) {
        let store = ndb.createObjectStore(tbName, {
          keyPath: "id",
          autoIncrement: true,
        });
        store.createIndex("type", "type", { unique: true });
        store.createIndex("content", "content", { unique: false });
      }
    };
  });
};

export const closeDBConnect = () => {
  if (db) db.close();
};

export const updateDBItem = (type, data, id) => {
  return new Promise((resolve) => {
    let newItem = { type: type, content: data };
    if (id) newItem.id = id;

    let transaction = db.transaction([tbName], "readwrite");
    let objectStore = transaction.objectStore(tbName);
    let osr = objectStore.put(newItem);
    osr.onsuccess = () => {};
    transaction.oncomplete = () => {
      //写入完成
      resolve(osr.result);
    };
    transaction.onerror = (err) => {
      console.log("Database写入失败，将中止临时存储工作");
    };
  });
};

export const removeDBItem = (id) => {
  return new Promise((resolve) => {
    let transaction = db.transaction([tbName], "readwrite");
    let objectStore = transaction.objectStore(tbName);
    let osr = objectStore.delete(id);
    transaction.oncomplete = () => {
      resolve();
    };
    transaction.onerror = (err) => {
      console.log("remove error", err);
    };
  });
};

const displayData = (type) => {
  return new Promise((resolve) => {
    let objStore = db.transaction(tbName).objectStore(tbName);
    let index = objStore.index("type");
    let req = index.get(type);

    req.onsuccess = (e) => {
      let result = e.target.result,
        temp;
      temp = result || {};
      console.log("dbDATA", temp)
      resolve();
    };
  });
};

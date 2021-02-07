/**
 * Created by ErgoSphere on 2021/2/7
 **/

export const setStore = (k, v) => {
  if (k === undefined || k === null || v === undefined) {
    return false;
  }
  if (typeof v === "object") {
    v = JSON.stringify(v);
  }
  localStorage.setItem(k, v);
};

export const getStore = k => {
  return k ? localStorage.getItem(k) : false;
};

export const deleteStore = k => {
  if (!k) return false;
  localStorage.removeItem(k);
};
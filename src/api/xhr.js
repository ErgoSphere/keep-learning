/**
 * Created on 2021/2/7
 *
 * axios 封装
 *
 **/
import Axios from "axios"

//init
let axs = Axios.create({
  baseURL: process.env.VUE_APP_BASEURL,
  timeout: 0
})
//interceptors
axs.interceptors.request.use(conf => {
  //request head rewrite
  return conf;
});
axs.interceptors.response.use(res => {
  //response head rewrite
  return res;
});
export const xhr = (type, path, data, opt) => {
  let config = {
    url: path,
    method: type
  };
  if (data !== undefined) {
    if (type === "post" || type === "put") {
      config.data = data;
    } else {
      config.params = data
    }
  }

  if (opt && typeof opt === "object" && Object.keys(opt).length) {
    config = Object.assign(config, opt);
  }
  return new Promise((resolve, reject) => {
    axs
      .request(config)
      .then(
        res => {
          if (res.data.retry) { // auto re-send request
            xhr(type, path, data, opt);
          } else {
            let data = res.data;
            let code = Number(data.code);
            if (code === 200) { // if successful code is 200
              resolve(data.data);
            } else {
              reject(data.data);
            }
          }
        },
        res => {
          reject(res);
        }
      )
      .catch(err => {
        reject(err);
      });
  });
};
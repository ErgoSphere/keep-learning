/**
 * Created by ErgoSphere on 2021/2/7
 **/

export const setCookie = (k, v, expires) => {
  let valid = new Date();
  valid.setMinutes(valid.getMinutes() + parseInt(expires));
  document.cookie =
    k +
    "=" +
    encodeURI(v) +
    (expires ? ";expires=" + valid.toUTCString() : "") +
    ";path=/";
};
export const getCookie = k => {
  if (document.cookie.length > 0) {
    let c_start = document.cookie.indexOf(k + "=");
    if (c_start !== -1) {
      c_start = c_start + k.length + 1;
      let c_end = document.cookie.indexOf(";", c_start);
      if (c_end === -1) {
        c_end = document.cookie.length;
      }
      return decodeURI(document.cookie.substring(c_start, c_end));
    }
  }
  return "";
};
export const delCookie = k => {
  let exp = new Date();
  exp.setTime(exp.getTime() - 1);
  let cval = getCookie(k);
  if (cval !== null) {
    document.cookie =
      name + "=" + cval + ";expires=" + exp.toUTCString() + ";path=/";
  }
};
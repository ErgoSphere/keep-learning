/**
 * Created by ErgoSphere on 2021/2/8
 **/

//手机IMEI格式
export const isIMEI = str => {
  let reg = /^([0-9a-zA-Z]{12}|[0-9a-zA-Z]{13}|\d{14,15}|\d{17,18})$/;
  return reg.test(str);
}
export const pureIMEI = str => {
  let reg = /^(\d{14,15}|\d{17,18}})$/;
  return reg.test(str);
};
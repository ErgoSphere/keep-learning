/**
 * Created by ErgoSphere on 2021/2/8
 **/

//手机IMEI格式
export const isIMEI = str => {
  let reg = /^([0-9a-zA-Z]{12}|[0-9a-zA-Z]{13}|\d{14,15}|\d{17,18})$/;
  return reg.test(str);
};
export const pureIMEI = str => {
  let reg = /^(\d{14,15}|\d{17,18}})$/;
  return reg.test(str);
};

//平台判断
export const platform = () => {
  let ua = navigator.userAgent;
  return {
    ie: ua.indexOf("Trident") > -1,
    opera: ua.indexOf("Presto") > -1,
    webkit: ua.indexOf("AppleWebKit") > -1, // safari, chrome
    firefox: ua.indexOf("Gecko") > -1 && ua.indexOf("KHTML") === -1,
    mobile: Boolean(ua.match(/AppleWebKit.*Mobile.*/)),
    ios: Boolean(ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)),
    android: ua.indexOf("Android") > -1 || ua.indexOf("Adr") > -1,
    iphone: ua.indexOf("iPhone") > -1,
    ipad: ua.indexOf("iPad") > -1,
    webApp: ua.indexOf("Safari") === -1, //web应用程序，无头部底部
    weixin: ua.indexOf("MicroMessenger") > -1, //微信内打开
    qq: ua.match(/\sQQ/i) === " qq" || ua.match(/\sQQ/i) === " QQ" //QQ内打开
  };
};

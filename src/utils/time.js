export const timeTrans = (ts) => {
  if (ts) {
    let uts = new Date(Number(ts) * 1000);
    let yy = uts.getFullYear(),
      mm = uts.getMonth() + 1,
      dd = uts.getDate(),
      h = uts.getHours(),
      m = uts.getMinutes(),
      s = uts.getSeconds();
    if (mm < 10) {
      mm = "0" + mm;
    }
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (h < 10) {
      h = "0" + h;
    }
    if (m < 10) {
      m = "0" + m;
    }
    if (s < 10) {
      s = "0" + s;
    }
    return yy + "-" + mm + "-" + dd + " " + h + ":" + m + ":" + s;
  } else {
    return false;
  }
};

export const timeCounter = (diff) => {
  let h = timeAddZero(Number(diff / (60 * 60)));
  let m = timeAddZero(Number((diff / 60) % 60));
  let s = timeAddZero(Number(diff % 60));
  return h + " : " + m + " : " + s;
};

export const timeAddZero = (x) => {
  return x < 10 ? "0" + x : x + "";
};

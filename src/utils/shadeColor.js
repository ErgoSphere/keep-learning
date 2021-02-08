/**
 * Created by Ergosphere on 2019-12-10.
 */

export const colorRGB = str => {
  let sColor = str.toLowerCase();
  //十六进制颜色值的正则表达式
  let reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  // 如果是16进制颜色
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      let sColorNew = "#";
      for (let i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    //处理六位的颜色值
    let sColorChange = [];
    for (let i = 1; i < 7; i += 2) {
      sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
    }
    return "RGB(" + sColorChange.join(",") + ")";
  }
  return sColor;
};

export const genShadeColor = (colorMAX, colorMIN, num) => {
  let colorMax = colorMAX.toLowerCase();
  let colorMin = colorMIN.toLowerCase();
  let RegHex = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  if (RegHex.test(colorMax) && /^rgb/.test(colorMax)) {
    colorMax = "rgb(221,221,221)";
  } else if (RegHex.test(colorMin) && /^rgb/.test(colorMin)) {
    colorMin = "rgb(116,116,116)";
  }
  if (RegHex.test(colorMax)) {
    colorMax = colorRGB(colorMax);
  }
  if (RegHex.test(colorMin)) {
    colorMin = colorRGB(colorMin);
  }

  colorMax = colorMax.slice(4, -1).split(",");
  colorMin = colorMin.slice(4, -1).split(",");

  let colors = [];
  //默认的最深颜色
  let red = colorMax[0] - 0,
    green = colorMax[1] - 0,
    blue = colorMax[2] - 0;
  //最浅颜色是239,239,239 比如：最浅颜色的red是 239 则差值为239-134=105
  let maxRed = colorMin[0] - 0,
    maxGreen = colorMin[1] - 0,
    maxBlue = colorMin[2] - 0;
  let level = num;
  while (level--) {
    colors.push("rgb(" + red + "," + green + "," + blue + ")");
    red += parseInt(maxRed / num);
    green += parseInt(maxGreen / num);
    blue += parseInt(maxBlue / num);
  }
  return colors;
};

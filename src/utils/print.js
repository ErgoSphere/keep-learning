/**
 * Created by ErgoSphere on 2021/2/7
 **/

const removePrinter = () => {
  let fr = document.querySelector(".print-iframe");
  fr.parentNode.removeChild(fr);
};
const generatedPrinter = htmlStr => {
  return new Promise((resolve, reject) => {
    let pfr = document.createElement("iframe");
    pfr.style.visibility = "hidden";
    pfr.style.position = "fixed";
    pfr.style.right = "0";
    pfr.style.bottom = "0";
    pfr.className = "print-iframe";
    document.body.appendChild(pfr);
    pfr.contentWindow.document.open("text/htmlreplace");
    pfr.contentWindow.document.write(htmlStr);
    pfr.contentWindow.focus();
    setTimeout(function() {
      pfr.contentWindow.print();
      pfr.contentWindow.document.close();
      removePrinter();
      resolve();
    }, 100);
  });
};
const pageSetting = () => {
  let str =
    "<style> @page {margin: 0.5cm; size: A4; padding: 2cm 1cm; font-size: 10px;text-align: center}";
  str += '@charset "UTF-8";';
  str += "@media print {";
  str += " thead { display: table-header-group; page-break-before: avoid }";
  str += " tfoot { display: table-footer-group; }";
  str += " tr{ page-break-inside: avoid; page-break-before: avoid }";
  str +=
    " @page {margin: 0.5cm; size: A4; padding: 2cm 1cm; font-size: 10; text-align: center} .order-page {page-break-after: always;}";
  str += "}";
  str += "</style>";
  return str;
};

export const print = (o, title) => {
  return new Promise((resolve, reject) => {
    let data = Array.isArray(o) ? o : new Array(o); // solo , multi
    let ctx = "<!DOCTYPE html><html><head><title>";
    if (title) ctx += title;

    ctx += "</title>" + pageSetting() + "</head>";
    ctx += '<body style="margin: 0; padding: 0; height: 100%;">';
    for (let x in data) {
      // ctx templates
    }
    ctx += "</body></html>";
    generatedPrinter(ctx).then(res => {
      resolve();
    });
  });
};

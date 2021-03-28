/**
 * Created by ErgoSphere on 2021/3/19
 **/

let res = "file stream"

let blob = new Blob([res], {
  type: "application/vnd.ms-excel"
})
if (window.navigator.msSaveOrOpenBlob) {
  navigator.msSaveOrOpenBlob(blob)
} else {
  let link = document.createElement("a")
  link.setAttribute("target", "_blank")
  link.href = window.URL.createObjectURL(blob)
  link.download = ""
  if (window.navigator.product === "Gecko") {
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  } else {
    link.click()
  }
  window.URL.revokeObjectURL(link.href)
}
<template>
<button @click="excelOutput">导出EXCEL文件</button>
</template>

<script>
import XLSX from "xlsx"
export default {
  name: "sheet-output",

  methods: {
    excelOutput: function() {
      let a = new Array()
      let header = ["表头1", "表头2"]
      a.push(header)

      let fileName = "EXCEL导出测试"
      let ws_name = "Sheet1"
      let wb = XLSX.utils.book_new(), ws = XLSX.utils.aoa_to_sheet(a)
      XLSX.utils.book_append_sheet(wb, ws, ws_name)
      XLSX.writeFile(wb, fileName)
    }
  }
};
</script>

<style scoped>

</style>
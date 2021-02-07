<template>
  <button @click="excelOutput">导出EXCEL文件</button>
</template>

<script>
import XLSX from "xlsx";
export default {
  name: "sheet-output",

  methods: {
    excelOutput: function() {
      let a = new Array(),
        merge = new Array();
      let header = ["表头1", "", "", "", "", ""];
      //合并单元格 s: start, e: end, r: row, c: cell
      merge.push({
        s: { r: 0, c: 0 },
        e: { r: 0, c: 5 }
      });
      a.push(header);

      let fileName = "EXCEL导出测试";
      let ws_name = "Sheet1";
      let wb = XLSX.utils.book_new(),
        ws = XLSX.utils.aoa_to_sheet(a);
      if (!ws["!merges"]) ws["!merges"] = [];
      ws["!merges"] = merge;
      //单元格宽度
      ws["!cols"] = [
        { wpx: 60 },
        { wpx: 70 },
        { wpx: 70 },
        { wpx: 110 },
        { wpx: 70 },
        { wpx: 70 }
      ];
      XLSX.utils.book_append_sheet(wb, ws, ws_name);

      XLSX.writeFile(wb, fileName);
    }
  }
};
</script>

<style scoped></style>

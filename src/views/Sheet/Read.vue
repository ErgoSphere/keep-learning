<template>
  <label class="excel-reader">
    读取表格
    <input
      type="file"
      @change="modifyFile"
      @keypress.enter.prevent="fileEnter"
      ref="excelUploader"
      accept=".csv, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    />
  </label>
</template>

<script>
import XLSX from "xlsx";
export default {
  name: "sheet-read",

  data() {
    return {
      file: null,
      fileName: "",
      reader: null
    };
  },

  mounted() {
    this.readerInit();
  },

  methods: {
    readerInit: function() {
      let vm = this;
      vm.reader = new FileReader();
      vm.reader.onload = function(e) {
        vm.loadingShown = true;
        let data = e.target.result;
        let wb = XLSX.read(data, {
          type: "binary"
        });
        let codes = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);

        this.$emit("read", codes);
      };
    },

    modifyFile: function(obj) {
      if (!obj.target.files) {
        return;
      }
      let f = obj.target.files[0];
      this.reader.readAsBinaryString(f);
    },

    fileEnter: function(e) {
      e.preventDefault();
    }
  }
};
</script>

<style scoped></style>

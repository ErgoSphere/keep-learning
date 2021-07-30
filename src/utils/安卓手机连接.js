/**
 * Created by ErgoSphere on 2021/7/30
 *
 * Node.js
 *
 * 需要预先在电脑上装有platform-tools并配置好环境变量
 * 锁屏状态下连接手机可能会导致读取失败
 **/

const adb = require("adbkit")
let client
const adbInit = () => {
  client = adb.createClient()
  client.trackDevices().then(tracker => {
    tracker.on("add", device => {
      client
        .shell(device.id, "service call iphonesubinfo 1 | toybox cut -d \"'\" -f2 | toybox grep -Eo '[0-9]' | toybox xargs | toybox sed 's/ //g'")
        .then(adb.util.readAll)
        .then(output => {
          //IMEI
          console.log(output.toString().replace(/[\r\n]/g, ""))
          //安卓机器信息
          client.getProperties(device.id, (err, res) => {
            console.log("安卓：", res)
          })
        })
    })
    tracker.on("remove", device => {
      //移除
    })
    tracker.on("end", () => {})
  })
}
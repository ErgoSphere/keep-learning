/**
 * Created by ErgoSphere on 2021/3/5
 * original js: https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket
 **/
import io from "socket.io-client"

const socketUrl = ""

let socket

export const openSocket = () => {
  return new Promise(resolve => {
    if (!socket || (socket && !socket.connected)) {
      if (!socket) {
        socket = io(socketUrl, {
          query: {},
          autoConnect: false, //初始手动连接
          transports: ["websocket"] //可切换为websocket或polling
        })
      }
      socket.open()
      socket.on("connect", () => {})
      socket.on("disconnect", () => {})
      socket.on("connect_error", error => {})
      socket.on("update", data => {})
    }
    resolve()
  })
}

export const closeSocket = () => {
  return new Promise(resolve => {
    if (socket) {
      socket.disconnect()
    }
    resolve()
  })
}

export const sendData = (eventName, data) => {
  return new Promise((resolve, reject) => {
    if (socket) {
      //向服务器发送数据时，如未设置回调函数，则服务器不会向客户端发送响应数据
      //服务器回传响应数据
      socket.emit(eventName, data, res => {
        resolve(res)
      })
      //服务器不回传响应数据
      socket.emit(eventName, data)
    } else {
      reject("未建立socket连接")
    }
  })
}
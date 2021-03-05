/**
 * Created by ErgoSphere on 2021/3/5
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
          autoConnect: false,
          transports: ["websocket"]
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
      socket.emit(eventName, data, res => {
        resolve(res)
      })
    } else {
      reject("未建立socket连接")
    }
  })
}
### ❖ linux下node.js安装

- 直接提升admin到root会导致root权限丢失。centOS7和ubuntu不允许root登入图形界面。

- 丢失root权限后通过recovery取回admin无可行性

- 设置软连接对配置环境变量无用，需手动配置，并且需要分别配置全局和用户的。

```
$ npm config get prefix // 假设返回 opt/node/node10.x.x
$ sudo gedit/etc/profile
```

在打开的文件中添加

```
export PATH=$PATH:/opt/node/10.0.1/bin
export NODE_PATH='/opt/node/10.0.1/lib/node_modules'
```

然后

```
$ sudo gedit ~/.profile
$ source .profile
```


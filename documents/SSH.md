### ➤ MAC中生成SSH key
- 检查是否存在SSH keys
```
$ ls -al ~/.ssh
```
如果存在则会列出目录文件列表，如id_rsa, id_rsa.pub

如果不存在则会出现No such file or directory

- 生成SSH key
```
$ ssh-keygen -t rsa -b 4096 -C "mail@mail.com"
```
接下来就都回车就可以了

- 添加SSH key到ssh-agent

1. 先确保ssh-agent可用
``` 
$ eval "$(ssh-agent -s)"
```
输出
```
Agent pid 1111
```
2. 添加
``` 
$ ssh-add ~/.ssh/id_rsa
```
macos更新可能导到致ssh-agent清空，可查看
```
$ ssh-add -l
```
- 复制SSH key到剪切版
```
$ pbcopy < ~/.ssh/id_rsa.pub
```
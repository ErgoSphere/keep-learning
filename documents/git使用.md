#Git命令

- 确定当前工作区域

```cmd
git status 
```

- 工作区转入暂存区

```cmd
git add [file-name]
```

- 暂存区转入git

```cmd
git commit -m '[commit-message]'
```

- 删除工作区文件

```cmd
git rm -f [file-name]
```

- 初始化新的git仓库 

```
git init
```

- 将远程仓库同步到本地

```
git clone [remote address]
```

- 本地仓库同步到远程仓库 

```
git push 
```

- 切换分支 

```
git checkout [branch-name]
```

- 分支a的所有提交应用到分支b

```
git checkout b
git merge a
// or
git merge a b
```

- 某提交应用到当前分支 

``` 
git cherry-pick [commit-hash]
```

- 本地仓库删除commit

```
git reset --hard [commit-id] //回滚到commid-id
```
### CSS权重

ref: [https://juejin.cn/post/6844904014962753544](https://juejin.cn/post/6844904014962753544)

- 内联样式：一个标记为1， 依次累加 1 0 0 0

- ID选择器：一个标记为1， 依次累加 0 1 0 0

- class, 属性， 伪类(:hover, visited, link, active)：有一个标记为1， 依次累加 0 0 1 0 

- 伪元素(before, after)，元素标签： 0 0 0 1

- 通配选择器(*), +, >, ~： 不加权重 

- !important高于所有未指定，多个规则中同一属性都指定的话则相抵，依照上述情况比较计算 

---

### 弹盒及响应式

ref: [https://www.jianshu.com/p/c6cae35e2b93](https://www.jianshu.com/p/c6cae35e2b93)

应用：

1. 居中DIV

2. flex-wrap对多个盒子自动换行

3. 在盒子内部自动做等份处理flex: 1(grown 1, shrink 1, basis 0)

---

### ❖ 居中显示某个DIV

1. [BFC](https://www.cnblogs.com/chen-cong/p/7862832.html)：

```html
<div class="container">
  <div class="column"></div>
  <div class="column"></div>
  <div class="column"></div>
</div>
<style>
  .column:nth-of-type(1), .column:nth-of-type(2) {
    width: 100px;
    height: 300px;
  }
  .column:nth-of-type(1) {
    float: left;
  }
  .column:nth-of-type(2) {
    float: right
  }
  .column:nth-of-type(3) {
    overflow: hidden; //create BFC
    height: 300px;
  }
</style>
```

2. absolute + CSS3(IE8不支持)

```html
<div class="parent">
  <div class="child"></div>
</div>
<style>
  .parent {
    position: relative;
  }
  .child {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
```

3. flex(IE9不支持)

```html
<div class="parent">
  <div class="child"></div>
</div>
<style>
  .parent {
    display: flex;
    align-items: center;
    justify-content: center
  }
</style>
```

4. table-cell(IE8不支持)

```html
<div class="parent">
  <div class="child"></div>
</div>
<style>
  .parent {
    display: table;
    width: 100%;
    height: 100%;
  }
  .child {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  }
</style>
```

5. 伪类

```html
<div class="parent">
  <div class="child"></div>
</div>
<style>
  .parent {
    width: 300px;
    height: 300px;
    text-align: center;
  }
  .parent::before {
    content: "";
    display: inline-block;
    width: 0;
    height: 100%;
    vertical-align: middle;
  }
  .child {
    display: inline-block;
  }
</style>
```



---

### ❖ 响应式

- responsive: @media(CSS3)

- 针对手机设置 

```html
<name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"></name>
```
- 各单位：

  + px: 绝对单位，精确按像素显示，chrome强制最小为12px, 可使用transform: scale hack
    
  + em: 相对单位，基准为父节点字体大小，自身定义了font-size的话则整个页面1em都是不一样的值
    
  + rem(css3): 相对单位，类root em， 根椐节点html字体大小计算，chrome/firefox/IE9
    
  + vw, vh: 视窗宽高，IE9+部份支持
    
  + vmin, vmax: vw和vh中较小/大的 
    

### ❖ BFC(block format context) 块级格式化上下文

内部元素和外部元素互不影响  

- 创建

1. html根

2. float

3. 绝对定位

4. overflow非visible

5. display为table或flex

- 用处

1. 清除浮动

2. 防止同一BFC相领元素外边距重叠

### ❖ 其它问题

1. Q: fixed定位没有按照窗口视图

   A: 视先元素含有transition非none时，定位容器由视口改为该祖先

2. Q: transform对普通元素的影响

   A: 提升元素的垂直地位；限制子元素中的position: fixed的跟随效果(未根椐视窗作定位)
### ➤ [CSS权重](https://juejin.cn/post/6844904014962753544)
- 内联样式：一个标记为1， 依次累加 1 0 0 0
- ID选择器：一个标记为1， 依次累加 0 1 0 0
- class, 属性， 伪类(:hover, visited, link, active)：有一个标记为1， 依次累加 0 0 1 0
- 伪元素(before, after)，元素标签： 0 0 0 1
- 通配选择器(*), +, >, ~： 不加权重
- !important高于所有未指定，多个规则中同一属性都指定的话则相抵，依照上述情况比较计算 

---
### ➤ [BFC(Block Format context/块级格式化上下文)](https://www.cnblogs.com/chen-cong/p/7862832.html)
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

---
### ➤ [弹盒及响应式](https://www.jianshu.com/p/c6cae35e2b93) 应用
1. 居中DIV
2. flex-wrap对多个盒子自动换行
3. 在盒子内部自动做等份处理flex: 1(grown 1, shrink 1, basis 0)

- 居中显示某个DIV
1. BFC
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
### ➤ 响应式布局
- responsive: @media(CSS3)
- 各单位：
  + **px**: 绝对单位，精确按像素显示，chrome强制最小为12px, 可使用transform: scale hack   
  + **em**: 相对单位，基准为父节点字体大小，自身定义了font-size的话则整个页面1em都是不一样的值   
  + **rem**(css3): 相对单位，类root em， 根椐节点html字体大小计算，chrome/firefox/IE9   
  + **vw, vh**: 视窗宽高，IE9+部份支持   
  + **vmin, vmax**: vw和vh中较小/大的 
    
---
### ➤ width 覆盖
min-width > max-width > width (即使!important)

---
### ➤ 小型大写字母
```css
* {
    font-variant: small-caps
}
```
---
### ➤ 代码规范（书写顺序）
1. 布局定位： display, position, etc
2. 自身属性：width, background, etc
3. 文本属性：font, color, etc
4. 其它属性：transition, cursor, etc
---
### ➤ FLIP动画处理

- [https://juejin.cn/post/6844903772968206350](https://juejin.cn/post/6844903772968206350)
- [https://codesandbox.io/s/react-picture-preview-flip-demo-m5zbm?file=/src/App.js](https://codesandbox.io/s/react-picture-preview-flip-demo-m5zbm?file=/src/App.js)
---
### ➤ CSS像素，物理像素, viewport等
1. ** CSS像素(CSS pixels)：px**
- px是相对单位，相对于设备像素(Device pixel)，是一个抽象概念，在谈论时一定要清楚它的上下文
- 同一设备上1px对应物理像素可变化
2. **物理像素/设备像素/DP(device-pixels)**
- 单位pt，在css中属于绝对单位，1pt = 1/72inch
- 设备像素比 DPR = DP/CSS pixel
3. **设备独立像素/逻辑像素(DIP, Device Independent Pixel)**
- CSS pixel = DIP
- window对象中的devicePixelRatio = DP/DIP = DP/CSS pixel，所以由这个值能得到1个css像素可以代表多少个物理像素
4. **设备像素比/DPR(device pixels ratio)**
- 描述为**未缩放状态下**<code>物理像素</code>和<code>CSS像素</code>的**初始比例**关系
5. **PPI(pixels per inch)**
>主屏尺寸： 5.5inch
> 
> 主屏分辨率：1920 X 1080
> 
> ppi = 斜边尺寸/主屏尺寸 = sqrt(1920^2 + 1080^2)/5.5
6. **viewport**
- layout viewport的宽度可用<code>document.documentElement.clientWidth</code>得出，layout viewport的宽度大于浏览器可视区域宽度(visual viewport)
- visual viewport的宽度可用<code>window.innerWidth</code>得出
- ideal viewport, 理想的viewport, 无固定尺寸，在任意分辨率的屏幕下针对ideal viewport设计的网站不需要用户手动缩放或横向滚动条，都可以完美呈现效果给用户
- 移动设备默认为layout viewport，可通过meta标签转为ideal viewport
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
```
- 动态设置meta viewport
```js
//方法1
document.write('<meta name="viewport" content="width=device-width, initial-scale=1.0">')
//方法2, 已有meta viewport
document.getElementsByTagName("meta")[0].setAttribute("content", "width=device-width")

```
---
### ➤ 其它问题
1.
>**Q**: fixed定位没有按照窗口视图
> 
>**A**: 视先元素含有transition非none时，定位容器由视口改为该祖先
2. 
>**Q**: transform对普通元素的影响
> 
>**A**: 提升元素的垂直地位；限制子元素中的position: fixed的跟随效果(未根椐视窗作定位)
3.
>**Q**: webp不能正常显示
>
>**A**: 低版本safari上不一定支持

   
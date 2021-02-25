**REF**: [https://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html](https://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html)

**MVC** 

Model->View->Controller->Model 单向通信

view发送指令到controller, controller完成业务逻辑，要求model改变状态，然后model将新数据发送到view, 用户得到反馈

**MVP**

Model View Presenter 双向 view 不和 Model通信

**MVVM**

Model View ViewModel, Model与View双向通信，view和ViewModel双向绑定
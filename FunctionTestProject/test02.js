
alert("Hello,function in js");

function run(){
    alert("Hello function");
}

function gotoLink(url){
    alert("Goto Link.");
    // js 打开一个新标签的方法
    window.open(url);
}

function outer() {
    function inner1() {
        document.write("局部函数 Inner1 <br />");
    }

    function inner2() {
        document.write("局部函数 Inner2 <br/>");
    }

    inner1();
    inner2();
}

function callOuter() {
    document.write("调用 Outer 之前<br/>");
    outer();
    document.write("调用 Outer 之后<br/>");
    // 下面这个调用是无效的，它是一个内部函数
    inner1();
}

function testFunction() {
    var hello = function (name) {
        return "hello "+name;
    }
    alert("hello 是否为 Function 对象 :"+(hello instanceof Function)+"\n"+
        "hello 是否为 Object 对象 :"+(hello instanceof Object));
    alert("直接打印 hello :\n"+hello);
    var str = hello("Nick");
    var obj = new hello("Nick");
    alert("两种调用函数的范式：\n"+str+"\n"+obj);
}

function person(name,age) {
    this.name = name;
    this.age = age;
    this.info = function () {
        alert("我的名字是:"+this.name+"\n"+
            "我的年龄是:"+this.age);
    }
}

function Girl(national, age){
    // this修饰的变量为实例属性
    this.age = age;
    // Girl修饰的变量为类属性
    Girl.national = national;
    // 以var定义的变量为局部变量
    var  dynamic= 0;
}

/**
 * 测试JS 函数的实例属性和类属性
 */
function testPropertyOfFunction() {
    var g1 = new Girl('china',29);
    // g1.national 属性为 undefined，JS 对象不能访问它所属类的类属性
    alert("g1的age属性："+g1.age+
            "\ng1的national属性："+g1.national+
            "\n通过Girl访问静态national属性："+Girl.national+
            "\ng1的dynamic属性为"+g1.dynamic);
    var g2 = new Girl('American',32);
    alert("g2的age属性："+g2.age+
        "\ng2的national属性："+g2.national+
        "\n通过Girl访问静态national属性："+Girl.national+
        "\ng2的dynamic属性为"+g2.dynamic);
}

/**
 * 测试函数的三种调用方式
 */
var name = "TestName";

function testFunctionCall() {
    window.alert("直接调用window.alert()");
    var p = new person('Tony',25);
    p.info();
    // 以 window 对象作为调用者来调用 p 对象的 info 方法
    // window.name，而不是 p.name
    p.info.call(window);
}

/**
 * javascript 中参数采用值传递
 * 对于 typeof 的用法仍然存在一些疑虑
 */
function onParamChanged() {
    // 常规类型的值传递
    var arg = 11.11;
    document.write("调用 change 之前 arg = "+arg+"<br/>");
    change(arg);
    document.write("调用 change 之后 arg = "+arg+'<br/><br/>');

    // 对象类型的值传递
    var p = new person('Tom',22);
    document.write("调用 changeAge 之前 p.age = "+p.age+'<br/>');
    changeAge(p);
    document.write("调用 changeAge 之后 p.age = "+p.age);

    // 空参数
    changeAge();
}

function change(arg) {
    arg = 10;
    document.write("change() 函数中 arg = "+arg+'<br/>');
}

function changeAge(arg) {
    if(typeof arg == 'object' ){
        arg.age = 80;
        document.write("changeAge() 函数中 p.age = "+arg.age+'<br/>');
    }else{
        alert("参数类型不符合:"+typeof person);
    }
}



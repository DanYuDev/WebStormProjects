
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
        document.writeln("我的名字是:"+this.name+"<br/>");
        document.writeln("我的年纪是:"+this.age+"<br/>");
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

function testPropertyOfFunction() {
    var g1 = new Girl('china',29);
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



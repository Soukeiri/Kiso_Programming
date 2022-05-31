function isEven() {
    var num = Number(document.getElementById("ex06_1_1").value);
    alert(num + ((num % 2 == 0) ? "は偶数です" : "は奇数です")) //三項演算子で判定
}

function greet() {
    var when = document.getElementById("ex06_2_1").value;
    var text;
    if (when == "朝") {
        text = "おはよう";
    }
    else if (when == "昼") {
        text = "こんにちは";
    }
    else if (when == "夜s") {
        text = "こんばんは";
    }
    else {
        text = "わからないよ";
    }
    alert(text);
}

function isObese() {
    var h = Number(document.getElementById("ex06_3_1").value);
    var w = Number(document.getElementById("ex06_3_2").value);
    var BMI = w / ((h / 100) ** 2);
    var displayBMI = Math.round(BMI * 10) / 10;
    var text = "";
    //日本肥満学会の基準
    if (BMI < 18.5) {
        text = "低体重";
    }
    else if (BMI < 25) {
        text = "標準"
    }
    else if (BMI < 35) {
        text = "肥満"
    }
    else {
        text = "高度肥満"
    }
    alert("BMIは" + displayBMI + "で、" + text + "です")
}

function FizzBuzz() {
    var n = Number(document.getElementById("ex06_4_1").value);
    alert((n % 3 == 0 ? "Fizz" : "") + (n % 5 == 0 ? "Buzz" : ""))
}

function wareki() {
    var year = Number(document.getElementById("ex06_5_1").value);
    var msg = "";
    if (year > 2018) {
        msg = "令和" + (year - 2018);
    }
    else if (year > 1988) {
        msg = "平成" + (year - 1988);
    }
    else if (year > 1925) {
        msg = "昭和" + (year - 1925);
    }
    else {
        alert("不明");
        return //不明だったら終了
    }
    alert("西暦" + year + "年は" + msg + "年です")
}

function Kansu() {
    var coe1 = Number(document.getElementById("ex06_6_1").value);
    var coe2 = Number(document.getElementById("ex06_6_2").value);
    var coe3 = Number(document.getElementById("ex06_6_3").value);

    var D = coe2 ** 2 - 4 * coe1 * coe3; //判別式
    //toFixed()で桁数指定で数値を文字列に変換
    //実数解なし
    if (D < 0) {
        alert("実数解なし");
    }
    //重解
    else if (D == 0) {
        var sol = -coe2 / (coe1 * 2);
        alert("x = " + sol);
    }
    //2つの実数解
    else {
        var sol1 = -coe2 + D ** (1 / 2) / (coe1 * 2);
        var sol2 = -coe2 - D ** (1 / 2) / (coe1 * 2);
        alert("x = " + sol1.toFixed(4) + "," + sol2.toFixed(4));
    }
}
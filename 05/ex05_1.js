function Oumugaeshi() {
    var txt = document.getElementById("ex01_t1").value;
    alert(txt);
    return
}

function BMI() {
    var height = document.getElementById("ex02_t1").value;
    var weight = document.getElementById("ex02_t2").value;
    var BMI = weight / height ** 2;
    //toFixed()で桁数指定で数値を文字列に変換
    alert("あなたのBMI値は" + BMI.toFixed(2) + "です。");
    return
}

function Math() {
    var n1 = Number(document.getElementById("ex03_t1").value);
    var n2 = Number(document.getElementById("ex03_t2").value);
    alert("和=" + (n1 + n2) + "、差=" + (n1 - n2) + "、積=" + (n1 * n2) + "、商" + (n1 / n2) + "、余り" + (n1 % n2));
    return
}

function Kansu() {
    var coe1 = Number(document.getElementById("ex04_t1").value);
    var coe2 = Number(document.getElementById("ex04_t2").value);
    var coe3 = Number(document.getElementById("ex04_t3").value);

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


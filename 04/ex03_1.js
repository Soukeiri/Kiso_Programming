alert("Hello World!");

let result = [prompt("名前を入力"), prompt("学籍番号を入力")];
alert(result[0] + "さんの学籍番号は" + result[1] + "です。");

let HW = [prompt("身長(cm)を入力"), prompt("体重8kg)を入力")];

if (isNaN(HW[0]) || isNaN(HW[1])) {
    alert("値が不正です");
}
else {
    let BMI = HW[1] / ((HW[0] / 100) ** 2); //BMI算出
    alert("あなたのBMI値は" + BMI.toFixed(2) + "です。"); //小数点以下2桁化
}





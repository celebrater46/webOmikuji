"use strict";

const kuji = () => {
    const answer = document.getElementById("answer");
    const input = document.querySelector('[name="num"]').value;
    let str = "2以上の整数を入力してください。";
    const num = parseInt(input);
    console.log(typeof num);
    console.log(num);
    if(num > 1){
        // console.log("num is true");
        str = "<span class='num'>" + Math.ceil(Math.random() * num) + "</span>";
    } else {
        // console.log("num is false");
        // answer.innerText(str);
    }
    answer.innerHTML = str;
}

"use strict";

// const button = document.getElementById("start");
const kuji = () => {
    const answer = document.getElementById("answer");
    const input = document.querySelector('[name="num"]').value;
    // console.log(num);
    // console.log(parseInt(num));
    let str = "2以上の整数を入力してください。";
    const num = parseInt(input);
    console.log(typeof num);
    console.log(num);
    if(num > 1){
        console.log("num is true");
        answer.innerText = Math.ceil(Math.random() * num);
    } else {
        console.log("num is false");
        // answer.innerText(str);
    }
}

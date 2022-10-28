"use strict";

let abas = document.querySelectorAll(".aba");

abas.forEach(aba => {
    aba.addEventListener("click", function () {

        if (aba == document.querySelector(".aba")) {
            document.querySelector("#aba2").style.backgroundColor = "#09062a"
            document.querySelector("#aba1").style.backgroundColor = "#2a2153"
            document.querySelector("#info2").style.display = "none"
            document.querySelector("#info1").style.display = "flex"
        }
        else{
            document.querySelector("#aba1").style.backgroundColor = "#09062a"
            document.querySelector("#aba2").style.backgroundColor = "#2a2153"
            document.querySelector("#info1").style.display = "none"
            document.querySelector("#info2").style.display = "flex"
        }

    })
});

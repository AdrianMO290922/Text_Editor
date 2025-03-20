function toBold(){
    let texto = document.getElementById("textArea");
    texto.style.fontWeight = "bold";
    console.log("funcionaBold");
}
const toIncreaseSize = ()=>{
    let texto = document.getElementById("textArea");
    let size = parseInt(window.getComputedStyle(texto).fontSize);
    size += 2;
    texto.style.fontSize = size + "px";
    console.log("funcionaSize"+size);
}
const toDecreaseSize = ()=>{
    let texto = document.getElementById("textArea");
    let size = parseInt(window.getComputedStyle(texto).fontSize);
    size -= 2;
    texto.style.fontSize = size + "px";
}
const toCursive = ()=>{
    let texto = document.getElementById("textArea");
    texto.style.fontStyle = "italic";
}
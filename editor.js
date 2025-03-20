function toBold(){
    let texto = document.getElementById("textArea");
    texto.style.fontWeight = "bold";
}
const toIncreaseSize = ()=>{
    let texto = document.getElementById("textArea");
    let size = parseInt(texto.style.fontSize) + 2;
    texto.style.fontSize = size + "px";
}
const toDecreaseSize = ()=>{
    let texto = document.getElementById("textArea");
    let size = parseInt(texto.style.fontSize) - 2;
    texto.style.fontSize = size + "px";
}
const toCursive = ()=>{
    let texto = document.getElementById("textArea");
    texto.style.fontStyle = "italic";
}
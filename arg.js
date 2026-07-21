
console.log("x")

const verificar = ()=>{

    const senha = document.getElementById("senha").value
    

    if(senha.toUpperCase() === "FELIX"){
        document.body.innerHTML=
        `<img src="ixi.gif"/>`
    }else{
        document.body.style.animation = "shake 0.2s";
    }


}
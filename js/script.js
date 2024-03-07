document.addEventListener("DOMContentLoaded", function(){
    const contadorDOM = document.getElementById("contadorVisitas")
    const botonRestablecer = document.getElementById("btnReestablecer")

    let contadorStorage = localStorage.getItem("contador")
    /* ("clave", "valor") */
    if(contadorStorage){
        contadorStorage = parseInt(contadorStorage)
    }
    else{
        contadorStorage = 0
    }
    
    contadorStorage ++
    contadorDOM.textContent = contadorStorage
    localStorage.setItem("contador",contadorStorage.toString())
    
    botonRestablecer.addEventListener("click", function(){
        contadorStorage = "0"
        contadorDOM.textContent = contadorStorage
        localStorage.setItem("contador",contadorStorage)
    })
})

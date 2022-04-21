
const precio = document.getElementById("precio")
const resultado = document.getElementById("resultado")
const aceroInput = document.getElementById("acero")
const dracoInput = document.getElementById("draco")


const eventHambler = (e)=>{
    let acero = e.target.value
    const conversion = 1/380943
    dracoInput.value = acero * conversion  
    e.preventDefault
   
        
        

    
}





const precioDolar = (e) => {
    let valor = e.target.value 
    let precioTotal = ""
   
}



let resultadoTotal = (e) => {
    alert( "Tienes esta cantidad en $USD "+ "" + precio.value *dracoInput.value)
    e.preventDefault()

}




aceroInput.addEventListener("keyup", eventHambler)
precio.addEventListener("keyup" , precioDolar)
resultado.addEventListener("click", resultadoTotal)










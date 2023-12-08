let password = document.getElementById("pass")

let generate = document.getElementById("generate")
let clipboard = document.getElementById("clipboard")

let length = document.getElementById("length")
let uppercase = document.getElementById("uppercase")
let lowercase = document.getElementById("lowercase")
let number = document.getElementById("number")
let symbol = document.getElementById("symbol")

function randomGenerator(num){
    return Math.floor(Math.random()*num)
}

function generatePassword(){
    
    let passString = ""

    if(Number(length.value) < 6 || Number(length.value) > 25){
        alert("Invalid password length")
    }else{
        if(uppercase.checked || lowercase.checked || number.checked || symbol.checked){
            if(uppercase.checked){
                passString += "QWERTYUIOPASDFGHJKLZXCVBNM"
            }
            if(lowercase.checked){
                passString += "qwertyuiopasdfghjklzxcvbnm"
            }
            if(number.checked){
                passString += "1234567890"
            }
            if(symbol.checked){
                passString += "!@#$%^&*()-+={[]}?><;"
            }

            let generatedPassword = ""

            for(let i = 0; i <= Number(length.value); i++){
                generatedPassword += passString[randomGenerator(passString.length)]
            }

            password.value = generatedPassword
        }else{
            alert("Please choose at least one option")
        }
    }
    

    
}

generate.addEventListener("click", generatePassword)

clipboard.addEventListener("click", () => {
    let clipboardPassword = password.value

    navigator.clipboard.writeText(clipboardPassword)
})
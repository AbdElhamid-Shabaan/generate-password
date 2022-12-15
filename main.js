const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
"U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
"t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$",
"%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passOne = document.getElementById("pass1-btn")
let passTwo = document.getElementById("pass2-btn")
let isAlive = false

function Generate() {
  passOne.textContent = ""
  passTwo.textContent = ""
  for ( let i = 0; i < 16; i++ ){
    let gene1 = Math.floor(Math.random() * characters.length)
    let gene2 = Math.floor(Math.random() * characters.length)
    passOne.textContent += characters[gene1]
    passTwo.textContent += characters[gene2]
  }
}

// function Generate(id) {
//   let pass = document.getElementById(id)
//   pass.textContent = ""
//   for ( let i = 0; i < 16; i++ ){
//     let gene = Math.floor(Math.random() * characters.length)
//     pass.textContent += characters[gene]
//   }
//   // let message = "Thanks for using the password generator"
//   // alert(message)

//   // message+=" my friend"
//   // alert(message)
//   // // alert("Thanks for using the password generator")
// }


// function Update2Passwords(x, y) {
//   Generate(x)
//   Generate(y)
// }
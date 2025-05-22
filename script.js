function Checkdetails(){
    let name = document.getElementById("UserName").value.trim()
    let age = Number(document.getElementById("Userage").value)
    let result = document.getElementById("result")

    if(name === ""){
        result.textContent = "Enter your Name."
        result.style.color = "Orange"

    }
    else if(!age){
        result.textContent = "Enter Your Age. "
        result.style.color = "Orange" 
        }
    else if(age < 13){
        result.textContent = `Hello ${name}! Tum Abhi Bacha ho 🧒`
        result.style.color = "blue"

    }
    else if (age < 18){
        result.textContent = `Hello ${name}! Tum teenager ho 😎`
        result.style.color = "purple"
    }
    else if (age <= 50) {
    result.textContent = `Hello ${name}! Adult ho ab. Zimmedaari ka time hai 💼`;
    result.style.color = "red";
  } 
  else {
    result.textContent = `Hello ${name}! Ab Burhay ho gai ho Ab ghr pr aram kro`;
    result.style.color = "gray";
  }

}




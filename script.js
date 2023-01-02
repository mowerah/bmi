// event listner for button click
// Calculate event listner
document.querySelector(".calculate").addEventListener("click", function() {

// hide output
document.getElementById("output").style.display = "none";

//show loader
document.querySelector(".loader").style.display = "block";
setTimeout(BMI, 2000)

})


//clear event listner
document.querySelector(".clear").addEventListener("click", Clear)

// functions [calculate + clear]

// Calculate function (BMI)
function BMI () {
    // height and weight variables
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;

    // BMI formula
    let index = (weight/((height/100)*(height/100))).toFixed(0);

    // condition to check if height and weight are not equal to zero
    if (height&&weight !=0) {
        const output = document.getElementById("output");
        const state = document.getElementById("state");
// console.log ('Your BMI is' + index)
        output.innerHTML = "Your BMI is " + index;
        if (index < 16) {
            state.innerHTML = "<span style='color:yellow'>  Very Severly Underweight! </span>";
        } else if (index <17) {
            state.innerHTML = "<span style='color:yellow'> Severly Underweight! </span>";
        } else if (index <18.5) {
            state.innerHTML = "<span style='color:yellow'> Underweight! </span>";
        } else if (index <25) {
            state.innerHTML = "<span style='color:black'> Normal range! </span>";
        } else if (index <30) {
            state.innerHTML = "<span style='color:red'> Overweight! </span>";
        } else if (index <35) {
            state.innerHTML = "<span style='color:#C0392B'> Class I obese (Moderate)! </span>";
        } else if (index <40) {
            state.innerHTML = "<span style='color:#C0392B'> Class II obese (Severe)! </span>";
        } else if (index >40) {
            state.innerHTML = "<span style='color:#C0392B'> Class III obese (Very Severe)! </span>";
        }
        // hide output and loader
        document.getElementById("output").style.display = "block";
        document.querySelector(".loader").style.display = "none"; 

    }else {
        // error message
        // alert('Error!')
        error()
        function error() {
            document.getElementById("output").style.display = "block";
            document.querySelector(".loader").style.display = "none";
            document.getElementById("output").innerHTML = "<span style='color:#ac1c09;'> ⚠️ Error: Enter height and weight first!"
            // settimeout method to hide message after 5 seconds
            setTimeout(() => {
                document.getElementById("output").innerHTML = "";
                document.querySelector(".state").innerHTML = "";
            }, 5000);

        }
    }
}

// Clear function
function Clear() {
    document.getElementById('height').value = "";
    document.getElementById('weight').value = "";
    document.getElementById('output').innerHTML = "";
    document.getElementById('state').innerHTML = "";
}
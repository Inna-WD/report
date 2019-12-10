


let calculate = document.getElementById("calculate");
let type = document.getElementsByName("type").value;
let code = document.getElementsByName("code").value;
let fixedSalary = document.getElementsByName("fixedSalary").value;
let hours = document.getElementsByName("hours").value;


console.log(type);
console.log(hours);

function clerkInterface() {

    var grossSalary = 0;
    // var txt;
    // var type = "r";
    // for (var i = 0; i < typeElements.length; i++) {
    //     if (typeElements[i].checked) {
    //         type = type.Elements[i].value;
    //         break;
    //     }
    // }



    if (type === "r") {
        if (hours === 160) {
            grossSalary = fixedSalary;
        } else if (hours < 160) {
            grossSalary = hours * fixedSalary / 160;
        } else {
            grossSalary = fixedSalary + (hours - 160) * 2 * fixedSalary / 160;
        }
    }
    // else {
    // }
    document.getElementById("demo").innerHTML = grossSalary;
}



calculate.addEventListener(`click`, clerkInterface)





















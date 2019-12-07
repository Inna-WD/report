


let calculate = document.getElementById("calculate");
let type = document.getElementsByName("type");
let code = document.getElementsByName("code");
let fixedSalary = document.getElementsByName("fixedSalary");
let hours = document.getElementsByName("hours");
let fff=document.getElementsByName("subscribe");
console.log(fff);


function clerkInterface() {

    var grossSalary = 0;
    var txt;
    if (type == "r") {
        if (hours == 160) {
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





















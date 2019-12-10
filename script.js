


let calculate = document.getElementById("calculate");
let code = document.getElementsByName("code");
// let fff=document.getElementsByName("subscribe");
// console.log(fff);


function clerkInterface() {

    let typeElements = document.getElementsByName("type");
    let fixedSalary = Number(document.getElementById("fixedSalary").value);
    let hours = Number(document.getElementById("hours").value);
    let grossSalary = 0;
    let txt;
    type = "";

    for (let i = 0; i < typeElements.length; i++) {
        if (typeElements[i].checked) {
            type = typeElements[i].value;
            break;
        };
    }

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














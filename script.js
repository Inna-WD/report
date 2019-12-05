// let calcButton = getElementById("calcBtn");

function clerkInterface() {

    var grossSalary;
    let type = getElementById("type");
    let code = getElementById("code");
    let fixedSalary = getElementById("fixedSalary");
    let hours = getElementById("hours");

    if (type = r) {
        if (hours == 160) {
            grossSalary = fixedSalary;
        } else if (hours < 160) {
            grossSalary = hours * fixedSalary / 160;
        } else {
            grossSalary = fixedSalary + (hours - 160) * 2 * fixedSalary / 160;
        }
    }
    else {
    }
    console.log(grossSalary)
}

// calcButton.addEventListener(`click`, clerkInterface);





















// let dropDownList = document.getElementById("city");

// dropDownList.addEventListener("change",function(){

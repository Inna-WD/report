


let calculate = document.getElementById("calculate");
let numberElements= document.getElementsById("number").value;

function clerkInterface() {

    let typeElements = document.getElementsByName("type");
    let codeElements=document.getElementsByName("code");
    let fixedSalary = Number(document.getElementById("fixedSalary").value);
    let hours = Number(document.getElementById("hours").value);
    let grossSalary = 0;
    var txt;
    type = "";
    code="";
    let cit=0;
    let healthfee=19.2;
    let netincome=0;

    for (let i = 0; i < typeElements.length; i++) {
        if (typeElements[i].checked) {
            type = typeElements[i].value;
            break;
        };
    }
    for (let i = 0; i < codeElements.length; i++) {
        if (codeElements[i].checked) {
            code = codeElements[i].value;
            break;
        };
    }

    if (type === "r") {
        if (hours === 160) { grossSalary = fixedSalary; }
           else if (hours < 160) { grossSalary = hours * fixedSalary / 160;}
           else { grossSalary = fixedSalary + (hours - 160) * 2 * fixedSalary / 160;}
           txt = "Your gross salary is $" + grossSalary;
           document.getElementById("gs").innerHTML = txt;
                    }
    else if (type === "f") {
               if(code==="m") {grossSalary=hours*175+1500;}
          else if(code==="b") {grossSalary=hours*100+600;}
                 txt = "Your gross salary is $" + grossSalary;
                 document.getElementById("gs").innerHTML = txt;}
         else if (code==""){txt="m or b"}
    else {txt="You have to mention the type of the staff - Regular or Faculty";
             document.getElementById("gs").innerHTML = txt}
    
    // else {
    //     (txt="You have to mention the type of the staff - Regular or Faculty");
    //     document.getElementById("demo").innerHTML = txt};
 

    if(grossSalary>2500){
        cit=0.25*(grossSalary-2500);}
     if (grossSalary>3000){healthFee=33;}
        netIncome= grossSalary - cit- healthFee;
        txt= "Your income tax is: $" + cit;
        document.getElementById("tax").innerHTML = txt;
    }


document.getElementById("n").innerHTML =  nameElements;
 
calculate.addEventListener(`click`, clerkInterface)














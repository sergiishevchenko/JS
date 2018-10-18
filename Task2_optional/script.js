'use strict';

// first part
let week = ["Monday", "Tuesday", "Wendesday", "Thursday", "Friday", "Saturnday", "Sunday"];

for (let i = 0; i < week.length; i++) {
    // Monday - today
    if (week[i]=="Monday"){
        let para = document.createElement("I"),
            t = document.createTextNode(week[i]);
        para.appendChild(t);
        document.body.appendChild(para);
    } else if ((week[i]=="Saturnday") || (week[i]=="Sunday")){
        let para = document.createElement("h4"),
            t = document.createTextNode(week[i]);
        para.appendChild(t);
        document.body.appendChild(para);
    } else {
        let para = document.createElement("P"),
            t = document.createTextNode(week[i]);
        para.appendChild(t);
        document.body.appendChild(para);
    }
}

// second part
let days = ["46546464", "356565", "78988", "777", "4564564", "2625", "33333"];

for (let i = 0; i < days.length; i++) {
    if ( (days[i][0] == '3') || (days[i][0] == '7')) {
        console.log(days[i]);
    }
}
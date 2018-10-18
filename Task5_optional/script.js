// first
// let now = new Date(),
//     para = document.createElement("h1"),
//     Hour = now.getHours(),
//     Minutes = now.getMinutes(),
//     Seconds = now.getSeconds(),
//     Year = now.getFullYear();
//     Month = now.getMonth();
//     Day = now.getDate();
//     t = document.createTextNode(now.toLocaleTimeString() + '    ' + Day + '.' + Month + '.' + Year);
// para.appendChild(t);
// document.body.appendChild(para);

// second
let Date_now = new Date(),
    result;

function addZero (Date_now){
    result = ('0' + Date_now.getDate()).slice(-2) + '.'
    + ('0' + (Date_now.getMonth()+1)).slice(-2) + '.' + Date_now.getFullYear();
}

addZero();
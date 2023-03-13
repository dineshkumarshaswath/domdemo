/*
var first=document.createElement("div");
first.innerHTML="first dom class";
first.setAttribute("class","container");
//document.body.append(first);

var first1=document.createElement("div");
first1.innerHTML="first dom class";
first1.setAttribute("class","row");
//document.body.append(first1);

var first2=document.createElement("div");
first2.innerHTML="first dom class";
first2.setAttribute("class","col-1");
//document.body.append(first2)

first1.append(first2);

first.append(first1);
document.body.append(first);

*/
function foo(){
    var res=document.getElementById("first").value;
    console.log(res);

    var res=document.getElementById("middle").value;
    console.log(res);

     

    var res=document.getElementById("last").value;
    console.log(res);

    var res=document.getElementById("email").value;
    console.log(res);

    var res=document.getElementById("pass").value;
    console.log(res);

};
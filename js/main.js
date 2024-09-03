 var qoutes =[
    {
        qoute:"'Knowledge is power.'",
        auther:"--Sir Francis Bacon"
    },
    {
        qoute:"'life is like a box of chocolates. You never know what you're gonna get.'",
        auther:"--Forrest Gump (character)" 
    },
    {
        qoute:"'You miss 100% of the shots you don't take.'",
        auther:"--Wayne Gretzy"
    },
    {
        qoute:"'The best revenge is massive success.'",
        auther:"--Frank Sinatra"
    },
    {
        qoute:"'You miss 100% of the shots you don't take.'",
        auther:"--Wayne Gretzy"
    },
 ]

 function getQoute(){
var num = Math.floor(Math.random()*qoutes.length);
document.getElementById("qoute").innerHTML=qoutes[num].qoute;
document.getElementById("auther").innerHTML=qoutes[num].auther;
 }
document.write("hello world");
document.write("<br>");
var a , b,c;
a= 50;
b=30;
c=a+b;
document.write(c);
document.write("<br>");
var a=5;
var b=4;
var c=a+b;
document.write(c);
document.write("<br>");
var a=5;
var b=4;
var c=a-b;
document.write(c);
document.write("<br>");
var a=5;
var b=4;
var c=a*b;
document.write(c);
document.write("<br>");
var a=5;
var b=4;
var c=a/b;
document.write(c);
document.write("<br>");
var a=5;
var b=4;
var c=a%b;
document.write(c);
var a=10;
var b=10;
var c=a+b;
console.log(c);
var a=10;
var b=10;
console.log(a==b);
var a=10;
var b=20;
console.log(a==b);
console.log(null==undefined);
document.write("data type");
console.log(null===undefined);
document.write("<br>");
var a=100;
var b=50;
if(a>b){
    document.write("a is greater than b");
}
document.write("<br>");
var a=100;
if(a==100){
    document.write("it is true");
}
document.write("<br>");
var a=30;
var b=30;
if(a==b){
    document.write("correct");
}
document.write("<br>");
var age=18;
var b=14;
if(age<14){
    document.write("greater");
}
document.write("<br>");
var a=23;
var b=32;
if(a>22 && b<33){
    console.log("it is correct");
}
document.write("<br>");
var a=49;
if(!a<=48){                
    console.log("is not equal");
}
var a=10;
var b=30;
if(a<b){
    document.write("a is smaller than b");
}else{
    document.write("a is greater than b")
}
document.write("<br>");
var a=5;
var b=4;
if(a<6 && b>3){
    document.write("true");
}else{
    document.write("false");
}
document.write("<br>");
var a=6;
var b='6';
if(a===b){
    document.write("correct");
}else{
    document.write("incorrect");
}
document.write("<br>");
var a=4;
var b=4;
if(a===b){
    document.write("correct");
}else{
    document.write("wrong");
}
document.write("<br>");
var per=66;
if(per>=80 && per<=100){
    document.write("you are in merit");
} else if(per>=60 && per<=80){
    document.write("you are in 1st division");
}else if(per>=40 && per<=60){
    document.write("you are in 2nd division")
}else if (per>=33 && per<40){
    document.write("you are in 3rd division")
}
  else{
  document.write("you are fail");
  }  

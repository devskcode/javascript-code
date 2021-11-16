console.log("sobia"); 
for(var a = 1; a<=100; a=a+10){
    for(var b = a; b< a+10; b++ ){
document.write(b+ " ");
    }

    document.write("<br>"); 
}
for(var a=1; a<=5;  a++){
    for(var b=1; b<=a; b++){
    document.write(b+"");    
    }
    document.write("<br>");
}
for(var a=5; a<=10; a++){
    for(var b=5; b<=a; b++){
        document.write(b);
    }
    document.write("<br>");
}
var ary = [10,20,30,40,50]
for(var a=0; a<=4; a++){
    document.write(ary[a] +"<br>");
}
var ary =[40,50,60,70]
for(var a=0; a<=3; a++){
    document.write(ary[a]+"<br>");
}
document.write("<br>");
var ary =[5,4,3,2,1]
for(var a=0; a<=4; a++){
    document.write(ary[a]+"<br>");
}
var ary =[1,2,3,4,5]
for(var a=0; a<=4; a++){
    document.write(ary[a]+"<br>")
}
document.write("<br>");
var ary =[1,2,3,4,5,]
var sum=0;
for(var a=0; a<=4; a++){
    document.write(ary[a]+"<br>");
    sum=sum+ary[a];
}
document.write("total sum :" + sum);
document.write("<br>");
var ary=["school","college","university"]
document.write("<ul>");
for(a=0; a<=2; a++){
    document.write("<li>" + ary[a] + "</li>");
}
document.write("</ul>");





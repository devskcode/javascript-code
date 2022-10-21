console.log("for loop");
for(i=2;  i<=4; i++){
console.log("pakistan");
}
i=3;
for(a =1; a<=10; a++){
    console.log(i+"x" +a+ " = " + (a*1));
}
for(var a=1; a<=100; a=a+10){
  for(var b=a; b<a+10; b++ ){
   document.write(b+"  "); 
 }
  document.write("<br>");
}
var a,b;
for( a=1; a<=7; a=a+1){
for( b=1; b<=a; b=b+1){
    document.write(" * ");
}
document.write("<br>")
}
var c,d;
for(c=7; c>=1; c=c-1){
    for(d=c; d>=1; d=d-1){
        document.write(" * ");
    }
    document.write("<br>");
}
var e,f;
for(e=1; e<=7; e=e+1){
for(f=1; f<=e; f=f+1)
    {
    document.write(" * ")
    }
    document.write("<br>");
}
for(e = 7; e>=1; e=e-1){
for(f = e; f>=1; f=f-1)
{
    document.write(" * ");
} 
document.write("<br>");    
}


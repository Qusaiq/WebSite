var anotherS= prompt("do you want anorther series ? (Y) or (N)");

var yorn=anotherS.toUpperCase();

console.log(yorn);

console.log(anotherS);

var div= document.getElementById('x');
while(anotherS !='Y' && anotherS != 'N')
{
    anotherS= prompt("do you want anorther series ? (Y) or (N)");
}

var img='';
var N_S;
if (anotherS == "Y")
{
     N_S= prompt("Choose (1-GoT(Game of thrones) ,2-(The 100) ,3-(Lost) ) ");
     console.log(N_S);
     if(N_S == '1')
     {
         img='<img src="GOT.jpg" alt="Game Of Thrones" width="1000" height="600"/>';
     }
     else if (N_S == '2')
     {
         img='<img src="The100.jpg" alt="The 100" width="1000" height="600"/>';
         console.log(img);
     }
     else
     {
        img='<img src="Lost.jpg" alt="Lost" width="1000" height="600"/>';
     }
}
else
{
    img='<img src="enjoy.jpg" alt="enjoy" width="1000" height="600">';
}
console.log(img);
div.innerHTML = img;
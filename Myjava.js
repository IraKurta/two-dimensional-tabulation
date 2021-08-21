var xL =-1;
var xK = 1;
var delX = 0.2;
var yL= -2, yK = 2, delY = 0.4;
var z =1.32;

var b = 0;

var a = 0;


document.write("<table>");
for (; yL<=yK; xL+=delX,yL+=delY)
{
	
	document.write( "<tr>");
	document.write("<th>" +"X"+"</th>"); 
	document.write("<th>" +"Y"+"</th>");
	document.write("<th>" +"B"+"</th>");
	document.write("<th>" +"A"+"</th>");


for (; yL<=yK; xL+=delX,yL+=delY)
{
	b = Math.cos( Math.pow((Math.atan((Math.pow(xL,2) +yL)/(z+1))  ),2) ) + xL/yL * Math.exp(3*xL + yL);

	a = (1 + Math.sqrt(Math.sin(Math.pow(Math.pow(Math.abs(xL+yL),0.4),2))) )/(2+Math.pow(b,2) + Math.pow(Math.sin(Math.pow(yL,3)),2)) + Math.tan(3*xL/yL)  


document.write("<tr>");

document.write("<td>"+xL+"</td>");
document.write("<td>"+yL+"</td>");
document.write("<td>" + b + "</td>");
document.write("<td>" + a + "</td>")
document.write ("</tr>" );
}

}
document.write("</table>")


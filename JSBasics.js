console.log("Hello World...");

var a = 4;
var b = "Hello";

console.log(a);
console.log(b);

var c = "three";

if(c=="one")
{
console.log("Matches with one");
}
else if (c=="two")
{
    console.log("Matches with two");
}
else
{
    console.log("Nothing matches");

}

for(var i=1;i<5;i++)
{
    console.log(i);
}

for(var i=0;i<7;i=i+2)
{
    console.log(i);
}

var j=1
while(j<5)
{
console.log(j);
j++;
}



var k=10;
do
{
console.log(k);
k=k+3;
}while(k<20)


function add(a,b){
    return a+b;
}

console.log(add(2,3.05));



var z = ["Hello","World","123","Bye!!!"];
console.log(z.length+" is the size of array z.");
for(var i=0;i<z.length;i++)
{
    console.log(z[i]);
}


var y = new Array();
y[0]="Hello";
y[1]="World";
y[2]="Bye";
console.log(y.length+" is the size of array y.");
for(var j=y.length-1;j>=0;j--)
{
    console.log(y[j]);
}


var nam="Shreeni ";   //String literal declaration
var nam2 = new String("Hari");  //String object declaration
console.log(nam.charAt(2)); //find character at index
console.log(nam.concat(" Kokadwar"));   //concatenate with new string
console.log(nam.indexOf("h"));  //find index of letter
console.log(nam.slice(1,4));    //starting index (1) is inclusive here, but ending index (3) is exclusive.
console.log(nam.toUpperCase());   //Print in upper case
console.log(nam.toLowerCase());   //Print in lower case
console.log(nam.trim());  //used to remove whitespace characters from the start and end of a string
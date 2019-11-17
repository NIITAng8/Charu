
console.log("Exercise 1");
console.log("OUTPUT: Hello World");


console.log("  ");
console.log("Exercise 2");
let  year = '2020'
function leapYear(year)
{
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

if (leapYear(year))
{
    console.log('OUTPUT: '+year + ' is a leap year');
}
else
{
   console.log('OUTPUT: '+ year + ' is not a leap year');
}


console.log("  ");
console.log("Exercise 3");

let map = new Map();  

map.set("Years", 365);  
map.set("MONTHS", 30);  
map.set("Days", 1);  

var age = function (Iage) {
    console.log('Input(In days) : '+ Iage.toString())
    return Math.floor(Iage / map.get("Years")) + ' Years ' +
        Math.floor((Iage % map.get("Years")) / map.get("MONTHS")) + ' MONTHS ' 
      +  Math.floor(((Iage % map.get("Years") % map.get("MONTHS"))) / map.get("Days")) + ' Days ' };
console.log(age(400)); 


console.log("  ");
console.log("Exercise 4");
function count(str) {
    let obj = {};
    console.log('INPUT : '+ str)
    str.split(" ").forEach(function(el, i, arr) {
      obj[el] = obj[el] ? ++obj[el] : 1;
    });
    
    return obj;
  }
  
  console.log(count("Black Bird Blue Bird"));


console.log("  ");
console.log("Exercise 5");
let revtexta= (text1)=> { console.log('Input Sentence is : '+ text1) ;return text1.split("").reverse().join(""); }
console.log('OUTPUT: '+ revtexta("Charu"));


console.log("  ");
console.log("Exercise 6");
let triangle = (a: number,b:number,c: number):void=>
{
    if((a==b)&&(b==c)&&(a==c))
    {
        console.log("Given Triangle is an Equilateral Traingle");
    }

        else if ((a!=b)&&(b !=c)&&(a!=c))
        {
            console.log("Given Triangle is an Scalene Traingle");
        }
        else 
        {
            console.log("Given Triangle is an Isosceles Traingle");
            
 
       }
    console.log(a,b,c);
}       

triangle(9,4,6); 


console.log("  ");
console.log("Exercise 7");

let arm_str = (arms:number) =>
{
  
return new Promise(function(resolve,reject){

    if(arms==0)
    {
        reject("invalid number.");
    }

    let arm: number=0;
    let a: number=0;
    let temp:number=arms;
    var check=arms.toString().length;
    while(temp>0)
        {
            a=temp%10;
            temp=Math.floor(temp/10); 
            arm=arm+Math.pow(a,check);
        }   
    if(arm==arms)
        {
         
            return  resolve(arms+ " is Armstrong Number");
        }
    else
        {
            return  resolve(arms+ " is Not Armstrong Number");
        }
})
}
arm_str(153).then(success,failure);
function success(Smessage)
{
console.log(Smessage);    
}
function failure(Fmessage)
{
console.log(Fmessage);    
}

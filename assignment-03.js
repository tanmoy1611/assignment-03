//https://github.com/tanmoy1611/assignment-03


//1.Kilo To Meter
function kilometerToMeter(kilometer)
{
 //var k= Math.abs(kilometer);

 if(kilometer<0)
 {
   return "Wrong answer,try again!";
 }
 
   var meter=1000*kilometer;;
    return meter;
}
console.log(kilometerToMeter(5));



//2.budgetCalculator
function budgetCalculator(watch,phone,laptop){

    // var w=Math.abs(watch);
    // var p=Math.abs(phone);
    // var l=Math.abs(laptop);
    if(watch<0||phone<0||laptop<0)
    {
        return "Wrong answer,try again!";
    }

    var result=watch*50+phone*100+laptop*500;

    return result;
}
console.log(budgetCalculator(-1,2,3));


//3.Hotelcost

function hotelCost(day)
{

//Total Cost=tcost
var tcost=0

if(day<=0)
{
    return "Wrong answer,try again!";
}

if(day<=10){
    tcost=day*100;
}
else if(day<=20){
    var firstPart=10*100;
    var remaining=day-10;
    var secondPart=remaining*80;
    tcost=firstPart+secondPart;
}
else if(day>20){
    var firstPart=10*100;
    var secondPart=10*80;
    var remaining=day-20;
    var thirdPart=remaining*50;
    tcost=firstPart+secondPart+thirdPart
}
return tcost;
}
console.log(hotelCost(25));


//4.finding larger friend name
function megaFriend(friendNames)
{
max=friendNames[0].length;
if(friendNames==" ")
{
    return "Wrong,Please enter your friend name!"
}

for(i=0;i<friendNames.length;i++)
{  
    if(max<friendNames[i].length)
    {
        max=friendNames[i].length; 
    }

}
for(i=0;i<friendNames.length;i++){

    if(friendNames[i].length==max)
    {
       return friendNames[i];
    }   
}
}

// var friendNames=["Tanmoy",'pranto','opi','arko'];
var friendNames=[" "];
console.log(megaFriend(friendNames));

//End
//Thanks

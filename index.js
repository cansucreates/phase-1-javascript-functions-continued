// code your solution here
function saturdayFun(activity = "roller-skate") {
return `This Saturday, I want to ${activity}!`;
}
let saturdayToDo = saturdayFun();
saturdayFun();
saturdayFun("bathe my dog");

let mondayWork = function(activity = `go to the office.`) 
{
    return `This Monday, I will ${activity}`;
}
let mondayToDo = mondayWork();
mondayWork();
mondayWork(`work from home.`);

function wrapAdjective(flair = "*") 
{
    return function(adj = "special") {
  
        return `You are ${flair}${adj}${flair}`
    }
    
}
let result = wrapAdjective('*');
let emphatic = result("a hard worker");
emphatic();

let result2 = wrapAdjective("||");
let emphatic2 = result("a dedicated programmer")
emphatic2();

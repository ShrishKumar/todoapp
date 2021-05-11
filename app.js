//JS code for ToDO App

//Create an array named list to store our to-do activities
var listOfActivities=[];

//create a DOM variable named input to get to-do activities added from HTML form
var input=document.getElementById("input");

//create a DOM variable todolist ul tag (unordered list)
var toDoList=document.getElementById("todolist");

//using onclick to run the click function when the button is clicked
document.getElementById("button").onclick=click;

//Adding a to-do activity
function click(){
    listOfActivities.push(input.value);

     console.log(listOfActivities);

     input.value="";

     showList();
}

function showList(){
    toDoList.innerHTML="";

    listOfActivities.forEach(function(current_value, index){
         
        toDoList.innerHTML+=("<li>"+current_value+"<a onclick='editItem("+index+")'>edit</a>"+
        "<a onclick='deleteItem("+index+")'>&edit </a><li>")
    })
}

function editItem(index){
    var newValue=prompt("please insert your value");

    listOfActivities.splice(index,1,newValue);

    showList();
}

function deleteItem(index){
    listOfActivities.splice(index,1)
}
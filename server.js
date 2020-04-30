console.log("Start")
var arr=[]
var value1
var dishes = {Chicken_Biriyani:["Rice","Chicken","Tomato","Yoghurt","Garam masala","Chiily powder","Coriander","Ghee,Ginger"],
            Lassi:["Milk","Yoghurt","Cherry"],
            Mix_veg: ["Onion","Potato","Tomato","Brinjal","Cauliflower"],
            Panner_butter_masala:["Paneer","Yoghurt","Butter","Cinnamon"],
            Mix_juice : ["Milk","Mango","Strawberry","Papaya","Watermelon"],
            Corn_fry :["Corn","Onion","Pepper","Oil"],
            Sandwitch :["Bread","Butter","Carrot","Cabbage"],
            Aloo_paratha :["Potato","Wheat","Garam masala","Onion"],
            };
var ct=0;
var max_ct=0;      
var max_r;
function selecting()
{
	var e1 = document.getElementById("s1");
    value1 = e1.options[e1.selectedIndex].value;
}
function adding()
{
    arr.push(value1);
    alert("Added ! Total: "+arr.length+" ingredient")
}
function abdev()
{
    alert("Name: E Swarup Kumar (Creator and Developer of the page)")
}
function npage1(shown,hidden)
{
    document.getElementById(shown).style.display='block';
    document.getElementById(hidden).style.display='none';
    return false;
}
function submitting()
{
    alert("Submit Button is clicked !!");
    $('.container-fluid').append("<h4>Choosen Items are :"+"</h4>");
    for(var i=0;i<arr.length;i++)
    {
        $('.container-fluid').append("<h4>"+(i+1)+"."+arr[i]+"</h4>");
    }
    
    for (var recipe in dishes )
    {
        
        var ing=dishes[recipe];
        for(i=0;i<arr.length;i++)
        {
            for(var j=0;j<ing.length;j++)
            {
                if(arr[i]==ing[j])
                {
                    ct++;
                }
            }
        }
        if(max_ct<ct)
        {
            max_ct=ct;
            max_r=recipe;
        }
        ct=0;
    }
    $('.container-fluid').append("<h4>Reciepe that can be cooked is :"+"</h4>");
    $('.container-fluid').append("<h4>"+max_r+"</h4>");
}
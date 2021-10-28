var elements = [];
window.onload = function()  
{
if(JSON.parse(localStorage.getItem("elements")) != null)
{
elements = JSON.parse(localStorage.getItem("elements"));
console.log(elements);
disp();
}
};
function addelement()
{
   if (document.querySelector(".add").value.trim() != "")
    {
       elements.push(document.querySelector(".add").value.trim());
       if(localStorage.getItem("elements")==null)
       {
            localStorage.setItem("elements",JSON.stringify(elements));
       }
       else
       {
            localStorage.setItem("elements",JSON.stringify(elements));   
       }
       console.log(localStorage.getItem("elements"));
       disp();
    } 
}
function disp()
{
    document.querySelector(".list").innerHTML = "";
    for(var i = 0; i < elements.length;i++)
    document.querySelector(".list").innerHTML += "<center><div class = 'element'>"+elements[i]+"<img class = 'tick' src='tick.png' onclick='strike("+i+")'><img class = 'dustbin' src='del.png' onclick='del("+i+")'></div></centre>";
}
function del(index)
{
    elements.splice(index,1);
    if(localStorage.getItem("elements")==null)
    {
         localStorage.setItem("elements",JSON.stringify(elements));
    }
    else
    {
         localStorage.setItem("elements",JSON.stringify(elements));   
    }
    disp();
}
function strike(index)
{
    if (elements[index].includes("<strike>"))
    {
        elements[index] = elements[index].replace("<strike>","");
        elements[index] = elements[index].replace("</strike>","");
    }
    else
    {
        elements[index] = "<strike>"+elements[index]+"</strike>";
    }
    if(localStorage.getItem("elements")==null)
    {
         localStorage.setItem("elements",JSON.stringify(elements));
    }
    else
    {
         localStorage.setItem("elements",JSON.stringify(elements));   
    }
    disp();
}

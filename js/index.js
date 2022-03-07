var fill_models;
var contentmodels;
let fill_fuels;
var contentfuels;
var image="";

function fillmodels()
{

    
    fill_models=document.getElementById("models_select");

    contentmodels+="<option name='car'  style='font-size: 1em;' value=Volvo>Volvo</option>";
    contentmodels+="<option name='car'  style='font-size: 1em;' value=Tesla>Tesla</option>";
    contentmodels+="<option name='car'  style='font-size: 1em;'  value=Mazda>Mazda</option>";
    contentmodels+="<option name='car'  style='font-size: 1em;'  value=Toyota>Toyota</option>";
    contentmodels+="<option name='car'  style='font-size: 1em;'  value=Mitsubishi>Mitsubishi</option>";
    contentmodels+="<option name='car'  style='font-size: 1em;'  value=Porsche>Porsche</option>";
    contentmodels+="<option name='car'  style='font-size: 1em;'  value=Mercedes>Mercedes</option>";
    contentmodels+="<option name='car'  style='font-size: 1em;'  value=Nissan>Nissan</option>";


    fill_models.innerHTML=contentmodels;

}


var path;

function choosefile()
{
    
    const realFileBtn = document.getElementById("real-file");
    const customBtn = document.getElementById("custom-button");
    const customTxt = document.getElementById("custom-text");

    customBtn.addEventListener("click", function() {
        realFileBtn.click();
      });
      
      realFileBtn.addEventListener("change", function() {
        if (realFileBtn.value) {
          customTxt.innerHTML = realFileBtn.value
          .match(
            /[\/\\]([\w\d\s\.\-\(\)]+)$/
          )[1];
        } else {
          customTxt.innerHTML = "No file chosen, yet.";
        }

        path= customTxt.innerHTML;
      });

      
}

var result;
var resultcontent;

function getdata()
{


    var array = []
    var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')

    for (var i = 0; i < checkboxes.length; i++) {
        array.push(checkboxes[i].value)
    }


    

    // window.location.href=  window.location.href.substring(0, location.href.lastIndexOf("/") + 1);
    

    var valid=false;
    var x= document.carform.fuel;

    var valid2=false;
    var x2= document.carform.type;

    for (let i = 0; i < x.length; i++) {
   
      if(x[i].checked)
      {
        valid=true;
        break;
      }
    }

    if(!valid){

      alert("Select fuel");

    }

    


    for (let i = 0; i < x2.length; i++) {
   
      if(x2[i].checked)
      {
        valid2=true;
        break;
      }
    }

    if(!valid2){

      alert("Select type");
      
    }


    if(valid && valid2)
    {

      cookies();
    }
}




function cookies(){

 document.cookie=" ; expires=Thu, 1 Feb 1999 00:00:01 GMT; path=/;SameSite=None";
 document.cookie+=" car: '', ; expires=Thu, 1 Feb 1999 00:00:01 GMT; path=/;SameSite=None";
 document.cookie+=" fuel: '', ; expires=Thu, 1 Feb 1999 00:00:01 GMT; path=/;SameSite=None";
 document.cookie+=" car type: '', ; expires=Thu, 1 Feb 1999 00:00:01 GMT; path=/;SameSite=None";
 document.cookie+=" image: '' ; expires=Thu, 1 Feb 1999 00:00:01 GMT; path=/;SameSite=None";


 document.cookie+=" car: "+document.getElementById("models_select").value+", ";
 document.cookie+=" fuel: "+document.querySelector('input[type="radio"]:checked').value+", ";
 document.cookie+=" car type: "+Array.from(document.querySelectorAll("input[type=checkbox][name=type]:checked"), e => e.value)+", ";
 document.cookie+=" image: "+image+"\n\n";

 for (let index = 0; index < document.cookie.length; index++) {


 
   var cookiesarray=document.cookie.split(", ");
   
   // console.log(document.cookie);
 

   for (let index = 0; index < cookiesarray.length; index++) {
  

         // console.log(cookiesarray[index]);

         var itemcookies=cookiesarray[index].split(": ");
   
         for (let k = 0; k < itemcookies.length; k++) {
    
     
           //  console.log(itemcookies[k]);
     
         }

   
   }


 }


 console.log(cookiesarray);


//  var re = new RegExp(/^.*\/\/[^\/]+/);







 result=document.getElementById("result");
 resultcontent+="<br>";
 resultcontent+="<br>";
 resultcontent+="<p>"+cookiesarray[0]+"</p>";
 resultcontent+="<p>"+cookiesarray[1]+"</p>";
 resultcontent+="<p>"+cookiesarray[2]+"</p>";

 resultcontent+="<img src='"+cookiesarray[3].substring('image:'.length).substring(','.length)+"'  width='300px' height='auto'>";




 result.innerHTML=resultcontent.substring('undefined'.length);



}






function showimage(event){

  image=URL.createObjectURL(event.target.files[0]);



 }



window.onload=function main(){
    
    fillmodels();

   // choosefile();

   cookies();
    




}


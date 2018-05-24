$(document).ready(function() 
{   
    var corect = 0;
    
    $("#results").click(function() {     


if (!$("input[@name=q1]:checked").val() ||            
!$("input[@name=q2]:checked").val() ||            
!$("input[@name=q3]:checked").val() ||            
!$("input[@name=q4]:checked").val() ||            
!$("input[@name=q5]:checked").val() ||            
!$("input[@name=q6]:checked").val() ||            
!$("input[@name=q7]:checked").val() ||            
!$("input[@name=q8]:checked").val() ||            
!$("input[@name=q9]:checked").val() ||            
!$("input[@name=q10]:checked").val()            
) {            
alert("You're not done yet!");        
}        

else {            
var cat1name = "1";            
var cat2name = "2";            
var cat3name = "3";            
var cat4name = "4";            
var cat5name = "5";            
           
            

var cat1 = ($("input[@name=q1]:checked").val() != "a"); 
           
var cat2 = ($("input[@name=q2]:checked").val() != "b");  

var cat3 = ($("input[@name=q3]:checked").val() != "c");  

var cat4 = ($("input[@name=q4]:checked").val() != "d");  

var cat5 = ($("input[@name=q5]:checked").val() != "a"); 



var cat11 = (!cat1 && !cat2 && !cat3 && !cat4 && !cat5 && !cat6 && !cat7 && !cat8 && !cat9 && !cat10); var categories = [];                        

if (cat1) { categories.push(cat1name) };            
if (cat2) { categories.push(cat2name) };            
if (cat3) { categories.push(cat3name) };            
if (cat4) { categories.push(cat4name) };            
if (cat5) { categories.push(cat5name) };            
                       

var catStr = 'You answered the following questions incorrectly: ' + categories.join(', ') + '';                     
$("#categorylist").text(catStr);                        
$("#categorylist").show("slow");            

if (cat1) { $("#category1").show("slow"); } else{
    corect++
};            
if (cat2) { $("#category2").show("slow"); }else{
    corect++
};                        
if (cat3) { $("#category3").show("slow"); }else{
    corect++
};                        
if (cat4) { $("#category4").show("slow"); }else{
    corect++
};                       
if (cat5) { $("#category5").show("slow"); }else{
    corect++
    console.log(corect);
};                        

{ $("#closing").show("slow"); };
}

});});
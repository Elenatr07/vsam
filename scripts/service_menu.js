function changeItem(){
    if ( document.getElementById("services_menu_item2").classList.contains('services_menu_item2') ){
       document.getElementById("services_menu_item2").classList.add('service_menu_hover'); 
       document.getElementById("services_menu_item1").classList.add('service_menu_hover1'); 
       document.getElementById("services_menu_item1_p").style.color = 'rgba(248, 248, 255, 1)';
       document.getElementById("services_menu_item2_p").style.color = 'rgba(0, 0, 0, 1)';
      document.getElementById("services_menu_item1_p").classList.toggle("style")
      
       
    }

    

}
function rechangeItem(){
   
       document.getElementById("services_menu_item2").classList.remove('service_menu_hover'); 
       document.getElementById("services_menu_item1").classList.remove('service_menu_hover1');
       document.getElementById("services_menu_item1_p").style.color = 'rgba(0, 0, 0, 1)';
       document.getElementById("services_menu_item2_p").style.color = 'rgba(255, 255, 255, 1)';
       document.getElementById("services_menu_item1_p").classList.remove("style")
  
}

function changeItem1(){
    if ( document.getElementById("services_menu_item2").classList.contains('services_menu_item2') ){
       document.getElementById("services_menu_item2").classList.add('service_menu_hover2'); 
       document.getElementById("services_menu_item1").classList.add('service_menu_hover1'); 
       document.getElementById("services_menu_item1_p").style.color = 'rgba(248, 248, 255, 1)';
       document.getElementById("services_menu_item2_p").style.color = 'rgba(0, 0, 0, 1)';
      document.getElementById("services_menu_item1_p").classList.toggle("style")
      
       
    }

    

}
function rechangeItem1(){
   
       document.getElementById("services_menu_item2").classList.remove('service_menu_hover2'); 
       document.getElementById("services_menu_item1").classList.remove('service_menu_hover1');
       document.getElementById("services_menu_item1_p").style.color = 'rgba(0, 0, 0, 1)';
       document.getElementById("services_menu_item2_p").style.color = 'rgba(255, 255, 255, 1)';
       document.getElementById("services_menu_item1_p").classList.remove("style")
  
}
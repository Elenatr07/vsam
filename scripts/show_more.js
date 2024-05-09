function show_more_security_consalting(){
    let btnText = document.getElementById("load_btn_block_one");
    let els = document.getElementsByClassName("step1");
   var arrow = document.getElementById("load_btn_block_one");
   let bottom = document.getElementById("bottom_menu");
  bottom.classList.toggle('bottom_menu');
  
    arrow.classList.toggle('up');
   
    
    for (var i = 0, el; el = els[i]; i++){
      if (getComputedStyle(el).display == 'none') {
        el.style.display = 'block';
        
        
      } else {
       el.style.display = "none";
       
      }
   //console.log(els);
  }
}
function show_more_network_consalting(){
    let btnText = document.getElementById("load_btn_block_two");
    let els = document.getElementsByClassName("step2");
   var arrow = document.getElementById("load_btn_block_two");
   let bottom = document.getElementById("bottom_menu1");
   bottom.classList.toggle('bottom_menu1');
   
   arrow.classList.toggle('up');
   
    
    for (var i = 0, el; el = els[i]; i++){
      if (getComputedStyle(el).display == 'none') {
        el.style.display = 'block';
        
        
      } else {
       el.style.display = "none";
       
      }
   //console.log(els);
  }
}
function show_more_infrastructure_consalting(){
    let btnText = document.getElementById("load_btn_block_three");
    let els = document.getElementsByClassName("step3");
   var arrow = document.getElementById("load_btn_block_three");
   let bottom = document.getElementById("bottom_menu2");
   bottom.classList.toggle('bottom_menu');
   
   arrow.classList.toggle('up');
   
    
    for (var i = 0, el; el = els[i]; i++){
      if (getComputedStyle(el).display == 'none') {
        el.style.display = 'block';
        
        
      } else {
       el.style.display = "none";
       
      }
   //console.log(els);
  }
}
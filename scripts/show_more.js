function show_more_security_consalting(){
    let btnText = document.getElementById("load_btn_block_one");
    let els = document.getElementsByClassName("step");
   var arrow = document.getElementById("load_btn_block_one");
   
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
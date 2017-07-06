const searchInput = document.querySelector('#search');
document.addEventListener("keydown", keyDownTextField); //
  function keyDownTextField(e){
      const list = document.querySelector('#resultslist');
      const first = document.querySelector("#resultslist>ul>li");
      const activeElement = document.activeElement;
      var selectedItem;
      searchInput.setAttribute("aria-expanded", "true");
      if (searchInput.value){
        list.style.display="block";
        updateStatus();
      }else{
        list.style.display="none";
      }
      switch(e.keyCode) {
      case 40:// down

           if (activeElement == searchInput) {
              selectedItem = first.firstElementChild;
           }
          else {
            if(activeElement.parentNode.nextElementSibling){
              selectedItem =  activeElement.parentNode.nextElementSibling.firstElementChild;
            }else{
              var selectedItem = activeElement.parentNode.parentNode.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild;
            }
          }
          document.querySelector("#resultslist>ul>li>a").setAttribute("aria-selected", "false");
          selectedItem.setAttribute("aria-selected", "true");
          selectedItem.focus();
      break;
      case 38:// Up
          if (activeElement == searchInput || activeElement ==  first.firstElementChild) {
             break;
          }else {
            if(activeElement.parentNode.previousElementSibling){
              selectedItem = activeElement.parentNode.previousElementSibling.firstElementChild ;
            }else{
              console.log(activeElement.parentNode.parentNode);
              var selectedItem = activeElement.parentNode.parentNode.previousElementSibling.previousElementSibling.lastElementChild.firstElementChild;
            }
            document.querySelector("#resultslist>ul>li>a").setAttribute("aria-selected", "false");
            selectedItem.setAttribute("aria-selected", "true");
            selectedItem.focus();

          }
         break;
      case 27: //esc
        list.style.display="none";
        searchInput.focus();
      break;
      }

      function updateStatus(){
        const status = document.querySelector('#status');
        const items = document.querySelectorAll('#resultslist ul li');
        status.textContent = items.length+ "  results";
      }

}

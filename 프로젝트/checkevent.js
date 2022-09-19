function chkbox(checkbox) {
    const chkevent = document.getElementById('check');
    chkevent.disabled = checkbox.checked ? false : true;
    if(chkevent.disabled) {
        chkevent.disabled = true;
    }else {
        chkevent.disabled = false;
    }
  }
  

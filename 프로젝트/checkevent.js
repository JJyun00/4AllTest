function toggleTextbox(checkbox) {
    const textbox_elem = document.getElementById('check');
    textbox_elem.disabled = checkbox.checked ? false : true;
    if(textbox_elem.disabled) {
      textbox_elem.value = disabled;
    }else {
      textbox_elem.focus();
    }
  }
  

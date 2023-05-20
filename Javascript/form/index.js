var form = document.getElementById('Details_form');
var button = document.getElementById('Submit_btn');
button.disabled=true
button.innerText="Fill All Fields First"
form.addEventListener('input', function() {

  var inputs = form.getElementsByTagName('input');
  var empty = false;
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value === '') {
      empty = true;
      break;
    }
  }
  if(!empty){
    button.innerText="Submit"
  }else{
    button.innerText="Fill All Fields First"
  }
  button.disabled = empty;
});

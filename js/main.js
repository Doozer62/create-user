
function checkForm(el) {

      let lastName = el.lastname.value,
          name = el.name.value,
          phone = el.phone.value,
          message = "";

  if (lastName == "" || name == "" || phone == "")
  message = "Не все поля заполнены";

  if (message != "") {
    document.getElementById('message').innerHTML = message;
  }

    else {
      message = "Пользователь создан";
      document.getElementById('message').innerHTML = message;
    }
    return false;
    
};


let selector = document.getElementById("phone");

let im = new Inputmask("+7(999) 999-9999");
im.mask(selector);




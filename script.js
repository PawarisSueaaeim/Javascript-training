const fname_lastname = document.querySelector("#name");
var add = document.querySelector("#submit");
var male = document.querySelector("#male");
const female = document.querySelector("#female");

add.focus();
add.onclick = function () {
    var text = fname_lastname.value;
    var gender = document.querySelector(
      'input[name="flexRadioDefault"]:checked'
    ).value;

    var data = {
      name: fname_lastname.value,
      gender: gender,
    };

    if (text == "") {
      alert("Please enter a username");
    } else {
      document.createElement("tr").innerHTML;
      document.getElementById("dataname").innerHTML = data.name;
      document.getElementById("datagender").innerHTML = data.gender;
    }
  };

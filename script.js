const fname_lastname = document.querySelector("#name");
const add = document.querySelector("#submit");
const male = document.querySelector("#male");
const female = document.querySelector("#female");
var accept = document.getElementById("accept");
var arr = [];
count = 0;
add.focus();
add.onclick = function () {
  count += 1;
  if (accept.checked == true) {
    var text = fname_lastname.value;
    var gender = document.querySelector(
      'input[name="flexRadioDefault"]:checked'
    ).value;

    var data = {
      name: fname_lastname.value,
      gender: gender,
    };
    for (let i = 0; i < count; i++) {
      arr[i] = data;
    }
    console.log(arr);

    if (text == "") {
      alert("Please enter a username");
    } else {
      for (let i = 0; i < arr.length; i++) {}

      document.createElement("tr").innerHTML;
      document.getElementById("dataname").innerHTML = data.name;
      document.getElementById("datagender").innerHTML = data.gender;
    }
  } else {
    alert("Please accept");
  }
};

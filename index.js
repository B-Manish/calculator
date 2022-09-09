//localStorage.clear();
var form = `<div>
  <div class="form-group">
    <label for="firstname">First Name</label>
    <input type="text" class="form-control" id="fname"  >
  </div>
  <div class="form-group mt-3">
    <label for="lastname">Last Name</label>
    <input type="text" class="form-control" id="lname" >
  </div>
  <div class="form-group mt-3">
    <label for="gender">Gender</label>
    <input type="text" class="form-control" id="gender" >
  </div>
  <div class="form-group mt-3">
    <label for="dateofbirteg">Date of Birth</label>
    <input type="text" class="form-control" id="dob" >
  </div>
  <div class="form-group mt-3">
    <label for="email">Email</label>
    <input type="type" class="form-control" id="email" >
  </div>
  <div class="form-group mt-3">
    <label for="phoneno">Phone</label>
    <input type="text" class="form-control" id="phone" >
  </div>
  <button type="submit" class="btn btn-primary mt-3" onclick="save()">Save</button>
</div>`;

function table() {
    let table = `<table class="table">
  <thead>
    <tr>
      <th clsaa="col-1">NO</th>
      <th clsaa="col-1">First Name</th>
      <th clsaa="col-1">Last Name</th>
      <th clsaa="col-1">Gender</th>
      <th clsaa="col-2">Date of Birth</th>
      <th clsaa="col-2">Email</th>
      <th clsaa="col-2">Phone No.</th>
      <th clsaa="col-1">Edit</th>
      <th clsaa="col-1">Delete</th>
    </tr>
  </thead>
  <tbody>`;
    for (let i = 0; i < details.length; i++){
        table = table + `<tr>
      <td>${i + 1}</td>
      <td>${details[i].fname}</td>
      <td>${details[i].lname}</td>
      <td>${details[i].gender}</td>
      <td>${details[i].dob}</td>
      <td>${details[i].email}</td>
      <td>${details[i].phone}</td>
      <td><button type="button" class="btn btn-warning" onclick="edit(${i})">Edit</button></td>
      <td><button type="button" class="btn btn-danger" onclick="deleteData(${i})">Delete</button></td>
    </tr> `;
    };
    table = table+`</tbody>
    </table>`;
    document.getElementById("table").innerHTML = table;
};
document.getElementById("form").innerHTML = form;
details = [];
getData();
table();
function getData(){
    let Data = localStorage.getItem("details");
    if (Data) {
        details = JSON.parse(Data);
    } else {
        setData();
    };
};
function setData() {
    localStorage.setItem("details", JSON.stringify(details));
};
function save() {
    let fname = document.getElementById("fname");
    let lname = document.getElementById("lname");
    let gender = document.getElementById("gender");
    let dob = document.getElementById("dob");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");

    if (fname.value == 0 || lname.value==0 || gender.value==0  || dob.value==0 || email.value==0 || phone.value==0) {
        alert("Form can not have empty fields");
        return
    }
    if(isNaN(phone.value)){
      alert("Invalid phone number");
      return
    }
    if(phone.value.length!=10){
      alert("Invalid phone number length");
      return
    }


    
    
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.value.match(mailformat)){}
    else
    {
      alert("You have entered an invalid email address!");
      return
    }

  
    let data = {
        fname: fname.value,
        lname: lname.value,
        gender:gender.value,
        dob:dob.value,
        email:email.value,
        phone:phone.value
    };
    details.push(data);
    setData();

    // console.log(details)
    // console.log(email.value)
    table();
    fname.value = "";
    lname.value = "";
    gender.value = "";
    dob.value = "";
    email.value ="";
    phone.value = "";



    
};
function deleteData(index) {
    details.splice(index, 1);
    setData();
    table();

    // console.log('delete work')
    // console.log(details)
};

function edit(index) {
    let editForm = `<div>
  <div class="form-group">
    <label for="name">First Name</label>
    <input type="text" value="${details[index].fname}" class="form-control" id="firstname">
  </div>
  <div class="form-group mt-3">
    <label for="email">Last Name</label>
    <input type="email" value="${details[index].lname}" class="form-control" id="lastname">
  </div>
  <div class="form-group mt-3">
    <label for="email">Gender</label>
    <input type="email" value="${details[index].gender}" class="form-control" id="Gender">
  </div>
  <div class="form-group mt-3">
    <label for="email">Date of Birth</label>
    <input type="email" value="${details[index].dob}" class="form-control" id="dateofbirth">
  </div>
  <div class="form-group mt-3">
    <label for="email">Email</label>
    <input type="email" value="${details[index].email}" class="form-control" id="Email">
  </div>
  <div class="form-group mt-3">
    <label for="email">Phone Number</label>
    <input type="email" value="${details[index].phone}" class="form-control" id="phonenumber">
  </div>
  <button type="submit" class="btn btn-primary mt-3" onclick="update(${index})">Update</button>
</div>`;
    document.getElementById("form").innerHTML = editForm;
    // console.log('edit work');
};
function update(index) {
    let newFirstName = document.getElementById('firstname');
    let newLastName = document.getElementById('lastname');
    let newGender = document.getElementById('dateofbirth');
    let newDateofBirth = document.getElementById('Gender');
    let newEmail = document.getElementById('Email');
    let newPhone = document.getElementById('phonenumber');

    details[index] = {
        fname: firstname.value,
        lname: lastname.value,
        gender:Gender.value,
        dob:dateofbirth.value,
        email:Email.value,
        phone:phonenumber.value
    };
    setData();
    table();
    document.getElementById("form").innerHTML = form;
// console.log('update work')
// console.log(details)
}




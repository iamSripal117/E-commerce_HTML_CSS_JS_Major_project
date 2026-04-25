let url ="http://localhost:3000/tasks"

let form = document.querySelector("form");
form.addEventListener("submit", () => {
  let formData = new FormData(form);

  let password = formData.get("password");
  let confirmPassword = formData.get("confirm_password");
  let name = formData.get("name");
  let email = formData.get("email");
  let mobileNo = formData.get("mobile");
  let gender = formData.get("gender");
  let dob = formData.get("dob");
  let address = formData.get("address");

  if (
    password === "" ||
    confirmPassword === "" ||
    name === "" ||
    email === "" ||
    address === "" ||
    gender === "" ||
    dob === ""
  ) {
    alert("Fill all the feilds");
  } else if (password === confirmPassword) {
    let userDetails = {
      name: name,
      email: email,
      password: password,
      dob: dob,
      gender: gender,
      contact: mobileNo,
    };
    addUser(userDetails);
  } else {
    alert("Password Mismatch");
  }
});

let addUser = async (data) => {
  try {
    await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch {
    alert("Something went wrong try after some time");
  }
};
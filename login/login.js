let form = document.querySelector("form")

form.addEventListener("submit", () =>{
    let formData = new FormData(form);
    validation(formData.get("email"),formData.get("password"))
})

let validation = async (email,password) =>{
    try{
        let response = await fetch("http://localhost:3000/tasks");
        let usersData = await response.json();

        let singleUser = usersData.find(
            (user) => user.email === email && user.password === password
        );

        if (singleUser === undefined) {
            alert("User Not found");
        } else {
            alert("Login successful");
            localStorage.setItem("id", singleUser.id);
            sessionStorage.setItem("id", singleUser.id);
            location.href = "../index.html";
        }
    }catch{
        alert("Error fetching user data");
    }
};
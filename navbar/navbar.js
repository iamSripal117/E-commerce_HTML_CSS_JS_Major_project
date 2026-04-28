let let navbar = document.querySelector("#nav_container");

let logo = [
  {
    name: "logo",
    path: "../homepage/index.html",
  },
];

let navigation = [
  {
    name: "mobiles",
    path: "../mobiles/mobile.html",
  },
  {
    name: "laptops",
    path: "#",
  },
  {
    name: "kitchen",
    path: "#",
  },
  {
    name: "Accessories",
    path: "#",
  },
  {
    name: "electronics",
    path: "#",
  },
  {
    name: "clothes",
    path: "#",
  },
  {
    name: "+",
    path: "../addProduct/addProduct.html",
  },
  {
    name: "home",
    path: "../homepage/index.html",
  },
];

let profileData = [
  {
    name: "cart",
    path: "../cart/cart.html",
  },
  {
    name: "orders",
    path: "../orders/order.html",
  },

  {
    name: "wishlist",
    path: "#",
  },
  {
    name: "login",
    path: "../login/login.html",
  },
  {
    name: "signin",
    path: "../register/register.html",
  },

  {
    name: "profile",
    path: "#",
  },
  {
    name: "logout",
    path: "#",
  },
];

let createNavbar = (data) => {
  let container = document.createElement("article");
  let ul = document.createElement("ul");
  data.map((value) => {
    let li = document.createElement("li");
    let a = document.createElement("a");
    if (value.name === "logout") {
      let button = document.createElement("button");
      button.innerHTML = "Logout";
      li.append(button);
      button.addEventListener("click", () => {
        sessionStorage.removeItem("id");
        location.reload();
      });
    } else if (value.name === "logo") {
      let image = document.createElement("img");
      image.alt = "logo";
      a.append(image);
      li.append(a);
    } else {
      a.innerHTML = value.name;
      a.href = value.path;
      li.append(a);
    }
    li.className = value.name;
    ul.append(li);
  });
  container.append(ul);
  navbar.append(container);
};

createNavbar(logo);
createNavbar(navigation);
createNavbar(profileData);

let login = document.querySelector(".login");
let signIn = document.querySelector(".signin");
let profile = document.querySelector(".profile");
let logout = document.querySelector(".logout");
let userId = sessionStorage.getItem("id");

if (userId) {
  logout.style.display = "flex";
  profile.style.display = "flex";
  login.style.display = "none";
  signIn.style.display = "none";
} else {
  logout.style.display = "none";
  profile.style.display = "none";
  login.style.display = "flex";
  signIn.style.display = "flex";
}

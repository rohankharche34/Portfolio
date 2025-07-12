for (var i = 0; i < document.querySelectorAll(".nav--bar li").length; i++) {
  var navbarhover = document.querySelectorAll(".nav--bar ul li")[i];
  addanimation(navbarhover);
}

function addanimation(key) {
  key.addEventListener("mouseover", function () {
    key.classList.add("hover");
  });
  key.addEventListener("mouseout", function () {
    key.classList.remove("hover");
  });
}

for (var i = 0; i < document.querySelectorAll(".project-card").length; i++) {
  var projectcardhover = document.querySelectorAll(".project-card")[i];
  addprojecthover(projectcardhover);
}

function addprojecthover(projectkey) {
  projectkey.addEventListener("mouseover", function () {
    projectkey.classList.add("hover");
  });
  projectkey.addEventListener("mouseout", function () {
    projectkey.classList.remove("hover");
  });
}

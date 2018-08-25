let toggle = true;

function changeStatus(e) {
  const lastState = toggle;
  if (e.target.id === "signin") {
    toggle = true;
  } else {
    toggle = false;
  }
  if (toggle && toggle !== lastState) {
    document.getElementById("signin").classList.add("active");
    document.getElementById("signup").classList.remove("active");
    document.querySelector(".c-left").classList.add("t-flip-reverse");
    document.getElementById("loginbtn").value = "Login";

    document
      .querySelector(".t-flip-reverse")
      .addEventListener("animationend", e => {
        document.querySelector(".c-left").classList.remove("t-flip-reverse");
      });
  } else if (!toggle && toggle !== lastState) {
    document.getElementById("signin").classList.remove("active");
    document.getElementById("signup").classList.add("active");
    document.querySelector(".c-left").classList.add("t-flip");
    document.getElementById("loginbtn").value = "Create Account";

    document.querySelector(".t-flip").addEventListener("animationend", e => {
      document.querySelector(".c-left").classList.remove("t-flip");
    });
  } else {
    return;
  }
}

document.querySelectorAll(".c-change--btn").forEach(item => {
  item.addEventListener("click", changeStatus);
});

document
  .getElementById("loginbtn")
  .addEventListener("click", e => e.preventDefault());

document
  .getElementById("facebook")
  .addEventListener("click", e => e.preventDefault());

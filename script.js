const inp = document.getElementById("inp");
const eyeBtn = document.getElementById("eyeBtn");
const eyeIcon = eyeBtn.querySelector("i");

const pStatus = document.getElementById("pStatus");
const range = document.querySelector(".rangeStatus");
const strengthIcon = document.querySelector("#strengthIcon i");

eyeBtn.addEventListener("click", () => {
  if (inp.type === "password") {
    inp.type = "text";
    eyeIcon.classList.replace("ri-eye-line", "ri-eye-off-line");
  } else {
    inp.type = "password";
    eyeIcon.classList.replace("ri-eye-off-line", "ri-eye-line");
  }
});


inp.addEventListener("input", () => {
  const value = inp.value;

  let abc = /[a-z]/.test(value);
  let ABC = /[A-Z]/.test(value);
  let numChar = /[0-9]/.test(value);
  let special = /[^A-Za-z0-9]/.test(value);
  let inpLen = value.length >= 8;


  updateRequirements("chars", inpLen);
  updateRequirements("AtoZ", ABC);
  updateRequirements("atoz", abc);
  updateRequirements("num", numChar);
  updateRequirements("speChar", special);

  
  const score = [inpLen, ABC, abc, numChar, special].filter(Boolean).length;

  updateStrength(score);
});

function updateRequirements(id, valid) {
  const element = document.getElementById(id);

  if (valid) {
    element.classList.add("valid");
  } else {
    element.classList.remove("valid");
  }
}


function updateStrength(score) {
  if (score <= 1) {
    pStatus.innerText = "Weak";
    pStatus.style.color = "#ef4444";

    range.style.width = "20%";
    range.style.background = "#ef4444";

    strengthIcon.className = "ri-shield-line";
    strengthIcon.parentElement.style.color = "#ef4444";
    strengthIcon.parentElement.style.background = "rgba(239, 68, 68, 0.1)";

  } else if (score <= 3) {
    pStatus.innerText = "Medium";
    pStatus.style.color = "#f59e0b";

    range.style.width = "65%";
    range.style.background = "#f59e0b";

    strengthIcon.className = "ri-shield-check-line";
    strengthIcon.parentElement.style.color = "#f59e0b";
    strengthIcon.parentElement.style.background = "rgba(245, 158, 11, 0.1)";

  } else{
    pStatus.innerText = "Strong";
    pStatus.style.color = "#22c55e";

    range.style.width = "100%";
    range.style.background = "#22c55e";

    strengthIcon.className = "ri-shield-check-fill";
    strengthIcon.parentElement.style.color = "#22c55e";
    strengthIcon.parentElement.style.background = "rgba(34, 197, 94, 0.1)";

  }

}

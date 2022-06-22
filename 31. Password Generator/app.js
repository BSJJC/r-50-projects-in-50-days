const copy = document.querySelector(".copy");
const [length_EL, upper_EL, lower_EL, num_EL, symbol_EL] = document.getElementsByTagName("input");
const btn = document.querySelector(".generator");

const _letters = "abcdefghijklmnopqrstuvwxyz";
const _symbols = "`~!@#$%^&*()-_=+[{]}\\|;:'\"',<.>/?";

let mixes;
let length;
let psw_str = "";

btn.addEventListener("click", function (e) {
  e.preventDefault();

  length = length_EL.value;
  mixes = [upper_EL.checked, lower_EL.checked, num_EL.checked, symbol_EL.checked];

  for (let i = 0; i < length; i++) {
    switch (GetCharType(mixes)) {
      case 0:
        psw_str += _letters[GetRandomNun(_letters.length - 1)].toUpperCase();
        break

      case 1:
        psw_str += _letters[GetRandomNun(_letters.length - 1)];
        break

      case 2:
        psw_str += GetRandomNun(9);
        break

      case 3:
        psw_str += _symbols[GetRandomNun(_symbols.length - 1)];
        break
    };
  }

  copy.setAttribute("psw", psw_str);
  psw_str = "";
});

copy.addEventListener("click", async function () {
  await navigator.clipboard.writeText(copy.getAttribute("psw"));
  alert("password copy succeed");
});

function GetRandomNun(max) {
  return Math.round(Math.random() * max);
};

function GetCharType(arr) {
  while (true) {
    const i = GetRandomNun(arr.length - 1);
    if (arr[i]) return i;
  }
};
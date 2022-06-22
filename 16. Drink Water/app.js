const des = document.querySelector(".describe");
const pro = document.querySelector(".progress");
const cups = document.querySelectorAll(".cup");

function GetWaterLevel() {
 let filled = 0;
 cups.forEach(c => {
  if (c.classList.contains("change")) filled++
  else return
 });
 return (filled / cups.length) * 100;
}

function NumChange(obj, new_num) {
 let old_num = obj.innerHTML ? parseInt(obj.innerHTML) : 0;

 let timer = setInterval(() => {
  if (old_num < new_num && new_num - old_num > 0.5) {
   old_num += 1;
   obj.innerHTML = old_num + "%";
  }
  else if (old_num > new_num && old_num - new_num > 0.5) {
   old_num -= 1;
   obj.innerHTML = old_num + "%";
  }
  else {
   clearInterval(timer);
   obj.innerHTML = new_num + "%";
   if (new_num === 0) {
    pro.innerHTML = "";
   }
   return;
  }
 }, 1);
}

function WaterLevelChange() {
 const level = GetWaterLevel();

 des.style.height = (100 - level) + "%";

 NumChange(des, (100 - level));
 NumChange(pro, level);
};

function IfContainsFull(target) {
 if (target.classList.contains("full")) return true
 else return false;
}

function CupStateChange(c) {
 //#region 点击小杯子会发生的情况
 /**
  * 点击小杯子会有三种情况
  * 
  * 1、点击的杯子没有装水
  *    则需要把第一个杯子到点击的那个杯子都装上水
  *    若被点击杯子前的杯子中有已经装了水的杯子，则跳过，判断下一个杯子
  * 
  * 2、点击的杯子装了水，则会有两种分支情况
  *    ①、若被点击的、装了水的杯子是最后一个装了水的杯子
  *        则让该杯子取消装水
  *    ②、若被点击的、装了水的杯子不是最后一个装了水的杯子
  *        则从被点击的杯子 + 1个开始，到结束的杯子都取消装水
  */

 /**
  * There are three situations when you click on a small cup
  * 
  * 1. The cup clicked does not contain water
  *    Fill the first cup to the cup that you click with water
  *    If there is already a cup with water in front of the clicked cup, skip and judge the next cup
  * 
  * 2. If the clicked cup is filled with water, there will be two branches
  *    ① The clicked cup with water is the last cup with water
  *       Let the cup cancel the filling of water
  *    ② The cup with water is not the last one
  *       The water filling will be cancelled from the clicked cup + 1 to the last cup
  */
 //#endregion

 const target = c.id;

 if (!IfContainsFull(c)) {
  // 第一种情况 
  // situation 1
  let count = 0;
  for (let i = 0; i < target; i++) {
   if (IfContainsFull(cups[i])) continue;
   cups[i].classList.add("change");
   setTimeout(() => {
    cups[i].classList.add("full");
   }, count * 40);
   count++;
  };
 }
 else {
  // 第二种情况 分支1
  // situation 2, branch 1
  if (target == cups.length || !IfContainsFull(cups[target])) {
   cups[target - 1].classList.remove("change");
   cups[target - 1].classList.remove("full");
  }
  // 第二种情况 分支2
  // situation 2, branch 2
  else {
   let count = 0;
   for (let i = cups.length - 1; i > target - 1; i--) {
    cups[i].classList.remove("change");
    setTimeout(() => {
     cups[i].classList.remove("full");
    }, count * 40);
    count++;
   };
  }
 };
}

cups.forEach(c => {
 c.addEventListener("click", function () {
  CupStateChange(c);
  WaterLevelChange();
 })
});
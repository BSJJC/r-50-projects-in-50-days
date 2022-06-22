const blocks = document.getElementsByClassName("block");

function update(b, attribute) {
 let count = 0;
 const tatget = parseInt(b.getAttribute(attribute));
 let id = setInterval(() => {
  if (count >= tatget) {
   clearInterval(id);
   b.setAttribute(`${b.id}_${attribute}`, tatget);
  }

  b.setAttribute(`${b.id}_${attribute}`, count);
  count += Math.floor(tatget * 0.003);
 }, 1);
}

[...blocks].forEach(b => {
 update(b, "pixiv_id");
 update(b, "likes");
});

console.log("数据统计时间：2022/05/15");
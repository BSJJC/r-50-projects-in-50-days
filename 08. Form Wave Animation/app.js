const labels = document.getElementsByTagName("label");

for (const i of labels) {
 i.innerHTML = i.innerHTML.split("").map((text, delay) => {
  return `<span style="transition-delay: ${delay * 30}ms;">${text}</span>`
 })
  .join("");
}

// 1 split 将innerHTML拆分
// 2 map 将被拆分后的字符组合成数组 再一个个进行处理
// NB啊
const [btn] = document.getElementsByTagName("button");
const [input] = document.getElementsByTagName("input");
const container = document.querySelector(".container");

let left_offset = 0;
let top_offset = 0;
let blocks = input.value; // block数量 the number of blocks
let block_side_length;
let rotated = false;
// 变量 rotated   variable rotated
// 是否已经旋转，若已旋转则不重新创建block，反之便创建
// if the blocks are rotated, blocks won't be created, if not, create

function InputCheck(num) {
 if (Math.pow(Math.sqrt(num), 2) === parseInt(num)) return true
 else return false;
};

function CreateBlocks() {
 blocks = input.value;
 container.innerHTML = ``;

 //#region 中文版注释
 /**
  *       创建block
  * block边长一致，每列、每行block数量一致
  * 每个block的边长               === container边长 / 每列block的个数
  * 每个block的 background 偏移量 === `left_offset% top_offset%`
  * 每个block的 background 缩放   === 100% * 每列block的开根个
  * 
  *       background 偏移量计算
  * 每添加一个block， left_offset 需要加上 100 / （每行block数量 - 1）
  *   若left_offset > 100 则重置left_offset 
  *   并且 top_offset 加上 100 / （每行block数量 - 1）
  * 
  * 所有block创建完毕后
  * 重置 left_offset 、 top_offset
  */
 //#endregion

 //#region EN ver note
 /**
  *       Create blocks
  * blocks' side length are all the same. The number of blocks in each row and column is the same
  * side length per block          === container's side lengh / number of blocks per row
  * offset per block's background  === `left_offset% top_offset%`
  * scaling per block's background === 100% * root of the number of squares per line
  * 
  *       Background offset calculation
  * left_offset + 100 (the number of blocks per line - 1) each time you append a blocks to the container
  * if left_offset > 100
  *   reset left_offset 
  *   and top_offset need to be increased by 100 / (the number of blocks - 1)
  * 
  * after all blocks are created
  * reset left_offset and top_offset
  */
 //#endregion

 for (let i = 0; i < blocks; i++) {
  const template = document.createElement("div");
  template.classList = "block";

  block_side_length = parseInt(getComputedStyle(container).height) / Math.sqrt(blocks) + "px";

  template.style.backgroundPosition = `${left_offset}% ${top_offset}%`;
  template.style.height = block_side_length;
  template.style.width = block_side_length;
  template.style.backgroundSize = `${Math.sqrt(blocks)}00%`;

  container.append(template);

  if (left_offset + (100 / (Math.sqrt(blocks) - 1)) > 100) {
   left_offset = 0;
   top_offset += (100 / (Math.sqrt(blocks) - 1));
  }
  else {
   left_offset += (100 / (Math.sqrt(blocks) - 1));
  }
 };

 left_offset = 0;
 top_offset = 0;
}

btn.addEventListener("click", function () {

 if (!InputCheck(input.value)) {
  alert("输入错误，请保证输入的值可被完全开根号");
  alert("Input error, please ensure that the input value can be completely opened");
  return;
 };

 if (!rotated) CreateBlocks();
 rotated = !rotated;

 setTimeout(() => {
  container.classList.toggle("rotate");
 }, 100);
});

CreateBlocks();
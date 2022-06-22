const container = document.querySelector(".container");
const [input] = document.getElementsByTagName("input");
const [unfinished_list, finished_list] = document.querySelectorAll(".item-list");



/**
 *   输入框事件
 */
function InputFocus() {
 StyleChange();
};
function InputBlur() {
 if (NoUnfinished() && NoFinished()) StyleChange();
 else {
  setTimeout(() => {
   StyleChange();
  }, 300);
 }
 input.value = "";
};
function InputEnter(e) {
 if (e.key !== "Enter") return;
 if (input.value.trim().length === 0) {
  input.value = "";
  return;
 }

 CreateUnfinishedItem();
};



/**
 *   创建item
 *   删除item
 */
function CreateItem(item_class_name, item_inner, item_func) {
 const template = document.createElement("div");
 template.classList = item_class_name;
 template.innerHTML = item_inner;

 template.addEventListener("click", function () { item_func(this); });
 template.onmousedown = function (e) { DeleteItem(e); };

 return template;
};
function DeleteItem(e) {
 if (e.button !== 2) return;

 e.target.classList = ("item item-out");
 setTimeout(() => {
  e.target.remove();
  StyleChange();
  SaveToLocal();
 }, 300);
};



/**
 *   本地保存
 */
function SaveToLocal() {
 let UNFINISHED_LIST = [];
 [...unfinished_list.children].forEach(el => {
  UNFINISHED_LIST.push(el.innerHTML);
 });

 let FINISHED_LIST = [];
 [...finished_list.children].forEach(el => {
  FINISHED_LIST.push(el.innerHTML);
 });

 const LISTS = {
  "UNFINISHED_LIST": UNFINISHED_LIST,
  "FINISHED_LIST": FINISHED_LIST
 };

 localStorage.setItem("LISTS", JSON.stringify(LISTS));
};



/**
 *   初始化
 */
function Init() {
 const data = JSON.parse(localStorage.getItem("LISTS"));

 if (data === null) return;

 data.UNFINISHED_LIST.forEach(el => {
  const template = CreateItem("item item-in", el, ToFinishItem);
  unfinished_list.append(CreateItem("item item-in", el, ToFinishItem));
 });

 data.FINISHED_LIST.forEach(el => {
  const template = CreateItem("item item-in finished-item", el, ToUnfinishedItem);
  finished_list.append(template);
 });

 if (!NoUnfinished() && NoFinished()) {
  container.classList = "container on-input";
 }
 else if (!NoUnfinished() && !NoFinished()) {
  container.classList = "container on-input";
  unfinished_list.classList = "item-list unfinished-list";
  finished_list.classList = "item-list finished-list";
 }
 else if (NoUnfinished() && !NoFinished()) {
  container.classList = "container all-finished";
  unfinished_list.classList = "item-list unfinished-list";
  finished_list.classList = "item-list finished-list";
 }
};



/**
 *   样式变化
 *     输入框样式变化
 *     当todo全部 完成 时的样式
 *     当todo全部 未完成 时的样式
 *     既有 未完成 也有 已完成 时的样式
 *   判断基准
 *     没有 未完成 return true  否则 return false
 *     没有 已完成 return true  否则 return false
 * 
 *   样式变化
 */
function InputStateChange() {
 container.classList.toggle("on-input");
}
function AllFinished() {
 container.classList.toggle("all-finished");
};
function AllUnfinished() {
 unfinished_list.classList = "item-list";
 finished_list.classList = "item-list";
};
function UnfinishedAndFinished() {
 container.classList = "container on-input";
};
function NoUnfinished() {
 if (unfinished_list.children[0] === undefined) return true;
 else return false;
};
function NoFinished() {
 if (finished_list.children[0] === undefined) return true;
 else return false;
};

function StyleChange() {

 // 有  未完成列表
 // 有  已完成列表
 if (!NoUnfinished() && !NoFinished()) UnfinishedAndFinished();

 // 有   未完成列表
 // 没有 已完成列表
 if (!NoUnfinished() && NoFinished()) AllUnfinished();

 // 没有  未完成列表
 // 有    已完成列表
 if (NoUnfinished() && !NoFinished()) AllFinished();

 // 没有 未完成列表
 // 没有 已完成列表
 // 或者
 // 没有 未完成列表
 // 有   已完成列表
 if (NoUnfinished() && NoFinished() || (NoUnfinished() && !NoFinished())) InputStateChange();

};



/**
 *   创建 未完成事件item
 *   未完成事件 的完成事件
 */
function CreateUnfinishedItem(item) {
 let template;

 if (item === undefined) template = CreateItem("item item-in", input.value.trim(), ToFinishItem);
 else template = CreateItem("item item-in", item.innerHTML, ToFinishItem);

 unfinished_list.append(template);

 SaveToLocal();
 input.value = "";
};
function ToFinishItem(item) {
 item.classList = "item item-to-finished";

 unfinished_list.classList.add("unfinished-list");
 finished_list.classList.add("finished-list");

 CreateFinishedItem(item);

 setTimeout(() => {
  item.remove();

  SaveToLocal();
  StyleChange();
 }, 300);
};



/**
 *   创建 完成事件item
 *   完成事件 的未完成事件
 */
function CreateFinishedItem(item) {
 const template = CreateItem("item item-in finished-item", item.innerHTML, ToUnfinishedItem);

 if (!finished_list.children[0]) finished_list.append(template);
 else finished_list.insertBefore(template, finished_list.children[0]);

 SaveToLocal();
};
function ToUnfinishedItem(item) {
 item.classList.add("item-to-unfinished");

 CreateUnfinishedItem(item);

 setTimeout(() => {
  item.remove();

  SaveToLocal();
  StyleChange();
 }, 300);
};



/**
 *   取消 右键默认行为
 */
document.oncontextmenu = function () {
 return false;
};

input.addEventListener("focus", InputFocus);
input.addEventListener("blur", InputBlur);
input.addEventListener("keyup", InputEnter);

Init();
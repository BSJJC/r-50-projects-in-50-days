const container = document.querySelector(".container");

const welcome = document.querySelector(".welcome-page");
const btn_start = document.querySelector(".start-btn");

const role_select_page = document.querySelector(".role-select-page");
const roles_container = document.querySelector(".role-select-page-roles");
const btn_done = document.querySelector(".done");
const btn_all = document.querySelector(".all");

const play_page = document.querySelector(".play-page");



let data;
let all_roles = [];
let selected_roles = [];

const face_animations = [
  "rotate",
  "zoom",
  "left-right",
  "up-down",
  "flat-x",
  "flat-y",
  "oblique-left-right",
  "oblique-up-down"
]



/**
 * 欢迎界面退出
 */
function WelcomePageOut() {
  welcome.classList.add("fade-out");

  setTimeout(() => {
    welcome.remove();

    role_select_page.classList.add("fade-in");
    RoleSelectPageIn();
  }, 300);
};



/***
 * 角色选择页面
 *     角色选择页面进入
 *     创建可选择的角色
 *     获取角色名
 *     角色选中
 *     选中全部角色
 *     角色选择页面推出
 */
function RoleSelectPageIn() {
  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      const imgs = data[key];
      const img_url = imgs[0];

      const template = CreateRole(img_url);
      roles_container.append(template);
    }
  };

  const [...imgs] = document.getElementsByTagName("img");
  imgs.forEach(role => {
    all_roles.push(role);
  });
};
function CreateRole(img_url) {
  const template = document.createElement("img");
  template.src = img_url;
  template.id = GetRoleName(img_url);

  template.addEventListener("click", function () { RoleLock(this) });

  return template;
};
function GetRoleName(str) {
  str = str.replace("./imgs/", "");
  str = str.replace("01.png", "");

  return str;
};
function RoleLock(el) {
  el.classList.toggle("role-lock");
};
function AllRolesLock() {
  all_roles.forEach(role => {
    role.classList.add("role-lock");
  });
};
function RoleSelectPageOut() {
  role_select_page.classList.add("fade-out");

  setTimeout(() => {
    play_page.classList.add("fade-in");
    role_select_page.remove();

    PlayePageIn();
  }, 300);

};



/***
 * 游玩页面
 *    游玩页面进入
 *    获取所有被选中的角色
 *    角色进入屏幕
 *    创建随机角色
 *    获取随机角色具体表情
 *    随机角色生成时位置
 *    随机角色进入屏幕后的位置
 *    角色被点击 淡出屏幕
 */
function PlayePageIn() {
  GetSelectedRoles();

  setTimeout(() => {
    RandomRoleIn();
  }, 500);
};
function GetSelectedRoles() {
  [...all_roles].forEach(role => {
    if (role.classList.length !== 0) selected_roles.push(role.id);
  });

  if (selected_roles.length === 0) {
    [...all_roles].forEach(role => {
      selected_roles.push(role.id);
    });
  }

};
function RandomRoleIn() {
  const template = CreateRandomRole();

  setTimeout(() => {
    const end_position = RandomFaceEndPostion();

    template.style.top = end_position.end_y + "px";
    template.style.left = end_position.end_x + "px";
  }, 500);

  play_page.append(template);
};
function CreateRandomRole() {
  const role_face = GetRandomRoleFace();

  const template = document.createElement("img");

  template.classList = face_animations[Math.floor(Math.random() * face_animations.length)];

  template.src = role_face;

  const start_postion = RandomFaceStartPostion();
  template.style.left = start_postion.start_x + "px";
  template.style.top = start_postion.start_y + "px";

  const transition_delay = Math.round(Math.random() * 1 + 0.5);
  template.style.transition = `all ${transition_delay}s ease-in-out`;

  template.addEventListener("click", function () { RoleFadeOut(template) });

  return template;
};
function GetRandomRoleFace() {
  const random_role_index = Math.floor(Math.random() * selected_roles.length);
  const random_role_name = selected_roles[random_role_index];

  const random_role_face_index = Math.floor(Math.random() * data[random_role_name].length);
  const random_role_face = data[random_role_name][random_role_face_index];

  return random_role_face;
};
function RandomFaceStartPostion() {
  const screen_width = document.body.clientWidth;
  const screen_height = document.body.clientHeight;

  let start_x = Math.round(Math.random() * (1000 + screen_width) - 500);
  let start_y;

  if (start_x < -150 || start_x > screen_width) {
    start_y = Math.round(Math.random() * (1000 + screen_height) - 500);
  }
  else {
    if (Math.random() < 0.5) {
      start_y = Math.round(Math.random() * -350 - 150);
    }
    else {
      start_y = Math.round(Math.random() * 500 + screen_height);
    }
  }

  return {
    start_x: start_x,
    start_y: start_y
  }
};
function RandomFaceEndPostion() {
  const screen_width = document.body.clientWidth;
  const screen_height = document.body.clientHeight;

  const end_x = Math.round(Math.random() * (screen_width - 150));
  const end_y = Math.round(Math.random() * (screen_height - 150));

  return {
    end_x: end_x,
    end_y: end_y
  }
};
function RoleFadeOut(el) {
  el.style.opacity = "0";
  el.style.pointerEvents = "none";

  setTimeout(() => {
    el.remove();
  }, 2000);

  RandomRoleIn();
  RandomRoleIn();
};



async function Init() {
  await fetch("./data.json")
    .then(res => res.json())
    .then(_data => data = _data)
};



btn_start.addEventListener("click", WelcomePageOut);
btn_all.addEventListener("click", AllRolesLock);
btn_done.addEventListener("click", RoleSelectPageOut);

Init();
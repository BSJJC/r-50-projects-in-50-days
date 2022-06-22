const input = document.getElementsByTagName("input")[0];

let xhr;

input.addEventListener("keyup", SearchUser)

function SearchUser(e) {
 if (e.code !== "Enter") return;

 GetUserData(`https://api.github.com/users/${input.value}`);
 input.classList.add("input_hide");
};

async function GetUserData(url) {
 try {
  const result = await axios(url);
  CreateUserCard(result.data);
 } catch {
  CreateErrorCard();
  console.warn("用户信息获取失败");
  console.warn("user info error");
 }

 input.value = "";
};
function CreateUserCard(data) {
 const template = document.createElement("div");
 template.classList = "user_info user_info_hide";
 template.innerHTML = `
 <div class="intro">
  <img class="avatar" src="${data.avatar_url}"></img>
  <div class="profile">
  <div class="name">${data.name}</div>
  <div class="followers">followers: ${data.followers}</div>
 </div>
 </div>
 <div class="repos"></div>
  `
 document.body.appendChild(template);

 console.log("用户基本信息卡片创建完毕");
 console.log("User basic information card creation completed");

 GetRepoData(data.repos_url);
};

async function GetRepoData(url) {
 try {
  const result = await axios(url);
  CreateRepoCard(result);
 } catch {
  console.warn("用户repo获取失败");
  console.warn("user repo error");

  document.querySelector(".user_info").classList = "user_info";
 }
};
function CreateRepoCard(data) {
 const repos = document.querySelector(".repos");
 for (let i = 0; i < 5; i++) {
  const template = document.createElement("a");
  template.classList = "repo";
  template.href = `${data.data[i].html_url}`
  template.target = "_blank"
  template.innerHTML = `${data.data[i].name}`;
  repos.appendChild(template);
 }

 console.log("用户repo卡片创建完毕");
 console.log("repo card creation completed");

 document.querySelector(".user_info").classList = "user_info";
};

function CreateErrorCard() {
 const template = document.createElement("div");
 template.classList = "error";
 template.innerHTML = `
 用户信息获取失败
 <br/>
 &nbsp user info error
 `
 document.body.appendChild(template);
};
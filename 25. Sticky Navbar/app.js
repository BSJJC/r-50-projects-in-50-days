const header = document.querySelector(".header");
const all_roles = document.querySelector(".all_roles");
const photo = document.querySelector(".photo");
let selected_role = 0;

const data = [
   {
      name: "月見英子",
      voice: {
         CV: "本渡 楓",
         song: "96猫"
      },
      des: "渋谷のCLUB「BBラウンジ」でバイトをしながら歌手を目指す。オーディションに落ち続けLIVEでも誰にも歌を聴いてもらえず歌手の夢を諦めかけていた時、諸葛孔明と出会う。軍師となった孔明に導かれて才能を開花させていく。",
      small_img_URL: "./img/role_imgs/eiko_small.jpg",
      role_img_URL: "./img/role_imgs/eiko.png"
   },
   {
      name: "諸葛孔明",
      voice: {
         CV: "置鮎龍太郎"
      },
      des: "三国時代、当代きっての天才軍師。西暦234年、五丈原の戦いで死期を迎えたその瞬間、なぜか渋谷に転生してしまう。転生した渋谷で歌手を目指す「月見英子」の歌声に心奪われ、英子の軍師となり二度目の人生が幕を明ける。",
      small_img_URL: "./img/role_imgs/koumei_small.jpg",
      role_img_URL: "./img/role_imgs/koumei.png"
   },
   {
      name: "KABE 太人",
      voice: {
         CV: "千葉翔也"
      },
      des: "MCバトル選手権３連覇を誇る“圧倒的な実力を誇るラッパー”だが、過去のトラウマからメンタルを病み現実逃避の日々を過ごしている。",
      small_img_URL: "./img/role_imgs/kabe_small.jpg",
      role_img_URL: "./img/role_imgs/kabe.png"
   },
   {
      name: "久遠七海",
      voice: {
         CV: "山村 響",
         song: "Lezel"
      },
      des: "渋谷の路上ライブで英子と出会い、英子との路上ライブで歌うことに喜びを感じている。英子とは路上ライブ以外の時間も一緒に過ごす、英子の親友。",
      small_img_URL: "./img/role_imgs/nanami_small.jpg",
      role_img_URL: "./img/role_imgs/nanami.png"
   },
   {
      name: "オーナー小林",
      voice: {
         CV: "福島 潤"
      },
      des: "渋谷のCLUB「BBラウンジ」のオーナーで、強烈な三国志オタク。英子の良き理解者で、孔明が繰り出す知略計略をサポートしていく。",
      small_img_URL: "./img/role_imgs/boss_small.jpg",
      role_img_URL: "./img/role_imgs/boss.png"
   }
];

window.addEventListener("scroll", function () {
   if (this.document.documentElement.scrollTop >= 250) header.classList.add("narrow")
   else header.classList.remove("narrow")
});

for (let i = 0; i < data.length; i++) {
   all_roles.children[i].classList = "filled";
   all_roles.children[i].innerHTML = `<img src=${data[i].small_img_URL}>`;
   all_roles.children[i].addEventListener("click", function () {
      Role_Change(i);
   })
};

function Role_Change(i) {
   photo.innerHTML = `
 <img src=${data[i].role_img_URL}>
 <div class="role_info">
    <h2>${data[i].name}</h2>
    <h3>CV：${data[i].voice.CV}${data[i].voice.song ? `／歌唱：${data[i].voice.song}` : ""}</h3 >
    <p>${data[i].des}</p>
 </div >
 `
};

Role_Change(0);
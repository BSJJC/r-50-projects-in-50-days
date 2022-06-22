const container = document.querySelector(".container");
let btn;
let question_page = [];

let data;
let question_index = 0;
let option_index = 0;
let temp_options = ""

let answers = {};

// 渲染问题页面
function RanderQuestionPage() {
  const template = document.createElement("div");
  template.classList = "question-page";

  template.innerHTML = `
  <div class="question-title">${data[question_index].title}</div>

   <div class="question-options">
   ${GetOptions()}
   </div>
  `

  template.style.zIndex = `${100 - question_index}`
  question_page.push(template);
  answers[`question${question_index}`] = {
    "true_answer": data[question_index].answer,
    "user_answer": "-1"
  };

  container.append(template)

  question_index++;
  option_index = 0;
  temp_options = "";

  try {
    data[question_index]
    RanderQuestionPage();
  } catch { }
};

// 获取 渲染选项
function GetOptions() {
  try {
    const option_id = data[question_index].options[option_index].option_index;
    temp_options += `
    <li>
    <input type="radio" name="option" id="${question_index}${option_id}" question_id="${data[question_index].question_id}" answer_id="${option_id}">
    <label for="${question_index}${option_id}">${data[question_index].options[option_index++].option_str}</label>
    </li>
    `

    GetOptions();
  } catch { }
  return temp_options
};

// 渲染提交按钮
function RanderSubButton() {
  const template = document.createElement("button");
  template.classList = "question-submit";
  template.innerHTML = `Submit`;
  container.append(template);
};

// 渲染结算界面
function RanderResultPage() {
  const template = document.createElement("div");
  template.classList = "result";

  let all_questions = 0;
  let right_questions = 0;

  for (const key in answers) {
    if (Object.hasOwnProperty.call(answers, key)) {
      const el = answers[key];

      all_questions++;
      if (el.true_answer === el.user_answer) right_questions++;
    }
  }

  template.innerHTML = `You answered ${right_questions}/${all_questions} questions correctly`
  container.append(template);
};

// input事件 获取选项
function InputFunc() {
  const inputs = document.getElementsByTagName("input");

  [...inputs].forEach(input => {
    input.addEventListener("click", function () {
      const question_id = this.getAttribute("question_id");

      answers[`question${question_id}`][`user_answer`] = this.getAttribute("answer_id");
    })
  });
};

// button事件
function BtnFunc() {
  btn = document.querySelector(".question-submit");

  function ReloadPage() {
    location.reload();
  };

  function TempFunc() {

    question_page[0].classList.add("fade-out");

    setTimeout(() => {
      question_page[0].remove();
      question_page.splice(0, 1);

      if (question_page.length > 0) {
        btn.onclick = TempFunc;
      }
      else {
        RanderResultPage();
        btn.onclick = ReloadPage;
        btn.innerHTML = "Retry"
      }

    }, 500);

    btn.onclick = null;
  };

  btn.onclick = TempFunc;
};


// 初始化
async function Init() {
  await fetch('./questions.json')
    .then(res => res.json())
    .then(_data => {
      data = _data;

      document.getElementsByClassName("loading")[0].remove();

      RanderQuestionPage();
      RanderSubButton()

      InputFunc();
      BtnFunc();
    });
};

Init();
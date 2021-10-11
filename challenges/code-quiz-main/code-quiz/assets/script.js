var start = $("#start-quiz");
var timer = 75;
var countdown;

var questions = [
  {
    title: "what is HTML used for in web development?",
    choices: [
      "describing the presentation of web pages",
      "describing the structure of web pages",
      "used to make web pages interactive",
    ],
    answer: "describing the structure of web pages",
  },
  {
    title: "",
    choices: ["1", "2", "3", "4"],
    answer: "",
  },
  {
    title: "",
    choices: ["1", "2", "3", "4"],
    answer: "",
  },
  {
    title: "",
    choices: ["1", "2", "3", "4"],
    answer: "",
  },
  {
    title: "",
    choices: ["1", "2", "3", "4"],
    answer: "",
  },
  {
    title: "",
    choices: ["1", "2", "3", "4"],
    answer: "",
  },
];

start.on("click", function () {
  console.log("hello");
  countdown = setInterval(function () {
    timer--;
  
    $("#timer").text(timer);
    if (timer === 0) {
      clearInterval(countdown);
    }
    $(".container").remove();
    
  }, 1000);
  
});



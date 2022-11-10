var saveButton = $(".saveButton");
var currentDay = $("#currentDay");
var timeBlock = $(".time-block");
var currentTime = $("#currentTime")

// current day
currentDay.text(moment().format("MMMM Do YYYY"));

//current time
currentTime.text(moment().format("HH:mm:ss"));

// past, present, or future colored blocks
function blockColor() {
  var hour = moment().hours();

  timeBlock.each(function () {
    var currentHour = parseInt($(this).attr("id"));
    if (currentHour > hour) {
      $(this).addClass("future");
    } else if (currentHour === hour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("past");
    }
  });
}

// saves to local storage
saveButton.on("click", function () {
  var time = $(this).siblings(".hour").text();
  var plan = $(this).siblings(".plan").val();
  localStorage.setItem(time, plan);
});

function planner() {
  $(".hour").each(function () {
    var currentHour = $(this).text();
    var currentPlan = localStorage.getItem(currentHour);

    if (currentPlan !== null) {
      $(this).siblings(".plan").val(currentPlan);
    }
  });
}

blockColor();
planner();
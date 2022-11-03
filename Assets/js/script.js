var saveButton = $(".saveButton");
var currentDay = $("#currentDay");
var timeBlock = $(".time-block");

// current day
currentDay.text(moment().format("dddd MMMM Do YYYY"));

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

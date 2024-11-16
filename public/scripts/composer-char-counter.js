//  Responsible for Character Counter

$(document).ready(function() {
  console.log("composer-char-counter.js is loaded!");

  // attach input event handler to textarea
  $(".new-tweet textarea").on("input", function() {
    const maxChars = 140;
    const currentLength = $(this).val().length;
    const remainChars = maxChars - currentLength;

    // target the counter through DOM
    const counter = $(this).closest(".new-tweet").find(".counter");
    counter.text(remainChars);

    // change color of counter when over limit by adding class and styling
    if (remainChars < 0) {
      counter.addClass("max-limit");
    } else {
      counter.removeClass("max-limit");
    }
  });
});
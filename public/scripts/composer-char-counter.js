//  Responsible for Character Counter

$(document).ready(function() {
  console.log("composer-char-counter.js is loaded!");

  $(".new-tweet textarea").on("input", function() {
    const maxChars = 140;
    const currentLength = $(this).val().length;
    const remainChars = maxChars - currentLength;

    const counter = $(this).closest(".new-tweet").find(".counter");
    counter.text(remainChars);

    if (remainChars < 0) {
      counter.addClass("max-limit");
    } else {
      counter.removeClass("max-limit");
    }
  });
});
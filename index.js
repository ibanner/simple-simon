$(".simon-button-container").click(function () {
  var $this = $(this);
  $this.addClass("pressed");
  setTimeout(function() {
    $this.removeClass("pressed");
  }, 100);
});

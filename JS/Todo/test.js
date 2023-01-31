// Create a "close" button and append it to each list item

// Create a new list item when clicking on the "Add" button

$("#s1").click(() => {
  let li = $("<li>");
  li.append($("#n1").val());

  $("#toDo").append(li);
  $("#n1").val("");

  let span = $("<span>");
  span.addClass("close")
  span.append("x");
  console.log(span);

  li.append(span);
  console.log(span);

  let close = $(".close");
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    };
  }
});

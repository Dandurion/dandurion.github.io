
$("#s1").click(function () {
  let n1 = $("#n1").val();
  let n2 = $("#n2").val();
  let s2 = parseFloat(n1) + parseFloat(n2);
  $("#sum").text(s2); 
});

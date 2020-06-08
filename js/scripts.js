$(document).ready(function() {
  $("#groceryList").submit(function(event){
  
  const firstItem = $("input#grocery1").val().toUpperCase();
  const secondItem = $("input#grocery2").val().toUpperCase();
  const thirdItem = $("input#grocery3").val().toUpperCase();
  const fourthItem = $("input#grocery4").val().toUpperCase();

  let groceryList = [firstItem, secondItem, thirdItem, fourthItem];
  let groceryListSorted = groceryList.sort();
  
  $("#groceryList").hide();

  groceryListSorted.forEach(function(item) {
    $("#output").append(item);
  });
  
  event.preventDefault();

  });
});



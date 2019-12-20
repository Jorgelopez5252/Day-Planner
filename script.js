var now = moment().format("dddd, MMMM Do YYYY");
$(".time").append(now);


$(document).ready(function () {
    $("button").click(function () {
        var key = $(this).siblings(".text-area").attr("id");
        console.log("key", key);
       var newText =  $(this).siblings(".text-area").val().trim();
       console.log("newText", newText);

       localStorage.setItem(key, newText);


    });
})


$("#9").val(localStorage.getItem("9"));

$("#10").val(localStorage.getItem("10"));
$("#11").val(localStorage.getItem("11"));
$("#12").val(localStorage.getItem("12"));
$("#13").val(localStorage.getItem("13"));
$("#14").val(localStorage.getItem("14"));
$("#15").val(localStorage.getItem("15"));
$("#16").val(localStorage.getItem("16"));
$("317").val(localStorage.getItem("17"));


// color start here//


checkTimes();

function checkTimes () {
    var currentHour = moment().hours()
  

    $(".text-area").each(function () {
        var currentID = $(this).attr("id");
      
        if (currentID < currentHour ) {
            $(this).addClass("bg-secondary")
        }
        else if (currentID == currentHour) {
            $(this).removeClass("bg-secondary");
            $(this).addClass("bg-danger")
        }
        else {
            $(this).removeClass("bg-secondary");
            $(this).removeClass("bg-danger");
            $(this).addClass("bg-success")

        }
    })

}
var now = moment().format("dddd, MMMM Do YYYY");
$(".time").append(now);

var $textarea9am = $("#textarea9am");
var $textarea10am = $("#textarea10am");
var $textarea11am = $("#textarea11am");
var $textarea12pm = $("#textarea12pm");
var $textarea1pm = $("#textarea1pm");
var $textarea2pm = $("#textarea2pm");
var $textarea3pm = $("#textarea3pm");
var $textarea4pm = $("#textarea4pm");
var $textarea5pm = $("#textarea5pm");

// variables above

$(document).ready(function () {
    $("button").click(function () {
        localStorage.setItem("9am",($textarea9am.val()))
        localStorage.setItem("10am",($textarea10am.val()))
        localStorage.setItem("11am",($textarea11am.val()))
        localStorage.setItem("12am",($textarea12pm.val()))
        localStorage.setItem("1pm",($textarea1pm.val()))
        localStorage.setItem("2pm",($textarea2pm.val()))
        localStorage.setItem("3pm",($textarea3pm.val()))
        localStorage.setItem("4pm",($textarea4pm.val()))
        localStorage.setItem("5pm",($textarea5pm.val()))

    });
})

// $("#text9AM").append(localStorage.getItem("9AM"));

$($textarea9am).append(localStorage.getItem("9am"));
$($textarea10am).append(localStorage.getItem("10am"));
$($textarea11am).append(localStorage.getItem("11am"));
$($textarea12pm).append(localStorage.getItem("12pm"));
$($textarea1pm).append(localStorage.getItem("1pm"));
$($textarea2pm).append(localStorage.getItem("2pm"));
$($textarea3pm).append(localStorage.getItem("3pm"));
$($textarea4pm).append(localStorage.getItem("4pm"));
$($textarea5pm).append(localStorage.getItem("5pm"));
// $("textarea").on("click", function () {
//     localStorage.setItem("key").val
// }


let saveBtn = $(".saveBtn");
let textArea = $(".textArea")
// let buttonSaves = target the button clicked parents 2nd child

// saveBtn.addEventListener("click", function(event){
//     console.log(buttonSaves)

//     function storeEvents() {
//                 localStorage.setItem("events", JSON.stringify(events));
//       }
// })


setInterval(function() {
    $("#currentDay").text(moment().format("dddd, MMMM Do [at ] hh:mm:ss a"));
    let currentTime = moment().format("H")
    console.log(currentTime);
    if (currentTime === "9") {
        $("#nineA").addClass("present")
        $("#tenA").addClass("future")
        $("#elevenA").addClass("future")
        $("#twelveP").addClass("future")
        $("#oneP").addClass("future")
        $("#twoP").addClass("future")
        $("#threeP").addClass("future")
        $("#fourP").addClass("future")
        $("#fiveP").addClass("future")
    }
    if (currentTime === "10") {
        $("#nineA").addClass("past")
        $("#tenA").addClass("present")
        $("#elevenA").addClass("future")
        $("#twelveP").addClass("future")
        $("#oneP").addClass("future")
        $("#twoP").addClass("future")
        $("#threeP").addClass("future")
        $("#fourP").addClass("future")
        $("#fiveP").addClass("future")
    }
    if (currentTime === "11") {
        $("#nineA").addClass("past")
        $("#tenA").addClass("past")
        $("#elevenA").addClass("present")
        $("#twelveP").addClass("future")
        $("#oneP").addClass("future")
        $("#twoP").addClass("future")
        $("#threeP").addClass("future")
        $("#fourP").addClass("future")
        $("#fiveP").addClass("future")
    }
    if (currentTime === "12") {
        $("#nineA").addClass("past")
        $("#tenA").addClass("past")
        $("#elevenA").addClass("past")
        $("#twelveP").addClass("present")
        $("#oneP").addClass("future")
        $("#twoP").addClass("future")
        $("#threeP").addClass("future")
        $("#fourP").addClass("future")
        $("#fiveP").addClass("future")
    }
    if (currentTime === "13") {
        $("#nineA").addClass("past")
        $("#tenA").addClass("past")
        $("#elevenA").addClass("past")
        $("#twelveP").addClass("past")
        $("#oneP").addClass("present")
        $("#twoP").addClass("future")
        $("#threeP").addClass("future")
        $("#fourP").addClass("future")
        $("#fiveP").addClass("future")
    }
    if (currentTime === "14") {
        $("#nineA").addClass("past")
        $("#tenA").addClass("past")
        $("#elevenA").addClass("past")
        $("#twelveP").addClass("past")
        $("#oneP").addClass("past")
        $("#twoP").addClass("present")
        $("#threeP").addClass("future")
        $("#fourP").addClass("future")
        $("#fiveP").addClass("future")
    }
    if (currentTime === "15") {
        $("#nineA").addClass("past")
        $("#tenA").addClass("past")
        $("#elevenA").addClass("past")
        $("#twelveP").addClass("past")
        $("#oneP").addClass("past")
        $("#twoP").addClass("past")
        $("#threeP").addClass("present")
        $("#fourP").addClass("future")
        $("#fiveP").addClass("future")
    }
    if (currentTime === "16") {
        $("#nineA").addClass("past")
        $("#tenA").addClass("past")
        $("#elevenA").addClass("past")
        $("#twelveP").addClass("past")
        $("#oneP").addClass("past")
        $("#twoP").addClass("past")
        $("#threeP").addClass("past")
        $("#fourP").addClass("present")
        $("#fiveP").addClass("future")
    }
    if (currentTime === "17") {
        $("#nineA").addClass("past")
        $("#tenA").addClass("past")
        $("#elevenA").addClass("past")
        $("#twelveP").addClass("past")
        $("#oneP").addClass("past")
        $("#twoP").addClass("past")
        $("#threeP").addClass("past")
        $("#fourP").addClass("past")
        $("#fiveP").addClass("present")
    }
    else {
        $("#nineA").addClass("future")
        $("#tenA").addClass("future")
        $("#elevenA").addClass("future")
        $("#twelveP").addClass("future")
        $("#oneP").addClass("future")
        $("#twoP").addClass("future")
        $("#threeP").addClass("future")
        $("#fourP").addClass("future")
        $("#fiveP").addClass("future")
    }
    
  }, 1000);



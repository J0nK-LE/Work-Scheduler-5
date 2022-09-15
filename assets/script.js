// let saveBtn = $(".saveBtn");
let saveBtn9 = $("#nineBtn")
let saveBtn10 = $("#tenBtn")
let saveBtn11 = $("#elevenBtn")
let saveBtn12 = $("#twelveBtn")
let saveBtn1 = $("#oneBtn")
let saveBtn2 = $("#twoBtn")
let saveBtn3 = $("#threeBtn")
let saveBtn4 = $("#fourBtn")
let saveBtn5 = $("#fiveBtn")

let textArea9 = $("#nineA")
let textArea10 = $("#tenA")
let textArea11 = $("#elevenA")
let textArea12 = $("#twelveP")
let textArea1 = $("#oneP")
let textArea2 = $("#twoP")
let textArea3 = $("#threeP")
let textArea4 = $("#fourP")
let textArea5 = $("#fiveP")

let currentTime = moment().format("H")
let element;
let getLocalStorage = localStorage.getItem("textArea")

textArea9.text(getLocalStorage)
textArea10.text(getLocalStorage)
textArea11.text(getLocalStorage)
textArea12.text(getLocalStorage)
textArea1.text(getLocalStorage)
textArea2.text(getLocalStorage)
textArea3.text(getLocalStorage)
textArea4.text(getLocalStorage)
textArea5.text(getLocalStorage)

setInterval(function() {
    $("#currentDay").text(moment().format("dddd, MMMM Do [at ] hh:mm:ss a"))    
}, 1000);

saveBtn9.on("click", function (){
    
        element = textArea9.val();
        console.log("text area 9 ", element);
        localStorage.setItem("textArea", element);
      })
    
saveBtn10.on("click", function (){
    
        element = textArea10.val();
        console.log("text area 10 ", element);
        localStorage.setItem("textArea", element);
    
    })
    
    
    function displayTime () {
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
    if ((!currentTime === "9") || (!currentTime === "10") || (!currentTime === "11") || (!currentTime === "12") || (!currentTime === "13") || (!currentTime === "14") || (!currentTime === "15") || (!currentTime === "16") || (!currentTime === "17")) {
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
    // else {
    //     $("#nineA").addClass("future")
    //     $("#tenA").addClass("future")
    //     $("#elevenA").addClass("future")
    //     $("#twelveP").addClass("future")
    //     $("#oneP").addClass("future")
    //     $("#twoP").addClass("future")
    //     $("#threeP").addClass("future")
    //     $("#fourP").addClass("future")
    //     $("#fiveP").addClass("future")
    // }
}
displayTime()





// let buttonSaves = target the button clicked parents 2nd child

// saveBtn.addEventListener("click", function(event){
    //     console.log(buttonSaves)
    
    //     function storeEvents() {
        //                 localStorage.setItem("events", JSON.stringify(events));
        //       }
        // })
        
        
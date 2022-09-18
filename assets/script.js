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

let currentTime = parseInt(moment().format("H"))
// let currentTime = 19;
let element;
let getLocalStorage9 = localStorage.getItem("nineA")
let getLocalStorage10 = localStorage.getItem("tenA")
let getLocalStorage11 = localStorage.getItem("elevenA")
let getLocalStorage12 = localStorage.getItem("twelveP")
let getLocalStorage1 = localStorage.getItem("oneP")
let getLocalStorage2 = localStorage.getItem("twoP")
let getLocalStorage3 = localStorage.getItem("threeP")
let getLocalStorage4 = localStorage.getItem("fourP")
let getLocalStorage5 = localStorage.getItem("fiveP")

textArea9.text(getLocalStorage9)
textArea10.text(getLocalStorage10)
textArea11.text(getLocalStorage11)
textArea12.text(getLocalStorage12)
textArea1.text(getLocalStorage1)
textArea2.text(getLocalStorage2)
textArea3.text(getLocalStorage3)
textArea4.text(getLocalStorage4)
textArea5.text(getLocalStorage5)

setInterval(function() {
    $("#currentDay").text(moment().format("dddd, MMMM Do [at ] hh:mm:ss a"))    
}, 1000);

saveBtn9.on("click", function (){
    
        element = textArea9.val();
        console.log("text area 9 ", element);
        localStorage.setItem("nineA", element);
      })
    
saveBtn10.on("click", function (){
    
        element = textArea10.val();
        console.log("text area 10 ", element);
        localStorage.setItem("tenA", element);
    
    })
    
saveBtn11.on("click", function (){
    
        element = textArea11.val();
        console.log("text area 11 ", element);
        localStorage.setItem("elevenA", element);
    
    })
saveBtn12.on("click", function (){
    
        element = textArea12.val();
        console.log("text area 12 ", element);
        localStorage.setItem("twelveP", element);
    
    })
saveBtn1.on("click", function (){
    
        element = textArea1.val();
        console.log("text area 1 ", element);
        localStorage.setItem("oneP", element);
    
    })
    
saveBtn2.on("click", function (){
    
        element = textArea2.val();
        console.log("text area 2 ", element);
        localStorage.setItem("twoP", element);
    
    })
saveBtn3.on("click", function (){
    
        element = textArea3.val();
        console.log("text area 3 ", element);
        localStorage.setItem("threeP", element);
    
    })
    
saveBtn4.on("click", function (){
    
        element = textArea4.val();
        console.log("text area 4 ", element);
        localStorage.setItem("fourP", element);
    
    })
saveBtn5.on("click", function (){
    
        element = textArea5.val();
        console.log("text area 5 ", element);
        localStorage.setItem("fiveP", element);
    
    })
    

    
    
function displayTime () {
        console.log(currentTime);
    if (currentTime === 9) {
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
    if (currentTime === 10) {
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
    if (currentTime === 11) {
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
    if (currentTime === 12) {
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
    if (currentTime === 13) {
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
    if (currentTime === 14) {
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
    if (currentTime === 15) {
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
    if (currentTime === 16) {
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
    if (currentTime === 17) {
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
    if (currentTime >= 18 || currentTime <= 8) {
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
    // if ((!currentTime === "9") || (!currentTime === "10") || (!currentTime === "11") || (!currentTime === "12") || (!currentTime === "13") || (!currentTime === "14") || (!currentTime === "15") || (!currentTime === "16") || (!currentTime === "17")) {
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
        
        
$(document).ready(function () {

    // If Random Number exceeds Total Number, it should register a Loss and generate a new random number.

    // Computer produces a random number between 19 - 120
    // var randNum = Math.floor(Math.random() * (120 - 19) + 1 + 19)
    // $("#randomNumber").text(randNum)
    
    var car1 = 0

    // tally of scores
    var wins = 0
    var loss = 0
    var randNum = 0
    var totalNum = 0
    
    // Each car produces a random number between 1 - 12
    // var car1 = Math.floor(Math.random() * 20)
    // $("#modelS").append(car1)
    // var car2 = Math.floor(Math.random() * 20)
    // $("#modelX").append(car2)
    // var car3 = Math.floor(Math.random() * 20)
    // $("#roadster").append(car3)
    // var car4 = Math.floor(Math.random() * 20)
    // $("#model3").append(car4)
    
    // This computer random number will be displayed at Random Number card of the html
    function startGame() {
        var randNum = Math.floor(Math.random() * (120 - 19) + 1 + 19)
        $("#randomNumber").text(randNum)
        
        var car1 = Math.floor(Math.random() * 20)
        $("#modelS").append(car1)
        var car2 = Math.floor(Math.random() * 20)
        $("#modelX").append(car2)
        var car3 = Math.floor(Math.random() * 20)
        $("#roadster").append(car3)
        var car4 = Math.floor(Math.random() * 20)
        $("#model3").append(car4)
       
        // var car1 = Math.floor(Math.random() * 20)
        // var car2 = Math.floor(Math.random() * 20)
        // var car3 = Math.floor(Math.random() * 20)
        // var car4 = Math.floor(Math.random() * 20)
        
        // assign the random number for each car image
        
        totalNum = 0
    }
    startGame()
    
    // upon click it should retrieve the number assigned at the start of the game and populate the 
    // total number in the total number card of the html.
    
    $("#modelS").on("click", function () {
        totalNum += car1
        $("#totalCarNum").text(totalNum)
        console.log(car1)
        
        // If Random Number matches with Total Number, it should register a Win and generate a new random number.
        if (randNum === totalNum) {
            wins++
            $("#numberOfWins").text(wins)
            startGame()
        }
        
        else if (totalNum > randNum) {
            loss++
            $("#numberOfLoss").text(loss)
            startGame()
            console.log("TotalNum: " + totalNum)
            console.log("RandNum: " + randNum)
            console.log(startGame())
        }
    })
    // $("#modelX").on("click", function () {
    //     totalNum += car2
    //     $("#totalCarNum").text(totalNum)
    // })
    // $("#roadster").on("click", function () {
    //     totalNum += car3
    //     $("#totalCarNum").text(totalNum)
    // })
    // $("#model3").on("click", function () {
    //     totalNum += car4
    //     $("#totalCarNum").text(totalNum)
    // })


})


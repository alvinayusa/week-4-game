$(document).ready(function () {

    // Computer produces a random number between 19 - 120
    // This computer random number will be displayed at Random Number card
    // Each car produces a random number between 1 - 12
    // Each car's number will be added together
    // The total number will be added at Your Total Number card
    // If Random Number matches with Total Number, it should register a Win and generate a new random number.
    // If Random Number exceeds Total Number, it should register a Loss and generate a new random number.

    var randNum = Math.floor(Math.random() * (120 - 19) + 1 + 19)
    var wins = 0
    var loss = 0
    var totalNum = 0
    var myCars = $(".img-thumbnail")



    $(".img-thumbnail").on("click", function () {
            myCars = Math.floor(Math.random() * 20)
            console.log(myCars)
        })


})
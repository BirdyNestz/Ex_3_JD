// JavaScript Document
console.log("oki")

$("#sum").on("click", function(){
    console.log("clicked on box 1")
    $("#sum").html("<h2>Sunny Days!</h2>")
    $("#sum").css("background-image", "url(video/animations.gif)")
    $("#sum").css("background-size", "cover")
})

$("#fal").on("click", function(){
    console.log("clicked on box 2")
    $("#fal").html("<h2>Autumm Days!</h2>")
    $("#fal").css("background-image", "url(video/animations_fall.gif)")
    $("#fal").css("background-size", "cover")
})

$("#win").on("click", function(){
    console.log("clicked on box 3")
    $("#win").html("<h2>Frezzing Days!</h2>")
    $("#win").css("background-image", "url(video/animations_winter.gif)")
    $("#win").css("background-size", "cover")
})

$("#re").on("click", function(){
    console.log("clicked on box 4")
    $("#re").html("<h2>Between Seasons!</h2>")
    $("#re").css("background-image", "url(video/animations_readingWeek.gif)")
    $("#re").css("background-size", "cover")
})

$("#sp").on("click", function(){
    console.log("clicked on box 4")
    $("#sp").html("<h2>Rainy Days!</h2>")
    $("#sp").css("background-image", "url(video/animations_spring.gif)")
    $("#sp").css("background-size", "cover")
})
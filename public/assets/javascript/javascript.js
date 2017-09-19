$("#about-btn").click(function() {
    $('html,body').animate({
        scrollTop: $("#about-section").offset().top},
        'slow');
});

$("#portfolio-btn").click(function() {
    $('html,body').animate({
        scrollTop: $("#portfolio-section").offset().top},
        'slow');
});

$("#contact-btn").click(function() {
    $('html,body').animate({
        scrollTop: $("#contact-section").offset().top},
        'slow');
});

var projects = ["Hungry Lone Wolf", "Restawant", "RouteMe", "Fashion Scraper", "NYT React", "Bamazon", "Liri Bot", "Crystal Collector", "Eat Da Burger", "Friend Finder", "Node Flashcard", "Train Scheduler", "Giphy Gifs", "Hollywood Trivia", "Avengers Hangman"]


for (var i = 0; i < projects.length; i++) {
	var formatted = projects[i].replace(/\s/g, '').toLowerCase()
	$("#portfolio-content").append("<div class='col-lg-4 project-panel text-center'><img  class='project-icon' src='assets/images/"+projects[i]+".png'><p>"+projects[i]+"</p><button class='learn-btn'><a href=/"+formatted+">Learn More</a></button></div>")
}
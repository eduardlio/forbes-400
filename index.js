$(document).ready(function () {
    var people = [];
    var currentPerson;
    var max;
    $.get("people.json", function (data) {
        data.people.forEach((person, i)=>{
            people.push(person);
        });
        max = people.length;
        showRandomRichPerson();
    })
    $("#random").on("click", ()=>{
        showRandomRichPerson();
    })
    function showRandomRichPerson(){
        var random = Math.floor(Math.random()*max);
        currentPerson = people[random];
        $("#person").html(currentPerson.name);
        $("#worth").html(currentPerson.net.toLowerCase());
        $("#score").html(currentPerson.score);
        $("#source").html(currentPerson.source);
        $("#age").html(currentPerson.age);
        var education = 
        currentPerson.education.length > 0
        ? currentPerson.education
        : "N/A";
        $("#education").html(education);
        var description = 
        currentPerson.description.length > 0
        ? currentPerson.description
        : "N/A";
        $("#desc").html(description);
    }
})

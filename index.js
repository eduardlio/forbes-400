$(document).ready(function () {
   var people = [];
   var currentPerson;
   var max;
   var index = 0;
   $.get("people.json", function (data) {
      data.people.forEach((person, i)=>{
         people.push(person);
      });
      max = people.length;
      showRandomPerson();
   })
   $("#random").on("click", ()=>{
      showRandomPerson();
   })
   $("#prev").on("click", ()=>{
      showPrevPerson();
   });
   $("#next").on("click", ()=>{
      showNextPerson();
   });
   function logIndex(){
      console.log(index);
   }
   function showNextPerson(){
      index = index >= max 
         ? 0 
         : index+1;
      currentPerson = people[index];
      showPerson();
   }
   function showPrevPerson(){
      index = index < 0 
         ? max-1 
         : index-1;
      currentPerson = people[index];
      showPerson();
   } 
   function showRandomPerson(){
      var random = Math.floor(Math.random()*max);
      index = random;
      currentPerson = people[index];
      showPerson();
   }
   function showPerson(){
      $("#wrap").attr("id", index);
      $("#person").html(currentPerson.name);
      $("#worth").html(currentPerson.net.toLowerCase());
      $("#score").html(currentPerson.score);
      $("#source").html(currentPerson.source);
      $("#age").html(currentPerson.age);
      var education = currentPerson.education.length || !currenPerson.education > 0
         ? currentPerson.education
         : "N/A";
      $("#education").html(education);

      var description = currentPerson.description.length > 0
         ? currentPerson.description
         : "N/A";
      $("#desc").html(description);
   }
})

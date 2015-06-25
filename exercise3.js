var securityQuestions = [{question:"What's your favorite show?", expectedAnswer: "Empire"}, 
                           {question:"What's your favorite food?", expectedAnswer:"Burgers"}, 
                           {question:"What do you like to do?", expectedAnswer: "Watch anime"}]; 
for(var i = 0; i < securityQuestions.length; i++){
    var thisAnswer = prompt(securityQuestions[i].question);
if(thisAnswer !== securityQuestions[i].expectedAnswer){
    alert("Wrong answer");
    break;
}

}
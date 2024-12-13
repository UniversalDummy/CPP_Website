
let queryParams = new URLSearchParams(window.location.search);
let LessonType = queryParams.get('LessonType');
let LessonNumber = queryParams.get('LessonNumber');

let NumberSel
let TypeSel
let LessonTitle = document.getElementById("LessonTitle")
let TabTitle = document.getElementById("title");



switch(LessonType) {
    case "A":
        console.log("Lesson set to COUT")
        TypeSel = document.getElementById("CoutCarousel")

        TypeSel.classList.add("active")

        LessonTitle.innerText = "Printing To Console"

        
        
        switch(LessonNumber) {
            case "1":
                console.log("COUT: 1");

                NumberSel = document.getElementById("1");
                TabTitle.innerText += "Introduction to Cout";

                NumberSel.classList.add("active")

                

                break
            
            case "2":
                console.log("COUT: 2");

                NumberSel = document.getElementById("2");

                TabTitle.innerText += "Using Cout"

                NumberSel.classList.add("active")

                

                break

            case "3":
                console.log("COUT: 3");

                NumberSel = document.getElementById("3");

                NumberSel.classList.add("active")

                

                break
            
        }


        break
}




function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}


function cookLesson(lesson) {
    
    let completeLessons = getCookie("lessonsComplete");

    completeLessons += lesson += ",";

    x = document.cookie = `lessonsComplete=${completeLessons}; expires Sun, 15 Dec 2024 12:00:00 UTC path=/Demo.html`;

}

function check(answer, problem) {
  let answerBox = document.getElementById(answer);

  console.log(answerBox)

  switch (answer) {
    case "inputField0":

      let htag = document.getElementById("result_h")
      let ptag = document.getElementById("result_p")


      if (CutSpaces(answerBox.value) == "std::cout<<\"Hello World!\";") {
        
        htag.classList.remove("text-danger")
        htag.classList.add("text-success")
        htag.innerText = "Great Job!"
        

        ptag.innerText = 'You included the std:: namespace, along with the cout object and insertion operator.\nYour text that you chose to output was "Hello World!"\nKeep up the good work!'
      }
      else {
        htag.classList.remove("text-success")
        htag.classList.add("text-danger")
        htag.innerText = "Uh Oh..."

        ptag.innerText = 'Did you include the correct namespace?\nAre you using the cout object in your line of code?\nDid you use the insertion operator?\nAre you sure that you are trying to print "Hello World!"?\nCould you have forgotten your semicolon?'
      }
      break;
  }
  
}

function CutSpaces(string) {
  let outcome = "";
  let isntQuote = true

  console.log(string.length)

  for (var i = 0; i < string.length; i++) {
    if (string[i] == "\"") {
      if (isntQuote) {
        isntQuote = false
      }
      else {
        isntQuote = true
      }
    }
    
    if (isntQuote) {
      if (string[i] != " ") {
        outcome += string[i];
      }
    }
    else {
      outcome += string[i]
    }
  }

  console.log(outcome);
  return outcome;

}



console.log(CutSpaces("T H I S _ I S _ S E P A R A T E D _ B Y _ S P A C E S, \"A N D T H I S I S N T\""));

let queryParams = new URLSearchParams(window.location.search);
let LessonType = queryParams.get('LessonType');
let LessonNumber = queryParams.get('LessonNumber');


let attempts = 0;
const max_attempts = 2;
let NumberSel
let TypeSel
let LessonTitle = document.getElementById("LessonTitle")
let TabTitle = document.getElementById("title");
let SubmitButton;



switch(LessonType) {
    case "A":
        console.log("Lesson set to COUT")
        TypeSel = document.getElementById("CoutCarousel")

        TypeSel.classList.add("active")

        LessonTitle.innerText = "Printing To Console"

        
        
        switch(LessonNumber) {
            case "1":

                SubmitButton = document.getElementById("SubBtn1")

                ShowSubmitBtn(true)

                console.log("COUT: 1");

                NumberSel = document.getElementById("1");
                TabTitle.innerText += "Introduction to Cout";

                NumberSel.classList.add("active")

                

                break
            
            case "2":

                document.getElementById("showAnswerBtn2").style.display = "none"

                SubmitButton = document.getElementById("SubBtn2")
                document.getElementById("TU2").style.display = "none"

                ShowSubmitBtn(false);

                console.log("COUT: 2");

                NumberSel = document.getElementById("2");

                TabTitle.innerText += "Using Cout"

                NumberSel.classList.add("active")

                

                break

            case "3":

                document.getElementById("showAnswerBtn3").style.display = "none"

                SubmitButton = document.getElementById("SubBtn3")
                document.getElementById("TU3").style.display = "none"

                ShowSubmitBtn(false);

                console.log("COUT: 3");

                NumberSel = document.getElementById("3");

                TabTitle.innerText += "Debugging with cout"

                NumberSel.classList.add("active")

                

                break
            case "4":

                document.getElementById("showAnswerBtn4").style.display = "none"

                SubmitButton = document.getElementById("SubBtn4")
                document.getElementById("TU4").style.display = "none"

                ShowSubmitBtn(false);

                console.log("COUT: 4");

                NumberSel = document.getElementById("4");

                TabTitle.innerText += "couting multiple things"

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

    x = document.cookie = `lessonsComplete=${completeLessons}; expires Wed, 15 Dec 2027 12:00:00 UTC path=/Demo.html`;

}


function check(answer, problem) {
  let answerBox = document.getElementById(answer);
  let htag;
  let ptag
  let showAnswerBtn
  

  console.log(answerBox)

  switch (answer) {
    case "inputField2":

      htag = document.getElementById("result_h2")
      ptag = document.getElementById("result_p2")
      showAnswerBtn = document.getElementById("showAnswerBtn2")
      

      showAnswerBtn.style.display = "none"

      if (CutSpaces(answerBox.value) == "std::cout<<\"Hello World!\";") {
        
        answerBox.classList.remove("wrong");
        answerBox.classList.add("correct");

        document.getElementById("TU2").style.display = "inline"
        htag.classList.remove("text-danger")
        htag.classList.add("text-success")
        htag.innerText = "Great Job!"
        
        ptag.innerText = 'You included the std:: namespace, along with the cout object and insertion operator.\nYour text that you chose to output was "Hello World!"\nKeep up the good work!'
        

        ShowSubmitBtn(true);


      }
      else {
        
        console.log(attempts)
        attempts++;
        answerBox.classList.remove("correct");
        answerBox.classList.add("wrong");

        document.getElementById("TU2").style.display = "none"
        htag.classList.remove("text-success")
        htag.classList.add("text-danger")
        htag.innerText = "Uh Oh..."

        ptag.innerText = 'Did you include the correct namespace?\nAre you using the cout object in your line of code?\nDid you use the insertion operator?\nAre you sure that you are trying to print "Hello World!"?\nCould you have forgotten your semicolon?'
        
        if (attempts > max_attempts) {
          showAnswerBtn.style.display = "inline"
          
        }
      
      }
      break;

      case "inputField3":
        htag = document.getElementById("result_h3")
        ptag = document.getElementById("result_p3")
        showAnswerBtn = document.getElementById("showAnswerBtn3")
      

      showAnswerBtn.style.display = "none"

      if (CutSpaces(answerBox.value) == "std::cout<<score;") {
        
        answerBox.classList.remove("wrong");
        answerBox.classList.add("correct");

        document.getElementById("TU3").style.display = "inline"
        htag.classList.remove("text-danger")
        htag.classList.add("text-success")
        htag.innerText = "Great Job!"
        
        ptag.innerText = 'You included the std:: namespace, along with the cout object and insertion operator.\nYou chose output the contents of the score variable, which is 0.\nFantastic work!'
        

        ShowSubmitBtn(true);


      }
      else {
        
        console.log(attempts)
        attempts++;
        answerBox.classList.remove("correct");
        answerBox.classList.add("wrong");

        document.getElementById("TU3").style.display = "none"
        htag.classList.remove("text-success")
        htag.classList.add("text-danger")
        htag.innerText = "Uh Oh..."

        ptag.innerText = 'Did you include the correct namespace?\nAre you using the cout object in your line of code?\nDid you use the insertion operator?\nAre you sure that you are trying to print the correct thing?\nCould you have forgotten your semicolon?'
        
        if (attempts > max_attempts) {
          showAnswerBtn.style.display = "inline"
          
        }
      
      }
      break;

      case "inputField4":
        htag = document.getElementById("result_h4")
        ptag = document.getElementById("result_p4")
        showAnswerBtn = document.getElementById("showAnswerBtn4")
      

      showAnswerBtn.style.display = "none"

      if (CutSpaces(answerBox.value) == 'std::cout<<"Your score is "<<score;') {
        
        answerBox.classList.remove("wrong");
        answerBox.classList.add("correct");

        document.getElementById("TU4").style.display = "inline"
        htag.classList.remove("text-danger")
        htag.classList.add("text-success")
        htag.innerText = "Great Job!"
        
        ptag.innerText = 'You included the std:: namespace, along with the cout object and both insertion operators.\nYou concatenated "Your score is " with the score variable to print out "Your score is 0".\nSplended C++ skills!'
        

        ShowSubmitBtn(true);


      }
      else {
        
        console.log(attempts)
        attempts++;
        answerBox.classList.remove("correct");
        answerBox.classList.add("wrong");

        document.getElementById("TU4").style.display = "none"
        htag.classList.remove("text-success")
        htag.classList.add("text-danger")
        htag.innerText = "Uh Oh..."

        ptag.innerText = 'Did you include the correct namespace?\nAre you using the cout object in your line of code?\nDid you use multiple insertion operators to concatenate?\nAre you sure that you are trying to print the correct thing?\nCould you have forgotten your semicolon?\n*Notice*: there is a space after the "is" in "Your score is "!'
        
        if (attempts > max_attempts) {
          showAnswerBtn.style.display = "inline"
          
        }
      
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

function show(inputField, num) {
  let field = document.getElementById(inputField)

  switch (inputField) {
    case 'inputField2':
      field.value = 'std::cout<< "Hello World!";'
      check(inputField, num);
      break;

    case 'inputField3':
      field.value = 'std::cout<< score;'
      check(inputField, num);
      break;
    
      case 'inputField4':
      field.value = 'std::cout<< "Your score is " << score;'
      check(inputField, num);
      break;
  }
}

function ShowSubmitBtn(bool) {
  if (bool) {
    SubmitButton.style.display = "inline"
    console.log("showing")
  }
  else {
    SubmitButton.style.display = "none"
    console.log("Hiding")
  }
}
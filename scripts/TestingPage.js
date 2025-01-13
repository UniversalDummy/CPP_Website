let score = 0;
let NumofQuestions;

let testID = "EX";

let letters = "abcdefghijklmnopqrstuvwxyz".split("")

let queryParams = new URLSearchParams(window.location.search);
let TestNum = queryParams.get('Test');


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


function cookTest() {
    
    let completeLessons = getCookie("lessonsComplete");

    completeLessons += (testID + "_" + Math.floor(score/NumofQuestions * 100) + ",");

    x = document.cookie = `lessonsComplete=${completeLessons}; expires Wed, 15 Dec 2027 12:00:00 UTC path=/Demo.html`;

    window.location.href = "Tests.html"

}

switch (TestNum) {
    case 'A':
        document.getElementById('A').classList.add("active")
        document.getElementById('title').innerText += 'Cout Unit Test'
        testID += '1'
        NumofQuestions = 12
}

function select(ident, correct, options = 2,) {

    let test;
    let question;
    let answer;
    
    let elm = document.getElementById(ident)

    ident += '-'

    let dash = 0;
    let breaker = "";
    for (let i = 0; i < ident.length; i++) {
        if (ident[i] != '-') {
            breaker += ident[i]
        }
        else if (++dash == 1) {
            test = breaker
            breaker = ""
        }
        else if (dash == 2) {
            question = breaker
            breaker = ""
        }
        else if (dash == 3) {
            answer = breaker
            breaker = ""
        }
    }

    if (answer == correct) {
        elm.classList.add(/*"bg-primary",*/ "text-success")
        elm.innerText += "✅"
        score += 1
    }
    else {
        elm.classList.add(/*"bg-danger",*/ "text-danger", "strike")
        document.getElementById(test + '-' + question + '-' + correct).classList.add(/*"bg-primary",*/ "text-success")
        document.getElementById(test + '-' + question + '-' + correct).innerText += "✅"
    }

    for (i = 0; i < options; i++) {
        document.getElementById(test + '-' + question + '-' + letters[i]).classList.add("disabled")
    }
    

    refresh_score()

}


function refresh_score() {
    let p = document.getElementById("scorePrint")
    p.innerText = Math.floor((score/NumofQuestions) * 100) + '%'
    if (Math.floor((score/NumofQuestions) * 100) >= 75) {
        p.classList.add("text-success")
        p.classList.remove("text-danger")
    }
    else {
        p.classList.add("text-danger")
        p.classList.remove("text-success")
    }
}
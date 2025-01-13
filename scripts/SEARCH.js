//Small Database of Keywords
let index = [
    "versatile", "versatility", "efficient", "cpp", "games", "game", "efficiency", "oop", "object", 
    "oriented", "program", "programming", "code", "home", "minecraft", "counter", "strike", "fallout", "Call",
    "of", "duty", "zombies", "cod"
]

let about = [
    "bjarne", "stroustrup", "creator", "developer", "develop", "create", "created", "game", "games", "scientific",
    "computing", "computer", "embedded", "system", "system", "database", "driver", "drivers", "cpp", "c",
    "program", "programming", "about", "world", "impact", "oop", "object", "oriented", "polymorphism", "class", "pointer",
    "method", "attribute", "encapsulation", "encapsulate", "inherit", "inheritance", "abstraction", "abstract", "learn",
    "library", "libraries", "made", "make", "what"
]

let demo = [
    "learn", "interactive", "interact", "learning", "fun", "create", "cpp", "cout", "cin", "user", "input", "output",
    "data", "types", "type", "practice", "course", "demo", "courses", "demonstration", "lesson", "lessons", "sample", 
    "samples", "download", "content", "run", "exe", "windows", "files", "try", "out"
]

let test = [
    "test", "knowledge", "quiz", "know", "tests", "testing", "quiz", "quizzes", "unit",
    //CONTENT FROM DEMO INCLUDED
    "learn", "interactive", "interact", "learning", "fun", "create", "cpp", "cout", "cin", "user", "input", "output",
    "data", "types", "type", "practice", "course", "demo", "courses", "demonstration", "lesson", "lessons"
]

let EASTEREGG = [
    "0evil_cpp1"
]

//Actaul processes
let queryParams = new URLSearchParams(window.location.search);
let entry = queryParams.get("Search")

document.getElementById("search").innerText = "\"" + entry + "\"";

entry += " ";
let break_entry = [];

let i;

let breaker = "";
for (i = 0; i < entry.length; i++) {
    if (entry[i] != ' ') {
        breaker += entry[i]
    }
    else {
        console.log(breaker)
        break_entry.push(breaker.toLowerCase())
        breaker = "";
    }
}

console.log(break_entry)

let res = []

for (i = 0; i < break_entry.length; i++) {
    for (let a = 0; a < index.length; a++) {
        if (break_entry[i] == index[a]) {
            res.push("index-Home-" + index[a] + "-")
        }
    }
    for (a = 0; a < about.length; a++) {
        if (break_entry[i] == about[a]) {
            res.push("AboutCpp-About C++-" + about[a] + "-")
            
        }
    }
    for (a = 0; a < demo.length; a++) {
        if (break_entry[i] == demo[a]) {
            res.push("Demo-Demo-" + demo[a] + "-")
        }
    }
    for (a = 0; a < test.length; a++) {
        if (break_entry[i] == test[a]) {
            res.push("Tests-Tests-" + test[a] + "-")
        }
    }
    for (a = 0; a < EASTEREGG.length; a++) {
        if (break_entry[i] == EASTEREGG[a]) {
            res.push("EasterEgg-What if instead of C++, it was evil C++?-SECERATECODE(" + EASTEREGG[a] + ")-")
        }
    }
}

console.log(res)


for (i = 0; i < res.length; i++) {
    breaker = ""
    let loco;
    let display;
    let word;

    let dashes = 0;
    for (a = 0; a < res[i].length; a++) {
        if (res[i][a] != '-') {
            breaker += res[i][a]
            console.log(breaker)
        }
        else {
            if (++dashes == 1) {
                loco = breaker
            }
            else if (dashes == 2) {
                display = breaker;
            }
            else if (dashes == 3) {
                word = breaker;
            }
            breaker = ""
        }
    }

    let newElemn = document.createElement("li")

    newElemn.id = i

    newElemn.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-start")

    document.getElementById("result").appendChild(newElemn)

    newElemn = document.createElement("div")

    newElemn.id = i + "-inner"

    newElemn.classList.add("ms-2", "me-auto")

    document.getElementById(i).appendChild(newElemn)

    //LALA
    newElemn = document.createElement("a")
    
    newElemn.href = loco + ".html"

    newElemn.id = i + "-button"

    document.getElementById(i).appendChild(newElemn)

    newElemn = document.createElement("button")

    newElemn.innerText = "Go to this page"

    newElemn.classList.add("btn", "btn-primary")

    document.getElementById(i + "-button").appendChild(newElemn)
    //LALA

    newElemn = document.createElement("div")

    newElemn.innerText = display

    newElemn.classList.add("fw-bold")

    document.getElementById(i+ "-inner").appendChild(newElemn)
    
    newElemn = document.createElement("p")

    newElemn.classList.add("text-secondary")

    console.log(word)
    newElemn.innerText = "Based on your entered word: " + word;

    document.getElementById(i+ "-inner").appendChild(newElemn)
    
}


if (i == 0) {
    document.getElementById("contentSpace").classList.add("text-center")

    newElemn = document.createElement("h1")

    newElemn.innerText = 'No results were found for what you searched'

    document.getElementById("contentSpace").appendChild(newElemn)

    newElemn = document.createElement("h5")

    newElemn.innerText = 'Try searching demos, information about C++, tests, and more from this website.'

    document.getElementById("contentSpace").appendChild(newElemn)


    for (a = 0; a < 4; a++) {
        newElemn = document.createElement("br")

        document.getElementById("contentSpace").appendChild(newElemn)
    }
    
}

document.getElementById("count").innerText = i;
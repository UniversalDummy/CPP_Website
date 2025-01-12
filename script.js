let TotalSources = 7

let alphabet = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q',
  'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ', '+', '_', '0', '1', '2', '3', '4', '5',
  '6', '7', '8', '9'
]

let x = document.cookie = ""

if (document.cookie == undefined) {
  console.log("true")
  document.cookie = `lessonsComplete=; expires Wed, 15 Dec 2027 12:00:00 UTC path=/Demo.html`
}


let coutIntro = document.getElementById("IntroToCout");

function OpenToLessons(type, number) {
    let url = 'LessonPage.html?LessonType=' + type + '&LessonNumber=' + number;
    window.location.href = url;

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

function checkCookie() {
    let completeLessons = getCookie("lessonsComplete");

    let highlight = [];

    let lesson = "";
    for (let i = 0; i < completeLessons.length; i++)  {
        if (completeLessons[i] != ",") {
          lesson += completeLessons[i]
          console.log(lesson)
        }
        else {
          highlight.push(lesson);
          lesson = ""
        }
    }
    console.log(highlight);

    for (let i = 0; i < highlight.length; i++) {
      document.getElementById(highlight[i]).classList.add("bg-success", "text-light")
    }
    
    

}

function clear_cooks() {
  var x;
  if (confirm("Are you sure you would like to reset your lessons?")) {
      x = true;
  } else {
      x = false;
  }

  if (x) {
    document.cookie = "lessonsComplete=;";
    location.reload(true);
  }
  
}

function Show_cooks() {
  alert(document.cookie)
}


checkCookie();

function searchDoc() {
 let entry = document.getElementById("srch").value;

 let format = ""
  for (i = 0; i < entry.length; i++) {
    for (let a = 0; a < alphabet.length; a++) {
      if (entry[i].toLowerCase() == alphabet[a]) {
        if (entry[i] != '+') {
          format += entry[i]
        }
        else {
          format += 'p'
        }
      }
    }
  }

 window.location.href = "Results.html?Search=" + format;
}

function srcHighlight(src) {
  for (i = 0; i < TotalSources; i++) {
    document.getElementById("src" + (i + 1)).classList.remove("bg-info")
  }

  document.getElementById("src" + src).classList.add("bg-info")
}
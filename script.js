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
  if (confirm("Are you sure you would like to reset your lessons?") == true) {
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

let coutIntro = document.getElementById("IntroToCout");

function OpenToLessons(type, number) {
    let url = 'LessonPage.html?LessonType=' + type + '&LessonNumber=' + number;
    window.location.href = url;

}
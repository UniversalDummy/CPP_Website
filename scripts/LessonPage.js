
let queryParams = new URLSearchParams(window.location.search);
let LessonType = queryParams.get('LessonType');
let LessonNumber = queryParams.get('LessonNumber');

let NumberSel
let TypeSel
let LessonTitle = document.getElementById("LessonTitle")



switch(LessonType) {
    case "cout":
        console.log("Lesson set to COUT")
        TypeSel = document.getElementById("CoutCarousel")

        TypeSel.classList.add("active")

        LessonTitle.innerText = "Printing To Console"

        
        
        switch(LessonNumber) {
            case "1":
                console.log("COUT: 1");

                NumberSel = document.getElementById("1");

                NumberSel.classList.add("active")

                

                break
            
            case "2":
                console.log("COUT: 2");

                NumberSel = document.getElementById("2");

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


function typeEffect(elementId, text, speed=100) {
    let index = 0;

    function type(){
        if (index < text.length) {
            document.getElementById(elementId).innerHTML += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }
    type();
}

window.onload = function () {
    if (document.getElementById("Name")) {
        typeEffect("Name", "I'm Osa Idahor", 100);
    }

    if (document.getElementById("Projects")) {
        typeEffect("Projects", "My Projects", 100);
    }

        if (document.getElementById("AboutMe")) {
        typeEffect("AboutMe", "About Me", 100);
    }
};


document.getElementById("download-resume").addEventListener("click", function() {
    window.open("static/docs/Osa_Idahor_Resume.pdf", "_blank");
});

    


window.onload = function main()
{
    console.log("window loaded.");
    const MENU_BUTTON = document.getElementById("menu-button");
    const HOME_BUTTON = document.getElementById("home-button");
    const HIDDEN_MENU = document.getElementById("hidden-lateral-menu");
    const BUTTONS = document.getElementsByClassName("pulsanteTestuale")
    HIDDEN_MENU.style.opacity = 0;
    HIDDEN_MENU.style.left = "100vw";
    let menuAngle = 0;
    document.getElementById("introduzione").onclick = function introduzioneOnClick() {
        if (document.getElementById("introduzione").style.cursor === "pointer") {
            window.location.href = "/"
        }
    }
    document.getElementById("inquinamento").onclick = function inquinamentoOnClick() {
        if (document.getElementById("inquinamento").style.cursor === "pointer") {
            window.location.href = "/inquinamento"
        }
    }
    document.getElementById("sostanze_inquinanti").onclick = function sostanzeOnClick() {
        if (document.getElementById("sostanze_inquinanti").style.cursor === "pointer") {
            window.location.href = "/sostanze_inquinanti"
        }
    }
    document.getElementById("effetti").onclick = function effettiOnClick() {
        if (document.getElementById("effetti").style.cursor === "pointer") {
            window.location.href = "/effetti"
        }
    }
    document.getElementById("sitorafia").onclick = function sitografiaOnClick() {
        if (document.getElementById("sitorafia").style.cursor === "pointer") {
            window.location.href = "/sitografia"
        }
    }
    Array.from(BUTTONS).forEach(function(element) {
        element.style.cursor = "default"
    })
    MENU_BUTTON.onclick = function menuButtonOnClick() {
        if (menuAngle == 0) {
            menuAngle = 90;
            MENU_BUTTON.style.rotate = "90deg";
            HIDDEN_MENU.style.opacity = 1;
            HIDDEN_MENU.style.left = "0";
            Array.from(BUTTONS).forEach(function(element) {
                element.style.cursor = "pointer"
            })
        } else {
            menuAngle = 0;
            MENU_BUTTON.style.rotate = "0deg";
            HIDDEN_MENU.style.opacity = 0;
            HIDDEN_MENU.style.left = "100vw";
            Array.from(BUTTONS).forEach(function(element) {
                element.style.cursor = "default"
            })
        }
    }

}
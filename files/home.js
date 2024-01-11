window.onload = function main() 
{
    console.log("window loaded.");
    const MENU_BUTTON = document.getElementById("menu-button");
    const HOME_BUTTON = document.getElementById("home-button");
    const HIDDEN_MENU = document.getElementById("hidden-lateral-menu");
    HIDDEN_MENU.style.opacity = 0;
    HIDDEN_MENU.style.left = "100vw";
    let menuAngle = 0;
    MENU_BUTTON.onclick = function menuButtonOnClick() {
        if (menuAngle == 0) {
            menuAngle = 90;
            MENU_BUTTON.style.rotate = "90deg";
            HIDDEN_MENU.style.opacity = 1;
            HIDDEN_MENU.style.left = "0";
        } else {
            menuAngle = 0;
            MENU_BUTTON.style.rotate = "0deg";
            HIDDEN_MENU.style.opacity = 0;
            HIDDEN_MENU.style.left = "100vw";
        }
    }
    HOME_BUTTON.onclick = function goBackHome() {
        window.location.href = "/"
    }
}
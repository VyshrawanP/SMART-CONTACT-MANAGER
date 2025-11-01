console.log("script loaded");

let currentTheme=getTheme();
console.log(currentTheme);
changeTheme();
document.getElementById("theme_change_button").addEventListener("click", () => {
  currentTheme = currentTheme === "dark" ? "light" : "dark";
  setTheme(currentTheme);
  changeTheme();
});

function changeTheme(){
        const html = document.querySelector("html");
    html.classList.remove("light", "dark");
    html.classList.add(currentTheme);



}

//get theme 
function getTheme(){
    let theme=localStorage.getItem("theme")
    return theme ? theme :"light";
}

//set theme
function setTheme(theme){
    localStorage.setItem("theme",theme);
}

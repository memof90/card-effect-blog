const buttonTheme = document.getElementById("dark");

buttonTheme.addEventListener('click', changeThemes);

function changeThemes() {
    let element = document.body;
    console.log(element);
    const change = element.classList.toggle("dark");
    changeBody()
    if (change) {
        buttonTheme.innerHTML = "<i class='fa fa-sun-o'></i>"
    } else {
        buttonTheme.innerHTML =  "<i class='fa fa-moon-o'></i>"
    }
}

function changeBody(){
    const element = document.body;
    const change = element.classList.toggle("darken");
    
}
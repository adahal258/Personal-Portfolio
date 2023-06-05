const toggleButton = document.getElementsByClassName("toggle")[0]
const navmenu = document.getElementsByClassName("nav-menu")[0]

toggleButton.addEventListener('click',() => {
    navmenu.classList.toggle('active')
})
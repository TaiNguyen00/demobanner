/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

function dropDown() {
    document.querySelector('#myDrop').classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.navbar-items')) {
       let dropdowns = document.getElementsByClassName("dropdown-content");
       let i; 
        for (i = 0; i < dropdowns.length; i++) {
           let openDropdown = dropdowns[i];
            if(openDropdown.classList.toggle('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

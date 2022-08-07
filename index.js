const menuItems = document.querySelectorAll(".menu-item")


// Remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove("active")
    })
}

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        changeActiveItem()
        item.classList.add("active")
        if(item.id != "notifications"){
            document.querySelector(".notification-popup").style.display = "none"           
        }else{
            document.querySelector(".notification-popup").style.display = "block"
            document.querySelector(".notification-count").
            style.display = "none"
 
        }  
    })
})
const menuItems = document.querySelectorAll(".menu-item")

// MESSAGES
const messagesNotification = document.querySelector("#message-notifications")
const messages = document.querySelector(".messages")
const message = document.querySelectorAll(".message")
const messageSearch = document.querySelector("#message-search")

//THEME
const theme = document.querySelector("#theme")
const themeModal = document.querySelector(".customize-theme")

// ====================== SIDEBAR ======================
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

// menuItems.addEventListener("click", (e) => {
//     const isClosest = e.target.closest("notification-popup")
//         if (!isClosest && item.classList.contains("active")){
//             item.classList.remove("active")
//         }
// })

/* ====================== MESSAGES ======================*/
// search chat function
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase()
    message.forEach(user => {
        let name = user.querySelector("h5").textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            user.style.display = "flex"
        } else{
            user.style.display = "none"
        }
    })
}

// Search chat
messageSearch.addEventListener("keyup", searchMessage)

// Highlight messages card when messages menu item is clicked
 messagesNotification.addEventListener("click", () => {
     messages.style.boxShadow = "0 0 1rem var(--color-primary)"
     messagesNotification.querySelector(".notification-count").style.display = "none"
     setTimeout(() => {
         messages.style.boxShadow = "none"
     }, 2000)
 })

 // THEME DISPLAY CUSTOMIZATION

 //Oopens modal

 const openThemeModal = () => {
     themeModal.style.display = "grid"
 }

 theme.addEventListener("click", openThemeModal)

//  closes modal 
 const closeThemeModal = (e) => {
     if(e.target.classList.contains("customize-theme")){
         themeModal.style.display = "none"
     }
 }

 // close modal
themeModal.addEventListener("click", closeThemeModal)
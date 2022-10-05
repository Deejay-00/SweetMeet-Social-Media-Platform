const menuItems = document.querySelectorAll(".menu-item")

// MESSAGES
const messagesNotification = document.querySelector("#message-notifications")
const messages = document.querySelector(".messages")
const message = document.querySelectorAll(".message")
const messageSearch = document.querySelector("#message-search")

//THEME
const theme = document.querySelector("#theme")
const themeModal = document.querySelector(".customize-theme")
const fontSizes = document.querySelector(".choose-size span")
var root = document.querySelector(":root")
const colorPalette = document.querySelectorAll(".choose-color span")

//Notification
let closeNotification = document.querySelector("#notifications")


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
// const popupClose = (e) => {
//     if(e.target.classList.contains("notification-popup")){
//         closeNotification.style.display = "none"
//     } 
// }

// closeNotification.addEventListener("click", popupClose)

// closeNotification.addEventListener("click", (e) => {
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


// ================= FONT SIZE =================
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove("active")
    })
}
fontSizes.forEach(size => {
    size.addEventListener("click", () => {
        removeSizeSelector();
        let fontSize
        size.classList.toggle("active")

        if(size.classList.contains("font-size-1")){
            fontSize = "10px"
            root.style.setProperty("----sticky-top-left", "5.4rem")
            root.style.setProperty("----sticky-top-right", "5.4rem")
        } else if (size.classList.contains("font-size-2")){
            fontSize = "13px"
            root.style.setProperty("----sticky-top-left", "5.4rem")
            root.style.setProperty("----sticky-top-right", "-7rem")
        } else if (size.classList.contains("font-size-3")){
            fontSize = "16px"
            root.style.setProperty("----sticky-top-left", "-2rem")
            root.style.setProperty("----sticky-top-right", "-17rem")
        } else if (size.classList.contains("font-size-4")){
            fontSize = "19px"
            root.style.setProperty("----sticky-top-left", "-5rem")
            root.style.setProperty("----sticky-top-right", "-25rem")
        } else if (size.classList.contains("font-size-5")){
            fontSize = "22px"
            root.style.setProperty("----sticky-top-left", "-12rem")
            root.style.setProperty("----sticky-top-right", "-35rem")
        }
        //change font size of the root html element
    document.querySelector("html").style.fontSize = fontSize
    })
    
})

// change primary colors 
colorPalette.forEach(color => {
    color.addEventListener("click", () => {
        let primary
        
        if(color.classList.contains("color-1")){
            primaryHue = 252
        } else if(color.classList.contains("color-2")){
            primaryHue = 52
        } else if(color.classList.contains("color-3")){
            primaryHue = 352
        } else if(color.classList.contains("color-4")){
            primaryHue = 152
        } else if(color.classList.contains("color-5")){
            primaryHue = 202
        }
        
        root.style.setProperty("--primary-color-hue: 252", primaryHue)
    })
})
// const changeNavSize = () => {

//     let y = window.scrollY

//     if (y > 50) {
//         document.getElementById("nav-logo").style = "opacity:0"
//         document.getElementById("nav-logo-small").style = "opacity:1"
//         document.getElementById("logo").style = "height:10vh"
//     } else {
//         document.getElementById("nav-logo").style = "opacity:1"
//         document.getElementById("nav-logo-small").style = "opacity:0"
//         document.getElementById("logo").style = "height:20vh"
//     }
// }

const changeNavSize = () => {

    if (window.scrollY > window.innerHeight / 2) {
        document.getElementById("nav-logo-small").style = "opacity:1"
        document.getElementById("logo").style = "height:10vh"
        document.querySelector("nav").style = "height:fit-content"
        document.getElementById("BackToTopBTN").style = "opacity:1"
    } else {
        document.getElementById("nav-logo-small").style = "opacity:0"
        document.getElementById("logo").style = "height:0vh"
        document.querySelector("nav").style = "height:0vh"
        document.getElementById("BackToTopBTN").style = "opacity:0"

    }
}
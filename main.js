const changeNavSize = () => {
    document.getElementById("nav").innerHTML = 
        `<a class="nav-link" onClick="changeNavSize()">Home</a>
        <a class="nav-link">About</a>
        <img id="nav-logo" src="/images/LogoNoWords.png" />
        <a class="nav-link">Images</a>
        <a class="nav-link">Contact</a>`
    document.getElementById("nav-logo").style = "height:10vh"
}
let header = document.querySelector("header")


window.addEventListener("scroll", function () {
    if (this.scrollY > 0) {
        header.classList.add("active")
    } else {
        header.classList.remove("active")
    }
})


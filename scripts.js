let big = document.querySelector(".img_grande img")
let minis = document.querySelectorAll(".img_pequena img")

minis.forEach(item => {
    item.addEventListener("click", () => {
        big.src = item.src
    })
})
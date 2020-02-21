const modalOverlay = document.querySelector(".modal__overlay")

const cards = document.querySelectorAll(".card")

for (let card of cards){
    card.addEventListener("click", function() {
        const video__id = card.getAttribute("id")
        
        window.location.href = `/video?id=${video__id}`
    })
}


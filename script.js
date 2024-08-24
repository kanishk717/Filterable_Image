const filterbuttons = document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll(".filterable_cards .card");



 const filtercards = (event) =>{
    document.querySelector(".active").classList.remove("active")
    event.target.classList.add("active")

    filterableCards.forEach(card => {

        card.classList.add("hide")

        if(card.dataset.name === event.target.dataset.name || event.target.dataset.name === "all") {
            card.classList.remove("hide")
        }
    })

}

filterbuttons.forEach(button => button.addEventListener("click",filtercards));




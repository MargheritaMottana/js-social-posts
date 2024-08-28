const posts = [
    {
        "id": 1,
        "content": "Pioggerellina carina. 🌧 📖 🌧",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Erbettina secchina. 🌾 🌾 🌾",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Baguette e Tour Eiffel. 🇫🇷 🥖 🗼",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Leggere è un atto squisitamente passionale, è un caso di innamoramento mentale. 📚 🎧 ☕",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Work smarter, not harder. ( ◡̀_◡́)ᕤ",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

//dichiaro il contenitore per porterci scrivere dentro
const postContainer = document.getElementById('container');

// scorro tutto l'array
for (let i = 0; i < posts.length; i++) {
    console.log(posts[i])

    // scrivo all'interno del contenitore i post (+= serve per non sovrascrivere, quindi aggiunge tutti i post)

    // aggiunti i tag per prendere le informazioni dall'array
    postContainer.innerHTML += `
    <div class="post">
            <div class="post__header">
                <div class="post-meta">
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${posts[i].author.image}" alt="${posts[i].author.name}">
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${posts[i].author.name}</div>
                        <div class="post-meta__time">${posts[i].created}</div>
                    </div>
                </div>
            </div>
            <div class="post__text">${posts[i].content}</div>
            <div class="post__image">
                <img src="${posts[i].media}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="${posts[i].id}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-${posts[i].id}" class="js-likes-counter">${posts[i].likes}</b> persone
                    </div>
                </div>
            </div>
        </div> 
    `;
}

// dichiaro i bottoni su cui cliccare per aggiungere like
const myButtons = document.querySelectorAll('.js-like-button');
console.log(myButtons)

// creo un ciclo per leggere tutti i bottoni
for (let i = 0; i < myButtons.length; i++) {
    myButtons[i].addEventListener('click', function (event) {

        // in questo caso il prevent, previene che il click rimandi all'href associato al bottone.
        // in questo modo non mi riporta ad inizio pagina
        event.preventDefault()

        // stampo in console per verificare che sia cliccato
        console.log('click :3')

        // se nella lista delle classi NON (!) c'è cliccato, allora posso cliccare
        if (!this.classList.contains('like-button--liked')) {

            // aggiungo la classe colorata al bottone cliccato
            this.classList.add('like-button--liked')

            // dichiaro l'id del post
            // posso usare dataset perché gli attributi che iniziano con "data-" rientrano nel dataset
            const idPost = this.dataset.postid;

            // dichiaro il contatore per collegarlo all'id
            const counter = document.getElementById('like-counter-' + idPost);

            // dicharo i like che vengono aggiunti
            let likes = parseInt(counter.innerText);
            // incremento i like
            likes++
            // li riporto in pagina con l'incremento
            counter.innerHTML = likes
        }

    })
}
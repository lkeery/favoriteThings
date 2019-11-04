// this is a partially revealing module pattern - just a variation on what we've already done


const myVM = (() => {
    // get the user buttons and fire off an async DB query with Fetch
    let userButtons = document.querySelectorAll('.u-link');
    let lightbox = document.querySelector('.lightbox');

    function parseFavData(fav) { // person is the database result
        let targetDiv = document.querySelector('.lb-content'),
        targetImg = lightbox.querySelector('img');

        let favContent = `
            <p>${fav.description}</p>
        `;

        //console.log(favContent);

        targetDiv.innerHTML = favContent;
        targetImg.src = fav.imgsrc;

        lightbox.classList.add('show-lb');
    }

    function getFavData(event) {
        event.preventDefault(); // kill default anchor behavior, no more link
        //debugger;
        let imgSrc = this.previousElementSibling.getAttribute('src'); // find image closest to the anchor tag property

        let url = `/${this.getAttribute('href')}`;

        fetch(url) // get data
            .then(res => res.json()) // parse JSON result into plain obj
            .then(data => {
                //console.log('Database result is: ', data)

                data[0].imgsrc = imgSrc;

                parseFavData(data[0]);
            })
            .catch((err) => {
                console.log(err)
            });
    }

    userButtons.forEach(button => button.addEventListener('click', getFavData));

    lightbox.querySelector('.close').addEventListener('click', function() {
        lightbox.classList.remove('show-lb');
    })
})();
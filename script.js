
let Container = document.querySelector(".Real")
function real() {
    fetch('https://api.waifu.im/search/?included_tags=waifu')
        .then(function (response) {
            return response.json();
        })
        .then(function (Bitch) {
            let temperature = Bitch.images[0].url
            Container.innerHTML =
                `
            <img src="${temperature}" alt="">
        `
            console.log(temperature);

        })
        .catch(function (L) {
            console.error('Loser lmao')
            console.error(L)
        })
}

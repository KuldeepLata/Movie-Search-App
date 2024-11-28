const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=$";


const input = document.querySelector("#inp");
const parent = document.querySelector("#parent");


const GetMovies = async (url) => {
    const responce = await fetch(url)
    const data = await responce.json()

    showMovies(data.results)

}

GetMovies(APIURL)

const showMovies = (data) => {
          parent.innerHTML = ""
    data.forEach(
        function (data, index) {
            const box = document.createElement('div');
            box.classList.add("box")
            box.innerHTML = ` <img src="${IMGPATH + data.poster_path}" alt="">
            <div class="overlay">
                <div class="upper-title">
                    <h3>${data.title}</h3>
                    <span>${data.vote_average}</span>
                </div>
                <h3 style="margin-top: -5px;">OverView:</h3>
                <p>${data.overview}</p>
            </div>`
            parent.appendChild(box);
        }
    )
}




input.addEventListener(
    'keyup',

    (event) => {
        if (event.target.value != "") {
            GetMovies(SEARCHAPI + event.target.value);
        } else {
            GetMovies(APIURL)
        }
    }
)



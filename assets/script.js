async function renderMovie() {
    const response = await fetch("assets/api.json");
    let movieJSON = await response.json();

    let html = "";
    movieJSON.forEach((res) => {
        let htmlSegment = `<div class="card">
                            <div class="img-card">
                                <img class="img-card" src="${res.image}" width="200px" />
                            </div>
                            <div class="content-card">
                                <h1>${res.title}</h1>
                                <p>${res.desc}</p>
                                <a href="${res.link}" class="text-right text-decoration-none" target="_blank">Detail Website</a>
                            </div>
                        </div>`;

        html += htmlSegment;
    });

    let container = document.querySelector(".content");
    container.innerHTML = html;
}
renderMovie();
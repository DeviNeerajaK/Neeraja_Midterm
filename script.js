fetch("https://upadhayay.github.io/db.json")
.then(function (response) {
    return response.json();
})
.then(function (d) {
    let ph = document.querySelector(".blogs_container");
    let out = "";
    for (let i = 0; i < d.books.length; i++) {
        out += `
<div class="column">
<div class="card">
         <div class="blog_box">
            <h3>Title:${d.books[i].title}</h3>
            <p>published: ${d.books[i].published}</p>
            <p>year: ${d.books[i].year}</p>
            <a href="#bio" >Read More</a>
        </div>
</div>
</div>
                `;
    }
    ph.innerHTML = out;
});




  
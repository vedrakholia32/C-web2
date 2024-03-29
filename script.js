const parallax = document.getElementById("parallex");

window.addEventListener("scroll", function(){
    let offset = window.pageYOffset ;
    parallax.style.backgroundPositionY = offset * 0.7 + "px";
})

document.addEventListener('DOMContentLoaded', function () {
    const newsData = [
        { title: "Breaking news 1", url: "try.html" },
        { title: "Breaking news 2", url: "https://www.google.com" },
        { title: "Breaking news 3", url: "https://www.facebook.com" },
        { title: "Breaking news 4", url: "news4.html" },
        { title: "Breaking news 5", url: "news5.html" },
        { title: "Breaking news 6", url: "news6.html" },
        { title: "Breaking news 7", url: "news7.html" },
        { title: "Breaking news 8", url: "news8.html" },
        { title: "Breaking news 9", url: "news9.html" },
        { title: "Breaking news 10", url: "news10.html" }
    ];

    const newsContainer = document.getElementById('newsContainer');

    newsData.forEach((news, index) => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');
        newsItem.textContent = `${index + 1}. ${news.title}`;
        newsItem.setAttribute('data-url', news.url);
        newsContainer.appendChild(newsItem);

        newsItem.addEventListener('click', function () {
            const url = this.getAttribute('data-url');
            window.location.href = url;
        });
    });
});
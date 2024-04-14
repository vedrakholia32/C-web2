

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



// For dropdown menu in side bar
/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}
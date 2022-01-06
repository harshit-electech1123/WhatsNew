let apiKey = '9962c59ef51248c2b8704caf43faa428';
let source = 'bbc-news';
let newsAccordian = document.getElementById('newsAccordian');
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);
xhr.onload = function () {
    if (this.status == 200) {
        let json = JSON.parse(this.responseText);
        console.log(json);
        let articles = json.articles;
        console.log(articles);
        let newHTML = "";
        articles.forEach(function (element, index) {
            let news =
                ` <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne${index}">
                    <button class="accordion-button collapsed"
                        type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-collapse${index}"
                        aria-expanded="false"
                        aria-controls="flush-collapse${index}">
                        ${element["title"]}
                    </button>
                </h2>
                <div id="flush-collapse${index}"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-heading${index}"
                    data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body"><img src="${element['urlToImage']}" alt="aloo"><div style="padding:40px;">${element["description"]}.</div> </div>
                    <div><a href="${element['url']}">Read More...</a></div>
                </div>
            </div>`
            newHTML += news;
        });
        newsAccordian.innerHTML = newHTML;
    }
    else {
        console.log("some error occured");
    }
}
xhr.send();

const searchFrom = document.querySelector('.searchBar');
const input = document.querySelector('.input');
searchFrom.addEventListener('submit', retrieve)
function retrieve(e) {

    let topic = input.value;
    console.log(topic);
}

let formData = new FormData();
formData.append("type", "news")

let news = document.querySelector(".news")

fetch('/ajax.php', {
    method: 'POST',
    body: formData
})
    .then((response) => {
        return response.json()
    })
    .then((jsonArray) => {
        let tmp = '';

        jsonArray.forEach(item=>{
                tmp +=`
                 <div class="news-item">
                            <div class="news-header">
                                    <h3>${item.title}</h3>
                            </div>

                            <div class="news-body">
                                <p>${item.body}</p>
                            </div>
                            <div class="news-footer">
                                <a href="">More info</a>
                            </div>
                        </div>
                `
        })

        news.innerHTML = tmp;
    })


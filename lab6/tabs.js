let tabItems = document.querySelectorAll(".tabs .tab-body .tab-item")
let tabs = document.querySelector(".tabs .tab-header")

tabs.innerHTML = '';

let tabSwitch = function (arg, index) {
    let tabs = document.querySelectorAll(".tabs .tab-header .tab")
    tabs.forEach(tab => {
        tab.classList.remove("active")
    })
    arg.classList.add("active")

    let tabItems = document.querySelectorAll(".tabs .tab-body .tab-item")

    tabItems.forEach((tabItem, tabIndex) => {
        if (tabIndex !== index)
            tabItem.classList.remove("active")
        else
            tabItem.classList.add("active")
    })
}

tabItems.forEach((item, index) => {
    let isActive = item.classList.contains("active")
    tabs.innerHTML = tabs.innerHTML + `<div class="tab ${isActive ? 'active' : ''}" onclick="tabSwitch(this, ${index})"></div>`
})
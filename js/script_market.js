function init() {
let d = new Date()
    let m = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
    let c = document.getElementById("clock")
    c.innerText = m
    setInterval(function() {
        let d = new Date()
        let m = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
        c.innerText = m
    }, 1000);
}

$(document).ready(function() {
    $("a.go").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    })
})
function back() {
    location.href ="index.html"
}
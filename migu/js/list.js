
//  歌手资料
var btn1 = document.getElementsByClassName('btnmore')
var box1 = document.getElementsByClassName('c-newsbox')
var body = document.body
btn1[0].onclick = function (e) {
    box1[0].style.display = 'block'
    // 阻止冒泡，父级和子级有相同事件时执行子级的操作
    e.cancelBubble = true
}
box1[0].onclick = function (e) {
    e.cancelBubble = true
}
body.onclick = function () {
    box1[0].style.display = 'none'
}

// 全选
var checkbox1 = document.getElementsByClassName('checkbox')
var btnall = document.getElementsByClassName('btnall')
var btnplay = document.getElementById('playmusic')
btnall[0].onclick = function () {
    for (i = 0; i < checkbox1.length; i++) {
        checkbox1[i].checked = true
    }
    btnplay.style.background = '#e91e63'
    // if()
}
for (var i = 0; i < checkbox1.length; i++) {
    checkbox1[i].onclick = function () {
        for (var i = 0; i < checkbox1.length; i++) {
            if (checkbox1[i].checked) {
                btnplay.style.background = '#e91e63'
                break
            } else {
                btnplay.style.background = '#fff'
            }
        }
    }
}
// 列表
var num = document.getElementsByClassName('num')
var play = document.getElementsByClassName('play')
var tr = document.getElementsByClassName('row')

for (var i = 0; i < checkbox1.length; i++) {
    tr[i].setAttribute('index', i)
    tr[i].onmouseenter = function () {
        var t = this.getAttribute('index')
        tr[t].style.background = '#f8f8f8'
        num[t].style.opacity = '0'
        play[t].style.opacity = '1'
    }
    tr[i].onmouseleave = function () {
        var t = this.getAttribute('index')
        tr[t].style.background = '#fff'
        num[t].style.opacity = '1'
        play[t].style.opacity = '0'
    }
}
// 弹出搜索历史
var stext = document.getElementById('stext')
var history1 = document.getElementById('history')
var body = document.body
stext.onclick = function (e) {
    history1.style.opacity = '1'
    e.cancelBubble = true
}
history1.onclick = function (e) {
    e.cancelBubble = true
}
body.onclick = function () {
    history1.style.opacity = '0'
}

// 鼠标移入弹出隐藏框
var level1 = document.getElementsByClassName('level-1')
var btnup = document.getElementsByClassName('btnup')
var level2 = document.getElementsByClassName('level-2')

for (i = 0; i < btnup.length; i++) {
    level1[i].setAttribute('index', i)
    level1[i].onmouseenter = function () {
        var t = this.getAttribute('index')
        level2[t].style.display = 'block'
    }
    level1[i].onmouseleave = function () {
        var t = this.getAttribute('index')
        level2[t].style.display = 'none'
    }
}

// 淡入淡出部分
var findbox = document.getElementById('findbox').children
var musicname1 = document.getElementsByClassName('music-name')
var musictitle1 = document.getElementsByClassName('music-title')
var list = document.getElementById('listbox').children
var num = 0
var timer
function go() {
    timer = setInterval(function () {
        for (var i = 0; i < findbox.length; i++) {
            // 排他
            findbox[i].removeAttribute('class')
            list[i].removeAttribute('class')
            console.log(111)
        }
        findbox[num].setAttribute('class', 'findout')
        list[num].setAttribute('class', 'current')
        if (num == 0) {
            musicname1[0].innerHTML = '《哭泣的游戏》'
            musictitle1[0].innerHTML = '时代少年团最新单曲'
        }
        else if (num == 1) {
            musicname1[0].innerHTML = '错过'
            musictitle1[0].innerHTML = '陈楚生献声影视剧《第二次拥抱片尾曲》'
        }
        else if (num == 2) {
            musicname1[0].innerHTML = '七月何夕'
            musictitle1[0].innerHTML = '黄霄雲全新单曲'
        }
        else if (num == 3) {
            musicname1[0].innerHTML = '记得'
            musictitle1[0].innerHTML = '付箐全新单曲'
        }
        num++
        console.log(num)
        if (num == 4) {
            num = 0
        }
    }, 2000)
}
go()
//鼠标移入
for (var t = 0; t < list.length; t++) {
    list[t].setAttribute('index', t)
    list[t].onmouseenter = function () {
        clearInterval(timer)
        var num1 = this.getAttribute('index')
        console.log(num1)
        // 排他
        for (var i = 0; i < list.length; i++) {
            findbox[i].removeAttribute('class')
            list[i].removeAttribute('class')
        }
        findbox[num1].setAttribute('class', 'findout')
        list[num1].setAttribute('class', 'current')
        if (num1 == 0) {
            musicname1[0].innerHTML = '《哭泣的游戏》'
            musictitle1[0].innerHTML = '时代少年团最新单曲'
        }
        else if (num1 == 1) {
            musicname1[0].innerHTML = '错过'
            musictitle1[0].innerHTML = '陈楚生献声影视剧《第二次拥抱片尾曲》'
        }
        else if (num1 == 2) {
            musicname1[0].innerHTML = '七月何夕'
            musictitle1[0].innerHTML = '黄霄雲全新单曲'
        }
        else if (num1 == 3) {
            musicname1[0].innerHTML = '记得'
            musictitle1[0].innerHTML = '付箐全新单曲'
        }
    }
}
// 鼠标移出
for (var t = 0; t < list.length; t++) {
    list[t].onmouseleave = function () {
        go()
    }
}

// 登录弹出框
var login = document.getElementById('login')
var loginbox = document.getElementsByClassName('loginbox')
var close = document.getElementsByClassName('close')

login.onclick = function () {
    loginbox[0].style.display = 'block'
}
close[0].onclick = function () {
    loginbox[0].style.display = 'none'
}
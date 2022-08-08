var btn1 = document.getElementById('btnshow')
var text = document.getElementsByClassName('m-text')

btn1.onclick = function () {
    if (btn1.innerHTML == '展开') {
        text[0].style.maxHeight = '1500px'
        btn1.innerHTML = '收起'
    } else {
        text[0].style.maxHeight = '455px'
        btn1.innerHTML = '展开'
    }
}


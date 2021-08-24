window.onload = function(e) {
    var zhejiang = document.querySelectorAll('.zhejiang');
    var hangzhou = document.querySelectorAll('.hangzhou');
    var shang = document.querySelectorAll(".shang");
    var xia = document.querySelectorAll(".xia");
    var btn = document.querySelector('button');

    btn.addEventListener('click', function(e) {
        window.location = "part_one.html";
    })

    xia[0].addEventListener('click', function(e) {
        zhejiang[0].style.display = 'none';
        zhejiang[1].style.display = 'block';
        hangzhou[1].style.background = 'rgba(0, 153, 255, 0.4)';
        console.log(hangzhou.style.background);
    })

    shang[0].addEventListener('click', function(e) {
        zhejiang[1].style.display = 'none';
        zhejiang[0].style.display = 'block';
    })
    xia[1].addEventListener('click', function(e) {
        zhejiang[1].style.display = 'none';
        zhejiang[2].style.display = 'block';
        hangzhou[2].style.background = 'rgba(255, 204, 102, 0.4)';
        console.log(hangzhou.style.background);
    })

    shang[1].addEventListener('click', function(e) {
        zhejiang[2].style.display = 'none';
        zhejiang[1].style.display = 'block';
        hangzhou[1].style.background = 'rgba(0, 153, 255, 0.4)';
    })
    xia[2].addEventListener('click', function(e) {
        zhejiang[2].style.display = 'none';
        zhejiang[3].style.display = 'block';
        hangzhou[3].style.background = 'rgba(255, 102, 102, 0.4)';
        console.log(hangzhou.style.background);
    })

    shang[2].addEventListener('click', function(e) {
        zhejiang[3].style.display = 'none';
        zhejiang[2].style.display = 'block';
        hangzhou[2].style.background = 'rgba(255, 204, 102, 0.4)';
    })
    xia[3].addEventListener('click', function(e) {
        zhejiang[3].style.display = 'none';
        zhejiang[4].style.display = 'block';
        hangzhou[4].style.background = 'rgba(194, 128, 255, 0.4)';
        console.log(hangzhou.style.background);
    })

    shang[3].addEventListener('click', function(e) {
        zhejiang[4].style.display = 'none';
        zhejiang[3].style.display = 'block';
        hangzhou[3].style.background = 'rgba(255, 102, 102, 0.4)';
    })
    xia[4].addEventListener('click', function(e) {
        zhejiang[4].style.display = 'none';
        zhejiang[5].style.display = 'block';
        hangzhou[5].style.background = 'rgba(0, 191, 191, 0.4)';
        console.log(hangzhou.style.background);
    })

    shang[4].addEventListener('click', function(e) {
        zhejiang[5].style.display = 'none';
        zhejiang[4].style.display = 'block';
        hangzhou[4].style.background = 'rgba(194, 128, 255, 0.4)';
    })
}
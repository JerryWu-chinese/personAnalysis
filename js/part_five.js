window.onload = function(e) {
    var zhejiang = document.querySelectorAll('.zhejiang');
    var hangzhou = document.querySelectorAll('.hangzhou');
    var total = document.querySelectorAll('.total');
    var totall = document.querySelectorAll('.totall');
    var shang = document.querySelectorAll(".shang");
    var xia = document.querySelectorAll(".xia");
    var i = Number(sessionStorage.getItem('i'));
    var a = Number(sessionStorage.getItem('a'));
    var s = Number(sessionStorage.getItem('s'));
    var ee = Number(sessionStorage.getItem('ee'));
    var c = Number(sessionStorage.getItem('c'));
    var r = Number(sessionStorage.getItem('r'));
    var arr = [i, a, s, ee, c, r];
    console.log(typeof(i));

    total[0].addEventListener('click', function(e) {
        i += Number(e.target.innerHTML);
        var li = total[0].children;
        for(var i = 0; i < li.length; i++)
        {
            li[i].style.background = '#fff';
        }
        e.target.style.background = '#0079FE';
    })
    totall[0].addEventListener('click', function(e) {
        i += Number(e.target.innerHTML);
        var li = totall[0].children;
        for(var i = 0; i < li.length; i++)
        {
            li[i].style.background = '#fff';
        }
        e.target.style.background = '#0079FE';
    })
    xia[0].addEventListener('click', function(e) {
        zhejiang[0].style.display = 'none';
        zhejiang[1].style.display = 'block';
        hangzhou[1].style.background = 'rgba(0, 153, 255, 0.4)';
    })

    shang[0].addEventListener('click', function(e) {
        zhejiang[1].style.display = 'none';
        zhejiang[0].style.display = 'block';
    })
    total[1].addEventListener('click', function(e) {
        a += Number(e.target.innerHTML);
        var li = total[1].children;
        for(var i = 0; i < li.length; i++)
        {
            li[i].style.background = '#fff';
        }
        e.target.style.background = '#0079FE';
    })
    totall[1].addEventListener('click', function(e) {
        a += Number(e.target.innerHTML);
        var li = totall[1].children;
        for(var i = 0; i < li.length; i++)
        {
            li[i].style.background = '#fff';
        }
        e.target.style.background = '#0079FE';
    })
    xia[1].addEventListener('click', function(e) {
        zhejiang[1].style.display = 'none';
        zhejiang[2].style.display = 'block';
        hangzhou[2].style.background = 'rgba(255, 204, 102, 0.4)';
    })

    shang[1].addEventListener('click', function(e) {
        zhejiang[2].style.display = 'none';
        zhejiang[1].style.display = 'block';
        hangzhou[1].style.background = 'rgba(0, 153, 255, 0.4)';
    })
    total[2].addEventListener('click', function(e) {
        s += Number(e.target.innerHTML);
        var li = total[2].children;
        for(var i = 0; i < li.length; i++)
        {
            li[i].style.background = '#fff';
        }
        e.target.style.background = '#0079FE';
    })
    totall[2].addEventListener('click', function(e) {
        s += Number(e.target.innerHTML);
        var li = totall[2].children;
        for(var i = 0; i < li.length; i++)
        {
            li[i].style.background = '#fff';
        }
        e.target.style.background = '#0079FE';
    })
    xia[2].addEventListener('click', function(e) {
        zhejiang[2].style.display = 'none';
        zhejiang[3].style.display = 'block';
        hangzhou[3].style.background = 'rgba(255, 102, 102, 0.4)';
    })

    shang[2].addEventListener('click', function(e) {
        zhejiang[3].style.display = 'none';
        zhejiang[2].style.display = 'block';
        hangzhou[2].style.background = 'rgba(255, 204, 102, 0.4)';
    })
    total[3].addEventListener('click', function(e) {
        ee += Number(e.target.innerHTML);
        var li = total[3].children;
        for(var i = 0; i < li.length; i++)
        {
            li[i].style.background = '#fff';
        }
        e.target.style.background = '#0079FE';
    })
    totall[3].addEventListener('click', function(e) {
        ee += Number(e.target.innerHTML);
        var li = totall[3].children;
        for(var i = 0; i < li.length; i++)
        {
            li[i].style.background = '#fff';
        }
        e.target.style.background = '#0079FE';
    })
    xia[3].addEventListener('click', function(e) {
        zhejiang[3].style.display = 'none';
        zhejiang[4].style.display = 'block';
        hangzhou[4].style.background = 'rgba(194, 128, 255, 0.4)';
    })

    shang[3].addEventListener('click', function(e) {
        zhejiang[4].style.display = 'none';
        zhejiang[3].style.display = 'block';
        hangzhou[3].style.background = 'rgba(255, 102, 102, 0.4)';
    })
    total[4].addEventListener('click', function(e) {
        c += Number(e.target.innerHTML);
        var li = total[4].children;
        for(var i = 0; i < li.length; i++)
        {
            li[i].style.background = '#fff';
        }
        e.target.style.background = '#0079FE';
    })
    totall[4].addEventListener('click', function(e) {
        c += Number(e.target.innerHTML);
        var li = totall[4].children;
        for(var i = 0; i < li.length; i++)
        {
            li[i].style.background = '#fff';
        }
        e.target.style.background = '#0079FE';
    })
    xia[4].addEventListener('click', function(e) {
        zhejiang[4].style.display = 'none';
        zhejiang[5].style.display = 'block';
        hangzhou[5].style.background = 'rgba(0, 191, 191, 0.4)';
    })

    shang[4].addEventListener('click', function(e) {
        zhejiang[5].style.display = 'none';
        zhejiang[4].style.display = 'block';
        hangzhou[4].style.background = 'rgba(194, 128, 255, 0.4)';
    })
    total[5].addEventListener('click', function(e) {
        r += Number(e.target.innerHTML);
        var li = total[5].children;
        for(var i = 0; i < li.length; i++)
        {
            li[i].style.background = '#fff';
        }
        e.target.style.background = '#0079FE';
    })
    totall[5].addEventListener('click', function(e) {
        r += Number(e.target.innerHTML);
        var li = totall[5].children;
        for(var i = 0; i < li.length; i++)
        {
            li[i].style.background = '#fff';
        }
        e.target.style.background = '#0079FE';
    })
    xia[5].addEventListener('click', function(e) {
        window.sessionStorage.setItem('i', i);
        window.sessionStorage.setItem('a', a);
        window.sessionStorage.setItem('s', s);
        window.sessionStorage.setItem('ee', ee);
        window.sessionStorage.setItem('c', c);
        window.sessionStorage.setItem('r', r);
        window.location = "test3result.html";
    })
}
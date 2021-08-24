window.onload = function(e) {
    var zhejiang = document.querySelectorAll('.zhejiang');
    var hangzhou = document.querySelectorAll('.hangzhou');
    var yes1 = document.querySelectorAll('.yes1');
    var yes2 = document.querySelectorAll('.yes2');
    var yes3 = document.querySelectorAll('.yes3');
    var yes4 = document.querySelectorAll('.yes4');
    var yes5 = document.querySelectorAll('.yes5');
    var yes6 = document.querySelectorAll('.yes6');
    var score = document.querySelectorAll('.score');
    var shang = document.querySelectorAll(".shang");
    var xia = document.querySelectorAll(".xia");
    var i = sessionStorage.getItem('i');
    var a = sessionStorage.getItem('a');
    var s = sessionStorage.getItem('s');
    var ee = sessionStorage.getItem('ee');
    var c = sessionStorage.getItem('c');
    var r = sessionStorage.getItem('r');
    var aa = 0;
    xia[0].addEventListener('click', function(e) {
        for(var j = 0; j < yes1.length; j++)
        {
            if(yes1[j].checked == true)
            {
                i++;
            }
        }
        score[0].value = i;
        zhejiang[0].style.display = 'none';
        zhejiang[1].style.display = 'block';
        hangzhou[1].style.background = 'rgba(0, 153, 255, 0.4)';
    })

    shang[0].addEventListener('click', function(e) {
        zhejiang[1].style.display = 'none';
        zhejiang[0].style.display = 'block';
    })
    xia[1].addEventListener('click', function(e) {
        for(var j = 0; j < yes2.length; j++)
        {
            if(yes2[j].checked == true)
            {
                a++;
            }
        }
        score[1].value = a;
        zhejiang[1].style.display = 'none';
        zhejiang[2].style.display = 'block';
        hangzhou[2].style.background = 'rgba(255, 204, 102, 0.4)';
    })

    shang[1].addEventListener('click', function(e) {
        zhejiang[2].style.display = 'none';
        zhejiang[1].style.display = 'block';
        hangzhou[1].style.background = 'rgba(0, 153, 255, 0.4)';
    })
    xia[2].addEventListener('click', function(e) {
        for(var j = 0; j < yes3.length; j++)
        {
            if(yes3[j].checked == true)
            {
                s++;
            }
        }
        score[2].value = s;
        zhejiang[2].style.display = 'none';
        zhejiang[3].style.display = 'block';
        hangzhou[3].style.background = 'rgba(255, 102, 102, 0.4)';
    })

    shang[2].addEventListener('click', function(e) {
        zhejiang[3].style.display = 'none';
        zhejiang[2].style.display = 'block';
        hangzhou[2].style.background = 'rgba(255, 204, 102, 0.4)';
    })
    xia[3].addEventListener('click', function(e) {
        for(var j = 0; j < yes4.length; j++)
        {
            if(yes4[j].checked == true)
            {
                ee++;
            }
        }
        score[3].value = ee;
        zhejiang[3].style.display = 'none';
        zhejiang[4].style.display = 'block';
        hangzhou[4].style.background = 'rgba(194, 128, 255, 0.4)';
    })

    shang[3].addEventListener('click', function(e) {
        zhejiang[4].style.display = 'none';
        zhejiang[3].style.display = 'block';
        hangzhou[3].style.background = 'rgba(255, 102, 102, 0.4)';
    })
    xia[4].addEventListener('click', function(e) {
        for(var j = 0; j < yes5.length; j++)
        {
            if(yes5[j].checked == true)
            {
                c++;
            }
        }
        score[4].value = c;
        zhejiang[4].style.display = 'none';
        zhejiang[5].style.display = 'block';
        hangzhou[5].style.background = 'rgba(0, 191, 191, 0.4)';
    })

    shang[4].addEventListener('click', function(e) {
        zhejiang[5].style.display = 'none';
        zhejiang[4].style.display = 'block';
        hangzhou[4].style.background = 'rgba(194, 128, 255, 0.4)';
    })
    xia[5].addEventListener('click', function(e) {
        for(var j = 0; j < yes6.length; j++)
        {
            if(yes6[j].checked == true)
            {
                r++;
            }
        }
        score[5].value = r;
        window.sessionStorage.setItem('i', i);
        window.sessionStorage.setItem('a', a);
        window.sessionStorage.setItem('s', s);
        window.sessionStorage.setItem('ee', ee);
        window.sessionStorage.setItem('c', c);
        window.sessionStorage.setItem('r', r);
        window.location = "part_four.html";
    })
}
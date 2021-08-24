window.onload = function(e) {
    var btn = document.querySelector('button');
    var inp = document.querySelectorAll('input');
    var a = 0;
    
    btn.addEventListener('click', function(e) {
        a = 0
        for(var i = 0; i < inp.length; i++)
        {
            if(inp[i].value == "")
            {
                a = 1;
            }
        }
        if(a == 0)
        {
            window.location = "part_two.html";
        }
        else
        {
            alert("请将问题填写完整。");
        }
    })
}
var i = 0;
var j = 0

function progressBar() 
{
    if(i == 0)
    {
        i = 1;
        
        var progress = document.getElementById("progress");
        var next = document.getElementById("btnNext");
        var width = 0;
        var bar = setInterval(frame, 16);

        function frame()
        {
            if(width >= 100)
            {
                // clearInterval(bar);
                // i = 0;
                next.style.display="block";
            }
            else
            {
                width++;
                progress.style.width = width + "%";
                progress.innerHTML = width + "%";
            }
        }
    }
}

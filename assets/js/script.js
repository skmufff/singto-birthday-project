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


//onclick function show text

function show() {
    let hidden = document.getElementById("hide");

    if(hidden.style.display == "none") {
        hidden.style.display = "block";
    }
    else {
        hidden.style.display = "none";
    }
}

//slideshow

function clearing()
{
    document.getElementById("c1").innerHTML = "";
    document.getElementById("c2").innerHTML = "";
    document.getElementById("c3").innerHTML = "";
    document.getElementById("c4").innerHTML = "";
    document.getElementById("c5").innerHTML = "";

}

slides1()

function slides1()
{
    clearing();
    var i;
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dot");
    var slideIndex = 1;

    for(i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }

    for(i = 0; i < dots.length; i++)
    {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    
    var j = 0;
    type();
    
    function type()
    {
        // var txt = "\"testin\"";
        var txt = "Singto Prachaya"
        var speed = 70;
    
        if(j < txt.length)
        {
            document.getElementById("c1").innerHTML += txt.charAt(j);
            j++;
            setTimeout(type, speed);
        }
    }
}

function slides2()
{
    clearing();
    var i;
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dot");
    var slideIndex = 2;

    for(i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }

    for(i = 0; i < dots.length; i++)
    {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    
    var j = 0;
    type2();
    
    function type2()
    {
        var txt = "Happy 27th Birthday!";
        var speed = 80;
    
        if(j < txt.length)
        {
            document.getElementById("c2").innerHTML += txt.charAt(j);
            j++;
            setTimeout(type2, speed);
        }
    }
}


function slides3()
{
    clearing();
    var i;
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dot");
    var slideIndex = 3;

    for(i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }

    for(i = 0; i < dots.length; i++)
    {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    var j = 0;
    type3();
    
    function type3()
    {
        var txt = "Wishing you all the best always.";
        var speed = 80;
    
        if(j < txt.length)
        {
            document.getElementById("c3").innerHTML += txt.charAt(j);
            j++;
            setTimeout(type3, speed);
        }
    }
}

function slides4()
{
    clearing();
    var i;
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dot");
    var slideIndex = 4;

    for(i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }

    for(i = 0; i < dots.length; i++)
    {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    var j = 0;
    type4();
    
    function type4()
    {
        var txt = "Be happy, be healthy.";
        var speed = 80;
    
        if(j < txt.length)
        {
            document.getElementById("c4").innerHTML += txt.charAt(j);
            j++;
            setTimeout(type4, speed);
        }
    }
}

function slides5()
{
    clearing();
    var i;
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dot");
    var slideIndex = 5;

    for(i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }

    for(i = 0; i < dots.length; i++)
    {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    var j = 0;
    type5();
    
    function type5()
    {
        var txt = "Best of luck.";
        var speed = 80;
    
        if(j < txt.length)
        {
            document.getElementById("c5").innerHTML += txt.charAt(j);
            j++;
            setTimeout(type5, speed);
        }
    }
}

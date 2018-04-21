$(function() {
    $(".nav2").mouseenter(function() {
        this.style.cursor = "pointer";
    });

    $("#nav-font").mouseenter(function() {
        this.style.cursor = "pointer";
    });

    $("#nav-font").click(function() {
        $("#nav4").toggle(500);

    })



    $(".nav4").mouseenter(function() {
        this.style.cursor = "pointer";
    })

    $(".n2ab").click(function() {
        $("html, body").animate({
            scrollTop: $(".n2ab2").offset().top
        }, 1000)
    })

    $(".n2po").click(function() {
        $("html, body").animate({
            scrollTop: $(".row2").offset().top
        }, 1000)
    })

    $(".n2co").click(function() {
        $("html, body").animate({
            scrollTop: $(".row3").offset().top
        }, 1000)
    })

    $(".rf1a").mouseenter(function() {
        
    })
});


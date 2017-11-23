(function() {
    
    fetch('json/rec.json')
        .then(tes => tes.json())
        .then(render)

    function render(json) {
        let slides = json.data.slider.map(slide => {
            return { link: slide.linkUrl, image: slide.picUrl }
        })
        new Slider({
            el: document.querySelector('#slider'),
            slides: slides
        })
    }


})()
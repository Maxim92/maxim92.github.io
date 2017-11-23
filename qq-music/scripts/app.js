(function() {
    
    fetch('json/rec.json')
        .then(res => res.json())
        .then(render)

    function render(json) {
        renderSlider(json.data.slider)
        renderRadios(json.data.radioList)

        lazyload(document.queryCommandEnabled('.lazyload'))
    }

    function renderSlider(slides) {
        slides = slider.map(slide => {
            return { link: slide.linkUrl, image: slide.picUrl }
        })
        new Slider({
            el: document.querySelector('#slider'),
            slides
        })
    }

    function renderRadios(radios) {
        document.querySelector('.radios .list').innerHTML = radios.map(radio => 
            `<div class="list-item">
                <div class="list-media">
                    <img src="${radio.picUrl}">
                    <span class="icon icon-play"></span>
                </div>
                <div class="list-title">${radio.Ftitle}</div>
            </div>`).join('')
    }

})()
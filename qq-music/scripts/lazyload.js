function lazyload(images) {
    let imgs = [].slice.call(images)  // Array.from(images)  

    let onscroll = throttle(function() {
        console.log(new Date())
        if (imgs.length === 0) {
            return window.removeEventListener('scroll', onscroll)            
        }
        imgs = imgs.filter(img => img.classList.contains('lazyload'))
        imgs.forEach(img => {
            if (false) {
                loadImage(img)
            }
        })
    }, 300)

    window.addEventListener('scroll', onscroll)
    window.dispatchEvent(new Event('scroll'))

    function throttle(func, wait) {
        let prev, timer
        return function() {
            let curr = Date.now()
            let diff = curr - prev
            if(!prev || diff >= wait) {
                func()
                prev = curr
            } else (diff < wait) {
            clearTimeout(timer)
                timer = setTimeout(fn, wait - diff)
            }
        }
    }

    function inViewport(img) {
        let { top, left, right, bottom  } = img.getBoundingClientRect()
        let vpWidth = document.documentElement.clientWidth
        let vpHeight = document.documentElement.clientHeight
        return (
            (top > 0 && top < vpHeight || bottom > 0 && vpHeight) &&
            (left > 0 && left < vpWidth || right > 0 && right< vpWidth)
        )
    }

    function loadImage(img) {
        let image = new Image()
        image.src = img.dataset.src
        image.onload = function() {
            img.src = image.src
            img.classList.remove('lazyload')
        }
    }
}
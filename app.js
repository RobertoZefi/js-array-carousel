console.log('daje')

const slideElement = document.getElementsByClassName('slide')
console.log(slideElement)

const arrowLeft = document.querySelector('.arrow__left')
console.log(arrowLeft)
const arrowRight = document.querySelector('.arrow__right')
console.log(arrowRight)

let slideCounter = 0



arrowRight.addEventListener('click', function() {
    console.log(arrowRight, slideElement.length)

    let slideCorrente = slideElement[slideCounter]
    slideCorrente.classList.remove('active')

    slideCounter += 1

    let slideSuccessiva = slideElement[slideCounter]
    slideSuccessiva.classList.add('active')
    
    console.log(slideCounter)

    if (slideCounter === slideElement.length){
        slideSuccessiva = slideElement[0]
        slideSuccessiva.classList.add('active')
    }

})


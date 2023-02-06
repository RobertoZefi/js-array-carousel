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

    if (slideCounter === 4){
        slideCounter=0
    } else {
        slideCounter++
    }
    
    //slideCounter += 1

    let slideSuccessiva = slideElement[slideCounter]
    slideSuccessiva.classList.add('active')
    
    console.log(slideCounter)
})


arrowLeft.addEventListener('click', function() {
    console.log(arrowLeft)

    let slideCorrente = slideElement[slideCounter]
    slideCorrente.classList.remove('active')

    if (slideCounter === 0){
        slideCounter=4
    } else {
        slideCounter--
    }

    // slideCounter -= 1

    let slideSuccessiva = slideElement[slideCounter]
    slideSuccessiva.classList.add('active')
    
    console.log(slideCounter)
})
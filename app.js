const slides = [
    './img/01.jpg',
    './img/02.jpg',
    './img/03.jpg',
    './img/04.jpg',
    './img/05.jpg',
  ]

const carosello = document.querySelector('.carosello')

let figure = `
    <div class="slide active">
        <img src="${slides[0]}" alt="">
    </div>
    <div class="slide">
        <img src="${slides[1]}" alt="">
    </div>
    <div class="slide">
        <img src="${slides[2]}" alt="">
    </div>
    <div class="slide">
        <img src="${slides[3]}" alt="">
    </div>
    <div class="slide">
        <img src="${slides[4]}" alt="">
    </div>
    <i class="arrow arrow__left fa-solid fa-chevron-left"></i>
    <i class="arrow arrow__right fa-solid fa-chevron-right"></i>  
`
carosello.innerHTML += figure 



console.log('daje')

const slideElement = document.getElementsByClassName('slide')
console.log(slideElement)

const arrowLeft = document.querySelector('.arrow__left')
console.log(arrowLeft)
const arrowRight = document.querySelector('.arrow__right')
console.log(arrowRight)

let slideCounter = 0


arrowRight.addEventListener('click', function() {
    console.log('Hai schiacciato', arrowRight, slideElement.length)

    let slideCorrente = slideElement[slideCounter]
    slideCorrente.classList.remove('active')

    if (slideCounter === slideElement.length - 1){
        slideCounter = 0
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
        slideCounter = slideElement.length - 1
    } else {
        slideCounter--
    }

    // slideCounter -= 1

    let slideSuccessiva = slideElement[slideCounter]
    slideSuccessiva.classList.add('active')
    
    console.log(slideCounter)
})














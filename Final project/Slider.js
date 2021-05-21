let RightBtn = document.getElementById("RightSliderButton")
    LeftBtn = document.getElementById("LeftSliderButton")
    Slides = document.querySelectorAll(".slide")
    SlideValue = 0
    QuantityOfSlide = Slides.length


    
    console.log("Slider.js is connect")
    console.log(" ")
    console.log(QuantityOfSlide)
    console.log(Slides)


RightBtn.addEventListener('click', () => {
    SlideValue += 1
    if(SlideValue >= QuantityOfSlide - 1 ){
        SlideValue = 5
        
    }
    console.log( SlideValue)
    console.log(Slides[SlideValue])
    Slides[SlideValue ].style.display = "block"
    Slides[SlideValue - 1].style.display = "none"
    
    


})

LeftBtn.addEventListener('click', () => {
    if(SlideValue >= 1){
        SlideValue -= 1
        console.log(SlideValue)
        console.log(Slides[SlideValue])
        
        Slides[SlideValue].style.display = "block"
        Slides[SlideValue + 1].style.display = "none"

    }
    else{
        SlideValue = 0
        console.log(SlideValue)
    }
})





let RightBtn = document.getElementById("RightSliderButton")
    LeftBtn = document.getElementById("LeftSliderButton")
    Slides = document.querySelectorAll(".slide")
    SlideValue = 0


    
    console.log("Slider.js is connect")
    console.log(" ")
    console.log(Slides.length)
    console.log(Slides)


RightBtn.addEventListener('click', () => {
    SlideValue += 1
    console.log( SlideValue)
    console.log(Slides[SlideValue])
    Slides[SlideValue ].style.display = "block"
    Slides[SlideValue - 1].style.display = "none"
    Slides[SlideValue - 1].style.display = "none"
    if(SlideValue >= Slides.length){
        SlideValue += Slides.length-1 
        
    }


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





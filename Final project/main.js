let ChengeButton = document.getElementById("ChangeButton")
    Ico1 = document.getElementById("Ico1")
    Ico2 = document.getElementById("Ico2")
    Ico3 = document.getElementById("Ico3")
    Ico4 = document.getElementById("Ico4")
    Ico5 = document.getElementById("Ico5")
    Ico6 = document.getElementById("Ico6")
    LeftSliderButton = document.getElementById("LeftSliderButton")
    RightSliderButton = document.getElementById("RightSliderButton")
    ValueTheme = 0


console.log("Main.js is connect")
console.log(" ")


ChengeButton.addEventListener("click", () =>{
    console.log("Btn of theme is pressed ")
    let  State = changeTheme()

    if(State == 0){
        document.body.style.backgroundColor = "rgb(23, 25, 31)";
        document.body.style.color = "White";
        ChengeButton.style.backgroundColor = "white";
        ChengeButton.style.color = "Black";
        Ico1.style.backgroundImage = "url(./img/web-designNihgt.png)";
        Ico2.style.backgroundImage = "url(./img/web-developNight.png)";
        Ico3.style.backgroundImage = "url(./img/appsNight.png)";
        Ico4.style.backgroundImage = "url(./img/design-graphicNight.png)";
        Ico5.style.backgroundImage = "url(./img/backend-developNight.png)";
        Ico6.style.backgroundImage = "url(./img/frontend-developNight.png)";
        // LeftSliderButton.background = "rgba( 255, 255, 255, 0.70 )";
        // RightSliderButton.background = "rgba( 255, 255, 255, 0.70 )";
        LeftSliderButton.background = "rgba( 23, 25, 31 0.70 )"
        RightSliderButton.background = "rgba( 23, 25, 31 0.70 )"


    }
    else{
        document.body.style.backgroundColor = "White";
        document.body.style.color = "Black"
        ChengeButton.style.backgroundColor = "Black"
        ChengeButton.style.color = "white"
        Ico1.style.backgroundImage = "url(./img/web-designLihgt.png)"
        Ico2.style.backgroundImage = "url(./img/web-developLight.png)"
        Ico3.style.backgroundImage = "url(./img/appsLight.png)"
        Ico4.style.backgroundImage = "url(./img/design-graphicLight.png)"
        Ico5.style.backgroundImage = "url(./img/backend-developLight.png)"
        Ico6.style.backgroundImage = "url(./img/frontend-developLight.png)"
        // LeftSliderButton.background = "rgba( 23, 25, 31 0.70 )"
        // RightSliderButton.background = "rgba( 23, 25, 31 0.70 )"
        LeftSliderButton.background = "rgba( 255, 255, 255, 0.70 )";
        RightSliderButton.background = "rgba( 255, 255, 255, 0.70 )";
    }


})


function changeTheme() {
    if( ValueTheme > 1){
        ValueTheme = 0
    }
    return ValueTheme++
    
}




// document.body.style.backgroundColor = "rgb(23, 25, 31)"
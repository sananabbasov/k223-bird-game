$(document).keypress(function (event) {
    let position = $("#bird").position()
    let gameZone = $("#gameZone").css(['width']).width.replace("px", "")
    let basketPosition = $(".basket").first().position()

    if (event.keyCode == 97) {
        if (position.left != 0) {
            $("#bird").css("left", `${position.left - 20}px`)
            $(".bait").first().css("left", `${position.left - 20 + 100}px`)
            $("#bird").css("transform", `rotateY(-180deg)`)
        }
    } else if (event.keyCode ==100) {
        if (gameZone > position.left + 245) {
            $("#bird").css("left", `${position.left + 20}px`)
            $(".bait").first().css("left", `${position.left + 20 + 100}px`)
            $("#bird").css("transform", `rotateY(0deg)`)

        }
    }else if(event.keyCode == 32){
        let eaglePositon = position.left
        let res = eaglePositon - basketPosition.left
        if (res > -50 && res < 50) {
         
            let getPoint = localStorage.getItem("point")
            $(".bait").first().css("top", `90%`)

            localStorage.setItem("point", ++getPoint)
        }
        setTimeout(() =>{
            $(".bait").first().css("display", `none`)
        },2000)
        setTimeout(() =>{
            $(".bait").first().css("top", `160px`)
            $(".bait").first().css("display", `block`)
        },3000)
      
    }





});
setInterval(() => {
    let gameZone = $("#gameZone").css(['width']).width.replace("px", "") - 250
    let randNum = Math.floor(Math.random() * gameZone)
    $(".basket").first().css("left", `${randNum}px`)

}, 5000)





// local, session and cookie stroges


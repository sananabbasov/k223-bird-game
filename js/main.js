$(document).keypress(function (event) {
    let position = $("#bird").position()
    let gameZone = $("#gameZone").css(['width']).width.replace("px", "")

    if (event.keyCode == 97) {
        if (position.left != 0) {
            $("#bird").css("left", `${position.left - 20}px`)
            $("#bird").css("transform", `rotateY(-180deg)`)
        }
    } else if (event.keyCode ==100) {
        if (gameZone > position.left + 245) {
            $("#bird").css("left", `${position.left + 20}px`)
            $("#bird").css("transform", `rotateY(0deg)`)

        }
    }




});
setInterval(() => {
    let gameZone = $("#gameZone").css(['width']).width.replace("px", "") - 250
    let randNum = Math.floor(Math.random() * gameZone)
    $(".basket").first().css("left", `${randNum}px`)

}, 5000)



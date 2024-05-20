function play() {
    let i = 1
    const loop = setInterval(function (){
        if(i===10){
            clearInterval(loop);
        }
        var audio = new Audio('metal-pipe-clang.mp3');
        audio.play();
        i++;
    },300)
}
function SpriteAnimation(){
    var canvas = document.querySelector('#sprite-canvas');
    canvas.width = 650;
    canvas.height = 300;

    var ctx = canvas.getContext("2d");

    var x = 0;
    var y = 0;

    var trackRight = 0;
    var trackLeft = 1;

    var track = 0;

    var srcX = 0;
    var srcY = 0;

    var sheetWidth = 1207;
    var sheetHeight = 605;

    var frameCol = 8;
    var frameRow = 4;

    var frameWidth = sheetWidth/frameCol;
    var frameHeight = sheetHeight/frameRow;

    var currentFrame = 0;
    var character = new Image();

    character.src = 'assests/sprites/bomb.png'

    function updateFrame(){
        currentFrame = ++currentFrame % frameCol;
        srcX = currentFrame * frameWidth
        srcY = track * frameHeight;
        if(currentFrame == 7){
            track = ++track % frameRow;
        }
        ctx.clearRect(0,0,frameWidth,frameHeight)
    }

    function drawImage(){
        var track = 0;
        updateFrame();
        ctx.drawImage(character,srcX,srcY,frameWidth,frameHeight,x,y,frameWidth,frameHeight);
    }

    setInterval(function(){
        drawImage();
    },30)
}

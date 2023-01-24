function setup() {
    canvas = createCanvas(900,600);
    screen_width = window.innerWidth;
    screen_height = window.innerHeight;
    canvas = createCanvas(screen_width,screen_height-150)
}

screen_width = 0;
screen_height = 0;
apple = "";
speak_data = "";
to_number = null;
draw_apple = ""

function preload() {
    apple = loadImage('apple.png');
}

function start() {
    document.getElementById("status").innerHTML = "the system is listening, please speak";
    Recognition.start();
}
Recognition.onresult = function(event) {
    console.log(event);
    content = event.results[0][0].transcript
    document.getElementById("status").innerHTML = "the system has recognised what you are saying as:" + content;
    to_number = Number(content);
    if(Number.isInterger(to_number)) {
        document.getElementById("status").innerHTML = "Started drawing apples"
        draw_apple = "set"
    } else {
        document.getElementById("status").innerHTML = "Speech not recognised, please try again"
    }
}

function draw() {
    if(draw_apple == "set") {
        for (let i = 1; i < to_number; i++) {
            x = Math.floor(Math.random() * 700)
            y = Math.floor(Math.random() * 400)
            image(apple,x,y,screen_width,screen_height);
            document.getElementById("status").innerHTML = " Apples drawn"
            speak()
        }
    }
}
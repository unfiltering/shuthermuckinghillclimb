const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let carData;
fetch('assets/data/cars.json')
    .then(response => response.json())
    .then(data => {
        carData = data.carData;
        initGame();
    });

let car;
function initGame() {
    car = {
        name: carData.car.name, // Change here
        drivetrain: carData.car.drivetrain,
        body: {
            image: new Image(),
            scale: carData.car.body.scale.split(',').map(Number)
        },
        rearwheel: {
            image: new Image(),
            position: carData.car.rearwheel.position.split(',').map(Number),
            scale: carData.car.rearwheel.scale.split(',').map(Number)
        },
        frontwheel: {
            image: new Image(),
            position: carData.car.frontwheel.position.split(',').map(Number),
            scale: carData.car.frontwheel.scale.split(',').map(Number)
        },
        posX: canvas.width / 4,
        posY: canvas.height - 150,
        speed: 0,
        acceleration: 0.5,
        friction: 0.05,
        maxSpeed: 5
    };

    car.body.image.src = `assets/images/veh/tesla/body.png`;
    car.rearwheel.image.src = `assets/images/veh/tesla/wheel.png`;
    car.frontwheel.image.src = `assets/images/veh/tesla/wheel.png`;

    requestAnimationFrame(gameLoop);
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    updateCar();
    drawCar();

    requestAnimationFrame(gameLoop);
}

function updateCar() {
    if (keyIsPressed['ArrowRight']) {
        car.speed += car.acceleration;
    }
    if (keyIsPressed['ArrowLeft']) {
        car.speed -= car.acceleration;
    }

    car.speed *= (1 - car.friction);
    if (car.speed > car.maxSpeed) car.speed = car.maxSpeed;
    if (car.speed < -car.maxSpeed) car.speed = -car.maxSpeed;

    car.posX += car.speed;

    // Add ground collision logic
    if (car.posY < canvas.height - 150) {
        car.posY += 2; // Simulate gravity
    } else {
        car.posY = canvas.height - 150;
    }
}

function drawCar() {
    ctx.drawImage(car.body.image, car.posX, car.posY, car.body.scale[0], car.body.scale[1]);
    ctx.drawImage(car.rearwheel.image, car.posX + car.rearwheel.position[0], car.posY + car.rearwheel.position[1], car.rearwheel.scale[0], car.rearwheel.scale[1]);
    ctx.drawImage(car.frontwheel.image, car.posX + car.frontwheel.position[0], car.posY + car.frontwheel.position[1], car.frontwheel.scale[0], car.frontwheel.scale[1]);
}

// Key control setup
const keyIsPressed = {};
window.addEventListener('keydown', (e) => {
    keyIsPressed[e.key] = true;
});
window.addEventListener('keyup', (e) => {
    keyIsPressed[e.key] = false;
});

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let carData = {};
let currentCar = {};
let smokeImages = [];
let lastSmokeIndex = -1;

const loadImages = () => {
    for (let i = 1; i <= 3; i++) {
        const img = new Image();
        img.src = `assets/images/veh/smoke${i}.png`;
        smokeImages.push(img);
    }
};

const loadCarData = async () => {
    const response = await fetch('assets/data/cars.json');
    carData = await response.json();
    currentCar = carData.car.tesla; // Load the Tesla car data
};

const drawCar = () => {
    const bodyImage = new Image();
    bodyImage.src = `assets/images/veh/tesla/body.png`;
    const tirePos = currentCar.tireSmokePos.split(',').map(Number);
    
    // Draw car body
    ctx.drawImage(bodyImage, canvas.width / 2 - 178.5, canvas.height - 200, 357, 106);
    
    // Draw wheels
    const rearWheelImage = new Image();
    rearWheelImage.src = `assets/images/veh/tesla/wheel.png`;
    ctx.drawImage(rearWheelImage, canvas.width / 2 - 178.5 + 68, canvas.height - 200 + 79, 53, 53);

    const frontWheelImage = new Image();
    frontWheelImage.src = `assets/images/veh/tesla/wheel.png`;
    ctx.drawImage(frontWheelImage, canvas.width / 2 - 178.5 + 297, canvas.height - 200 + 79, 53, 53);
    
    // Emit smoke particles
    if (burnout) {
        emitSmoke(tirePos);
    }
};

let burnout = false;

const emitSmoke = (tirePos) => {
    const smokeIndex = Math.floor(Math.random() * smokeImages.length);
    if (smokeIndex === lastSmokeIndex) {
        emitSmoke(tirePos); // Ensure we don't emit the same smoke image twice in a row
        return;
    }
    lastSmokeIndex = smokeIndex;
    const smokeImage = smokeImages[smokeIndex];
    ctx.drawImage(smokeImage, tirePos[0], tirePos[1], 50, 50); // Adjust size as needed
};

const update = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCar();
    requestAnimationFrame(update);
};

const handleKeyDown = (e) => {
    if (e.key === 'a' || e.key === 'd') {
        burnout = true; // Activate burnout
    }
};

const handleKeyUp = (e) => {
    if (e.key === 'a' || e.key === 'd') {
        burnout = false; // Deactivate burnout
    }
};

window.addEventListener('keydown', handleKeyDown);
window.addEventListener('keyup', handleKeyUp);
loadImages();
loadCarData().then(update);

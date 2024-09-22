## Instruction
Make me a 2D physics based car simulation game in HTML, CSS, and JS with the following resources below.
Have the HTML, CSS, and JS in one file.
### Controls
- A/D : Reverse/Accelerate
### Features
- Make each car dynamically fetch it's own images and parts based off their config
## Info
- The cars data is gotten from "assets/data/cars.json"
- Cars images are gotten from "assets/images/veh/{carname}/{fileName}"
### JSON Data
```json
{
    "carData": {
        "car": {
            "name": "tesla",
            "drivetrain": "RWD",
            "tireSmokePos": "52,103",
            "body": {
                "image": "body.png",
                "scale": "357,106"
            },
            "rearwheel": {
                "image": "wheel.png",
                "position": "68,79",
                "scale": "53,53"
            },
            "frontwheel": {
                "image": "wheel.png",
                "position": "297,79",
                "scale": "53,53"
            }
        },
        "mtruck": {
            "name": "mtruck",
            "drivetrain": "AWD",
            "body": {
                "image": "body.png",
                "scale": "800,450"
            },
            "rearwheel": {
                "image": "wheel_r.png",
                "position": "68,79",
                "scale": "206,325"
            },
            "frontwheel": {
                "image": "wheel_f.png",
                "position": "297,79",
                "scale": "674,326"
            }
        }
    }
}
```
## File Structure
```plaintext
├── index.html
└── assets/
        ├── game.js
        ├── styles.css
        └── data/
            └── cars.json
        └── images/
            ├── veh/
                ├── smoke1.png
                ├── smoke2.png
                ├── smoke3.png
                ├── tesla/
                    ├── body.png
                    └── wheel.png
                └── mtruck/
                    ├── body.png
                    ├── wheel_r.png
                    └── wheel_f.png
```

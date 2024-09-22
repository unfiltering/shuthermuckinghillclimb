# Shuthermucking HillClimb
a hillclimb game written by ai
## Instruction
Make me a 2D "HillClimb" style game with the following resources below.
## Info
Cars images are gotten from "assets/images/veh/{carname}/{fileName}"
### JSON Data
```json
{
    "carData": {
        "car": {
            "name": "tesla",
            "drivetrain": "RWD",
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
                "scale": "357,106"
            },
            "rearwheel": {
                "image": "wheel_r.png",
                "position": "68,79",
                "scale": "53,53"
            },
            "frontwheel": {
                "image": "wheel_f.png",
                "position": "297,79",
                "scale": "53,53"
            }
        }
    }
}
```
## File Structure
```plaintext
assets/
├── index.html
├── game.js
├── styles.css
└── assets/
    ├── data/
        └── cars.json
    └── images/
        ├── veh/
            ├── smoke.png
            ├── tesla/
                ├── body.png
                └── wheel.png
            └── mtruck/
                ├── body.png
                ├── wheel_r.png
                └── wheel_f.png
```

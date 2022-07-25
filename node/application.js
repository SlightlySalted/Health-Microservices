/* Alex Larsen */
/* TCSS 460 A */
/* Assignment 3 */

const express = require('express');
const app = express();

/* May be required to run correctly. Commented out to comply with the assignment requirements. */
/*const cors = require('cors');
app.use(cors({
    origin: '*'
}));*/

app.get('/', (req, res) => {
    console.log(req.body);
});

/*
    Handles /bmi GET requests.

    Units: Weight is in pounds, height is in inches.
*/
app.get('/bmi', (req, res) => {
    const weight = req.query['weight'];
    const height = req.query['height'];
    
    const bmi = (weight * 703) / (height * height);

    res.send({bmi});
});

/*
    Handles /bodyfat GET requests.

    Formulas from: https://www.calculator.net/body-fat-calculator.html
*/
app.get('/bodyfat', (req, res) => {
    const bmi = req.query['bmi'];
    const age = req.query['age'];
    const sex = req.query['sex'];
    
    var bodyfat = NaN;

    if (sex == 'male') {
        bodyfat = (1.2 * bmi) + (0.23 * age) - 16.2;
    }
    else if (sex == 'female') {
        bodyfat = (1.2 * bmi) + (0.23 * age) - 5.4;
    }

    res.send({bodyfat});
});

/*
    Handles /idealweight GET requests.

    Formulas from: https://www.livestrong.com/article/281134-how-to-calculate-ibw/

    Units: Height is in inches.
*/
app.get('/idealweight', (req, res) => {
    const height = req.query['height'];
    const sex = req.query['sex'];

    var weight = NaN;

    if (sex == 'male') {
        weight = 106;

        if (height > 60) {
            weight += (height - 60) * 6;
        }
        else {
            weight -= (60 - height) * 2;
        }
    }
    else if (sex == 'female') {
        weight = 100;

        if (height > 60) {
            weight += (height - 60) * 5;
        }
        else {
            weight -= (60 - height) * 2;
        }
    }

    res.send({idealWeight:weight});
});

/*
    Handles calories burned GET requests.

    Formulas from: https://www.medicalnewstoday.com/articles/319731#:~:text=To%20calculate%20BMR%2C%20a%20person,)%20%E2%80%93%20(4.7%20x%20age)

    Units: Weight is in pounds, height is in inches.
*/
app.get('/caloriesburned', (req, res) => {
    const weight = req.query['weight'];
    const height = req.query['height'];
    const age = req.query['age'];
    const sex = req.query['sex'];
    const activity = req.query['activity'];

    var caloriesBurned = NaN;

    if (sex == 'male') {
        caloriesBurned = 66 + (6.2 * weight) + (12.7 * height) - (6.76 * age);
    }
    else if (sex == 'female') {
        caloriesBurned = 655.1 + (4.35 * weight) + (4.7 * height) - (4.7 * age);
    }

    caloriesBurned *= activity;

    res.send({caloriesBurned});
});

app.listen(3000, () => {
    console.log("listening to port 3000");
});
github link: https://github.com/SlightlySalted/Health-Microservices

Instructions for the frontend:

To run the frontend, simply open assignment3.html in any browser. There are four tabs
in total with self-explanatory names. Each tab corresponds to one of the four
main features of the application (BMI, body fat, ideal weight, and calories
burned).

Instructions for the backend:

There are four distinct microservices that can be used by sending a GET HTTP request
to the backend:

GET /bmi?height=[height]&sex=[sex]
GET /bodyfat?bmi=[bmi]&age=[age]&sex=[sex]
GET /idealweight?height=[height]&sex=[sex]
GET /caloriesburned?weight=[weight]&height=[height]&age=[age]&sex=[sex]&activity=[activity]

Where the values in []s are substituted with the actual parameters being passed to the
microservice. It should be noted that height is measured in inches, weight is measured
in pounds, and activity ranges from 1.2 to 1.9 (due to the formula used).

The backend can run locally using node.js by opening up the command line and navigating
to the node folder and running the command "node application.js". The default connection
is to localhost. If the backend is running somewhere else then you can change the address
by modifying the "backendAddress" variable on line 201 of assignment3.html.
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

Import note about running the backend locally:
There was one issue I had encountered while running locally related to CORS, and appeared
as an error in the browser console whenever the webpage would send an HTTP request to the
backend. To resolve this, I used the "cors" module and connected it to the "express" module.
However, due to the assignment requirements this is not allowed so it's commented out in the
code. If this problem happens and it's possible to use the "cors" module, please uncomment
the code near the top of /node/application.js out and try it again.
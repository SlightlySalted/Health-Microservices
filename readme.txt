Instructions for the frontend:

To run the frontend, simply open assignment3.html in any browser. There are four tabs
in total with self-explanatory names. Each tab corresponds to one of the four
main features of the application (BMI, body fat, ideal weight, and calories
burned).

Instructions for the backend:

The backend can run locally using node.js by opening up the command line and navigating
to the node folder and running the command "node application.js".

Import note about running the backend locally:
There was one issue I had encountered while running locally related to CORS, and appeared
as an error in the browser console whenever the webpage would send an HTTP request to the
backend. To resolve this, I used the "cors" module and connected it to the "express" module.
However, due to the assignment requirements this is not allowed so it's commented out in the
code. If this problem happens and it's possible to use the "cors" module, please uncomment
the code near the top of /node/application.js out and try it again.
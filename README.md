This is a React app, for using it first you need to install the dependencies in the \interactions file with:
  npm install
next you need to run it with
  npm start


Development plan

My strategy to develop this idea is divided in 3 steps: 

 1 Data conversion
 2 React functionality
 3 Styling 

Data conversion

First I designed the data structure that I needed for my table, so I needed a function with a forEach strategy that returns a my preferred json. I got inspire by the dates so I wanted to have a dynamic structure that depends on a time interval.

//original structure

 {
    "sector_id": 2,
    "name": "Real Estate",
    "date": "2020-01-06"
  }
]

//color dictionary (never used)

[
	{"name": "Real Estate",
	"color": "#eb4034"}, .......
]

//my preferred json

{
 "total": 234,
 "dates": ["2020-01-06","2020-01-06"....],
 "types": [
		{ "name": "Real Estate",
		 "number": 9 ,
		 "percentage": 23, 
		 "color": "#eb4034" },....
	],
}

My structure saves the interaction by types, I added color since I thought in show a pie chart. The structure can be filtered by existing dates and return the iterations for the time range.

React functionality  

Once I had my dynamic structure I built the webpage using react, the most challenge part was the control for the dates, is protected from having a "to" earlier than "from". 

 Styling

 Once the page works the last step was to add styling, I used Tailwind.

I have used most of the time in trying some features that I put aside after consuming long time in them:

  I tried to read the data as a .csv not as a .json but after two different libraries failing I decided to use .json.
  I tried to add dynamic colors to the different iterations but after achieving it I realized that was too colorful.

I was about to explore the idea of adding a pie chart and the api call but I was using too much time already, so I'd say that could be an improvement.
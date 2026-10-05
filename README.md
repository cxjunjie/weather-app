# Today's Weather

A responsive weather application built with ReactJS that allows users to search for current weather information by city and country.

## Features

- Search current weather by city and country
- Display temperature, high/low temperature, humidity and weather condition
- Persistent Search history with localStorage
- Search previous locations again
- Delete individual history records
- Clear the current search
- Handle invalid locations and API errors
- Responsive layout for Desktop and Mobile
- Light and Dark theme

## Tech Stack

- ReactJs
- Vite
- JS
- CSS
- OpenWeather API
- Lucide React

## Setup

1. Clone the repository
git clone <your-repository-url>
cd weather-app

2. npm install

3. Create a .env file in project root
VITE_OPENWEATHER_API_KEY=your_openweather_api_key

4. Start the development server
npm run dev

## Assumptions

- Both city and country are required before a search is performed.
- Successful searches are added to search history.
- Searching the same location again updates it and moves it to the top instead of creating a duplicate.
- Search history remains after page refresh using localStorage.
- - Selected Light/Dark theme is saved using localStorage.
- Search Again button performs a new API request.
- Clear button clears search fields, current weather result and error message but not search history.
- History records can be removed individually using the delete button.

## API

Weather data is retrieved from the OpenWeather Current Weather API. API requests would ideally be handled through a backend service to avoid exposing the key in the browser.

# React Weather Forecasting

This project is a weather forecasting web application built with React. It allows users to view real-time weather information for various locations by leveraging the OpenWeatherMap API.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)

## Features

- **Real-Time Weather Updates**: Fetch current weather data from the OpenWeatherMap API.
- **Search Functionality**: Search for weather conditions in any city worldwide.
- **Detailed Forecasts**: Includes temperature, humidity, wind speed, and other weather metrics.
- **Responsive Design**: Optimized for both desktop and mobile views.

## Technologies

- **Frontend**:
  - React.js
  - TailwindCSS
  - Iconscout (for weather icons)

- **Backend**:
  - No backend server is needed as it directly integrates with the OpenWeatherMap API.
  - Netlify (Deployment)

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Takeru9016/react-weather-forecasting.git
   ```
2. **Navigate to the project directory**:

   ```bash
   cd react-weather-forecasting
   ```
3. **Install the dependencies**:

   ```bash
   npm install
   ```
4. **Add your OpenWeatherMap API key**:

   Create a `.env` file in the project root and add your OpenWeatherMap API key:
   ```bash
   REACT_APP_WEATHER_API_KEY=your_api_key_here
   ```
5. **Run the application**:

   ```bash
   npm start
   ```
   This will start the development server. To view the app, navigate to `http://localhost:3000` in your browser.

## Usage

1. **Search for a City**: Enter the name of a city to fetch the latest weather details.
2. **View Weather Info**: Check the current temperature, humidity, wind speed, and more.
3. **Responsive Design**: Access the app on both mobile and desktop devices for a seamless experience.

## Contributing

Contributions are welcome! If you'd like to improve the project or fix bugs, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a pull request.

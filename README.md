# Food Allergen Detector

## Overview

The **Food Allergen Detector** is a web-based application that allows users to search for product information based on a barcode. It provides detailed information on ingredients, allergens, and nutritional values by querying the Open Food Facts API. The app aims to help individuals detect potential allergens in food products, making it easier to make informed dietary choices.

## Features

- **Barcode Input**: Enter a barcode ID to retrieve product details.
- **Product Information**: Displays product name, ingredients, allergens, and nutritional breakdown (energy, proteins, fats, carbohydrates, sugars, and salt).
- **User-Friendly Interface**: Simple and responsive design that works on both desktop and mobile devices.
- **Open Food Facts Integration**: Fetches data from the [Open Food Facts API](https://world.openfoodfacts.org/).

## Demo

Visit the live demo of the application: [Food Allergen Detector](https://programmingguy001.github.io/Food-Allergen-Detector/)

## Technologies Used

- **HTML5** - Structure and layout of the application.
- **CSS3** - Styling for the app.
- **JavaScript** - Fetching data from the Open Food Facts API.
- **Open Food Facts API** - API used to retrieve product details based on barcode input.

## Getting Started

To use this project locally, follow these steps:

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (if you want to bundle JavaScript files or run a local server).
- A modern browser (Chrome, Firefox, etc.).

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/ProgrammingGuy001/Food-Allergen-Detector.git
    cd Food-Allergen-Detector
    ```

2. **(Optional)** Install dependencies if you plan to bundle any JavaScript:

    ```bash
    npm install
    ```

3. Open `index.html` in a browser, or run a local server:
    - For a simple server, you can use `live-server` or any other lightweight local server:
    
    ```bash
    npm install -g live-server
    live-server
    ```

4. Open your browser and go to `http://localhost:8080`.

## Usage

1. Open the application in a browser.
2. **Enter a barcode manually** into the text input and click **Fetch Stats**.
3. The application will display product details, including the product name, ingredients, allergens, and nutritional values.

## Future Plans

1. Add support for searching by name of product.
2. More Nutritional Values.
3. Add support for Camera based Barcode Scanning.

## Acknowledgments

- **Open Food Facts API**: Thanks to [Open Food Facts](https://world.openfoodfacts.org/) for providing the API to fetch product information.

---

If you encounter any issues or have any suggestions, feel free to open an issue in the repository!

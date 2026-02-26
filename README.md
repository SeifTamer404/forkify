# 🍽️ Forkify App

<div align="center">
  <h3>A modern web application to search for recipes and view their ingredients, built entirely with <strong>Vanilla JavaScript</strong> 💛</h3>
</div>

---

## 🌟 About The Project

**Forkify** is a web application designed for cooking enthusiasts, allowing users to search through a database of over a million distinct recipes. The application boasts a sleek, modern user interface that displays recipe details, allows for scaling servings (and automatically adjusting ingredient quantities), adding custom recipes, and bookmarking favorite recipes.

The core objective of this project is to showcase advanced skills in **Pure Vanilla JavaScript (ES6+)** without relying on any frontend frameworks like React or Angular, while strictly adhering to modern architectural patterns and writing clean, maintainable code.

## ✨ Features

- 🔍 **Recipe Search:** Search through a massive recipe database powered by an external API.
- 📄 **Pagination:** Automatically split search results into multiple pages for easier navigation.
- 👨‍🍳 **Adjustable Servings:** Dynamically calculate and update ingredient quantities based on the number of people you're cooking for.
- 🔖 **Bookmarking:** Save your favorite recipes to easily access them later (saved in `LocalStorage` to persist across browser sessions).
- ➕ **Add Custom Recipes:** Users upload their own recipes to the API database, which seamlessly adds them to the user's bookmarks.
- 📱 **Fully Responsive:** The design elegantly adapts to all screen sizes (desktop, tablet, and mobile).

## 🏗️ Architecture

The project is structured using the **MVC (Model-View-Controller)** architectural design pattern to ensure Separation of Concerns, making the code highly maintainable and scalable:

1. **Model:** Responsible for managing business logic, state management, handling API requests, and interacting with LocalStorage.
2. **View:** Responsible for the presentation logic, rendering the UI, capturing DOM events, and updating the screen based on state changes.
3. **Controller:** Acts as the mediator between the Model and the View (Application Logic). It listens to events from the View, requests necessary data from the Model, and then triggers the View to render the updated data.

### 🛠️ Tech Stack

- **HTML5** & **CSS3 / Sass (SCSS)** for structure and elegant styling.
- **Vanilla JavaScript (ES6+)** for all logic and reactivity (Zero Frameworks).
- **Parcel** as the module bundler and development server.
- **Fraction.js** for handling fractional math in recipe ingredients.
- **core-js & regenerator-runtime** to polyfill modern ES6+ features for older browsers.
- **Forkify API** for fetching and submittting recipe data.

## 🚀 Installation & Local Setup

To run this project locally on your machine, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SeifTamer404/forkify.git
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 🧠 What I Learned

During the development of Forkify, I deeply explored and applied several advanced JavaScript concepts:
- **Asynchronous JavaScript** (Promises, Async/Await, Error Handling, AJAX).
- Building scalable architectures using the **MVC Pattern**.
- Object-Oriented Programming **(OOP)** in JavaScript (Classes, Inheritance, Encapsulation).
- Advanced **DOM manipulation** and robust Event Delegation.
- Publishing and configuring builds utilizing **Parcel**.

---

<div align="center">
  <b>Developed with ❤️ by <a href="https://github.com/SeifTamer404">Seif Tamer</a></b>
</div>

# 🎴 match-the-card-js-game

A browser-based card matching (memory) game built with HTML, CSS, and JavaScript, bundled using Webpack. This project showcases modular JavaScript architecture and a modern front-end build workflow using webpack 5.

## ✨ Features

* Interactive card flip animations
* Match pairs to win the game
* Timer and move counter
* Restart / play-again screen
* Fully responsive design
* ES6 module-based structure
* Assets and styles managed through Webpack

## 🛠 Technologies Used

* HTML5
* CSS3
* Vanilla JavaScript (ES6+)
* Webpack 5
* Babel for browser compatibility

## 📦 Repository

GitHub: [https://github.com/jbprojects95/match-the-card-js-game](https://github.com/jbprojects95/match-the-card-js-game)

## 🚀 Getting Started

### Prerequisites

* Node.js (v16+ recommended)
* npm

### Installation

1. Clone the repository

```bash
git clone https://github.com/jbprojects95/match-the-card-js-game.git
```

2. Enter the project directory

```bash
cd match-the-card-js-game
```

3. Install dependencies

```bash
npm install
```

### Development

Run locally with hot reload:

```bash
npm start
```

Open your browser at:

```
http://localhost:8080
```

### Production Build

Generate an optimized bundle:

```bash
npm run build
```

Compiled files will be created in the /dist folder.

## 📁 Project Structure

```
match-the-card-js-game/
│
├── src/
│   ├── index.html
│   ├── styles.css
│   ├── index.js
│   ├── game.js
│   ├── card.js
│   └── assets/
│
├── dist/
├── webpack.config.js
├── package.json
└── README.md
```

## 🎮 How to Play

1. Click a card to reveal its symbol
2. Click another card
3. If both match → they stay open
4. If not → they flip back
5. Match all pairs to complete the game

## ⚙ Webpack Configuration Highlights

* html-webpack-plugin for HTML template
* css-loader + style-loader for styling
* Asset modules for images and fonts
* Webpack Dev Server with HMR
* Terser minification for production

## 🤝 Contributing

Contributions are welcome.

* Fork the repo
* Create a feature branch
* Commit your changes
* Submit a pull request

## 📄 License

MIT License © jbprojects95

## 🙌 Acknowledgements

* Inspired by classic memory card games
* Built as a practical demo of Webpack + vanilla JS workflow

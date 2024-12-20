# Pop the Balloons Game

## Description

The **Pop the Balloons Game** is a simple and fun web-based game where the player clicks on balloons to "pop" them. The balloons are organized in a grid layout, and their count decreases as they are popped. Once all balloons are popped, the game resets automatically.

This project demonstrates core front-end development skills, including HTML, CSS, and JavaScript, with animations and interactivity.

---

## Features

- **Dynamic Grid Layout**: Balloons are displayed in a clean grid layout using CSS Grid.
- **Interactive Balloons**: Players can click on the balloons to pop them, and their state updates dynamically.
- **Live Counter**: The number of active balloons is displayed and updates in real-time.
- **Smooth Animations**: Balloons have floating and shaking animations for a lively experience.
- **Automatic Reset**: Once all balloons are popped, the game resets automatically for replay.

---

## Technologies Used

- **HTML**: Structure and content of the game.
- **CSS**: Styling and animations for the balloons.
- **JavaScript**: Game logic, interactivity, and dynamic updates.

---

## How to Run

1. Clone or download the repository.
2. Open the `index.html` file in your web browser.
3. Start popping balloons!

---

## Code Highlights

### Balloon Rendering
Balloons are dynamically rendered based on an array of colors:
```javascript
function renderBalloons() {
  const balloonContainer = document.querySelector('#balloon-map');
  balloonContainer.innerHTML = ''; // Clear previous content

  balloonColors.forEach((color, index) => {
    if (color !== null) {
      const balloonHTML = `<div class="balloon active" style="background-color: ${color};"></div>`;
      balloonContainer.innerHTML += balloonHTML;
    }
  });
}
```

### Animation Effects
The floating and shaking animations are defined with CSS keyframes:
```css
@keyframes float {
  0% { transform: translatey(0px); }
  50% { transform: translatey(-20px); }
  100% { transform: translatey(0px); }
}

@keyframes shake {
  10%, 90% { transform: translate3d(-1px, 0, 0); }
  20%, 80% { transform: translate3d(2px, 0, 0); }
  30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
  40%, 60% { transform: translate3d(4px, 0, 0); }
}
```

---

## Project Structure

```
project-folder/
│
├── index.html         # Main HTML file
├── script.js          # JavaScript logic
├── styles.css         # CSS animations and styling
├── README.md          # Project documentation
```

---

## Future Enhancements

- Add a timer to challenge players.
- Introduce levels with varying numbers of balloons.
- Add sound effects when popping balloons.
- Enhance the visual design with additional animations.

---

## Author

**Julio ROM**  

---

## License

This project is licensed under the MIT License. Feel free to use and modify it as you like.


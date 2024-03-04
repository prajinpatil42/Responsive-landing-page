function changeBoxContent(item) {
    const colorBox = document.getElementById('color-box');
    const colors = getRandomColors();

    colorBox.style.backgroundColor = colors.boxColor;
    colorBox.style.color = colors.fontColor;
    document.body.style.color = colors.textColor;

    switch (item.id) {
        case 'home':
            colorBox.innerHTML = "<h1>Home</h1><p>Welcome to our Home page</p>";
            break;
        case 'about':
            colorBox.innerHTML = "<h1>About</h1><p>Learn more about us</p>";
            break;
        case 'services':
            colorBox.innerHTML = "<h1>Services</h1><p>Explore our services.</p>";
            break;
        case 'contact':
            colorBox.innerHTML = "<h1>Contact</h1><p>Get in touch with us.</p>";
            break;
        default:
            colorBox.innerHTML = "<h1>Color-Changing Box</h1><p>Welcome to the Responsive landing page</p>";
    }

    item.style.color = colors.fontColor;
}

function getRandomColors() {
    const letters = '0123456789ABCDEF';
    let boxColor = '#';
    let fontColor = '#';
    let textColor = '#';

    for (let i = 0; i < 6; i++) {
        boxColor += letters[Math.floor(Math.random() * 16)];
        fontColor += letters[Math.floor(Math.random() * 16)];
        textColor += letters[Math.floor(Math.random() * 16)];
    }

    return { boxColor, fontColor, textColor };
}

const menuItems = document.querySelectorAll('#navbar a');
menuItems.forEach(item => {
    item.addEventListener('click', function () {
        changeBoxContent(this);
    });
});

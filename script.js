const img = document.getElementById("opicak");
let counter = 0;

function animate() {
    if (counter >= 2) {
        counter = 0;
    } else {
        counter++;
    }
    img.setAttribute("src", `opicak-frames/opicak-frame-${counter}-400.png`);

    setTimeout(animate, 500);
}

animate();

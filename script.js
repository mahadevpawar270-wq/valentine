const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const result = document.getElementById("result");

// Yes Button Event
yesBtn.addEventListener("click", () => {
    result.textContent = "YAY! 💖 I’m so happy! 💘";
    // Confetti!
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });
});

// No Button Event (fun one)
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

noBtn.addEventListener("click", () => {
    result.textContent = "Oops! You nearly got me 😅 Try again!";
});
function showSurprise() {
  document.getElementById("surprise").classList.remove("hidden");

  // ❤️ Floating hearts generator
  for (let i = 0; i < 25; i++) {
    let heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
    document.body.appendChild(heart);

    setTimeout(() => { heart.remove(); }, 5000);
  }

  // 🎞 Slideshow logic
  let slides = document.querySelectorAll(".slide");
  let index = 0;
  setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }, 3000); // 3 seconds per slide

  // 🎵 Music play on click (browser autoplay fix)
  let mainMusic = document.getElementById("main-music");
  let bgMusic = document.getElementById("bg-music");

  mainMusic.volume = 0.9; // Raabta louder
  bgMusic.volume = 0.3;   // Perfect softer

  mainMusic.play();
  bgMusic.play();
}

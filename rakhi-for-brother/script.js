// ==============================
// CUSTOMIZE THESE 2 LINES
// ==============================
const brotherName = "Bhai"; // Change to your brother's name

const openBtn = document.getElementById("openBtn");
const welcome = document.getElementById("welcome");
const mainContent = document.getElementById("mainContent");
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");
const surpriseBtn = document.getElementById("surpriseBtn");
const finalMessage = document.getElementById("finalMessage");
const hearts = document.getElementById("hearts");

// Put your brother's name everywhere automatically.
document.querySelectorAll("#brotherNameWelcome, #brotherNameLetter").forEach(el => {
  el.textContent = brotherName;
});

openBtn.addEventListener("click", async () => {
  welcome.classList.add("hidden");
  mainContent.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
  createHearts(18);

  // Browsers usually allow music after a user click.
  try {
    await bgMusic.play();
    musicBtn.textContent = "🔊 Music";
  } catch (error) {
    musicBtn.textContent = "🔇 Music";
  }
});

musicBtn.addEventListener("click", async () => {
  if (bgMusic.paused) {
    try {
      await bgMusic.play();
      musicBtn.textContent = "🔊 Music";
    } catch (error) {
      alert("Add music/rakhi-song.mp3 first, then try again.");
    }
  } else {
    bgMusic.pause();
    musicBtn.textContent = "🔇 Music";
  }
});

surpriseBtn.addEventListener("click", () => {
  finalMessage.classList.remove("hidden");
  surpriseBtn.classList.add("hidden");
  createHearts(45);
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
});

// Clicking funny reasons reveals a playful message.
document.querySelectorAll(".reason").forEach(button => {
  button.addEventListener("click", () => {
    button.textContent = "😂 Okay okay, I still love you! ❤️";
    button.style.background = "#fff1f5";
  });
});

function createHearts(count) {
  const symbols = ["❤️", "💗", "💕", "✨", "🎀"];
  for (let i = 0; i < count; i++) {
    const heart = document.createElement("span");
    heart.className = "heart";
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = (14 + Math.random() * 22) + "px";
    heart.style.animationDuration = (3 + Math.random() * 4) + "s";
    heart.style.animationDelay = Math.random() * 1.5 + "s";
    hearts.appendChild(heart);
    setTimeout(() => heart.remove(), 8000);
  }
}

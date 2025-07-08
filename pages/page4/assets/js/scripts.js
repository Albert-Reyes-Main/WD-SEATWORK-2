let isHinokami = false;

function toggleForm() {
  isHinokami = !isHinokami;
  const body = document.body;
  const img = document.getElementById("tanjiro-img");
  const info = document.getElementById("info-text");
  const quote = document.getElementById("quote-text");
  const title = document.getElementById("hero-title");
  const btn = document.querySelector(".toggle-btn");

  if (isHinokami) {
    body.classList.add("hinokami");
    img.src = "../page4/assets/img/images.jfif";
    title.textContent = "Sun Breathing Awakened – Hinokami Tanjiro";
    info.innerHTML = `
      <p><strong>Breathing Style:</strong> Hinokami Kagura (Sun Breathing)</p>
      <p><strong>State:</strong> Awakened Slayer Mark • Vengeful Wrath</p>
      <p><strong>Mission:</strong> Annihilate Muzan. Protect Nezuko at all cost. No mercy to demons.</p>
    `;
    quote.textContent = "“My heart is burning. My resolve is unshakable. I won’t forgive you.”";
    btn.textContent = "Return to Calm";
  } else {
    body.classList.remove("hinokami");
    img.src = "../page4/assets/img/waterbreathing.jfif";
    title.textContent = "Breathing of Peace – Tanjiro Kamado";
    info.innerHTML = `
      <p><strong>Breathing Style:</strong> Water Breathing</p>
      <p><strong>Mission:</strong> Heal the world, protect Nezuko, and slay demons with compassion.</p>
      <p><strong>Nature:</strong> Calm, kind-hearted, and unwaveringly determined.</p>
    `;
    quote.textContent = "“The bond between Nezuko and me can’t be severed by anyone.”";
    btn.textContent = "Unleash Hinokami Kagura";
  }
}

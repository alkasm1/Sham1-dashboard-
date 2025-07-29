const countdownElement = document.getElementById("countdown");
const launchDate = new Date("2025-09-07T18:00:00").getTime(); // بعد 40 يومًا

function updateCountdown() {
  const now = new Date().getTime();
  const distance = launchDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  countdownElement.innerHTML = `${days} يوم - ${hours} ساعة - ${minutes} دقيقة - ${seconds} ثانية`;

  if (distance < 0) {
    countdownElement.innerHTML = "🎉 تم الانطلاق!";
  }
}

setInterval(updateCountdown, 1000);

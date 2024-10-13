const form = document.getElementById('horoscopeForm');
const result = document.getElementById('result');
const prediction = document.getElementById('prediction');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const dob = new Date(document.getElementById('dob').value);
  const birthplace = document.getElementById('birthplace').value;

  const horoscope = generateHoroscope(name, dob, birthplace);
  displayHoroscope(horoscope);
});

function generateHoroscope(name, dob, birthplace) {
  const zodiacSigns = [
    "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
    "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
  ];
  const zodiacSign = zodiacSigns[dob.getMonth()];

  const predictions = [
    "The stars align in your favor, bringing unexpected opportunities.",
    "A period of personal growth and self-discovery awaits you.",
    "Your creativity will flourish, leading to exciting new projects.",
    "Financial prosperity is on the horizon; stay focused on your goals.",
    "Love and harmony will strengthen your relationships this month.",
    "A challenging obstacle will ultimately lead to a valuable life lesson.",
    "Your intuition is heightened; trust your inner voice for guidance.",
    "A long-awaited journey will bring enlightenment and joy.",
    "Your hard work will soon be recognized and rewarded.",
    "New connections will open doors to exciting collaborations."
  ];

  const randomPrediction = predictions[Math.floor(Math.random() * predictions.length)];

  return `Dear ${name}, born under the sign of ${zodiacSign} in ${birthplace}, your cosmic energy is vibrant and full of potential. ${randomPrediction} Remember, the power to shape your destiny lies within you. Embrace the opportunities that come your way and stay true to your authentic self.`;
}

function displayHoroscope(horoscope) {
  result.classList.remove('hidden');
  
  // Animate the result appearance
  gsap.fromTo(result, 
    { opacity: 0, y: 20 }, 
    { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
  );

  // Animate the text reveal
  prediction.innerHTML = '';
  let i = 0;
  const typeWriter = () => {
    if (i < horoscope.length) {
      prediction.innerHTML += horoscope.charAt(i);
      i++;
      setTimeout(typeWriter, 20);
    }
  };
  typeWriter();
}

// Initial animations
gsap.from('.container', { opacity: 0, y: -50, duration: 1, ease: "power2.out" });
gsap.from('h1', { opacity: 0, y: -20, duration: 1, delay: 0.5, ease: "power2.out" });
gsap.from('form', { opacity: 0, y: 20, duration: 1, delay: 0.7, ease: "power2.out" });
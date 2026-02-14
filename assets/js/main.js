// --- CONFIGURATION ---
// Set your relationship start date here: YYYY, MM (0-indexed), DD
const startDate = new Date(2025, 8, 13); // Jan 15, 2023

// --- TIMER LOGIC ---
function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById('timer').innerText = 
        `${days} Days, ${hours} Hours, ${minutes} Mins, ${seconds} Secs`;
}

setInterval(updateTimer, 1000);
updateTimer(); // Initial call

// --- INTERACTION LOGIC ---
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const modal = document.getElementById('successModal');
const closeModal = document.getElementsByClassName('close')[0];

// The "Runaway" No Button
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// The Happy Yes Button
yesBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    confettiEffect();
});

// Close Modal
closeModal.onclick = () => { modal.style.display = 'none'; }
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Simple Confetti (Optional visual flair)
function confettiEffect() {
    const colors = ['#ff0', '#f00', '#0f0', '#00f', '#f0f'];
    for(let i=0; i<100; i++) {
        const div = document.createElement('div');
        div.style.position = 'fixed';
        div.style.left = Math.random() * 100 + 'vw';
        div.style.top = '-10px';
        div.style.width = '10px';
        div.style.height = '10px';
        div.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        div.style.transition = 'top 2s ease-in, transform 2s';
        document.body.appendChild(div);
        
        setTimeout(() => {
            div.style.top = '100vh';
            div.style.transform = `rotate(${Math.random() * 360}deg)`;
        }, 100);
        
        // Clean up DOM
        setTimeout(() => div.remove(), 2100);
    }
}

// --- BACKGROUND SLIDER LOGIC ---
const bgImages = document.querySelectorAll('.bg-img');
let bgIndex = 0;

function changeBackground() {
    // 1. Remove 'active' class from current image
    bgImages[bgIndex].classList.remove('active');

    // 2. Calculate next index (loop back to 0 if at end)
    bgIndex = (bgIndex + 1) % bgImages.length;

    // 3. Add 'active' class to new image
    bgImages[bgIndex].classList.add('active');
}

// Change image every 5 seconds (5000ms)
setInterval(changeBackground, 5000);
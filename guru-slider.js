const guruData = [
    { name: "Bu Siti Aminah", position: "Guru Matematika", img: "images/contoh1.png" },
    { name: "Pak Hasan Basri", position: "Kepala Sekolah", img: "images/contoh2.png" },
    { name: "Bu Indah Lestari", position: "Guru Bahasa", img: "images/contoh3.png" },
    { name: "Pak Hadi Santoso", position: "Guru IPA", img: "images/contoh4.png" },
    { name: "Bu Rina Marlina", position: "Guru IPS", img: "images/contoh5.png" },
    { name: "Pak Joko Riyadi", position: "Guru PKN", img: "images/contoh6.png" }
];

const guruContainer = document.querySelector('.guru-container');
let currentIndex = 0;
const totalVisible = 3; // Menampilkan 3 guru sekaligus

function updateGuruCards() {
    guruContainer.innerHTML = '';
    for (let i = 0; i < totalVisible; i++) {
        const index = (currentIndex + i) % guruData.length;
        const guru = guruData[index];
        const card = document.createElement('div');
        card.classList.add('guru-card', 'fade-in');
        card.style.transitionDelay = `${i * 0.2}s`;
        card.innerHTML = `
            <img src="${guru.img}" alt="${guru.name}">
            <h3>${guru.name}</h3>
            <p>${guru.position}</p>
        `;
        guruContainer.appendChild(card);
    }
}

document.getElementById('prev-btn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + guruData.length) % guruData.length;
    updateGuruCards();
});

document.getElementById('next-btn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % guruData.length;
    updateGuruCards();
});

updateGuruCards();

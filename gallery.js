 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfrBS9gmLIthFTxa88i2S6Q1dqcZwxbYA",
  authDomain: "qaswa-union-91a81.firebaseapp.com",
  projectId: "qaswa-union-91a81",
  storageBucket: "qaswa-union-91a81.firebasestorage.app",
  messagingSenderId: "480598291198",
  appId: "1:480598291198:web:d46e5cf2ac765b5df9abaf",
  measurementId: "G-BCLKHWQZV8"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const galleryContainer = document.getElementById('gallery-container');

// Listen for Gallery Updates
db.collection("gallery").orderBy("timestamp", "desc").onSnapshot((snapshot) => {
    galleryContainer.innerHTML = ''; 

    snapshot.forEach((doc) => {
        const photo = doc.data();
        
        // IMPORTANT: Added ${photo.category} to the class list
        const photoHTML = `
            <div class="gallery-item ${photo.category}">
                <img src="${photo.image}" alt="Gallery Image" loading="lazy">
                <div class="photo-overlay">
                    <span>${photo.category.toUpperCase()}</span>
                </div>
            </div>
        `;
        
        galleryContainer.insertAdjacentHTML('beforeend', photoHTML);
    });
});

// Filtering logic to work with the classes above
function filterGallery(category) {
    const items = document.querySelectorAll('.gallery-item');
    const buttons = document.querySelectorAll('.filter-btn');
    
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
            setTimeout(() => item.style.opacity = '1', 10);
        } else {
            item.style.opacity = '0';
            setTimeout(() => item.style.display = 'none', 300);
        }
    });
}
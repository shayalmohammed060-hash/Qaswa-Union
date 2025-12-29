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

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// 2. The function to show members
const committeeContainer = document.getElementById('committee-container');

// Listen for live updates
db.collection("committee").orderBy("timestamp", "desc").onSnapshot((snapshot) => {
    // Clear the container so it refreshes correctly
    committeeContainer.innerHTML = '';

    snapshot.forEach((doc) => {
        const member = doc.data();
        
        // Create the HTML - Updated to match your EXACT CSS classes
        const memberHTML = `
            <div class="member-card">
                <span class="role-title">${member.role}</span>
                <div class="img-box">
                    <img src="${member.image}" alt="${member.name}" style="width:100%; height:100%; border-radius:50%; object-fit:cover;">
                </div>
                <h3>${member.name}</h3>
                <p><i class="fas fa-map-marker-alt"></i> Live Member</p>
            </div>
        `;
        
        committeeContainer.insertAdjacentHTML('beforeend', memberHTML);
    });
}, (error) => {
    console.error("Error fetching committee:", error);
});
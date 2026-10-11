// Central database containing titles, text descriptions, and placeholder images
const serviceData = {
    guarding: {
        title: "Security Guarding",
        image: "https://unsplash.com",
        description: "Professional, vetted, and fully trained physical security personnel deployed to safeguard diplomatic missions, corporate properties, and industrial infrastructure 24/7."
    },
    occ: {
        title: "24/7 Operations Control Center",
        image: "https://unsplash.com",
        description: "Our state-of-the-art dispatch and monitoring hub overseeing real-time tracking, resource allocation, emergency routing, and constant threat intelligence metrics."
    },
    alarm: {
        title: "Intruder Alarm Systems",
        image: "https://unsplash.com",
        description: "Advanced motion detection grids and early warning deployment architectures that instantly log breaches and feed live tracking data directly to tactical teams."
    },
    cctv: {
        title: "CCTV Solutions",
        image: "https://unsplash.com",
        description: "High-definition enterprise camera grids integrated with smart software to provide seamless perimeter safety tracking, records management, and video verification."
    },
    access: {
        title: "Access Control",
        image: "https://unsplash.com",
        description: "Smart credential architectures including biometric portals, proximity verification grids, and secure visitor badging to prevent unauthorized facility entry."
    },
    patrol: {
        title: "Mobile Patrol & Rapid Response",
        image: "https://unsplash.com",
        description: "Highly visible response units deployed in localized areas, trained to deal with perimeter alarms, situational threats, and crisis intervention tasks."
    }
};

// Controls showing the modal along with target image assets
function openModal(serviceKey) {
    const modal = document.getElementById("serviceModal");
    const title = document.getElementById("modalTitle");
    const description = document.getElementById("modalDescription");
    const imgElement = document.getElementById("modalImage");

    if (serviceData[serviceKey]) {
        title.innerText = serviceData[serviceKey].title;
        description.innerText = serviceData[serviceKey].description;
        imgElement.src = serviceData[serviceKey].image; // Sets picture src dynamically
        modal.style.display = "block";
    }
}

function closeModal() {
    document.getElementById("serviceModal").style.display = "none";
}

// Close popup safely if user clicks the dark background space
window.onclick = function(event) {
    const modal = document.getElementById("serviceModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

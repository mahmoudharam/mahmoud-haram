// Central database containing titles, text descriptions, and your uploaded images
const serviceData = {
    guarding: {
        title: "Security Guarding",
        image: "1.JPG", // تم التعديل إلى حروف كبيرة احتياطاً
        altImage: "1.jpg",
        description: "Professional, vetted, and fully trained physical security personnel deployed to safeguard diplomatic missions, corporate properties, and industrial infrastructure 24/7."
    },
    occ: {
        title: "24/7 Operations Control Center",
        image: "2.JPG",
        altImage: "2.jpg",
        description: "Our state-of-the-art dispatch and monitoring hub overseeing real-time tracking, resource allocation, emergency routing, and constant threat intelligence metrics."
    },
    alarm: {
        title: "Intruder Alarm Systems",
        image: "3.JPG",
        altImage: "3.jpg",
        description: "Advanced motion detection grids and early warning deployment architectures that instantly log breaches and feed live tracking data directly to tactical teams."
    },
    cctv: {
        title: "CCTV Solutions",
        image: "4.JPG",
        altImage: "4.jpg",
        description: "High-definition enterprise camera grids integrated with smart software to provide seamless perimeter safety tracking, records management, and video verification."
    },
    access: {
        title: "Access Control",
        image: "5.JPG",
        altImage: "5.jpg",
        description: "Smart credential architectures including biometric portals, proximity verification grids, and secure visitor badging to prevent unauthorized facility entry."
    },
    patrol: {
        title: "Mobile Patrol & Rapid Response",
        image: "6.JPG",
        altImage: "6.jpg",
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
        
        // محاولة تحميل الصورة بامتداد الحروف الكبيرة، وإذا فشلت يتم التحويل للحروف الصغيرة تلقائياً
        imgElement.src = serviceData[serviceKey].image;
        imgElement.onerror = function() {
            this.src = serviceData[serviceKey].altImage;
            this.onerror = null; // يمنع التكرار اللانهائي في حال عدم وجود الصورة مطلقاً
        };
        
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

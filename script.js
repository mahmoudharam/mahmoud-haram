const serviceData = {
    guarding: {
        title: "Security Guarding",
        image: "1.jpg",
        altImage: "1.JPG",
        description: "Professional, vetted, and fully trained physical security personnel deployed to safeguard diplomatic missions, corporate properties, and industrial infrastructure 24/7."
    },
    occ: {
        title: "24/7 Operations Control Center",
        image: "2.jpg",
        altImage: "2.JPG",
        description: "Our state-of-the-art dispatch and monitoring hub overseeing real-time tracking, resource allocation, emergency routing, and constant threat intelligence metrics."
    },
    alarm: {
        title: "Intruder Alarm Systems",
        image: "3.jpg",
        altImage: "3.JPG",
        description: "Advanced motion detection grids and early warning deployment architectures that instantly log breaches and feed live tracking data directly to tactical teams."
    },
    cctv: {
        title: "CCTV Solutions",
        image: "4.jpg",
        altImage: "4.JPG",
        description: "High-definition enterprise camera grids integrated with smart software to provide seamless perimeter safety tracking, records management, and video verification."
    },
    access: {
        title: "Access Control",
        image: "5.jpg",
        altImage: "5.JPG",
        description: "Smart credential architectures including biometric portals, proximity verification grids, and secure visitor badging to prevent unauthorized facility entry."
    },
    patrol: {
        title: "Mobile Patrol & Rapid Response",
        image: "6.jpg",
        altImage: "6.JPG",
        description: "Highly visible response units deployed in localized areas, trained to deal with perimeter alarms, situational threats, and crisis intervention tasks."
    }
};

// دالة الفتح الذكي والإجبارية لتشغيل تطبيق الخرائط على الآيفون والأندرويد مباشرة
function openHqLocation(event) {
    event.preventDefault();
    
    const lat = "30.0464126";
    const lon = "31.3516486";
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    if (isIOS) {
        // إجبار الآيفون على تشغيل تطبيق الخرائط المدمج مباشرة بالديب لينك
        window.location.href = `maps://://google.com{lat},${lon}&amp;ll=`;
    } else {
        // إجبار الأندرويد على تشغيل تطبيق الخرائط الرسمي مباشرة ببروتوكول النظام الجغرافي
        window.location.href = `geo:${lat},${lon}?q=${lat},${lon}(Forces+Plus+Security)`;
    }

    // رابط الويب الاحتياطي الشامل بالمعرّف الموثق للشركة في حال استغرق الهاتف نصف ثانية للاستجابة
    setTimeout(function() {
        window.open("https://google.com", "_blank");
    }, 500);
}

// التحكم بالنوافذ المنبثقة للخدمات
function openModal(serviceKey) {
    const modal = document.getElementById("serviceModal");
    const title = document.getElementById("modalTitle");
    const description = document.getElementById("modalDescription");
    const imgElement = document.getElementById("modalImage");

    if (modal && serviceData[serviceKey]) {
        title.innerText = serviceData[serviceKey].title;
        description.innerText = serviceData[serviceKey].description;
        
        imgElement.src = serviceData[serviceKey].image;
        imgElement.onerror = function() {
            this.src = serviceData[serviceKey].altImage;
            this.onerror = null; 
        };
        
        modal.style.display = "block";
        modal.style.pointerEvents = "auto";
    }
}

function closeModal() {
    const modal = document.getElementById("serviceModal");
    if (modal) {
        modal.style.display = "none";
        modal.style.pointerEvents = "none";
    }
}

window.addEventListener('click', function(event) {
    const modal = document.getElementById("serviceModal");
    if (modal && event.target === modal) {
        modal.style.display = "none";
        modal.style.pointerEvents = "none";
    }
});

document.addEventListener("DOMContentLoaded", () => {


    // Auto-hide header on scroll
    let lastScrollY = window.scrollY;
    window.addEventListener("scroll", () => {
        const header = document.getElementById("header");
        header.classList.toggle("hidden", window.scrollY > lastScrollY);
        lastScrollY = window.scrollY;
    });
    
    

    // Carousel Functionality
        const track = document.querySelector(".carousel-track");
        const slides = Array.from(track.children);
        const prevButton = document.querySelector(".carousel-button.prev");
        const nextButton = document.querySelector(".carousel-button.next");
    
        let currentIndex = 0;
    
        const updateCarousel = () => {
            const slideWidth = slides[0].getBoundingClientRect().width;
            track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        };
    
        nextButton.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % slides.length; // เลื่อนไปข้างหน้า
            updateCarousel();
        });
    
        prevButton.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length; // เลื่อนไปข้างหลัง
            updateCarousel();
        });
    
    // Toggle Dark Mode
const darkModeToggle = document.getElementById('darkModeToggle'); // ปุ่ม Toggle
document.body.classList.toggle('dark-mode', localStorage.getItem('darkMode') === 'true');

// Event Listener สำหรับเปลี่ยนโหมด
darkModeToggle.addEventListener('change', () => {
    const isDarkMode = darkModeToggle.checked;
    document.body.classList.toggle('dark-mode', isDarkMode);
    localStorage.setItem('darkMode', isDarkMode); // บันทึกสถานะ
});


    // Load initial state from LocalStorage
    if (localStorage.getItem("darkMode") === "true") {
        darkModeToggle.checked = true;
        updateDarkMode();
    }

    darkModeToggle.addEventListener("change", updateDarkMode);

    // Search Highlight Functionality
    window.performSearch = function () {
        const searchValue = document.getElementById("search").value.toLowerCase();
        const sections = document.querySelectorAll("section");

        sections.forEach((section) => {
            section.classList.toggle("highlight", section.textContent.toLowerCase().includes(searchValue));
        });
    };

    // Scroll to Top Button
    const scrollToTopButton = document.getElementById("scrollToTop");
    if (scrollToTopButton) {
        window.addEventListener("scroll", () => {
            scrollToTopButton.style.display = window.scrollY > 300 ? "block" : "none";
        });

        scrollToTopButton.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});
// ฟังก์ชันเลื่อนกลับไปด้านบน
function scrollToTop() {
    window.scrollTo({
        top: 0, // เลื่อนไปที่จุดเริ่มต้น (บนสุด)
        behavior: 'smooth' // เพิ่มเอฟเฟกต์เลื่อนอย่างนุ่มนวล
    });
}

// ฟังก์ชันแสดง/ซ่อนปุ่มเมื่อเลื่อนหน้าจอ
window.addEventListener('scroll', () => {
    const scrollToTopButton = document.getElementById('scrollToTop');
    if (window.scrollY > 300) { // หากเลื่อนลงมามากกว่า 300px
        scrollToTopButton.style.display = 'flex'; // แสดงปุ่ม
    } else {
        scrollToTopButton.style.display = 'none'; // ซ่อนปุ่ม
    }
});

// เพิ่ม Event Listener ให้ปุ่ม
document.getElementById('scrollToTop').addEventListener('click', scrollToTop);


function showNotification(message) { /* ฟังก์ชันสำหรับแสดงแจ้งเตือน */
    const container = document.getElementById("notification-container"); /* เลือกคอนเทนเนอร์ */
    const notification = document.createElement("div"); /* สร้างองค์ประกอบแจ้งเตือน */
    notification.className = "notification"; /* เพิ่มคลาส */
    notification.textContent = message; /* ใส่ข้อความ */
    container.appendChild(notification); /* เพิ่มแจ้งเตือนในคอนเทนเนอร์ */

    setTimeout(() => {
        notification.remove(); /* ลบแจ้งเตือนหลัง 3 วินาที */
    }, 5000);
}

showNotification("Welcome to Project !!"); /* เรียกใช้แจ้งเตือน */


function updateRealTimeClock() { /* ฟังก์ชันสำหรับอัปเดตนาฬิกา */
    const clockElement = document.getElementById("realTimeClock"); /* เลือกคอนเทนเนอร์แสดงเวลา */
    const now = new Date(); /* ดึงเวลาปัจจุบัน */
    
    const options = { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        weekday: 'short', 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    }; /* รูปแบบการแสดง */
    
    clockElement.textContent = now.toLocaleString('en-US', options); /* อัปเดตข้อความ */
}

setInterval(updateRealTimeClock, 1000); /* เรียกใช้ฟังก์ชันทุก 1 วินาที */
updateRealTimeClock(); /* เรียกใช้ฟังก์ชันทันทีเมื่อโหลด */

// Dark Mode Toggle
document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const darkModeEmoji = document.getElementById("darkModeEmoji");

    // Update Dark Mode
    const updateDarkMode = () => {
        const isDarkMode = darkModeToggle.checked; // ตรวจสอบสถานะ Toggle
        document.body.classList.toggle("dark-mode", isDarkMode);
        darkModeEmoji.textContent = isDarkMode ? "☁  𓁏" : "☀ 𓀀"; // เปลี่ยนอีโมจิ
        localStorage.setItem("darkMode", isDarkMode); // บันทึกสถานะใน LocalStorage
    };

    // โหลดสถานะจาก LocalStorage
    if (localStorage.getItem("darkMode") === "true") {
        darkModeToggle.checked = true;
        updateDarkMode();
    }

    // Event Listener
    darkModeToggle.addEventListener("change", updateDarkMode);
});


// ฟังก์ชันเปิด Modal
function openModal(imageSrc) {
    // สร้างโครงสร้าง Modal
    const modal = document.createElement('div');
    modal.classList.add('modal-overlay');
    modal.innerHTML = `
        <div class="modal-content">
            <button class="close-btn" onclick="closeModal()">×</button>
            <img src="${imageSrc}" alt="Gallery Image">
        </div>
    `;
    document.body.appendChild(modal);

    // เพิ่ม Event Listener สำหรับคลิกที่พื้นที่ว่าง
    modal.addEventListener('click', (event) => {
        if (event.target === modal) { // เช็คว่าคลิกที่ Overlay ไม่ใช่เนื้อหาใน Modal
            closeModal();
        }
    });
}

// ฟังก์ชันปิด Modal
function closeModal() {
    const modal = document.querySelector('.modal-overlay');
    if (modal) {
        modal.remove();
    }
}

// เพิ่ม Event Listener ให้แต่ละรูปในแกลเลอรี
document.querySelectorAll('.gallery img').forEach((img) => {
    img.addEventListener('click', () => {
        openModal(img.src); // ใช้ src ของรูปที่คลิก
    });
});
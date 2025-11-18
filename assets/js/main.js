// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS
    emailjs.init({
        publicKey: "YOUR_PUBLIC_KEY", // Sẽ được thay thế sau khi setup
        // Do not allow headless browsers
        blockHeadless: true,
        blockList: {
            // Block the suspended emails
            list: ['foo@emailjs.com', 'bar@emailjs.com'],
            // The variable contains the email address
            watchVariable: 'userEmail',
        },
        limitRate: {
            // Set the limit rate for the application
            id: 'app',
            // Allow 1 request per 10s
            throttle: 10000,
        },
    });
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
        
        // Close menu when clicking on nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Active navigation link highlighting
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    function updateActiveNav() {
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNav);
    
    // Header background change on scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.backgroundColor = 'white';
            header.style.backdropFilter = 'none';
        }
    });
    
    // Appointment form handling
    const appointmentForm = document.querySelector('.appointment-form');
    const appointmentBtns = document.querySelectorAll('.appointment-btn, .btn-primary');
    
    // Scroll to appointment form when appointment button is clicked
    appointmentBtns.forEach(btn => {
        if (btn.textContent.includes('Đặt Lịch')) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const appointmentSection = document.querySelector('.appointment');
                if (appointmentSection) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = appointmentSection.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        }
    });
    
    // Form validation and submission
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                phone: document.getElementById('phone').value,
                email: document.getElementById('email').value,
                service: document.getElementById('service').value,
                date: document.getElementById('date').value,
                time: document.getElementById('time').value,
                notes: document.getElementById('notes').value
            };
            
            // Basic validation
            if (!formData.name || !formData.phone || !formData.service || !formData.date || !formData.time) {
                showNotification('Vui lòng điền đầy đủ thông tin bắt buộc.', 'error');
                return;
            }
            
            // Phone validation
            const phoneRegex = /^[0-9]{10,11}$/;
            if (!phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
                showNotification('Số điện thoại không hợp lệ.', 'error');
                return;
            }
            
            // Email validation (if provided)
            if (formData.email) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(formData.email)) {
                    showNotification('Email không hợp lệ.', 'error');
                    return;
                }
            }
            
            // Date validation (must be future date)
            const selectedDate = new Date(formData.date);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            
            if (selectedDate < today) {
                showNotification('Vui lòng chọn ngày khám trong tương lai.', 'error');
                return;
            }
            
            // Format service name for better display
            const serviceNames = {
                'internal-medicine': 'Khám nội tổng quát',
                'cardiology': 'Bệnh lý tim mạch',
                'health-checkup': 'Khám sức khỏe định kỳ',
                'consultation': 'Tư vấn sức khỏe',
                'pediatrics': 'Nhi khoa (Sắp có)',
                'emergency-transport': 'Vận chuyển cấp cứu (Sắp có)'
            };
            
            // Format date for display
            const formattedDate = new Date(formData.date).toLocaleDateString('vi-VN');
            
            // Prepare email template parameters
            const templateParams = {
                patient_name: formData.name,
                patient_phone: formData.phone,
                patient_email: formData.email || 'Không cung cấp',
                service_name: serviceNames[formData.service] || formData.service,
                appointment_date: formattedDate,
                appointment_time: formData.time,
                notes: formData.notes || 'Không có ghi chú',
                booking_datetime: new Date().toLocaleString('vi-VN'),
                clinic_email: 'cozyclinic2026@gmail.com'
            };
            
            // Show loading notification
            showNotification('Đang gửi thông tin đặt lịch...', 'info');
            
            // Send email using EmailJS
            emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
                .then(function(response) {
                    console.log('Email sent successfully:', response.status, response.text);
                    showNotification('Đặt lịch khám thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.', 'success');
                    appointmentForm.reset();
                }, function(error) {
                    console.error('EmailJS error:', error);
                    
                    // Fallback: Create mailto link
                    const mailtoBody = `
Thông tin đặt lịch khám:

- Họ tên: ${formData.name}
- Điện thoại: ${formData.phone}
- Email: ${formData.email || 'Không cung cấp'}
- Dịch vụ: ${serviceNames[formData.service] || formData.service}
- Ngày khám: ${formattedDate}
- Giờ khám: ${formData.time}
- Ghi chú: ${formData.notes || 'Không có'}

Thời gian đặt: ${new Date().toLocaleString('vi-VN')}
                    `.trim();
                    
                    const mailtoLink = `mailto:cozyclinic2026@gmail.com?subject=Đặt lịch khám - ${formData.name}&body=${encodeURIComponent(mailtoBody)}`;
                    
                    showNotification('Đang mở ứng dụng email để gửi thông tin...', 'info');
                    window.location.href = mailtoLink;
                    
                    setTimeout(() => {
                        showNotification('Vui lòng gửi email hoặc gọi trực tiếp: 0972 562 426', 'error');
                    }, 3000);
                });
        });
    }
    
    // Set minimum date for appointment to today
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }
    
    // Animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.service-card, .achievement, .stat').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
    
    // Service and achievement card hover effects
    document.querySelectorAll('.service-card, .achievement').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existing = document.querySelector('.notification');
    if (existing) {
        existing.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        max-width: 400px;
        padding: 16px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        animation: slideIn 0.3s ease;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;
    
    // Set background color based on type
    switch(type) {
        case 'success':
            notification.style.backgroundColor = '#10b981';
            break;
        case 'error':
            notification.style.backgroundColor = '#ef4444';
            break;
        case 'info':
        default:
            notification.style.backgroundColor = '#3b82f6';
            break;
    }
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Add CSS for notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 20px;
        cursor: pointer;
        margin-left: 12px;
        padding: 0;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .notification-close:hover {
        opacity: 0.8;
    }
    
    .hamburger.active span:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    
    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active span:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }
`;
document.head.appendChild(style);

// Utility functions
function formatPhoneNumber(phoneNumber) {
    // Remove all non-digit characters
    const numbers = phoneNumber.replace(/\D/g, '');
    
    // Format as Vietnamese phone number
    if (numbers.length === 10) {
        return numbers.replace(/(\d{4})(\d{3})(\d{3})/, '$1 $2 $3');
    } else if (numbers.length === 11) {
        return numbers.replace(/(\d{4})(\d{4})(\d{3})/, '$1 $2 $3');
    }
    
    return phoneNumber;
}

// Add phone number formatting to phone input
document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            e.target.value = formatPhoneNumber(e.target.value);
        });
    }
});

// Scroll to top functionality (optional)
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll to top button (optional)
document.addEventListener('DOMContentLoaded', function() {
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '↑';
    scrollButton.className = 'scroll-to-top';
    scrollButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #2563eb;
        color: white;
        border: none;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;
    
    scrollButton.addEventListener('click', scrollToTop);
    document.body.appendChild(scrollButton);
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollButton.style.opacity = '1';
            scrollButton.style.visibility = 'visible';
        } else {
            scrollButton.style.opacity = '0';
            scrollButton.style.visibility = 'hidden';
        }
    });
});

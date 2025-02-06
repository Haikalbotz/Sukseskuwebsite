        // Toggle Menu untuk Mobile
        function toggleMenu() {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.toggle('active');
        }

        // GSAP Animations
        gsap.from('.hero-content', { opacity: 0, y: 20, duration: 1, delay: 0.5 });
        gsap.from('.hero-animation', { opacity: 0, x: 20, duration: 1, delay: 1 });

        // WhatsApp Integration
        function orderViaWhatsApp(productName) {
            const phoneNumber = "1234567890"; // Ganti dengan nomor WhatsApp Anda
            const message = `Halo, saya ingin memesan ${productName}.`;
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        }
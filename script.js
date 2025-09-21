document.addEventListener('DOMContentLoaded', () => {
    // Efek typing pada judul hero (opsional, bisa diganti dengan glitch effect)
    // const heroHeading = document.querySelector('.glitch');
    // const text = "Tempatnya Para Future Leaders!";
    // let i = 0;
    // ... (kode typewriter)

    // Validasi Formulir Kontak
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Mencegah form submit secara default
            
            const nama = document.getElementById('nama').value;
            const email = document.getElementById('email').value;
            const pesan = document.getElementById('pesan').value;

            if (nama === '' || email === '' || pesan === '') {
                alert('Semua kolom harus diisi!');
            } else if (!validateEmail(email)) {
                alert('Email tidak valid!');
            } else {
                alert('Pesan Anda berhasil dikirim! Terima kasih.');
                contactForm.reset();
            }
        });
    }

    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    // Efek Parallax di Halaman Galeri (contoh)
    // const galleryItems = document.querySelectorAll('.gallery-item');
    // window.addEventListener('scroll', () => {
    //     galleryItems.forEach(item => {
    //         const rect = item.getBoundingClientRect();
    //         if (rect.top < window.innerHeight && rect.bottom > 0) {
    //             item.style.transform = `translateY(${rect.top * 0.1}px)`;
    //         }
    //     });
    // });
});

document.addEventListener('DOMContentLoaded', () => {
    /* ==========================================
       1. LOGIKA FORM REGISTRASI (GOOGLE SHEETS)
       ========================================== */
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwgP9XmxWm3Bp1oDRsjPjluhN_p6SqenM09VnJnezpyf42Y3d5ZOPblTae64dwbhHIGng/exec';
    
    const form = document.getElementById('attendanceForm');
    const submitBtn = document.getElementById('submitBtn');
    const statusMsg = document.getElementById('status-msg');

    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            
            submitBtn.disabled = true;
            submitBtn.innerText = 'Mengirim...';
            statusMsg.className = '';
            statusMsg.innerText = '';

            fetch(scriptURL, { 
                method: 'POST', 
                mode: 'no-cors',
                body: new FormData(form)
            })
            .then(response => {
                statusMsg.className = 'success';
                statusMsg.innerText = 'Data registrasi berhasil terkirim!';
                form.reset();
            })
            .catch(error => {
                statusMsg.className = 'error';
                statusMsg.innerText = 'Gagal mengirim data. Coba lagi.';
                console.error('Error!', error.message);
            })
            .finally(() => {
                submitBtn.disabled = false;
                submitBtn.innerText = 'Kirim Data';
            });
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwgP9XmxWm3Bp1oDRsjPjluhN_p6SqenM09VnJnezpyf42Y3d5ZOPblTae64dwbhHIGng/exec';
    
    const form = document.getElementById('attendanceForm');
    const submitBtn = document.getElementById('submitBtn');
    const statusMsg = document.getElementById('status-msg');

    // Elemen Modal
    const modal = document.getElementById('successModal');
    const closeModal = document.getElementById('closeModal');

    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            
            submitBtn.disabled = true;
            submitBtn.innerText = 'Mengirim...';
            statusMsg.className = '';
            statusMsg.innerText = '';

            fetch(scriptURL, { 
                method: 'POST', 
                mode: 'no-cors',
                body: new FormData(form)
            })
            .then(response => {
                statusMsg.className = 'success';
                statusMsg.innerText = 'Data registrasi berhasil terkirim!';
                form.reset();

                // TAMPILKAN MODAL POP-UP
                if (modal) {
                    modal.style.display = 'flex';
                }
            })
            .catch(error => {
                statusMsg.className = 'error';
                statusMsg.innerText = 'Gagal mengirim data. Coba lagi.';
                console.error('Error!', error.message);
            })
            .finally(() => {
                submitBtn.disabled = false;
                submitBtn.innerText = 'Kirim Data';
            });
        });
    }

    // Fungsi Tutup Modal saat Klik Tombol (X)
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    // Fungsi Tutup Modal saat Klik di Luar Kotak Modal
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
// /* ==========================================
//        LOGIKA CAROUSEL (SMOOTH SCROLL)
//        ========================================== */
//     const trackContainer = document.querySelector(".carousel-track-container");
//     const track = document.getElementById("carouselTrack");
//     const prevBtn = document.getElementById("prevBtn");
//     const nextBtn = document.getElementById("nextBtn");

//     if (trackContainer && track) {
//         const slide = track.querySelector(".carousel-slide");
//         if (!slide) return;

//         // Hitung jarak geser (lebar 1 kartu + gap)
//         const getScrollAmount = () => slide.offsetWidth + 20;

//         // Fungsi helper untuk scroll secara smooth
//         const smoothScrollBy = (amount) => {
//             trackContainer.scrollBy({
//                 left: amount,
//                 behavior: 'smooth'
//             });
//         };

//         // Tombol Next (Kanan)
//         if (nextBtn) {
//             nextBtn.addEventListener("click", () => {
//                 smoothScrollBy(getScrollAmount());
//             });
//         }

//         // Tombol Prev (Kiri)
//         if (prevBtn) {
//             prevBtn.addEventListener("click", () => {
//                 smoothScrollBy(-getScrollAmount());
//             });
//         }

//         // Auto Play
//         let autoPlayTimer = setInterval(() => {
//             const isEnd = trackContainer.scrollLeft + trackContainer.clientWidth >= trackContainer.scrollWidth - 10;
//             if (isEnd) {
//                 trackContainer.scrollTo({ left: 0, behavior: 'smooth' });
//             } else {
//                 smoothScrollBy(getScrollAmount());
//             }
//         }, 3000);

//         // Pause saat hovered
//         trackContainer.addEventListener("mouseenter", () => clearInterval(autoPlayTimer));
//         trackContainer.addEventListener("mouseleave", () => {
//             autoPlayTimer = setInterval(() => {
//                 const isEnd = trackContainer.scrollLeft + trackContainer.clientWidth >= trackContainer.scrollWidth - 10;
//                 if (isEnd) {
//                     trackContainer.scrollTo({ left: 0, behavior: 'smooth' });
//                 } else {
//                     smoothScrollBy(getScrollAmount());
//                 }
//             }, 3000);
//         });
//     }
// });
window.addEventListener('load', () => {
    const openingScreen = document.getElementById('opening-screen');
    const spans = document.querySelectorAll('#wave-text span');
    
    let currentIndex = 0;
    const totalChars = spans.length;
    const waveSpeed = 220;

    setTimeout(() => {
        const waveInterval = setInterval(() => {
            // Hapus kelas 'active' dari semua huruf
            spans.forEach(span => span.classList.remove('active'));

            if (currentIndex < totalChars) {
                // Perbesar huruf saat ini secara in-place (di tempat)
                spans[currentIndex].classList.add('active');
                currentIndex++;
            } else {
                clearInterval(waveInterval);

                // Kembalikan semua huruf ke ukuran seragam yang menyala
                spans.forEach(span => {
                    span.style.fontSize = "6rem";
                    span.style.opacity = "1";
                    span.style.textShadow = "0 0 20px rgba(210, 100, 55, 0.8)";
                });

                // Tutup layar opening secara mulus
                setTimeout(() => {
                    if (openingScreen) {
                        openingScreen.classList.add('fade-out');
                    }
                }, 800);
            }
        }, waveSpeed);
    }, 300);
});
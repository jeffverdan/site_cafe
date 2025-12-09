// Usando IntersectionObserver para revelar elementos com classe .reveal
document.addEventListener("DOMContentLoaded", () => {
    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                // Se não quiser observar novamente, descomente:
                // observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2 // porcentagem do elemento visível para ativar
    });

    revealElements.forEach(el => observer.observe(el));
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
    const email = document.getElementById("email").value;
    const captcha = hcaptcha.getResponse();

    if (!email) {
        alert("Por favor, preencha seu e-mail.");
        e.preventDefault();
        return;
    }

    if (!captcha) {
        alert("Por favor, confirme que você não é um robô.");
        e.preventDefault();
        return;
    }
});

// ===== HERO SHRINK ON SCROLL (menu.html) =====
document.addEventListener("scroll", () => {
    const hero = document.querySelector(".menu-hero");
    if (!hero) return; // faz nada se não estiver na página do menu

    if (window.scrollY > 50) {
        hero.classList.add("shrink");
    } else {
        hero.classList.remove("shrink");
    }
});



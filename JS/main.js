document.addEventListener("DOMContentLoaded", () => {

    // ------------------- EFFET DE SAISIE -------------------
    const heroText = document.getElementById("heroText");
    const fullText = "Venez découvrir Julien Raynaud avec son expérience SYSTEM[JR].";
    let i = 0;

    const type = () => {
        if (i <= fullText.length) {
            heroText.textContent = fullText.slice(0, i);
            i++;
            setTimeout(type, 30);
        }
    };
    type();

    // ------------------- TRANSITION START → MAIN -------------------
    const discoverBtn = document.getElementById("discoverBtn");
    const fadeOverlay = document.getElementById("fadeOverlay");
    const startScreen = document.getElementById("startScreen");
    const mainContent = document.getElementById("mainContent");

    if (discoverBtn) {
        discoverBtn.addEventListener("click", () => {
            fadeOverlay.style.opacity = 1;
            fadeOverlay.style.pointerEvents = "auto";

            setTimeout(() => {
                startScreen.style.display = "none";
                mainContent.style.display = "flex";
                fadeOverlay.style.opacity = 0;
                fadeOverlay.style.pointerEvents = "none";
            }, 700);
        });
    }

    // ------------------- WIZARD / PROJECTS -------------------
    const projectButtons = document.querySelectorAll("[data-category]");
    const display = document.getElementById("projectDisplay");

    const projects = {
        front: { text: "Projet Alpha – Interface claire et logique machine", url: "DA.html" },
        back: { text: "API Système – Gestion serveur et données", url: "API-serve.html" },
        design: { text: "UI/UX Concept – Design organique et mécanique", url: "UI-UX.html" }
    };

    projectButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            if (!display) return;
            const category = btn.dataset.category;
            const project = projects[category];

            display.innerHTML = project
                ? `
                    <a href="${project.url || '#'}" 
                        class="block p-4 rounded border border-[rgba(80,76,67,0.4)] bg-white/10 
                                hover:bg-white/20 hover:scale-105 transition-all cursor-pointer text-[#504c43]">
                        ${project.text}
                    </a>`
                : "Aucun projet";
        });
    });

    // ------------------- BOOT SCREEN -------------------
    const boot = document.getElementById("bootScreen");
    window.addEventListener("load", () => {
        if (boot) {
            setTimeout(() => {
                boot.classList.add("hidden");
                document.querySelectorAll(".fade-in").forEach((el, i) => {
                    setTimeout(() => el.classList.add("show"), i * 200);
                });
            }, 2500);
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const bootScreen = document.getElementById("bootScreen");
    const bootText = document.getElementById("bootText");
    const mainContent = document.getElementById("mainContent");
    const fullText = "Chargement de la page…";
    let index = 0;

    // Typing effect pour boot screen
    function typeBootText() {
        if (index <= fullText.length) {
            bootText.textContent = fullText.slice(0, index);
            index++;
            setTimeout(typeBootText, 40);
        }
    }
    typeBootText();

    // Masquer le boot screen après 2,5s et afficher le contenu
    window.addEventListener("load", () => {
        setTimeout(() => {
            if (bootScreen) bootScreen.classList.add("hidden");
            if (mainContent) mainContent.style.opacity = 1;
        }, 2500);
    });

    const heroText = document.getElementById("heroText");
    const lines = [
        "Initialisation du système...",
        "Chargement de l’interface NieraUI...",
        "Authentification de l’utilisateur...",
        "Accès autorisé. Bienvenue, explorateur."
    ];

    let lineIndex = 0;
    let charIndex = 0;

    function typeLine() {
        if (charIndex < lines[lineIndex].length) {
            heroText.textContent += lines[lineIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeLine, 40);
        } else {
            heroText.textContent += "\n";
            charIndex = 0;
            lineIndex++;
            if (lineIndex < lines.length) setTimeout(typeLine, 800);
            else document.getElementById("discoverBtn").classList.add("visible");
        }
    }
    typeLine();
});

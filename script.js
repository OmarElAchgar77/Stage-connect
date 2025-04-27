// Fonction pour gérer le clic sur le bouton de la bannière
function handleBannerButtonClick() {
    const bannerButton = document.querySelector('.banner button');
    if (bannerButton) {
        bannerButton.addEventListener('click', () => {
            alert('Bouton de la bannière cliqué !');
        });
    }
}

// Fonction pour valider le formulaire de connexion
function validateLoginForm() {
    const loginForm = document.querySelector('.login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Empêche l'envoi du formulaire pour valider
            const inputs = loginForm.querySelectorAll('input');
            let isValid = true;

            inputs.forEach(input => {
                if (input.value.trim() === "") {
                    isValid = false;
                    input.style.borderColor = 'red';
                } else {
                    input.style.borderColor = 'green';
                }
            });

            if (isValid) {
                alert('Connexion réussie !');
                // Ici tu peux envoyer réellement le formulaire
                // loginForm.submit();
            } else {
                alert('Veuillez remplir tous les champs.');
            }
        });
    }
}

// Fonction pour afficher une animation au scroll
function animateOnScroll() {
    window.addEventListener('scroll', () => {
        const offers = document.querySelectorAll('.offer');
        offers.forEach(offer => {
            const rect = offer.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                offer.style.transform = 'translateY(0)';
                offer.style.opacity = '1';
            }
        });
    });
}

// Fonction principale pour tout initialiser
function init() {
    handleBannerButtonClick();
    validateLoginForm();
    animateOnScroll();
}

// Quand la page est totalement chargée, on lance tout
window.addEventListener('DOMContentLoaded', init);







const darkModeBtn = document.getElementById('darkModeBtn');
darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

window.addEventListener('load', () => {
    setTimeout(() => {
        alert('Bienvenue sur notre site de stages !');
    }, 1000); // S'affiche après 1 seconde
});
   




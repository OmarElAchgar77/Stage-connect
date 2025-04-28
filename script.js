// // Fonction pour gérer le clic sur le bouton de la bannière
// function handleBannerButtonClick() {
//     const bannerButton = document.querySelector('.banner button');
//     if (bannerButton) {
//         bannerButton.addEventListener('click', () => {
//             alert('Bouton de la bannière cliqué !');
//         });
//     }
// }

// // Fonction pour valider le formulaire de connexion
    // function validateLoginForm() {
    //     const loginForm = document.querySelector('.login-form');
        
    //     if (loginForm) {
    //         loginForm.addEventListener('submit', (e) => {
    //             e.preventDefault(); // Prevent the form submission for validation
                
    //             const inputs = loginForm.querySelectorAll('input');
    //             let isValid = true;

    //             // Loop through each input and check if it's empty
    //             inputs.forEach(input => {
    //                 if (input.value.trim() === "") {
    //                     isValid = false;
    //                     input.style.borderColor = 'red'; // Highlight invalid field
    //                 } else {
    //                     input.style.borderColor = 'green'; // Highlight valid field
    //                 }
    //             });

    //             // If all fields are valid, proceed (submit the form or show success message)
    //             if (isValid) {
    //                 alert('Connexion réussie !');
    //                 // Uncomment this line to actually submit the form
    //                 // loginForm.submit();
    //             } else {
    //                 alert('Veuillez remplir tous les champs.');
    //             }
    //         });
    //     }
    // }

// // Fonction pour afficher une animation au scroll
// function animateOnScroll() {
//     window.addEventListener('scroll', () => {
//         const offers = document.querySelectorAll('.offer');
//         offers.forEach(offer => {
//             const rect = offer.getBoundingClientRect();
//             if (rect.top < window.innerHeight && rect.bottom >= 0) {
//                 offer.style.transform = 'translateY(0)';
//                 offer.style.opacity = '1';
//             }
//         });
//     });
// }

// // Fonction principale pour tout initialiser
// function init() {
//     handleBannerButtonClick();
//     validateLoginForm();
//     animateOnScroll();
// }

// // Quand la page est totalement chargée, on lance tout
// window.addEventListener('DOMContentLoaded', init);

// const darkModeBtn = document.getElementById('darkModeBtn');
// darkModeBtn.addEventListener('click', () => {
//     document.body.classList.toggle('dark-mode');
// });

// window.addEventListener('load', () => {
//     setTimeout(() => {
//         alert('Bienvenue sur notre site de stages !');
//     }, 1000); // S'affiche après 1 seconde
// });

// Preloader ===>

let loader = document.getElementById('preloader1');
window.addEventListener("load", function() {
    loader.style.display = 'none' ;
})


//  Scroll 

window.addEventListener("scroll", function() {
    const cards = document.querySelectorAll('.offers');
    
    cards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      if (cardTop < windowHeight - 50) { // Trigger slightly before it reaches the center
        card.classList.add('show');
      }
    });
  });
  

const Button_next = document.querySelector('.Nx');
const offers = document.querySelectorAll('.offer');

let currentOfferIndex = 0;

  // First, hide all offers except the first one
offers.forEach((offer, index) => {
    if (index !== 0) {
        offer.style.display = 'none';
    } else {
        offer.classList.add('show');
      }
  });
  
  Button_next.addEventListener('click', function () {
      // Hide current
      offers[currentOfferIndex].classList.remove('show');
      offers[currentOfferIndex].style.display = 'none';
  
      // Move to next
      currentOfferIndex++;
      if (currentOfferIndex >= offers.length) {
          currentOfferIndex = 0;
      }
  
      // Show next
      offers[currentOfferIndex].style.display = 'block';
      offers[currentOfferIndex].classList.add('show');
  });
  

let clair_mode = document.getElementById('darkModeBtn');




// Fonction pour valider le formulaire de connexion
function validateLoginForm() {
    const loginForm = document.querySelector('.login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Bloquer l'envoi du formulaire au début pour valider

            const emailInput = document.getElementById('email');
            const passwordInput = document.getElementById('password');
            let isValid = true;

            // Vérifier si l'email est vide
            if (emailInput.value.trim() === "") {
                emailInput.style.borderColor = 'red';
                isValid = false;
            } else {
                emailInput.style.borderColor = 'green';
            }

            // Vérifier si le mot de passe est vide
            if (passwordInput.value.trim() === "") {
                passwordInput.style.borderColor = 'red';
                isValid = false;
            } else {
                passwordInput.style.borderColor = 'green';
            }

            // Si tout est correct
            if (isValid) {
                alert('Connexion réussie !');
                loginForm.submit(); // Envoie le formulaire vers dashboard.html
            } else {
                alert('Veuillez remplir tous les champs.');
            }
        });
    }
}

// Appeler la fonction quand la page est chargée
window.addEventListener('DOMContentLoaded', validateLoginForm);



// Fonction pour valider la publication d'une offre
function validatePublishForm() {
    const publishForm = document.querySelector('.publish-form');

    if (publishForm) {
        publishForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Empêcher l'envoi du formulaire pour valider

            const inputs = publishForm.querySelectorAll('input, textarea, select');
            let isValid = true;

            // Vérifier tous les champs
            inputs.forEach(input => {
                if (input.value.trim() === "") {
                    input.style.borderColor = 'red';
                    isValid = false;
                } else {
                    input.style.borderColor = 'green';
                }
            });

            if (isValid) {
                alert('Votre offre a été publiée avec succès !');
                publishForm.submit(); // Envoyer le formulaire si tout est valide
            } else {
                alert('Veuillez remplir tous les champs correctement.');
            }
        });
    }
}

// Appeler cette fonction quand la page charge
window.addEventListener('DOMContentLoaded', () => {
    validatePublishForm();
    validateLoginForm(); // Tu peux aussi garder ici ta validation de connexion
});



// Fonction pour valider la publication d'une offre
function validatePublishForm() {
    const publishForm = document.querySelector('.publish-form');

    if (publishForm) {
        publishForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Empêcher l'envoi du formulaire pour valider

            const inputs = publishForm.querySelectorAll('input, textarea, select');
            let isValid = true;

            // Vérifier tous les champs
            inputs.forEach(input => {
                if (input.value.trim() === "") {
                    input.style.borderColor = 'red';
                    isValid = false;
                } else {
                    input.style.borderColor = 'green';
                }
            });

            if (isValid) {
                alert('Votre offre a été publiée avec succès !');
                publishForm.submit(); // Envoyer le formulaire si tout est valide
            } else {
                alert('Veuillez remplir tous les champs correctement.');
            }
        });
    }
}

// Appeler cette fonction quand la page charge
window.addEventListener('DOMContentLoaded', () => {
    validatePublishForm();
    validateLoginForm(); // Tu peux aussi garder ici ta validation de connexion
});

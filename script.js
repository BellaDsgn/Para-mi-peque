/* =====================================
   GABRIEL.EXE
   Hot Wheels Edition
===================================== */


/* ---------------------------
   LOADER
---------------------------- */

let progress = 0;

const progressBar = document.getElementById("progress-bar");
const loadingPercent = document.getElementById("loading-percent");

const loading = setInterval(() => {

    progress += Math.floor(Math.random() * 8) + 2;

    if (progress >= 100) {

        progress = 100;

        clearInterval(loading);

        setTimeout(() => {

            nextScreen("intro");

        }, 700);

    }

    progressBar.style.width = progress + "%";

    loadingPercent.textContent = progress + "%";

}, 100);


/* ---------------------------
   SCREEN NAVIGATION
---------------------------- */

function nextScreen(screenId) {

    const current = document.querySelector(".screen.active");

    const next = document.getElementById(screenId);

    if (!next) return;

    if (current) {

        current.classList.remove("active");

    }

    setTimeout(() => {

        next.classList.add("active");

    }, 100);

}


/* ---------------------------
   RIDE MESSAGES
---------------------------- */

const messages = {

    speed: {

        icon: "🏎️",

        text:
        "Para todos los lugares que todavía nos faltan recorrer juntos."

    },

    code: {

        icon: "💻",

        text:
        "Para todas las ideas, proyectos y sueños que todavía vas a construir."

    },

    love: {

        icon: "❤️",

        text:
        "Porque mi parte favorita de cualquier aventura siempre es compartirla contigo."

    }

};


function showMessage(type) {

    const messageBox =
        document.getElementById("ride-message");

    const icon =
        document.getElementById("message-icon");

    const text =
        document.getElementById("message-text");

    const finalButton =
        document.getElementById("final-button");


    icon.textContent = messages[type].icon;

    text.textContent = messages[type].text;


    messageBox.classList.add("show");

    finalButton.classList.remove("hidden");

}


/* ---------------------------
   RESTART
---------------------------- */

function restartExperience() {

    document.querySelectorAll(".screen")
        .forEach(screen => {

            screen.classList.remove("active");

        });


    setTimeout(() => {

        document
            .getElementById("loader")
            .classList.add("active");

        progress = 0;

        progressBar.style.width = "0%";

        loadingPercent.textContent = "0%";


        const loading = setInterval(() => {

            progress += 5;

            progressBar.style.width =
                progress + "%";

            loadingPercent.textContent =
                progress + "%";


            if (progress >= 100) {

                clearInterval(loading);

                setTimeout(() => {

                    nextScreen("intro");

                }, 500);

            }

        }, 80);


    }, 300);

}


/* ---------------------------
   SECRET EASTER EGG
---------------------------- */

/*
   Try pressing:
   CTRL + SHIFT + G
*/

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.ctrlKey &&
            event.shiftKey &&
            event.key.toLowerCase() === "g"
        ) {

            document
                .getElementById("secret-message")
                .classList.add("show");

        }

    }
);


function closeSecret() {

    document
        .getElementById("secret-message")
        .classList.remove("show");

}


/* ---------------------------
   CONSOLE EASTER EGG
---------------------------- */

console.log(`
╔══════════════════════════════════╗
       GABRIEL.EXE
       HOT WHEELS EDITION
╚══════════════════════════════════╝

Hey Gabriel 👀

Si estás leyendo esto,
probablemente abriste DevTools.

Así que...

const favoritePerson = "Gabriel";
const favoriteDeveloper = "Gabriel";

❤️

— Tu bella
`);

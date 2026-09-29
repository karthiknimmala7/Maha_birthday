let currentPage = "loading";
let typingStarted = false;


/* =========================================================
   PAGE NAVIGATION
   ========================================================= */
function showPage(nextPage) {

    console.log("showPage called:", nextPage);

    const next = document.getElementById(nextPage);

    if (!next) {
        console.error("Page not found:", nextPage);
        return;
    }

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
        page.classList.remove("exit");
    });

    next.classList.add("active");

    currentPage = nextPage;

    console.log("Active page:", nextPage);
    console.log("Classes:", next.className);


    if (nextPage === "story") {

        typingStarted = false;

        setTimeout(() => {
            typeStory();
        }, 100);
    }


    if (nextPage === "gallery") {

        if (typeof window.resetMemoryBook === "function") {
            window.resetMemoryBook();
        }
    }


    if (nextPage === "letter") {

        if (typeof window.resetLetter === "function") {
            window.resetLetter();
        }

        setTimeout(() => {

            if (typeof window.startLetter === "function") {
                window.startLetter();
            }

        }, 500);
    }


 /* ================= TIMELINE ================= */

    if (nextPage === "timeline") {

        if (
            typeof window.resetTimeline ===
            "function"
        ) {
            window.resetTimeline();
        }
    }
    /* =====================================================
                          REASONS
    ===================================================== */

    if (nextPage === "reasons") {

        console.log(
            "REASONS PAGE ACTIVATED"
        );


        if (
            typeof window.resetReasons ===
            "function"
        ) {

            window.resetReasons();

        }
    }
    /* =========================================================
                           GAME
========================================================= */

if (nextPage === "game") {

    console.log("GAME PAGE ACTIVATED");

    if (
        typeof window.resetGame ===
        "function"
    ) {

        window.resetGame();

    }

}

if (nextPage === "final") {

    console.log("FINAL PAGE ACTIVATED");

    if (
        typeof window.startFinal ===
        "function"
    ) {

        window.startFinal();

    }

}

}
/*====================================================
                    LOADING PAGE
====================================================*/

const loadingMessages = [
    "Preparing your surprise...",
    "Collecting beautiful memories...",
    "Adding a little magic...",
    "Almost ready...",
    "Just for MAHA ❤️"
];

let loadingIndex = 0;

setInterval(() => {

    if (currentPage !== "loading") {
        return;
    }

    const text = document.getElementById("loadingText");

    if (!text) {
        return;
    }

    loadingIndex =
        (loadingIndex + 1) %
        loadingMessages.length;

    text.textContent =
        loadingMessages[loadingIndex];

}, 1000);


/*====================================================
                    FLOATING HEARTS
====================================================*/

function createHeart() {

    const container =
        document.getElementById("hearts");

    if (!container) {
        return;
    }

    const heart =
        document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "❤";

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        18 + Math.random() * 25 + "px";

    heart.style.color =
        "#ff4f8b";

    heart.style.animationDuration =
        5 + Math.random() * 3 + "s";

    container.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);

}

setInterval(createHeart, 250);


/*====================================================
                    FLOATING SPARKLES
====================================================*/

function createSparkle() {

    const container =
        document.getElementById("sparkles");

    if (!container) {
        return;
    }

    const sparkle =
        document.createElement("div");

    sparkle.className = "sparkle";

    sparkle.style.left =
        Math.random() * 100 + "%";

    sparkle.style.width = "5px";
    sparkle.style.height = "5px";
    sparkle.style.borderRadius = "50%";
    sparkle.style.background = "white";

    sparkle.style.boxShadow =
        "0 0 10px white";

    sparkle.style.animationDuration =
        3 + Math.random() * 2 + "s";

    container.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 6000);

}

setInterval(createSparkle, 150);


/*====================================================
                    FLOATING PETALS
====================================================*/

function createPetal() {

    const container =
        document.getElementById("petals");

    if (!container) {
        return;
    }

    const petal =
        document.createElement("div");

    petal.className = "petal";
    petal.innerHTML = "🌸";

    petal.style.left =
        Math.random() * 100 + "%";

    petal.style.fontSize =
        15 + Math.random() * 15 + "px";

    petal.style.animationDuration =
        6 + Math.random() * 3 + "s";

    container.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 9000);

}

setInterval(createPetal, 400);


/*====================================================
                    INITIAL LOAD
====================================================*/

window.addEventListener("load", () => {

    setTimeout(() => {
        showPage("password");
    }, 5000);

});


/*====================================================
                    PASSWORD PAGE
====================================================*/

function checkPassword() {

    const input =
        document.getElementById("passwordInput");

    const message =
        document.getElementById("passwordMessage");

    const lock =
        document.querySelector(".lock-icon");

    if (!input || !message) {
        return;
    }

    const password =
        input.value
            .trim()
            .toUpperCase();


    if (password === "2005") {

        message.innerHTML =
            "✨ Welcome, MAHA ❤️";

        setTimeout(() => {
            showPage("countdown");
        }, 1200);

    }

    else if (
        password === "MAHA" ||
        password === "MAHATHIII" ||
        password === "PINKYYY"
    ) {

        if (lock) {
            lock.classList.add("lock-open");
        }

        message.innerHTML = `
            ✨ Almost...
            <br><br>
            That's exactly who this surprise is for. ❤️
            <br><br>
            Now tell me when her beautiful story began...
        `;

        input.value = "";

        input.placeholder =
            "Hint: It's a year... 🤭";

        setTimeout(() => {

            if (lock) {
                lock.classList.remove("lock-open");
            }

        }, 1000);

    }

    else {

        message.innerHTML = `
            🌸 Hmm...
            <br><br>
            That's not the key I'm looking for.
            <br><br>
            Think about the year an amazing girl entered this world.
        `;

        input.value = "";

    }

}


/*====================================================
                PASSWORD EVENT LISTENERS
====================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const unlockButton =
        document.getElementById("unlockBtn");

    if (unlockButton) {

        unlockButton.addEventListener(
            "click",
            checkPassword
        );

    }


    const passwordInput =
        document.getElementById("passwordInput");

    if (passwordInput) {

        passwordInput.addEventListener(
            "keydown",
            event => {

                if (event.key === "Enter") {
                    checkPassword();
                }

            }
        );

    }

});


/*====================================================
                    COUNTDOWN
====================================================*/

const birthday =
    new Date(
        "September 30, 2026 00:00:00"
    ).getTime();


const countdownMessages = [
    "Every heartbeat brings us closer...",
    "Something beautiful is waiting...",
    "Can't wait to celebrate you...",
    "Your special day is getting closer...",
    "Just a little more patience ❤️"
];


let countdownMessageIndex = 0;


setInterval(() => {

    if (currentPage !== "countdown") {
        return;
    }

    const message =
        document.getElementById("countMessage");

    if (!message) {
        return;
    }

    message.textContent =
        countdownMessages[countdownMessageIndex];

    countdownMessageIndex =
        (countdownMessageIndex + 1) %
        countdownMessages.length;

}, 3000);


setInterval(() => {

    if (currentPage !== "countdown") {
        return;
    }

    const now =
        new Date().getTime();

    const distance =
        birthday - now;


    const days =
        document.getElementById("days");

    const hours =
        document.getElementById("hours");

    const minutes =
        document.getElementById("minutes");

    const seconds =
        document.getElementById("seconds");


    if (
        !days ||
        !hours ||
        !minutes ||
        !seconds
    ) {
        return;
    }


    if (distance <= 0) {

        days.textContent = "0";
        hours.textContent = "0";
        minutes.textContent = "0";
        seconds.textContent = "0";

        return;
    }


    days.textContent =
        Math.floor(
            distance /
            (1000 * 60 * 60 * 24)
        );


    hours.textContent =
        Math.floor(
            (
                distance %
                (1000 * 60 * 60 * 24)
            ) /
            (1000 * 60 * 60)
        );


    minutes.textContent =
        Math.floor(
            (
                distance %
                (1000 * 60 * 60)
            ) /
            (1000 * 60)
        );


    seconds.textContent =
        Math.floor(
            (
                distance %
                (1000 * 60)
            ) /
            1000
        );

}, 1000);


/*====================================================
                COUNTDOWN STARS
====================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const stars =
        document.getElementById("stars");

    if (!stars) {
        return;
    }

    for (let i = 0; i < 80; i++) {

        const star =
            document.createElement("div");

        star.className = "star";

        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 100 + "%";

        star.style.animationDelay =
            Math.random() * 2 + "s";

        stars.appendChild(star);

    }

});


/*====================================================
                COUNTDOWN → WELCOME
====================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const continueButton =
        document.getElementById("continueBtn");

    if (continueButton) {

        continueButton.addEventListener(
            "click",
            () => {
                showPage("welcome");
            }
        );

    }

});


/*====================================================
                    WELCOME PAGE
====================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const welcomeNext =
        document.getElementById("welcomeNext");

    if (welcomeNext) {

        welcomeNext.addEventListener(
            "click",
            () => {
                showPage("story");
            }
        );

    }

});


function createWelcomeHeart() {

    if (currentPage !== "welcome") {
        return;
    }

    const container =
        document.getElementById("welcomeHearts");

    if (!container) {
        return;
    }

    const heart =
        document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "❤";

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        20 + Math.random() * 20 + "px";

    heart.style.color =
        "#ff6a9f";

    heart.style.animationDuration =
        5 + Math.random() * 2 + "s";

    container.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);

}

setInterval(createWelcomeHeart, 300);


function createWelcomeSparkle() {

    if (currentPage !== "welcome") {
        return;
    }

    const container =
        document.getElementById("welcomeSparkles");

    if (!container) {
        return;
    }

    const sparkle =
        document.createElement("div");

    sparkle.className = "sparkle";

    sparkle.style.left =
        Math.random() * 100 + "%";

    sparkle.style.width = "4px";
    sparkle.style.height = "4px";
    sparkle.style.background = "white";
    sparkle.style.borderRadius = "50%";

    sparkle.style.boxShadow =
        "0 0 10px white";

    sparkle.style.animationDuration =
        3 + Math.random() * 2 + "s";

    container.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 6000);

}

setInterval(createWelcomeSparkle, 180);


/*====================================================
                    STORY PAGE
====================================================*/

const storyMessage = `Sometimes...

Life doesn't announce the arrival of someone special.

It simply lets them walk into our lives...

And before we even realize it,

they become a beautiful part of our happiest memories.

I don't know what the future holds...

But I'm genuinely thankful that our paths crossed.❤️`;


function typeStory() {

    const element =
        document.getElementById("typingText");

    const button =
        document.getElementById("storyNext");

    if (!element || !button) {
        return;
    }


    if (typingStarted) {
        return;
    }

    typingStarted = true;

    element.textContent = "";

    button.style.display = "none";

    let index = 0;


    function typing() {

        if (index < storyMessage.length) {

            element.textContent +=
                storyMessage.charAt(index);

            index++;

            setTimeout(typing, 65);

        }

        else {

            button.style.display =
                "inline-block";

            button.style.opacity = "0";

            button.style.transform =
                "translateY(20px)";

            setTimeout(() => {

                button.style.transition =
                    "0.6s";

                button.style.opacity = "1";

                button.style.transform =
                    "translateY(0)";

            }, 100);

        }

    }


    typing();

}


/*====================================================
                STORY → MEMORY BOOK
====================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const storyNext =
        document.getElementById("storyNext");

    if (storyNext) {

        storyNext.addEventListener(
            "click",
            () => {

                typingStarted = false;

                showPage("gallery");

            }
        );

    }

});

/* ============================================================
                GALLERY / MEMORY BOOK
============================================================ */

(function () {

    const gallery =
        document.getElementById("gallery");

    if (!gallery) {
        return;
    }


    const book =
        document.getElementById(
            "memoryBookObject"
        );

    const cover =
        document.getElementById(
            "memoryCover"
        );

    const openButton =
        document.getElementById(
            "openMemoryBook"
        );

    const pages =
        Array.from(
            gallery.querySelectorAll(
                ".memory-page"
            )
        );

    const letterButton =
        document.getElementById(
            "memoryLetterButton"
        );


    let currentMemoryPage = 1;

    let bookOpened = false;

    let pageTurning = false;

    let typingToken = 0;


    /* ========================================================
                       UTILITY
    ======================================================== */

    function wait(ms) {

        return new Promise(
            resolve => {
                setTimeout(
                    resolve,
                    ms
                );
            }
        );

    }


    function getPage(number) {

        return gallery.querySelector(
            `.memory-page[data-memory-page="${number}"]`
        );

    }


    /* ========================================================
                    RESET MEMORY BOOK
    ======================================================== */

    function resetMemoryBook() {

        currentMemoryPage = 1;

        bookOpened = false;

        pageTurning = false;

        typingToken++;


        if (cover) {

            cover.classList.remove(
                "open-memory-cover"
            );

            cover.style.visibility =
                "visible";

            cover.style.pointerEvents =
                "auto";

        }


        pages.forEach(
            (page, index) => {

                page.classList.remove(
                    "memory-page-visible",
                    "is-current",
                    "turning-forward",
                    "content-enter",
                    "video-enter"
                );


                page.style.visibility =
                    index === 0
                        ? "visible"
                        : "hidden";


                page.style.opacity =
                    index === 0
                        ? "1"
                        : "0";


                page.style.transform =
                    index === 0
                        ? "rotateY(0deg)"
                        : "rotateY(0deg)";


                page.style.zIndex =
                    String(
                        pages.length - index
                    );


                const writing =
                    page.querySelector(
                        ".memory-writing"
                    );

                if (writing) {

                    writing.textContent =
                        "";

                }


                const cursor =
                    page.querySelector(
                        ".memory-cursor"
                    );

                if (cursor) {

                    cursor.classList.remove(
                        "active"
                    );

                }


                const button =
                    page.querySelector(
                        ".memory-turn-button"
                    );

                if (button) {

                    button.classList.remove(
                        "show"
                    );

                }

            }
        );


        if (pages[0]) {

            pages[0].classList.add(
                "is-current"
            );

        }

    }


    /* ========================================================
                       OPEN BOOK
    ======================================================== */

    async function openMemoryBook() {

        if (
            bookOpened ||
            !cover
        ) {

            return;

        }


        bookOpened = true;

        openButton.disabled = true;


        cover.classList.add(
            "open-memory-cover"
        );


        await wait(1550);


        cover.style.visibility =
            "hidden";

        cover.style.pointerEvents =
            "none";


        const firstPage =
            getPage(1);


        if (!firstPage) {
            return;
        }


        firstPage.style.visibility =
            "visible";

        firstPage.style.opacity =
            "1";

        firstPage.style.zIndex =
            "10";


        firstPage.classList.add(
            "memory-page-visible",
            "is-current",
            "content-enter"
        );


        await wait(550);


        typeMemoryText(firstPage);

    }


    /* ========================================================
                       TYPE MEMORY
    ======================================================== */

    async function typeMemoryText(page) {

        const token =
            ++typingToken;


        const writing =
            page.querySelector(
                ".memory-writing"
            );

        const cursor =
            page.querySelector(
                ".memory-cursor"
            );

        const button =
            page.querySelector(
                ".memory-turn-button"
            );


        if (
            !writing ||
            !writing.dataset.memory
        ) {

            return;

        }


        writing.textContent =
            "";


        if (button) {

            button.classList.remove(
                "show"
            );

        }


        if (cursor) {

            cursor.classList.add(
                "active"
            );

        }


        const text =
            writing.dataset.memory
                .replace(/\s+/g, " ")
                .trim();


        let index = 0;


        while (
            index < text.length
        ) {

            if (
                token !== typingToken
            ) {

                return;

            }


            const character =
                text[index];


            writing.textContent +=
                character;


            index++;


            let delay = 19;


            if (
                character === " "
            ) {

                delay = 7;

            }


            if (
                character === "," ||
                character === ";"
            ) {

                delay = 95;

            }


            if (
                character === ":"
            ) {

                delay = 75;

            }


            if (
                character === "." ||
                character === "!" ||
                character === "?"
            ) {

                delay = 230;

            }


            await wait(delay);

        }


        if (
            token !== typingToken
        ) {

            return;

        }


        if (cursor) {

            cursor.classList.remove(
                "active"
            );

        }


        await wait(220);


        if (button) {

            button.classList.add(
                "show"
            );

        }

    }


    /* ========================================================
                       TURN PAGE
    ======================================================== */

    async function turnMemoryPage(
        nextNumber
    ) {

        if (
            pageTurning ||
            nextNumber <= currentMemoryPage
        ) {

            return;

        }


        const current =
            getPage(
                currentMemoryPage
            );

        const next =
            getPage(
                nextNumber
            );


        if (
            !current ||
            !next
        ) {

            return;

        }


        pageTurning = true;

        typingToken++;


        const currentCursor =
            current.querySelector(
                ".memory-cursor"
            );

        if (currentCursor) {

            currentCursor.classList.remove(
                "active"
            );

        }


        const currentButton =
            current.querySelector(
                ".memory-turn-button"
            );

        if (currentButton) {

            currentButton.classList.remove(
                "show"
            );

        }


        /* ----------------------------------------------------
                     NEXT PAGE UNDERNEATH
        ---------------------------------------------------- */

        next.style.visibility =
            "visible";

        next.style.opacity =
            "1";

        next.style.zIndex =
            "8";

        current.style.zIndex =
            "20";


        next.classList.remove(
            "turning-forward",
            "content-enter",
            "video-enter"
        );


        /* ----------------------------------------------------
                       PHYSICAL TURN
        ---------------------------------------------------- */

        current.classList.add(
            "turning-forward"
        );


        await wait(1320);


        /* ----------------------------------------------------
                       FINISH OLD PAGE
        ---------------------------------------------------- */

        current.classList.remove(
            "turning-forward",
            "is-current"
        );

        current.style.visibility =
            "hidden";

        current.style.opacity =
            "0";

        current.style.zIndex =
            "1";


        /* ----------------------------------------------------
                       NEW CURRENT PAGE
        ---------------------------------------------------- */

        next.style.visibility =
            "visible";

        next.style.opacity =
            "1";

        next.style.zIndex =
            "10";


        next.classList.add(
            "is-current"
        );


        currentMemoryPage =
            nextNumber;


        await wait(160);


        next.classList.add(
            "content-enter"
        );


        /* ----------------------------------------------------
                       VIDEO PAGE
        ---------------------------------------------------- */

        if (
            nextNumber === 4
        ) {

            await wait(650);

            next.classList.add(
                "video-enter"
            );


            await wait(1000);


            if (letterButton) {

                letterButton.classList.add(
                    "show"
                );

            }

        }

        else {

            await wait(550);

            typeMemoryText(next);

        }


        pageTurning = false;

    }


    /* ========================================================
                       OPEN BUTTON
    ======================================================== */

    if (openButton) {

        openButton.addEventListener(
            "click",
            openMemoryBook
        );

    }


    /* ========================================================
                     TURN BUTTONS
    ======================================================== */

    gallery
        .querySelectorAll(
            ".memory-turn-button"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        const next =
                            Number(
                                button.dataset
                                    .nextPage
                            );


                        turnMemoryPage(
                            next
                        );

                    }
                );

            }
        );


    /* ========================================================
                    VIDEO → LETTER
    ======================================================== */

    if (letterButton) {

        letterButton.addEventListener(
            "click",
            () => {

                if (
                    typeof window.showPage ===
                    "function"
                ) {

                    window.showPage(
                        "letter"
                    );

                }

            }
        );

    }


    /* ========================================================
                     AMBIENT HEARTS
    ======================================================== */

    function createGalleryHeart() {

        const container =
            document.getElementById(
                "galleryHearts"
            );

        if (!container) {
            return;
        }


        const heart =
            document.createElement(
                "span"
            );


        heart.className =
            "gallery-heart";


        heart.textContent =
            Math.random() > .5
                ? "♥"
                : "♡";


        heart.style.left =
            `${Math.random() * 100}%`;

        heart.style.top =
            `${55 + Math.random() * 35}%`;


        heart.style.fontSize =
            `${10 + Math.random() * 10}px`;


        heart.style.setProperty(
            "--duration",
            `${6 + Math.random() * 5}s`
        );


        heart.style.animationDelay =
            `${Math.random() * 6}s`;


        container.appendChild(
            heart
        );


        setTimeout(
            () => heart.remove(),
            13000
        );

    }


    /* ========================================================
                       SPARKLES
    ======================================================== */

    function createGallerySparkle() {

        const container =
            document.getElementById(
                "gallerySparkles"
            );

        if (!container) {
            return;
        }


        const sparkle =
            document.createElement(
                "span"
            );


        sparkle.className =
            "gallery-sparkle";


        sparkle.style.left =
            `${Math.random() * 100}%`;

        sparkle.style.top =
            `${Math.random() * 100}%`;


        sparkle.style.setProperty(
            "--duration",
            `${2.5 + Math.random() * 3}s`
        );


        sparkle.style.animationDelay =
            `${Math.random() * 4}s`;


        container.appendChild(
            sparkle
        );


        setTimeout(
            () => sparkle.remove(),
            7000
        );

    }


    /* ========================================================
                        ROSE PETALS
    ======================================================== */

    function createGalleryPetal() {

        const container =
            document.getElementById(
                "galleryPetals"
            );

        if (!container) {
            return;
        }


        const petal =
            document.createElement(
                "span"
            );


        petal.className =
            "gallery-petal";


        petal.textContent =
            "🌹";


        petal.style.left =
            `${Math.random() * 100}%`;

        petal.style.top =
            "-25px";


        petal.style.setProperty(
            "--duration",
            `${8 + Math.random() * 5}s`
        );


        petal.style.setProperty(
            "--drift",
            `${20 + Math.random() * 45}px`
        );


        petal.style.animationDelay =
            `${Math.random() * 7}s`;


        container.appendChild(
            petal
        );


        setTimeout(
            () => petal.remove(),
            15000
        );

    }


    /* ========================================================
                     AMBIENT TIMERS
    ======================================================== */

    setInterval(
        createGalleryHeart,
        1700
    );

    setInterval(
        createGallerySparkle,
        850
    );

    setInterval(
        createGalleryPetal,
        2500
    );


    /* ========================================================
                     INITIAL STATE
    ======================================================== */

    resetMemoryBook();


    /* ========================================================
              RESET WHEN ENTERING GALLERY AGAIN
    ======================================================== */

    const originalShowPage =
        window.showPage;


    if (
        typeof originalShowPage ===
        "function"
    ) {

        window.showPage =
            function(pageName) {

                if (
                    pageName ===
                    "gallery"
                ) {

                    resetMemoryBook();
                    window.resetMemoryBook = resetMemoryBook;
                }


                return originalShowPage(
                    pageName
                );

            };

    }


})();
/* =========================================================
                         LETTER PAGE
========================================================= */

(function () {

    const letterText =
        document.getElementById("letterTypingText");

    const letterCursor =
        document.getElementById("letterCursor");

    const letterSignature =
        document.getElementById("letterSignature");

    const letterButton =
        document.getElementById("letterNext");

    const letterHearts =
        document.getElementById("letterHearts");

    const letterRoses =
        document.getElementById("letterRoses");


    if (!letterText || !letterButton) {
        return;
    }


    /* =====================================================
                         LETTER CONTENT
    ===================================================== */

    const letterMessage = `Dear MAHA,

If you're reading this, then today is finally your special day.

Happy Birthday Pinkyyy.❤️🎂

Some people become part of our lives for a short time, Some become beautiful memories, and then there are a few rare people who become genuinely important to us simply by being themselves.

You are the  one for me.

Your innocence, your caring nature, the confidence with which you stand for what you believe, your adorable little moments of anger, and those quiet moments when you simply hope someone understands you without needing to say anything...

These are the little things that make you beautifully different.

I don't always say it, but I truly appreciate having you in my life.

I hope you never lose your kindness, your smile, and all those little things that make you MAHA.

You are one of the most important and special people in my life.

And no matter where life takes us, you will always have a very special place in my life.

I genuinely wish this birthday brings you endless happiness, beautiful memories, success in everything you dream of, and countless reasons to smile.

Keep smiling, Keep shining, and most importantly, keep being you.

Happy Birthday once again, MAHA. ❤️`;


    let typingToken = 0;
    let typingRunning = false;


    /* =====================================================
                       RESET LETTER
    ===================================================== */

    function resetLetter() {

        typingToken++;

        typingRunning = false;

        letterText.textContent = "";

        letterCursor.classList.remove(
            "blinking"
        );

        letterSignature.classList.remove(
            "show"
        );

        letterButton.classList.remove(
            "show"
        );

        letterButton.style.pointerEvents =
            "none";

        letterButton.style.opacity =
            "0";

        letterHearts.innerHTML = "";
        letterRoses.innerHTML = "";

    }


    /* =====================================================
                       TYPING SPEED
    ===================================================== */

    function getTypingDelay(character) {

        if (character === ",") {
            return 110;
        }

        if (
            character === "." ||
            character === "!" ||
            character === "?"
        ) {
            return 230;
        }

        if (character === "\n") {
            return 360;
        }

        if (character === " ") {
            return 22;
        }

        return 35 + Math.random() * 25;

    }


    /* =====================================================
                       START LETTER
    ===================================================== */

    async function startLetter() {

        if (typingRunning) {
            return;
        }

        typingRunning = true;

        const token = typingToken;

        letterText.textContent = "";

        letterCursor.classList.add(
            "blinking"
        );

        letterSignature.classList.remove(
            "show"
        );

        letterButton.classList.remove(
            "show"
        );

        letterButton.style.pointerEvents =
            "none";


        for (
            let i = 0;
            i < letterMessage.length;
            i++
        ) {

            if (token !== typingToken) {
                return;
            }

            const character =
                letterMessage.charAt(i);

            letterText.textContent +=
                character;

            await wait(
                getTypingDelay(character)
            );

        }


        if (token !== typingToken) {
            return;
        }


        typingRunning = false;


        /* cursor disappears after typing */

        letterCursor.classList.remove(
            "blinking"
        );

        letterCursor.style.display =
            "none";


        /* signature */

        setTimeout(() => {

            if (token !== typingToken) {
                return;
            }

            letterSignature.classList.add(
                "show"
            );

        }, 250);


        /* button */

        setTimeout(() => {

            if (token !== typingToken) {
                return;
            }

            letterButton.classList.add(
                "show"
            );

            letterButton.style.pointerEvents =
                "auto";

        }, 900);

    }


    /* =====================================================
                         WAIT
    ===================================================== */

    function wait(milliseconds) {

        return new Promise(
            resolve => {

                setTimeout(
                    resolve,
                    milliseconds
                );

            }
        );

    }
  /* =====================================================
                       LETTER → TIMELINE
    ===================================================== */

letterButton.addEventListener("click", () => {

    console.log("LETTER → TIMELINE CLICKED");

    const timelinePage =
        document.getElementById("timeline");

    if (!timelinePage) {
        console.error("TIMELINE PAGE DOES NOT EXIST");
        return;
    }

    if (typeof window.showPage !== "function") {
        console.error("showPage is not available");
        return;
    }

    window.showPage("timeline");

});
    /* =====================================================
                       FLOATING HEARTS
    ===================================================== */

    function createLetterHeart() {

        if (
            typeof currentPage !==
            "undefined" &&
            currentPage !== "letter"
        ) {
            return;
        }

        const heart =
            document.createElement("span");

        heart.className =
            "letter-heart";

        heart.textContent = "❤";

        heart.style.left =
            `${Math.random() * 100}%`;

        heart.style.bottom =
            "-30px";

        heart.style.fontSize =
            `${14 + Math.random() * 15}px`;

        heart.style.setProperty(
            "--duration",
            `${6 + Math.random() * 4}s`
        );

        heart.style.setProperty(
            "--drift",
            `${-35 + Math.random() * 70}px`
        );

        letterHearts.appendChild(
            heart
        );


        setTimeout(
            () => heart.remove(),
            11000
        );

    }


    /* =====================================================
                        FLOATING ROSES
    ===================================================== */

    function createLetterRose() {

        if (
            typeof currentPage !==
            "undefined" &&
            currentPage !== "letter"
        ) {
            return;
        }

        const rose =
            document.createElement("span");

        rose.className =
            "letter-rose";

        rose.textContent = "🌹";

        rose.style.left =
            `${Math.random() * 100}%`;

        rose.style.top =
            "-30px";

        rose.style.fontSize =
            `${15 + Math.random() * 13}px`;

        rose.style.setProperty(
            "--duration",
            `${8 + Math.random() * 5}s`
        );

        rose.style.setProperty(
            "--drift",
            `${-45 + Math.random() * 90}px`
        );

        letterRoses.appendChild(
            rose
        );


        setTimeout(
            () => rose.remove(),
            15000
        );

    }


    /* =====================================================
                     AMBIENT TIMERS
    ===================================================== */

    setInterval(
        createLetterHeart,
        1700
    );

    setInterval(
        createLetterRose,
        2600
    );


    /* =====================================================
                     INITIAL STATE
    ===================================================== */

    letterCursor.style.display =
        "inline-block";


    resetLetter();


    /* =====================================================
                  EXPOSE TO showPage()
    ===================================================== */

    window.resetLetter =
        resetLetter;

    window.startLetter =
        startLetter;

})();
/* =========================================================
                       TIMELINE PAGE
========================================================= */

(function () {

    const timelineButton =
        document.getElementById("timelineNext");

    const timelineHearts =
        document.getElementById("timelineHearts");

    const timelineRoses =
        document.getElementById("timelineRoses");


    if (!timelineButton) {
        console.error("Timeline button not found.");
        return;
    }


    function resetTimeline() {

        timelineButton.classList.remove("show");

        timelineButton.style.pointerEvents = "none";

        timelineButton.style.opacity = "0";

        if (timelineHearts) {
            timelineHearts.innerHTML = "";
        }

        if (timelineRoses) {
            timelineRoses.innerHTML = "";
        }


        setTimeout(() => {

            if (typeof currentPage !== "undefined"
                && currentPage !== "timeline") {
                return;
            }

            timelineButton.classList.add("show");

            timelineButton.style.pointerEvents = "auto";

            timelineButton.style.opacity = "1";

        }, 2500);
    }


    function createTimelineHeart() {

        if (
            typeof currentPage !== "undefined"
            && currentPage !== "timeline"
        ) {
            return;
        }

        if (!timelineHearts) {
            return;
        }


        const heart =
            document.createElement("div");

        heart.className =
            "timeline-floating-heart";

        heart.textContent = "❤️";

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.bottom =
            "-30px";

        heart.style.fontSize =
            (12 + Math.random() * 10) + "px";

        heart.style.animationDuration =
            (6 + Math.random() * 4) + "s";


        timelineHearts.appendChild(heart);


        setTimeout(() => {
            heart.remove();
        }, 11000);
    }


    function createTimelineRose() {

        if (
            typeof currentPage !== "undefined"
            && currentPage !== "timeline"
        ) {
            return;
        }

        if (!timelineRoses) {
            return;
        }


        const rose =
            document.createElement("div");

        rose.className =
            "timeline-floating-rose";

        rose.textContent = "🌹";

        rose.style.left =
            Math.random() * 100 + "%";

        rose.style.bottom =
            "-35px";

        rose.style.fontSize =
            (15 + Math.random() * 10) + "px";

        rose.style.animationDuration =
            (8 + Math.random() * 4) + "s";


        timelineRoses.appendChild(rose);


        setTimeout(() => {
            rose.remove();
        }, 13000);
    }


    timelineButton.addEventListener(
        "click",
        function () {

            console.log(
                "TIMELINE → NEXT CLICKED"
            );

            if (
                typeof window.showPage ===
                "function"
            ) {
                window.showPage("reasons");
            }

        }
    );


    setInterval(
        createTimelineHeart,
        1900
    );

    setInterval(
        createTimelineRose,
        2800
    );


    window.resetTimeline =
        resetTimeline;

})();
/* =========================================================
                       REASONS PAGE
========================================================= */

(function () {

    const reasonsButton =
        document.getElementById("reasonsNext");

    const reasonsHearts =
        document.getElementById("reasonsHearts");

    const reasonsRoses =
        document.getElementById("reasonsRoses");


    /* =====================================================
                         SAFETY CHECK
    ===================================================== */

    if (!reasonsButton) {

        console.error(
            "Reasons page: #reasonsNext not found."
        );

        return;
    }


    /* =====================================================
                         RESET REASONS
    ===================================================== */

    function resetReasons() {

        reasonsButton.classList.remove("show");

        reasonsButton.style.opacity = "0";

        reasonsButton.style.pointerEvents =
            "none";


        if (reasonsHearts) {

            reasonsHearts.innerHTML = "";

        }


        if (reasonsRoses) {

            reasonsRoses.innerHTML = "";

        }


        /*
         * Wait until the Reasons page
         * has entered before showing
         * the next button.
         */

        setTimeout(function () {

            if (
                typeof currentPage !== "undefined" &&
                currentPage !== "reasons"
            ) {
                return;
            }


            reasonsButton.classList.add("show");

            reasonsButton.style.opacity = "1";

            reasonsButton.style.pointerEvents =
                "auto";

        }, 1600);
    }


    /* =====================================================
                      FLOATING HEARTS
    ===================================================== */

    function createReasonHeart() {

        if (
            typeof currentPage !== "undefined" &&
            currentPage !== "reasons"
        ) {
            return;
        }


        if (!reasonsHearts) {
            return;
        }


        const heart =
            document.createElement("div");


        heart.className =
            "reason-floating-heart";


        heart.textContent = "❤";


        heart.style.left =
            Math.random() * 100 + "%";


        heart.style.bottom =
            "-30px";


        heart.style.fontSize =
            12 + Math.random() * 10 + "px";


        heart.style.animationDuration =
            6 + Math.random() * 4 + "s";


        reasonsHearts.appendChild(heart);


        setTimeout(function () {

            heart.remove();

        }, 11000);
    }


    /* =====================================================
                       FLOATING ROSES
    ===================================================== */

    function createReasonRose() {

        if (
            typeof currentPage !== "undefined" &&
            currentPage !== "reasons"
        ) {
            return;
        }


        if (!reasonsRoses) {
            return;
        }


        const rose =
            document.createElement("div");


        rose.className =
            "reason-floating-rose";


        rose.textContent = "🌹";


        rose.style.left =
            Math.random() * 100 + "%";


        rose.style.bottom =
            "-35px";


        rose.style.fontSize =
            15 + Math.random() * 10 + "px";


        rose.style.animationDuration =
            8 + Math.random() * 4 + "s";


        reasonsRoses.appendChild(rose);


        setTimeout(function () {

            rose.remove();

        }, 12000);
    }


    /* =====================================================
                    REASONS → NEXT PAGE
    ===================================================== */

    reasonsButton.addEventListener(
        "click",
        function () {

            console.log(
                "REASONS → NEXT PAGE"
            );


            /*
             * Change ONLY this page ID
             * when you build the next section.
             */

            if (
                typeof window.showPage ===
                "function"
            ) {

                window.showPage("game");

            } else {

                console.error(
                    "showPage() is not available."
                );

            }

        }
    );


    /* =====================================================
                      DECORATION TIMERS
    ===================================================== */

    setInterval(
        createReasonHeart,
        1900
    );


    setInterval(
        createReasonRose,
        2800
    );


    /* =====================================================
                         INITIAL STATE
    ===================================================== */

    resetReasons();


    /* =====================================================
                     PUBLIC FUNCTION
    ===================================================== */

    window.resetReasons =
        resetReasons;

})();
/* =========================================================
                           GAME
========================================================= */

(function () {

    const gameIntro =
        document.getElementById("gameIntro");

    const birthdayBuilder =
        document.getElementById("birthdayBuilder");

    const birthdayResult =
        document.getElementById("birthdayResult");

    const randomQuestionsGame =
        document.getElementById("randomQuestionsGame");

    const randomQuestionsResult =
        document.getElementById("randomQuestionsResult");


    const startBirthdayGame =
        document.getElementById("startBirthdayGame");

    const continueToQuestions =
        document.getElementById("continueToQuestions");

    const gameToFinal =
        document.getElementById("gameToFinal");


    const birthdayQuestion =
        document.getElementById("birthdayQuestion");

    const birthdayOptions =
        document.getElementById("birthdayOptions");

    const birthdayProgress =
        document.getElementById("birthdayProgress");

    const birthdaySummary =
        document.getElementById("birthdaySummary");


    const randomQuestionEmoji =
        document.getElementById("randomQuestionEmoji");

    const randomQuestionStory =
        document.getElementById("randomQuestionStory");

    const randomQuestionOptions =
        document.getElementById("randomQuestionOptions");

    const randomQuestionProgress =
        document.getElementById("randomQuestionProgress");


    const gameHearts =
        document.getElementById("gameHearts");

    const gameRoses =
        document.getElementById("gameRoses");


    /* =====================================================
                    GAME 1 DATA
    ===================================================== */

    const birthdayQuestions = [

        {
            question: "Choose your birthday cake 🎂",

            options: [
                {
                    emoji: "🍫",
                    text: "Chocolate Cake"
                },
                {
                    emoji: "🍓",
                    text: "Strawberry Cake"
                },
                {
                    emoji: "❤️",
                    text: "Red Velvet"
                },
                {
                    emoji: "🎁",
                    text: "Surprise Cake"
                }
            ]
        },

        {
            question: "Choose your birthday plan 🌸",

            options: [
                {
                    emoji: "🏖️",
                    text: "Beach Day"
                },
                {
                    emoji: "🎬",
                    text: "Movie Day"
                },
                {
                    emoji: "🍽️",
                    text: "Dinner & Chill"
                },
                {
                    emoji: "🌙",
                    text: "Late Night Adventure"
                }
            ]
        },

        {
            question: "Choose your birthday companion 🧸",

            options: [
                {
                    emoji: "🧸",
                    text: "Teddy Bear"
                },
                {
                    emoji: "👯",
                    text: "Best Friend"
                },
                {
                    emoji: "🐶",
                    text: "Cute Puppy"
                },
                {
                    emoji: "❤️",
                    text: "Someone Special"
                }
            ]
        },

        {
            question: "Choose your birthday wish ✨",

            options: [
                {
                    emoji: "💰",
                    text: "Unlimited Money"
                },
                {
                    emoji: "✈️",
                    text: "Travel Everywhere"
                },
                {
                    emoji: "🌟",
                    text: "Everything I Dream Of"
                },
                {
                    emoji: "😊",
                    text: "Just Be Happy"
                }
            ]
        }

    ];


    /* =====================================================
                    GAME 2 DATA
    ===================================================== */

    const randomQuestions = [

        {
            emoji: "🍕",

            story:
                `Karthik suddenly says:<br>
                <strong>"Let's go eat."</strong>`,

            question:
                "What do you say?",

            options: [
                "Where? 👀",
                "You are paying, right? 😂",
                "Give me 5 minutes 😌"
            ]
        },

        {
            emoji: "🎬",

            story:
                `It's movie night and Karthik asks:<br>
                <strong>"What should we watch?"</strong>`,

            question:
                "Your choice?",

            options: [
                "Something funny 😂",
                "Something romantic ❤️",
                "You choose... I'll judge 😌",
                "Let's watch something scary 👻"
            ]
        },

        {
            emoji: "🌙",

            story:
                `It's late at night and Karthik says:<br>
                <strong>"One more conversation?"</strong>`,

            question:
                "What do you do?",

            options: [
                "Okay, let's talk ❤️",
                "Only for 5 minutes 😭",
                "We both know it won't be 5 minutes 😂"
            ]
        },

        {
            emoji: "🎁",

            story:
                `Karthik says:<br>
                <strong>"I have a surprise for you."</strong>`,

            question:
                "Your reaction?",

            options: [
                "WHAT IS IT?! 😭",
                "I knew you had something 😂",
                "Okay... show me 👀",
                "I'm scared now 😭"
            ]
        },

        {
            emoji: "😂",

            story:
                `Karthik sends you a terrible joke and waits for your reaction.`,

            question:
                "What do you do?",

            options: [
                "Laugh because I'm nice 😂",
                "Send an even worse joke 😭",
                "Pretend I didn't see it 😌",
                "Tell him how bad it was 😂"
            ]
        }

    ];


    let birthdayIndex = 0;

    let randomQuestionIndex = 0;

    let birthdayAnswers = [];


    /* =====================================================
                    SCREEN SWITCH
    ===================================================== */

    function showGameScreen(screen) {

        document
            .querySelectorAll(".game-screen")
            .forEach(function (element) {

                element.classList.remove(
                    "active-game-screen"
                );

            });


        screen.classList.add(
            "active-game-screen"
        );

    }


    /* =====================================================
                    GAME 1 START
    ===================================================== */

    function startBirthdayBuilder() {

        birthdayIndex = 0;

        birthdayAnswers = [];

        showGameScreen(
            birthdayBuilder
        );

        renderBirthdayQuestion();

    }


    /* =====================================================
                  GAME 1 QUESTION
    ===================================================== */

    function renderBirthdayQuestion() {

        const current =
            birthdayQuestions[birthdayIndex];


        birthdayQuestion.textContent =
            current.question;


        birthdayProgress.textContent =
            `${birthdayIndex + 1} / ${birthdayQuestions.length}`;


        birthdayOptions.innerHTML = "";


        current.options.forEach(
            function (option) {

                const button =
                    document.createElement("button");


                button.type = "button";

                button.className =
                    "birthday-option";


                button.innerHTML = `

                    <span class="birthday-option-emoji">
                        ${option.emoji}
                    </span>

                    <span class="birthday-option-text">
                        ${option.text}
                    </span>

                `;


                button.addEventListener(
                    "click",
                    function () {

                        button.classList.add(
                            "game-option-selected"
                        );


                        birthdayAnswers.push(
                            option.text
                        );


                        setTimeout(
                            function () {

                                birthdayIndex++;


                                if (
                                    birthdayIndex <
                                    birthdayQuestions.length
                                ) {

                                    renderBirthdayQuestion();

                                } else {

                                    showBirthdayResult();

                                }

                            },
                            350
                        );

                    }
                );


                birthdayOptions.appendChild(
                    button
                );

            }
        );

    }


    /* =====================================================
                  GAME 1 RESULT
    ===================================================== */

    function showBirthdayResult() {

        showGameScreen(
            birthdayResult
        );


        birthdaySummary.innerHTML = `

            <div class="summary-title">
                Your Perfect Birthday ❤️
            </div>

            <div class="summary-row">
                <span class="summary-label">
                    Cake
                </span>

                <span class="summary-value">
                    ${birthdayAnswers[0]}
                </span>
            </div>

            <div class="summary-row">
                <span class="summary-label">
                    Plan
                </span>

                <span class="summary-value">
                    ${birthdayAnswers[1]}
                </span>
            </div>

            <div class="summary-row">
                <span class="summary-label">
                    Companion
                </span>

                <span class="summary-value">
                    ${birthdayAnswers[2]}
                </span>
            </div>

            <div class="summary-row">
                <span class="summary-label">
                    Wish
                </span>

                <span class="summary-value">
                    ${birthdayAnswers[3]}
                </span>
            </div>

        `;

    }


    /* =====================================================
                    GAME 2 START
    ===================================================== */

    function startRandomQuestions() {

        randomQuestionIndex = 0;

        showGameScreen(
            randomQuestionsGame
        );

        renderRandomQuestion();

    }


    /* =====================================================
                   GAME 2 QUESTION
    ===================================================== */

    function renderRandomQuestion() {

        const current =
            randomQuestions[randomQuestionIndex];


        randomQuestionEmoji.textContent =
            current.emoji;


        randomQuestionStory.innerHTML =
            current.story;


        randomQuestionProgress.textContent =
            `${randomQuestionIndex + 1} / ${randomQuestions.length}`;


        randomQuestionOptions.innerHTML = "";


        current.options.forEach(
            function (option) {

                const button =
                    document.createElement("button");


                button.type = "button";

                button.className =
                    "random-question-option";


                button.textContent =
                    option;


                button.addEventListener(
                    "click",
                    function () {

                        button.classList.add(
                            "game-option-selected"
                        );


                        setTimeout(
                            function () {

                                randomQuestionIndex++;


                                if (
                                    randomQuestionIndex <
                                    randomQuestions.length
                                ) {

                                    renderRandomQuestion();

                                } else {

                                    showRandomQuestionResult();

                                }

                            },
                            350
                        );

                    }
                );


                randomQuestionOptions.appendChild(
                    button
                );

            }
        );

    }


    /* =====================================================
                  GAME 2 RESULT
    ===================================================== */

    function showRandomQuestionResult() {

        showGameScreen(
            randomQuestionsResult
        );

    }


    /* =====================================================
                         BUTTONS
    ===================================================== */

    startBirthdayGame.addEventListener(
        "click",
        function () {

            startBirthdayBuilder();

        }
    );


    continueToQuestions.addEventListener(
        "click",
        function () {

            startRandomQuestions();

        }
    );


    gameToFinal.addEventListener(
        "click",
        function () {

            if (
                typeof window.showPage ===
                "function"
            ) {

                window.showPage("final");

            } else {

                console.error(
                    "showPage() is not available."
                );

            }

        }
    );


    /* =====================================================
                    FLOATING HEARTS
    ===================================================== */

    function createHeart() {

        if (!gameHearts) {
            return;
        }


        const heart =
            document.createElement("div");


        heart.className =
            "game-floating-heart";


        heart.textContent =
            Math.random() > 0.5
                ? "❤️"
                : "🤍";


        heart.style.left =
            Math.random() * 100 + "%";


        heart.style.fontSize =
            (14 + Math.random() * 18) + "px";


        heart.style.animation =
            `gameHeartFloat ${
                7 + Math.random() * 5
            }s linear forwards`;


        gameHearts.appendChild(
            heart
        );


        setTimeout(
            function () {

                heart.remove();

            },
            13000
        );

    }


    /* =====================================================
                     FLOATING ROSES
    ===================================================== */

    function createRose() {

        if (!gameRoses) {
            return;
        }


        const rose =
            document.createElement("div");


        rose.className =
            "game-floating-rose";


        rose.textContent = "🌹";


        rose.style.left =
            Math.random() * 100 + "%";


        rose.style.fontSize =
            (16 + Math.random() * 14) + "px";


        rose.style.animation =
            `gameRoseFloat ${
                9 + Math.random() * 5
            }s linear forwards`;


        gameRoses.appendChild(
            rose
        );


        setTimeout(
            function () {

                rose.remove();

            },
            15000
        );

    }


    setInterval(
        createHeart,
        1500
    );


    setInterval(
        createRose,
        3200
    );


    /* =====================================================
                        RESET GAME
    ===================================================== */

    function resetGame() {

        birthdayIndex = 0;

        randomQuestionIndex = 0;

        birthdayAnswers = [];


        showGameScreen(
            gameIntro
        );


        birthdayOptions.innerHTML = "";

        randomQuestionOptions.innerHTML = "";


        birthdayProgress.textContent =
            "1 / 4";


        randomQuestionProgress.textContent =
            "1 / 5";

    }


    window.resetGame =
        resetGame;


})();
/* =========================================================
                         FINAL PAGE
========================================================= */

(function () {

    const finalIntro =
        document.getElementById("finalIntro");

    const cakeScene =
        document.getElementById("cakeScene");

    const wishScene =
        document.getElementById("wishScene");

    const blowScene =
        document.getElementById("blowScene");

    const finalMessage =
        document.getElementById("finalMessage");

    const finalClosing =
        document.getElementById("finalClosing");


    const beginFinalCelebration =
        document.getElementById(
            "beginFinalCelebration"
        );

    const lightCandlesButton =
        document.getElementById(
            "lightCandlesButton"
        );

    const makeWishButton =
        document.getElementById(
            "makeWishButton"
        );

    const blowCandlesButton =
        document.getElementById(
            "blowCandlesButton"
        );

    const wishMadeButton =
        document.getElementById(
            "wishMadeButton"
        );

    const blowNowButton =
        document.getElementById(
            "blowNowButton"
        );

    const finalClosingButton =
        document.getElementById(
            "finalClosingButton"
        );


    const cakeInstruction =
        document.getElementById(
            "cakeInstruction"
        );


    const finalStars =
        document.getElementById(
            "finalStars"
        );

    const finalHearts =
        document.getElementById(
            "finalHearts"
        );

    const finalPetals =
        document.getElementById(
            "finalPetals"
        );


    const candles =
        document.querySelectorAll(
            ".candle"
        );


    /* =====================================================
                     SCREEN MANAGEMENT
    ===================================================== */

    function showFinalScreen(screen) {

        document
            .querySelectorAll(".final-screen")
            .forEach(function (element) {

                element.classList.remove(
                    "final-active"
                );

            });


        screen.classList.add(
            "final-active"
        );

    }


    /* =====================================================
                    BEGIN FINAL PAGE
    ===================================================== */

    function startFinal() {

        resetFinal();

        showFinalScreen(
            finalIntro
        );

    }


    /* =====================================================
                       RESET
    ===================================================== */

    function resetFinal() {

        showFinalScreen(
            finalIntro
        );


        candles.forEach(
            function (candle) {

                candle.classList.remove(
                    "candle-blown"
                );

            }
        );


        lightCandlesButton.style.display =
            "inline-block";


        makeWishButton.classList.add(
            "hidden-final-button"
        );


        blowCandlesButton.classList.add(
            "hidden-final-button"
        );


        cakeInstruction.textContent =
            "First, light the candles.";

    }


    /* =====================================================
                  STEP 1 — START
    ===================================================== */

    beginFinalCelebration.addEventListener(
        "click",
        function () {

            showFinalScreen(
                cakeScene
            );

        }
    );


    /* =====================================================
               STEP 2 — LIGHT CANDLES
    ===================================================== */

    lightCandlesButton.addEventListener(
        "click",
        function () {

            candles.forEach(
                function (candle, index) {

                    setTimeout(
                        function () {

                            const flame =
                                candle.querySelector(
                                    ".flame"
                                );


                            flame.style.opacity =
                                "1";

                            flame.style.transform =
                                "translateX(-50%) rotate(45deg) scale(1)";

                        },
                        index * 180
                    );

                }
            );


            setTimeout(
                function () {

                    cakeInstruction.textContent =
                        "Now close your eyes and make a wish. ✨";


                    lightCandlesButton.style.display =
                        "none";


                    makeWishButton.classList.remove(
                        "hidden-final-button"
                    );

                },
                1100
            );

        }
    );


    /* =====================================================
                    STEP 3 — MAKE WISH
    ===================================================== */

    makeWishButton.addEventListener(
        "click",
        function () {

            showFinalScreen(
                wishScene
            );

        }
    );


    /* =====================================================
                 STEP 4 — WISH MADE
    ===================================================== */

    wishMadeButton.addEventListener(
        "click",
        function () {

            showFinalScreen(
                blowScene
            );

        }
    );


    /* =====================================================
                 STEP 5 — BLOW CANDLES
    ===================================================== */

    blowNowButton.addEventListener(
        "click",
        function () {

            candles.forEach(
                function (candle) {

                    candle.classList.add(
                        "candle-blown"
                    );

                }
            );


            const cake =
                document.querySelector(
                    ".cake"
                );


            if (cake) {

                cake.classList.add(
                    "final-cake-celebration"
                );

            }


            createCelebration();


            setTimeout(
                function () {

                    showFinalScreen(
                        finalMessage
                    );

                },
                1800
            );

        }
    );


    /* =====================================================
                   STEP 6 — FINAL CLOSING
    ===================================================== */

    finalClosingButton.addEventListener(
        "click",
        function () {

            showFinalScreen(
                finalClosing
            );


            startFinalEnding();

        }
    );


    /* =====================================================
                  FLOATING PARTICLES
    ===================================================== */

    function createParticle(
        container,
        className,
        content
    ) {

        if (!container) {
            return;
        }


        const particle =
            document.createElement("div");


        particle.className =
            className;


        particle.textContent =
            content;


        particle.style.left =
            Math.random() * 100 + "%";


        particle.style.fontSize =
            (
                10 +
                Math.random() * 18
            ) + "px";


        particle.style.animation =
            `finalParticleFloat ${
                8 + Math.random() * 6
            }s linear forwards`;


        particle.style.animationDelay =
            (
                Math.random() * 2
            ) + "s";


        container.appendChild(
            particle
        );


        setTimeout(
            function () {

                particle.remove();

            },
            16000
        );

    }


    /* =====================================================
                     AMBIENT PARTICLES
    ===================================================== */

    setInterval(
        function () {

            createParticle(
                finalStars,
                "final-floating-star",
                Math.random() > 0.5
                    ? "✦"
                    : "✧"
            );

        },
        1300
    );


    setInterval(
        function () {

            createParticle(
                finalHearts,
                "final-floating-heart",
                Math.random() > 0.5
                    ? "♡"
                    : "♥"
            );

        },
        1800
    );


    setInterval(
        function () {

            createParticle(
                finalPetals,
                "final-floating-petal",
                "🌸"
            );

        },
        2500
    );


    /* =====================================================
                  CELEBRATION BURST
    ===================================================== */

    function createCelebration() {

        for (
            let i = 0;
            i < 30;
            i++
        ) {

            setTimeout(
                function () {

                    const types = [
                        "❤️",
                        "✨",
                        "🌸",
                        "💗",
                        "⭐",
                        "🤍"
                    ];


                    const randomType =
                        types[
                            Math.floor(
                                Math.random() *
                                types.length
                            )
                        ];


                    createParticle(
                        finalHearts,
                        "final-floating-heart",
                        randomType
                    );

                },
                i * 70
            );

        }

    }


    /* =====================================================
                    FINAL ENDING
    ===================================================== */

    function startFinalEnding() {

        document.body.classList.add(
            "final-website-ending"
        );


        setTimeout(
            function () {

                createFinalEndingBurst();

            },
            700
        );

    }


    function createFinalEndingBurst() {

        for (
            let i = 0;
            i < 45;
            i++
        ) {

            setTimeout(
                function () {

                    const symbols = [
                        "✦",
                        "✧",
                        "❤️",
                        "🤍",
                        "🌸"
                    ];


                    const symbol =
                        symbols[
                            Math.floor(
                                Math.random() *
                                symbols.length
                            )
                        ];


                    createParticle(
                        finalStars,
                        "final-floating-star",
                        symbol
                    );

                },
                i * 80
            );

        }

    }


    /* =====================================================
                    EXPOSE TO APP
    ===================================================== */

    window.startFinal =
        startFinal;


    window.resetFinal =
        resetFinal;


})();
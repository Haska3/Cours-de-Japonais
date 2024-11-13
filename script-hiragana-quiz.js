/** 
const hiraganaList = [
    { kanji: "あ", romaji: "a", francais: "a" },
    { kanji: "い", romaji: "i", francais: "i" },
    { kanji: "う", romaji: "u", francais: "u" },
    { kanji: "え", romaji: "e", francais: "e" },
    { kanji: "お", romaji: "o", francais: "o" },
    
    { kanji: "か", romaji: "ka", francais: "ka" },
    { kanji: "き", romaji: "ki", francais: "ki" },
    { kanji: "く", romaji: "ku", francais: "ku" },
    { kanji: "け", romaji: "ke", francais: "ke" },
    { kanji: "こ", romaji: "ko", francais: "ko" },
    
    { kanji: "さ", romaji: "sa", francais: "sa" },
    { kanji: "し", romaji: "shi", francais: "shi" },
    { kanji: "す", romaji: "su", francais: "su" },
    { kanji: "せ", romaji: "se", francais: "se" },
    { kanji: "そ", romaji: "so", francais: "so" },
    
    { kanji: "た", romaji: "ta", francais: "ta" },
    { kanji: "ち", romaji: "chi", francais: "chi" },
    { kanji: "つ", romaji: "tsu", francais: "tsu" },
    { kanji: "て", romaji: "te", francais: "te" },
    { kanji: "と", romaji: "to", francais: "to" },
    
    { kanji: "な", romaji: "na", francais: "na" },
    { kanji: "に", romaji: "ni", francais: "ni" },
    { kanji: "ぬ", romaji: "nu", francais: "nu" },
    { kanji: "ね", romaji: "ne", francais: "ne" },
    { kanji: "の", romaji: "no", francais: "no" },
    
    { kanji: "は", romaji: "ha", francais: "ha" },
    { kanji: "ひ", romaji: "hi", francais: "hi" },
    { kanji: "ふ", romaji: "fu", francais: "fu" },
    { kanji: "へ", romaji: "he", francais: "he" },
    { kanji: "ほ", romaji: "ho", francais: "ho" },
    
    { kanji: "ま", romaji: "ma", francais: "ma" },
    { kanji: "み", romaji: "mi", francais: "mi" },
    { kanji: "む", romaji: "mu", francais: "mu" },
    { kanji: "め", romaji: "me", francais: "me" },
    { kanji: "も", romaji: "mo", francais: "mo" },
    
    { kanji: "や", romaji: "ya", francais: "ya" },
    { kanji: "ゆ", romaji: "yu", francais: "yu" },
    { kanji: "よ", romaji: "yo", francais: "yo" },
    
    { kanji: "ら", romaji: "ra", francais: "ra" },
    { kanji: "り", romaji: "ri", francais: "ri" },
    { kanji: "る", romaji: "ru", francais: "ru" },
    { kanji: "れ", romaji: "re", francais: "re" },
    { kanji: "ろ", romaji: "ro", francais: "ro" },
    
    { kanji: "わ", romaji: "wa", francais: "wa" },
    { kanji: "を", romaji: "wo", francais: "wo" },
    
    { kanji: "ん", romaji: "n", francais: "n" }
];

let currentIndex = 0; // Index pour suivre quel Hiragana est affiché

function afficherKanji() {
    const kanjiElement = document.getElementById("kanji");
    kanjiElement.innerHTML = hiraganaList[currentIndex].kanji;
}

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim().toLowerCase(); // Réponse entrée par l'utilisateur
    const correctAnswer = hiraganaList[currentIndex].romaji;

    if (userAnswer === correctAnswer) {
        document.getElementById("result").innerHTML = "Correct!";
        passerAuSuivant(); // Passe au hiragana suivant
    } else {
        document.getElementById("result").innerHTML = "Incorrect, essaie encore!";
    }
}

function afficherRomaji() {
    const romajiCorrect = hiraganaList[currentIndex].romaji;
    document.getElementById("romajiDisplay").innerHTML = "Réponse " + romajiCorrect;
    document.getElementById("romajiDisplay").style.display = "block"; // Affiche le romanji
}


function passerAuSuivant() {
    currentIndex = Math.floor(Math.random() * hiraganaList.length); // Hiragana aléatoire
    document.getElementById("answer").value = ""; // Vide le champ de texte
    afficherKanji(); // Affiche le nouveau Hiragana
}

window.onload = afficherKanji;
**/

// Liste des hiragana disponibles
const hiraganaList = [
    { kanji: "あ", romaji: "a", francais: "a" },
    { kanji: "い", romaji: "i", francais: "i" },
    { kanji: "う", romaji: "u", francais: "u" },
    { kanji: "え", romaji: "e", francais: "e" },
    { kanji: "お", romaji: "o", francais: "o" },
    { kanji: "あ", romaji: "a", francais: "a" },
    { kanji: "い", romaji: "i", francais: "i" },
    { kanji: "う", romaji: "u", francais: "u" },
    { kanji: "え", romaji: "e", francais: "e" },
    { kanji: "お", romaji: "o", francais: "o" },
    
    { kanji: "か", romaji: "ka", francais: "ka" },
    { kanji: "き", romaji: "ki", francais: "ki" },
    { kanji: "く", romaji: "ku", francais: "ku" },
    { kanji: "け", romaji: "ke", francais: "ke" },
    { kanji: "こ", romaji: "ko", francais: "ko" },
    
    { kanji: "さ", romaji: "sa", francais: "sa" },
    { kanji: "し", romaji: "shi", francais: "shi" },
    { kanji: "す", romaji: "su", francais: "su" },
    { kanji: "せ", romaji: "se", francais: "se" },
    { kanji: "そ", romaji: "so", francais: "so" },
    
    { kanji: "た", romaji: "ta", francais: "ta" },
    { kanji: "ち", romaji: "chi", francais: "chi" },
    { kanji: "つ", romaji: "tsu", francais: "tsu" },
    { kanji: "て", romaji: "te", francais: "te" },
    { kanji: "と", romaji: "to", francais: "to" },
    
    { kanji: "な", romaji: "na", francais: "na" },
    { kanji: "に", romaji: "ni", francais: "ni" },
    { kanji: "ぬ", romaji: "nu", francais: "nu" },
    { kanji: "ね", romaji: "ne", francais: "ne" },
    { kanji: "の", romaji: "no", francais: "no" },
    
    { kanji: "は", romaji: "ha", francais: "ha" },
    { kanji: "ひ", romaji: "hi", francais: "hi" },
    { kanji: "ふ", romaji: "fu", francais: "fu" },
    { kanji: "へ", romaji: "he", francais: "he" },
    { kanji: "ほ", romaji: "ho", francais: "ho" },
    
    { kanji: "ま", romaji: "ma", francais: "ma" },
    { kanji: "み", romaji: "mi", francais: "mi" },
    { kanji: "む", romaji: "mu", francais: "mu" },
    { kanji: "め", romaji: "me", francais: "me" },
    { kanji: "も", romaji: "mo", francais: "mo" },
    
    { kanji: "や", romaji: "ya", francais: "ya" },
    { kanji: "ゆ", romaji: "yu", francais: "yu" },
    { kanji: "よ", romaji: "yo", francais: "yo" },
    
    { kanji: "ら", romaji: "ra", francais: "ra" },
    { kanji: "り", romaji: "ri", francais: "ri" },
    { kanji: "る", romaji: "ru", francais: "ru" },
    { kanji: "れ", romaji: "re", francais: "re" },
    { kanji: "ろ", romaji: "ro", francais: "ro" },
    
    { kanji: "わ", romaji: "wa", francais: "wa" },
    { kanji: "を", romaji: "wo", francais: "wo" },
    
    { kanji: "ん", romaji: "n", francais: "n" }
];


// Liste des hiragana sélectionnés pour le quiz
let hiraganaSelection = [];
let currentIndex = 0; // Index pour suivre quel Hiragana est affiché

// Fonction pour afficher un hiragana de la sélection
function afficherKanji() {
    if (hiraganaSelection.length === 0) {
        document.getElementById("kanji").innerHTML = "?";
        return;
    }
    currentIndex = Math.floor(Math.random() * hiraganaSelection.length); // Sélection aléatoire
    document.getElementById("kanji").innerHTML = hiraganaSelection[currentIndex].kanji;
}

// Vérifie la réponse de l'utilisateur
function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
    const correctAnswer = hiraganaSelection[currentIndex].romaji;

    if (userAnswer === correctAnswer) {
        document.getElementById("result").innerHTML = "Correct!";
        passerAuSuivant();
    } else {
        document.getElementById("result").innerHTML = "Incorrect, essaie encore!";
    }
}

// Affiche la réponse romaji correcte
function afficherRomaji() {
    const romajiCorrect = hiraganaSelection[currentIndex].romaji;
    document.getElementById("romajiDisplay").innerHTML = "Réponse : " + romajiCorrect;
    document.getElementById("romajiDisplay").style.display = "block";
}

// Passe au hiragana suivant
function passerAuSuivant() {
    document.getElementById("answer").value = "";
    afficherKanji();
}

// Fonction pour ajouter ou retirer un hiragana de la sélection
function toggleHiragana(kanji) {
    const hiragana = hiraganaList.find(item => item.kanji === kanji);
    const index = hiraganaSelection.findIndex(item => item.kanji === kanji);

    if (index !== -1) {
        // Si déjà dans la sélection, retire le hiragana
        hiraganaSelection.splice(index, 1);
    } else {
        // Sinon, ajoute le hiragana dans la sélection
        hiraganaSelection.push(hiragana);
    }
    afficherSelection();
    afficherKanji();
}

// Affiche les hiragana sélectionnés à l'écran
function afficherSelection() {
    const selectedText = hiraganaSelection.map(item => item.kanji).join(", ");
    document.getElementById("selectedHiragana").innerText = selectedText || "Aucun sélectionné";
}

// Initialise le quiz
window.onload = afficherKanji;



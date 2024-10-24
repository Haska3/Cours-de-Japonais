const katakanaList = [
    { kanji: "ア", romaji: "a", francais: "a" },
    { kanji: "イ", romaji: "i", francais: "i" },
    { kanji: "ウ", romaji: "u", francais: "u" },
    { kanji: "エ", romaji: "e", francais: "e" },
    { kanji: "オ", romaji: "o", francais: "o" },
    
    { kanji: "カ", romaji: "ka", francais: "ka" },
    { kanji: "キ", romaji: "ki", francais: "ki" },
    { kanji: "ク", romaji: "ku", francais: "ku" },
    { kanji: "ケ", romaji: "ke", francais: "ke" },
    { kanji: "コ", romaji: "ko", francais: "ko" },
    
    { kanji: "サ", romaji: "sa", francais: "sa" },
    { kanji: "シ", romaji: "shi", francais: "shi" },
    { kanji: "ス", romaji: "su", francais: "su" },
    { kanji: "セ", romaji: "se", francais: "se" },
    { kanji: "ソ", romaji: "so", francais: "so" },
    
    { kanji: "タ", romaji: "ta", francais: "ta" },
    { kanji: "チ", romaji: "chi", francais: "chi" },
    { kanji: "ツ", romaji: "tsu", francais: "tsu" },
    { kanji: "テ", romaji: "te", francais: "te" },
    { kanji: "ト", romaji: "to", francais: "to" },
    
    { kanji: "ナ", romaji: "na", francais: "na" },
    { kanji: "ニ", romaji: "ni", francais: "ni" },
    { kanji: "ヌ", romaji: "nu", francais: "nu" },
    { kanji: "ネ", romaji: "ne", francais: "ne" },
    { kanji: "ノ", romaji: "no", francais: "no" },
    
    { kanji: "ハ", romaji: "ha", francais: "ha" },
    { kanji: "ヒ", romaji: "hi", francais: "hi" },
    { kanji: "フ", romaji: "fu", francais: "fu" },
    { kanji: "ヘ", romaji: "he", francais: "he" },
    { kanji: "ホ", romaji: "ho", francais: "ho" },
    
    { kanji: "マ", romaji: "ma", francais: "ma" },
    { kanji: "ミ", romaji: "mi", francais: "mi" },
    { kanji: "ム", romaji: "mu", francais: "mu" },
    { kanji: "メ", romaji: "me", francais: "me" },
    { kanji: "モ", romaji: "mo", francais: "mo" },
    
    { kanji: "ヤ", romaji: "ya", francais: "ya" },
    { kanji: "ユ", romaji: "yu", francais: "yu" },
    { kanji: "ヨ", romaji: "yo", francais: "yo" },
    
    { kanji: "ラ", romaji: "ra", francais: "ra" },
    { kanji: "リ", romaji: "ri", francais: "ri" },
    { kanji: "ル", romaji: "ru", francais: "ru" },
    { kanji: "レ", romaji: "re", francais: "re" },
    { kanji: "ロ", romaji: "ro", francais: "ro" },
    
    { kanji: "ワ", romaji: "wa", francais: "wa" },
    { kanji: "ヲ", romaji: "wo", francais: "wo" },
    
    { kanji: "ン", romaji: "n", francais: "n" }
];

let currentIndex = 0; // Index pour suivre quel Katakana est affiché

function afficherKanji() {
    const kanjiElement = document.getElementById("kanji");
    kanjiElement.innerHTML = katakanaList[currentIndex].kanji;
}

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim().toLowerCase(); // Réponse entrée par l'utilisateur
    const correctAnswer = katakanaList[currentIndex].romaji;

    if (userAnswer === correctAnswer) {
        document.getElementById("result").innerHTML = "Correct!";
        passerAuSuivant(); // Passe au katakana suivant
    } else {
        document.getElementById("result").innerHTML = "Incorrect, essaie encore!";
    }
}

function afficherRomaji() {
    const romajiCorrect = katakanaList[currentIndex].romaji;
    document.getElementById("romajiDisplay").innerHTML = "Réponse " + romajiCorrect;
    document.getElementById("romajiDisplay").style.display = "block"; // Affiche le romanji
}

function passerAuSuivant() {
    currentIndex = Math.floor(Math.random() * katakanaList.length); // Katakana aléatoire
    document.getElementById("answer").value = ""; // Vide le champ de texte
    afficherKanji(); // Affiche le nouveau Katakana
}

window.onload = afficherKanji;

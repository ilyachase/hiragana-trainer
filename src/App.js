import './App.css';
import Settings from "./Components/Settings";
import {useEffect, useState} from "react";
import Letter from "./Components/Letter";
import RomajiInput from "./Components/RomajiInput";
import History from "./Components/History";

function App() {
    function saveToStorage(key, value) {
        window.localStorage.setItem(key, JSON.stringify(value));
    }

    function loadFromStorage(key) {
        let value = window.localStorage.getItem(key);
        return value !== null ? JSON.parse(value) : null;
    }

    const [settings, setSettings] = useState(loadFromStorage('settings') ?? {
        hiragana: [
            {id: "Hiragana_letter_A", romaji: "a", enabled: true},
            {id: "Hiragana_letter_I", romaji: "i", enabled: true},
            {id: "Hiragana_letter_U", romaji: "u", enabled: true},
            {id: "Hiragana_letter_E", romaji: "e", enabled: true},
            {id: "Hiragana_letter_O", romaji: "o", enabled: true},
            {id: "Hiragana_letter_Ka", romaji: "ka", enabled: true},
            {id: "Hiragana_letter_Ga", romaji: "ga", enabled: true},
            {id: "Hiragana_letter_Ki", romaji: "ki", enabled: true},
            {id: "Hiragana_letter_Gi", romaji: "gi", enabled: true},
            {id: "Hiragana_letter_Ku", romaji: "ku", enabled: true},
            {id: "Hiragana_letter_Gu", romaji: "gu", enabled: true},
            {id: "Hiragana_letter_Ke", romaji: "ke", enabled: true},
            {id: "Hiragana_letter_Ge", romaji: "ge", enabled: true},
            {id: "Hiragana_letter_Ko", romaji: "ko", enabled: true},
            {id: "Hiragana_letter_Go", romaji: "go", enabled: true},
            {id: "Hiragana_letter_Sa", romaji: "sa", enabled: true},
            {id: "Hiragana_letter_Za", romaji: "za", enabled: true},
            {id: "Hiragana_letter_Si", romaji: "si", enabled: true},
            {id: "Hiragana_letter_Zi", romaji: "zi", enabled: true},
            {id: "Hiragana_letter_Su", romaji: "su", enabled: true},
            {id: "Hiragana_letter_Zu", romaji: "zu", enabled: true},
            {id: "Hiragana_letter_Se", romaji: "se", enabled: true},
            {id: "Hiragana_letter_Ze", romaji: "ze", enabled: true},
            {id: "Hiragana_letter_So", romaji: "so", enabled: true},
            {id: "Hiragana_letter_Zo", romaji: "zo", enabled: true},
            {id: "Hiragana_letter_Ta", romaji: "ta", enabled: true},
            {id: "Hiragana_letter_Da", romaji: "da", enabled: true},
            {id: "Hiragana_letter_Ti", romaji: "ti", enabled: true},
            {id: "Hiragana_letter_Di", romaji: "di", enabled: true},
            {id: "Hiragana_letter_Tu", romaji: "tu", enabled: true},
            {id: "Hiragana_letter_Du", romaji: "du", enabled: true},
            {id: "Hiragana_letter_Te", romaji: "te", enabled: true},
            {id: "Hiragana_letter_De", romaji: "de", enabled: true},
            {id: "Hiragana_letter_To", romaji: "to", enabled: true},
            {id: "Hiragana_letter_Do", romaji: "do", enabled: true},
            {id: "Hiragana_letter_Na", romaji: "na", enabled: true},
            {id: "Hiragana_letter_Ni", romaji: "ni", enabled: true},
            {id: "Hiragana_letter_Nu", romaji: "nu", enabled: true},
            {id: "Hiragana_letter_Ne", romaji: "ne", enabled: true},
            {id: "Hiragana_letter_No", romaji: "no", enabled: true},
            {id: "Hiragana_letter_Ha", romaji: "ha", enabled: true},
            {id: "Hiragana_letter_Ba", romaji: "ba", enabled: true},
            {id: "Hiragana_letter_Pa", romaji: "pa", enabled: true},
            {id: "Hiragana_letter_Hi", romaji: "hi", enabled: true},
            {id: "Hiragana_letter_Bi", romaji: "bi", enabled: true},
            {id: "Hiragana_letter_Pi", romaji: "pi", enabled: true},
            {id: "Hiragana_letter_Hu", romaji: "hu", enabled: true},
            {id: "Hiragana_letter_Bu", romaji: "bu", enabled: true},
            {id: "Hiragana_letter_Pu", romaji: "pu", enabled: true},
            {id: "Hiragana_letter_He", romaji: "he", enabled: true},
            {id: "Hiragana_letter_Be", romaji: "be", enabled: true},
            {id: "Hiragana_letter_Pe", romaji: "pe", enabled: true},
            {id: "Hiragana_letter_Ho", romaji: "ho", enabled: true},
            {id: "Hiragana_letter_Bo", romaji: "bo", enabled: true},
            {id: "Hiragana_letter_Po", romaji: "po", enabled: true},
            {id: "Hiragana_letter_Ma", romaji: "ma", enabled: true},
            {id: "Hiragana_letter_Mi", romaji: "mi", enabled: true},
            {id: "Hiragana_letter_Mu", romaji: "mu", enabled: true},
            {id: "Hiragana_letter_Me", romaji: "me", enabled: true},
            {id: "Hiragana_letter_Mo", romaji: "mo", enabled: true},
            {id: "Hiragana_letter_Ya", romaji: "ya", enabled: true},
            {id: "Hiragana_letter_Yo", romaji: "yo", enabled: true},
            {id: "Hiragana_letter_Ra", romaji: "ra", enabled: true},
            {id: "Hiragana_letter_Ri", romaji: "ri", enabled: true},
            {id: "Hiragana_letter_Ru", romaji: "ru", enabled: true},
            {id: "Hiragana_letter_Re", romaji: "re", enabled: true},
            {id: "Hiragana_letter_Ro", romaji: "ro", enabled: true},
            {id: "Hiragana_letter_Wa", romaji: "wa", enabled: true},
            {id: "Hiragana_letter_Wi", romaji: "wi", enabled: true},
            {id: "Hiragana_letter_We", romaji: "we", enabled: true},
            {id: "Hiragana_letter_Wo", romaji: "wo", enabled: true},
            {id: "Hiragana_letter_N", romaji: "n", enabled: true},
            {id: "Hiragana_letter_Vu", romaji: "vu", enabled: true}
        ]
    });
    useEffect(() => saveToStorage('settings', settings), [settings]);

    const enabledHiragana = settings.hiragana.filter(item => item.enabled), lettersInRound = enabledHiragana.length;
    const [randomLetter, setRandomLetter] = useState(enabledHiragana[Math.floor(Math.random() * enabledHiragana.length)]);
    const [currentRoundCount, setCurrentRoundCount] = useState(0);
    const [history, setHistory] = useState([]);

    // onAnswer
    const onAnswer = (letterId, isCorrect) => {
        if (currentRoundCount + 1 >= lettersInRound) {
            setCurrentRoundCount(0);
        } else {
            setCurrentRoundCount(current => current + 1);
        }

        const newHistory = [...history];
        newHistory.unshift({isCorrect: isCorrect, actual: letterId, expected: randomLetter.romaji});
        setHistory(newHistory);
        setRandomLetter(enabledHiragana[Math.floor(Math.random() * enabledHiragana.length)]);
    }

    return (
        <div className="container">
            <Settings settings={settings} setSettings={setSettings}/>
            <div className="mt-2 d-flex justify-content-center">
                <form>
                    <Letter id={randomLetter?.id}/>
                    <RomajiInput
                        randomLetter={randomLetter}
                        lettersInRound={lettersInRound}
                        currentRoundCount={currentRoundCount}
                        onAnswer={onAnswer}
                    />
                </form>
            </div>
            <History history={history}/>
        </div>
    );
}

export default App;

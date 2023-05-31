import './App.css';
import {Settings, defaultSettings} from "./Components/Settings";
import {useEffect, useState} from "react";
import Letter from "./Components/Letter";
import RomajiInput from "./Components/RomajiInput";
import History from "./Components/History";
import {loadFromStorage, saveToStorage} from "./helpers";

const generateNewLetter = (enabledHiragana, answeredLetters) => {
    let newLetter;

    do {
        newLetter = enabledHiragana[Math.floor(Math.random() * enabledHiragana.length)];
    } while (answeredLetters.findIndex(letterId => letterId === newLetter.romaji) !== -1);

    return newLetter;
}

function App() {
    const [history, setHistory] = useState([]);
    const [settings, setSettings] = useState(loadFromStorage('settings') ?? defaultSettings);
    const [randomLetter, setRandomLetter] = useState();
    const [answeredLetters, setAnsweredLetters] = useState([]);

    useEffect(() => saveToStorage('settings', settings), [settings]);
    const enabledHiragana = settings.hiragana.filter(item => item.enabled), lettersInRound = enabledHiragana.length;
    useEffect(() => setRandomLetter(generateNewLetter(enabledHiragana, answeredLetters)), [answeredLetters]);

    const onAnswer = (letterId, isCorrect) => {
        const newHistory = [...history];
        newHistory.unshift({isCorrect: isCorrect, actual: letterId, expected: randomLetter.romaji});
        setHistory(newHistory);

        if (answeredLetters.length + 1 >= lettersInRound) {
            setAnsweredLetters([]);
        } else {
            setAnsweredLetters(current => [...current, randomLetter.romaji]);
        }
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
                        onAnswer={onAnswer}
                    />
                </form>
            </div>
            <History history={history}/>
        </div>
    );
}

export default App;

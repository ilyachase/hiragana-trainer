import './App.css';
import {Settings, defaultSettings} from "./Components/Settings";
import {useEffect, useState} from "react";
import Letter from "./Components/Letter";
import RomajiInput from "./Components/RomajiInput";
import History from "./Components/History";
import {loadFromStorage, saveToStorage} from "./helpers";

function App() {
    const [history, setHistory] = useState([]);
    const [settings, setSettings] = useState(loadFromStorage('settings') ?? defaultSettings);
    const [randomLetter, setRandomLetter] = useState();
    const enabledHiragana = settings.hiragana.filter(item => item.enabled), lettersInRound = enabledHiragana.length;
    const [lettersToAnswer, setLettersToAnswer] = useState([...enabledHiragana]);

    useEffect(() => saveToStorage('settings', settings), [settings]);
    useEffect(() => {
        setRandomLetter(lettersToAnswer[Math.floor(Math.random() * lettersToAnswer.length)])
    }, [lettersToAnswer]);

    const onAnswer = (letterId, isCorrect) => {
        const newHistory = [...history];
        newHistory.unshift({isCorrect: isCorrect, actual: letterId, expected: randomLetter.romaji});
        setHistory(newHistory);

        if (lettersToAnswer.length === 1) {
            setLettersToAnswer([...enabledHiragana]);
        } else {
            setLettersToAnswer(current => [...current.filter(item => item.id !== randomLetter.id)]);
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

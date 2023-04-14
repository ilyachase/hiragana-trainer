import {useState} from "react";

function RomajiInput({randomLetter, onAnswer, lettersInRound}) {
    const [inputState, setInputState] = useState({state: null});
    const [correctCount, setCorrectCount] = useState(0);
    const [incorrectCount, setIncorrectCount] = useState(0);

    const onKeyDown = function (event) {
        if (event.key === "Enter") {
            event.preventDefault();

            const answer = event.target.value === randomLetter.romaji ? 'correct' : 'incorrect';
            setInputState({state: answer});
            onAnswer(event.target.value, answer === 'correct');

            event.target.value = '';

            if (correctCount + incorrectCount >= lettersInRound) {
                setCorrectCount(0);
                setIncorrectCount(0);
            }

            if (answer === 'correct') {
                setCorrectCount(current => current + 1);
            } else {
                setIncorrectCount(current => current + 1);
            }
        }
    }

    return (
        <div className="mb-3">
            <label htmlFor="romaji-input" className="form-label">Romaji</label>
            <div className="d-flex align-items-baseline">
                <input autoComplete="off" type="text"
                       className={'form-control' + (inputState.state === 'correct' ? ' is-valid' : inputState.state === 'incorrect' ? ' is-invalid' : '')}
                       id="romaji-input" aria-describedby="emailHelp" onKeyDown={onKeyDown}/>
                <div style={{width: '20%', textAlign: 'center'}}>
                    <span className={'text-success-emphasis'}>{correctCount}</span> / <span
                    className={'text-danger-emphasis'}>{incorrectCount}</span> / <span>{lettersInRound - correctCount - incorrectCount}</span>
                </div>
            </div>
        </div>
    );
}

export default RomajiInput;
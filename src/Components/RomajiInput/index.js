import {useState} from "react";

function RomajiInput({randomLetter, onCorrectLetter}) {
    const [inputState, setInputState] = useState({state: null})

    const onKeyDown = function (event) {
        if (event.key === "Enter") {
            event.preventDefault();

            if (event.target.value === randomLetter.romaji) {
                setInputState({state: 'correct'});
                onCorrectLetter();
            } else {
                setInputState({state: 'incorrect'});
            }

            event.target.value = '';
        }
    }

    return (
        <div className="mb-3">
            <label htmlFor="romaji-input" className="form-label">Romaji</label>
            <div className="d-flex align-items-baseline">
                <input autoComplete="off" type="text" className={'form-control' + (inputState.state === 'correct' ? ' is-valid' : inputState.state === 'incorrect' ? ' is-invalid' : '')} id="romaji-input" aria-describedby="emailHelp" onKeyDown={onKeyDown}/>
                <div style={{width: '15%', textAlign: 'center'}}><span id="round-correct" className="text-success-emphasis"></span> / <span id="round-total"></span></div>
            </div>
        </div>
    );
}

export default RomajiInput;
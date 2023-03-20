function RomajiInput() {
    return (
        <div className="mb-3">
            <label htmlFor="romaji-input" className="form-label">Romaji</label>
            <div className="d-flex align-items-baseline">
                <input autoComplete="off" type="text" className="form-control" id="romaji-input" aria-describedby="emailHelp"/>
                <div style={{width: '15%', textAlign: 'center'}}><span id="round-correct" className="text-success-emphasis"></span> / <span id="round-total"></span></div>
            </div>
        </div>
    );
}

export default RomajiInput;
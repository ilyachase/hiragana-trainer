function Letter({randomLetter}) {
    return (
        <div className="mb-3">
            <img src={'./Hiragana/' + randomLetter.id + '.svg'} width="450px" title={randomLetter.romaji} className="img-thumbnail"/>
        </div>
    );
}

export default Letter;
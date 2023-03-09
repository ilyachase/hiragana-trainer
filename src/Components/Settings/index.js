import Accordion from 'react-bootstrap/Accordion';

function Settings({settings}) {
    const letterInputRows = [], letterInputs = [];

    settings.hiragana.forEach(function (letter) {
        letterInputs.push(<div className="p-2" key={letter.id}>
            <input className="form-check-input hiragana-checkbox" type="checkbox" checked id={letter.id}/>
            <label className="form-check-label" htmlFor={letter.id}>
                <img src={'./Hiragana/' + letter.id + '.svg'} alt={letter.id} className="img-thumbnail hiragana-settings-letter"/>
            </label>
        </div>);
    });

    for (let i = 0; i < settings.hiragana.length; i++) {
        if (i % 14 === 0) {
            letterInputRows.push(<div key={i} className="mb-3 d-inline-flex">{letterInputs.slice(i, i + 14)}</div>);
        }
    }

    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Settings</Accordion.Header>
                <Accordion.Body>
                    <h5>Include following letters</h5>
                    <form>
                        {letterInputRows}
                        <h5>Letters in a round</h5>
                        <div className="mb-3 d-inline-flex">
                            <input autoComplete="off" type="text" className="form-control"
                                   id="letters-in-round-input" aria-describedby="emailHelp"/>
                        </div>
                    </form>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default Settings;

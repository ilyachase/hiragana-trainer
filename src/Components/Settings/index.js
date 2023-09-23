import Accordion from 'react-bootstrap/Accordion';
import {Button, Form} from "react-bootstrap";

function Settings({settings, setSettings}) {
    const letterInputRows = [], letterInputs = [];

    const onLetterCheckboxChange = function (letter) {
        const changedLetterIndex = settings.hiragana.findIndex(item => item.id === letter.id);
        settings.hiragana[changedLetterIndex].enabled = !settings.hiragana[changedLetterIndex].enabled;
        setSettings(prevSettings => ({...prevSettings, hiragana: settings.hiragana}));
    }

    settings.hiragana.forEach(function (letter) {
        letterInputs.push(<div className="p-2" key={letter.id}>
            <input className="form-check-input hiragana-checkbox" type="checkbox"
                   onChange={() => onLetterCheckboxChange(letter)} checked={letter.enabled} id={letter.id}/>
            <label className="form-check-label" htmlFor={letter.id}>
                <img src={'./Hiragana/' + letter.id + '.svg'} alt={letter.id} title={letter.id}
                     className="img-thumbnail hiragana-settings-letter"/>
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
                    <Form.Group className="mb-3">
                        <Button variant="secondary" onClick={() => {
                            settings.hiragana.forEach(item => item.enabled = true);
                            setSettings(prevSettings => ({...prevSettings, hiragana: settings.hiragana}));
                        }}>Select all</Button>{' '}
                        <Button variant="secondary" onClick={() => {
                            settings.hiragana.forEach(item => item.enabled = false);
                            setSettings(prevSettings => ({...prevSettings, hiragana: settings.hiragana}));
                        }}>Select none</Button>
                    </Form.Group>
                    <form>
                        {letterInputRows}
                    </form>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

const defaultSettings = {
    hiragana: [
        {id: "Hiragana_letter_A", romaji: "a", enabled: true},
        {id: "Hiragana_letter_I", romaji: "i", enabled: true},
        {id: "Hiragana_letter_U", romaji: "u", enabled: true},
        {id: "Hiragana_letter_E", romaji: "e", enabled: true},
        {id: "Hiragana_letter_O", romaji: "o", enabled: true},
        {id: "Hiragana_letter_Ka", romaji: "ka", enabled: true},
        {id: "Hiragana_letter_Ki", romaji: "ki", enabled: true},
        {id: "Hiragana_letter_Ku", romaji: "ku", enabled: true},
        {id: "Hiragana_letter_Ke", romaji: "ke", enabled: true},
        {id: "Hiragana_letter_Ko", romaji: "ko", enabled: true},
        {id: "Hiragana_letter_Sa", romaji: "sa", enabled: true},
        {id: "Hiragana_letter_Shi", romaji: "shi", enabled: true},
        {id: "Hiragana_letter_Su", romaji: "su", enabled: true},
        {id: "Hiragana_letter_Se", romaji: "se", enabled: true},
        {id: "Hiragana_letter_So", romaji: "so", enabled: true},
        {id: "Hiragana_letter_Ta", romaji: "ta", enabled: true},
        {id: "Hiragana_letter_Chi", romaji: "chi", enabled: true},
        {id: "Hiragana_letter_Tsu", romaji: "tsu", enabled: true},
        {id: "Hiragana_letter_Te", romaji: "te", enabled: true},
        {id: "Hiragana_letter_To", romaji: "to", enabled: true},
        {id: "Hiragana_letter_Na", romaji: "na", enabled: true},
        {id: "Hiragana_letter_Ni", romaji: "ni", enabled: true},
        {id: "Hiragana_letter_Nu", romaji: "nu", enabled: true},
        {id: "Hiragana_letter_Ne", romaji: "ne", enabled: true},
        {id: "Hiragana_letter_No", romaji: "no", enabled: true},
        {id: "Hiragana_letter_Ha", romaji: "ha", enabled: true},
        {id: "Hiragana_letter_Hi", romaji: "hi", enabled: true},
        {id: "Hiragana_letter_Fu", romaji: "fu", enabled: true},
        {id: "Hiragana_letter_He", romaji: "he", enabled: true},
        {id: "Hiragana_letter_Ho", romaji: "ho", enabled: true},
        {id: "Hiragana_letter_Ma", romaji: "ma", enabled: true},
        {id: "Hiragana_letter_Mi", romaji: "mi", enabled: true},
        {id: "Hiragana_letter_Mu", romaji: "mu", enabled: true},
        {id: "Hiragana_letter_Me", romaji: "me", enabled: true},
        {id: "Hiragana_letter_Mo", romaji: "mo", enabled: true},
        {id: "Hiragana_letter_Ra", romaji: "ra", enabled: true},
        {id: "Hiragana_letter_Ri", romaji: "ri", enabled: true},
        {id: "Hiragana_letter_Ru", romaji: "ru", enabled: true},
        {id: "Hiragana_letter_Re", romaji: "re", enabled: true},
        {id: "Hiragana_letter_Ro", romaji: "ro", enabled: true},
        {id: "Hiragana_letter_Ya", romaji: "ya", enabled: true},
        {id: "Hiragana_letter_Yu", romaji: "yu", enabled: true},
        {id: "Hiragana_letter_Yo", romaji: "yo", enabled: true},
        {id: "Hiragana_letter_Wa", romaji: "wa", enabled: true},
        {id: "Hiragana_letter_Wo", romaji: "o", enabled: true},
        {id: "Hiragana_letter_N", romaji: "n", enabled: true},
        {id: "Hiragana_letter_Ga", romaji: "ga", enabled: true},
        {id: "Hiragana_letter_Gi", romaji: "gi", enabled: true},
        {id: "Hiragana_letter_Gu", romaji: "gu", enabled: true},
        {id: "Hiragana_letter_Ge", romaji: "ge", enabled: true},
        {id: "Hiragana_letter_Go", romaji: "go", enabled: true},
        {id: "Hiragana_letter_Za", romaji: "za", enabled: true},
        {id: "Hiragana_letter_Zi", romaji: "ji", enabled: true},
        {id: "Hiragana_letter_Zu", romaji: "zu", enabled: true},
        {id: "Hiragana_letter_Ze", romaji: "ze", enabled: true},
        {id: "Hiragana_letter_Zo", romaji: "zo", enabled: true},
        {id: "Hiragana_letter_Da", romaji: "da", enabled: true},
        {id: "Hiragana_letter_Di", romaji: "ji", enabled: true},
        {id: "Hiragana_letter_Du", romaji: "zu", enabled: true},
        {id: "Hiragana_letter_De", romaji: "de", enabled: true},
        {id: "Hiragana_letter_Do", romaji: "do", enabled: true},
        {id: "Hiragana_letter_Ba", romaji: "ba", enabled: true},
        {id: "Hiragana_letter_Bi", romaji: "bi", enabled: true},
        {id: "Hiragana_letter_Bu", romaji: "bu", enabled: true},
        {id: "Hiragana_letter_Be", romaji: "be", enabled: true},
        {id: "Hiragana_letter_Bo", romaji: "bo", enabled: true},
        {id: "Hiragana_letter_Pa", romaji: "pa", enabled: true},
        {id: "Hiragana_letter_Pu", romaji: "pu", enabled: true},
        {id: "Hiragana_letter_Pi", romaji: "pi", enabled: true},
        {id: "Hiragana_letter_Pe", romaji: "pe", enabled: true},
        {id: "Hiragana_letter_Po", romaji: "po", enabled: true},
        {id: "Hiragana_letter_Wi", romaji: "wi", enabled: true},
        {id: "Hiragana_letter_We", romaji: "we", enabled: true},
        {id: "Hiragana_letter_Vu", romaji: "vu", enabled: true},
        {id:"Japanese_Katakana_kyokashotai_A", romaji: "a", enabled: true},
        {id:"Japanese_Katakana_kyokashotai_I", romaji: "i", enabled: true},
        {id:"Japanese_Katakana_kyokashotai_U", romaji: "u", enabled: true},
        {id:"Japanese_Katakana_kyokashotai_E", romaji: "e", enabled: true},
        {id:"Japanese_Katakana_kyokashotai_O", romaji: "o", enabled: true},
        {id:"Japanese_Katakana_kyokashotai_KA", romaji: "ka", enabled: true},
        {id:"Japanese_Katakana_kyokashotai_KI", romaji: "ki", enabled: true},
        {id:"Japanese_Katakana_kyokashotai_KU", romaji: "ku", enabled: true},
        {id:"Japanese_Katakana_kyokashotai_KE", romaji: "ke", enabled: true},
        {id:"Japanese_Katakana_kyokashotai_KO", romaji: "ko", enabled: true},
        {id:"Japanese_Katakana_kyokashotai_SA", romaji: "sa", enabled: true},
        {id:"Japanese_Katakana_kyokashotai_SI", romaji: "shi", enabled: true},
        {id:"Japanese_Katakana_kyokashotai_SU", romaji: "su", enabled: true},
        {id:"Japanese_Katakana_kyokashotai_SE", romaji: "se", enabled: true},
        {id:"Japanese_Katakana_kyokashotai_SO", romaji: "so", enabled: true},
        {id:"Japanese_Katakana_kyokashotai_TA", romaji: "ta", enabled: true},
        {id:"Japanese_Katakana_kyokashotai_TI", romaji: "chi", enabled: true},
        {id:"Japanese_Katakana_kyokashotai_TU", romaji: "tsu", enabled: true},
        {id:"Japanese_Katakana_kyokashotai_TE", romaji: "te", enabled: true},
        {id:"Japanese_Katakana_kyokashotai_TO", romaji: "to", enabled: true},
        {id:"Japanese_Katakana_kyokashotai_NA", romaji: "na", enabled: true},
        {id:"Japanese_Katakana_kyokashotai_NI", romaji: "ni", enabled: true},
        {id:"Japanese_Katakana_kyokashotai_NU", romaji: "nu", enabled: true},
        {id:"Japanese_Katakana_kyokashotai_NE", romaji: "ne", enabled: true},
        {id:"Japanese_Katakana_kyokashotai_NO", romaji: "no", enabled: true},
        {id:"Japanese_Katakana_kyokashotai_HA", romaji: "ha", enabled: true},
        {id:"Japanese_Katakana_kyokashotai_HI", romaji: "hi", enabled: true},
        {id:"Japanese_Katakana_kyokashotai_HU", romaji: "hu", enabled: true},
        {id:"Japanese_Katakana_kyokashotai_HE", romaji: "he", enabled: true},
        {id:"Japanese_Katakana_kyokashotai_HO", romaji: "ho", enabled: true},
        {id:"Japanese_Katakana_kyokashotai_MA", romaji: "ma", enabled: true},
        {id:"Japanese_Katakana_kyokashotai_MI", romaji: "mi", enabled: true},
        {id:"Japanese_Katakana_kyokashotai_MU", romaji: "mu", enabled: true},
        {id:"Japanese_Katakana_kyokashotai_ME", romaji: "me", enabled: true},
        {id:"Japanese_Katakana_kyokashotai_MO", romaji: "mo", enabled: true},
        {id:"Japanese_Katakana_kyokashotai_YA", romaji: "ya", enabled: true},
        {id:"Japanese_Katakana_kyokashotai_YU", romaji: "yu", enabled: true},
        {id:"Japanese_Katakana_kyokashotai_YO", romaji: "yo", enabled: true},
        {id:"Japanese_Katakana_kyokashotai_RA", romaji: "ra", enabled: true},
        {id:"Japanese_Katakana_kyokashotai_RI", romaji: "ri", enabled: true},
        {id:"Japanese_Katakana_kyokashotai_RU", romaji: "ru", enabled: true},
        {id:"Japanese_Katakana_kyokashotai_RE", romaji: "re", enabled: true},
        {id:"Japanese_Katakana_kyokashotai_RO", romaji: "ro", enabled: true},
        {id:"Japanese_Katakana_kyokashotai_WA", romaji: "wa", enabled: true},
        {id:"Japanese_Katakana_kyokashotai_WI", romaji: "wi", enabled: true},
        {id:"Japanese_Katakana_kyokashotai_WE", romaji: "we", enabled: true},
        {id:"Japanese_Katakana_kyokashotai_WO", romaji: "wo", enabled: true},
        {id:"Japanese_Katakana_kyokashotai_N", romaji: "n", enabled: true},
    ]
};

export {Settings, defaultSettings};

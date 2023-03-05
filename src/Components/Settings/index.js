import Accordion from 'react-bootstrap/Accordion';

function Settings() {
    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Settings</Accordion.Header>
                <Accordion.Body>
                    <h5>Include following letters</h5>
                    <form>
                        <div className="mb-3 d-inline-flex">
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_A"/>
                                <label className="form-check-label" htmlFor="Hiragana_letter_A">
                                    <img src="./Hiragana/Hiragana_letter_A.svg" alt="Hiragana letter A" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_I"/>
                                <label className="form-check-label" htmlFor="Hiragana_letter_I">
                                    <img src="./Hiragana/Hiragana_letter_I.svg" alt="Hiragana letter I" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_U"/>
                                <label className="form-check-label" htmlFor="Hiragana_letter_U">
                                    <img src="./Hiragana/Hiragana_letter_U.svg" alt="Hiragana letter U" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_E"/>
                                <label className="form-check-label" htmlFor="Hiragana_letter_E">
                                    <img src="./Hiragana/Hiragana_letter_E.svg" alt="Hiragana letter E" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_O"/>
                                <label className="form-check-label" htmlFor="Hiragana_letter_O">
                                    <img src="./Hiragana/Hiragana_letter_O.svg" alt="Hiragana letter O" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_Ka"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_Ka">
                                    <img src="./Hiragana/Hiragana_letter_Ka.svg" alt="Hiragana letter Ka" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_Ga"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_Ga">
                                    <img src="./Hiragana/Hiragana_letter_Ga.svg" alt="Hiragana letter Ga" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_Ki"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_Ki">
                                    <img src="./Hiragana/Hiragana_letter_Ki.svg" alt="Hiragana letter Ki" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_Gi"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_Gi">
                                    <img src="./Hiragana/Hiragana_letter_Gi.svg" alt="Hiragana letter Gi" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_Ku"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_Ku">
                                    <img src="./Hiragana/Hiragana_letter_Ku.svg" alt="Hiragana letter Ku" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_Gu"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_Gu">
                                    <img src="./Hiragana/Hiragana_letter_Gu.svg" alt="Hiragana letter Gu" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_Ke"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_Ke">
                                    <img src="./Hiragana/Hiragana_letter_Ke.svg" alt="Hiragana letter Ke" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_Ge"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_Ge">
                                    <img src="./Hiragana/Hiragana_letter_Ge.svg" alt="Hiragana letter Ge" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_Ko"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_Ko">
                                    <img src="./Hiragana/Hiragana_letter_Ko.svg" alt="Hiragana letter Ko" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                        </div>
                        <div className="mb-3 d-inline-flex">
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_Go"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_Go">
                                    <img src="./Hiragana/Hiragana_letter_Go.svg" alt="Hiragana letter Go" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_Sa"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_Sa">
                                    <img src="./Hiragana/Hiragana_letter_Sa.svg" alt="Hiragana letter Sa" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_Za"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_Za">
                                    <img src="./Hiragana/Hiragana_letter_Za.svg" alt="Hiragana letter Za" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_Si"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_Si">
                                    <img src="./Hiragana/Hiragana_letter_Si.svg" alt="Hiragana letter Si" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_Zi"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_Zi">
                                    <img src="./Hiragana/Hiragana_letter_Zi.svg" alt="Hiragana letter Zi" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_Su"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_Su">
                                    <img src="./Hiragana/Hiragana_letter_Su.svg" alt="Hiragana letter Su" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_Zu"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_Zu">
                                    <img src="./Hiragana/Hiragana_letter_Zu.svg" alt="Hiragana letter Zu" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_Se"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_Se">
                                    <img src="./Hiragana/Hiragana_letter_Se.svg" alt="Hiragana letter Se" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_Ze"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_Ze">
                                    <img src="./Hiragana/Hiragana_letter_Ze.svg" alt="Hiragana letter Ze" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_So"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_So">
                                    <img src="./Hiragana/Hiragana_letter_So.svg" alt="Hiragana letter So" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_Zo"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_Zo">
                                    <img src="./Hiragana/Hiragana_letter_Zo.svg" alt="Hiragana letter Zo" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_Ta"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_Ta">
                                    <img src="./Hiragana/Hiragana_letter_Ta.svg" alt="Hiragana letter Ta" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_Da"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_Da">
                                    <img src="./Hiragana/Hiragana_letter_Da.svg" alt="Hiragana letter Da" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_Ti"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_Ti">
                                    <img src="./Hiragana/Hiragana_letter_Ti.svg" alt="Hiragana letter Ti" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                        </div>
                        <div className="mb-3 d-inline-flex">
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_Di"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_Di">
                                    <img src="./Hiragana/Hiragana_letter_Di.svg" alt="Hiragana letter Di" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_Tu"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_Tu">
                                    <img src="./Hiragana/Hiragana_letter_Tu.svg" alt="Hiragana letter Tu" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_Du"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_Du">
                                    <img src="./Hiragana/Hiragana_letter_Du.svg" alt="Hiragana letter Du" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_Te"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_Te">
                                    <img src="./Hiragana/Hiragana_letter_Te.svg" alt="Hiragana letter Te" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_De"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_De">
                                    <img src="./Hiragana/Hiragana_letter_De.svg" alt="Hiragana letter De" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_To"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_To">
                                    <img src="./Hiragana/Hiragana_letter_To.svg" alt="Hiragana letter To" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_Do"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_Do">
                                    <img src="./Hiragana/Hiragana_letter_Do.svg" alt="Hiragana letter Do" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_Na"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_Na">
                                    <img src="./Hiragana/Hiragana_letter_Na.svg" alt="Hiragana letter Na" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_Ni"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_Ni">
                                    <img src="./Hiragana/Hiragana_letter_Ni.svg" alt="Hiragana letter Ni" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_Nu"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_Nu">
                                    <img src="./Hiragana/Hiragana_letter_Nu.svg" alt="Hiragana letter Nu" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_Ne"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_Ne">
                                    <img src="./Hiragana/Hiragana_letter_Ne.svg" alt="Hiragana letter Ne" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_No"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_No">
                                    <img src="./Hiragana/Hiragana_letter_No.svg" alt="Hiragana letter No" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_Ha"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_Ha">
                                    <img src="./Hiragana/Hiragana_letter_Ha.svg" alt="Hiragana letter Ha" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_Ba"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_Ba">
                                    <img src="./Hiragana/Hiragana_letter_Ba.svg" alt="Hiragana letter Ba" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                        </div>
                        <div className="mb-3 d-inline-flex">
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_Pa"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_Pa">
                                    <img src="./Hiragana/Hiragana_letter_Pa.svg" alt="Hiragana letter Pa" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_Hi"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_Hi">
                                    <img src="./Hiragana/Hiragana_letter_Hi.svg" alt="Hiragana letter Hi" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_Bi"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_Bi">
                                    <img src="./Hiragana/Hiragana_letter_Bi.svg" alt="Hiragana letter Bi" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_Pi"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_Pi">
                                    <img src="./Hiragana/Hiragana_letter_Pi.svg" alt="Hiragana letter Pi" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_Hu"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_Hu">
                                    <img src="./Hiragana/Hiragana_letter_Hu.svg" alt="Hiragana letter Hu" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_Bu"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_Bu">
                                    <img src="./Hiragana/Hiragana_letter_Bu.svg" alt="Hiragana letter Bu" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_Pu"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_Pu">
                                    <img src="./Hiragana/Hiragana_letter_Pu.svg" alt="Hiragana letter Pu" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_He"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_He">
                                    <img src="./Hiragana/Hiragana_letter_He.svg" alt="Hiragana letter He" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_Be"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_Be">
                                    <img src="./Hiragana/Hiragana_letter_Be.svg" alt="Hiragana letter Be" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_Pe"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_Pe">
                                    <img src="./Hiragana/Hiragana_letter_Pe.svg" alt="Hiragana letter Pe" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_Ho"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_Ho">
                                    <img src="./Hiragana/Hiragana_letter_Ho.svg" alt="Hiragana letter Ho" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_Bo"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_Bo">
                                    <img src="./Hiragana/Hiragana_letter_Bo.svg" alt="Hiragana letter Bo" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_Po"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_Po">
                                    <img src="./Hiragana/Hiragana_letter_Po.svg" alt="Hiragana letter Po" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_Ma"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_Ma">
                                    <img src="./Hiragana/Hiragana_letter_Ma.svg" alt="Hiragana letter Ma" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                        </div>
                        <div className="mb-3 d-inline-flex">
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_Mi"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_Mi">
                                    <img src="./Hiragana/Hiragana_letter_Mi.svg" alt="Hiragana letter Mi" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_Mu"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_Mu">
                                    <img src="./Hiragana/Hiragana_letter_Mu.svg" alt="Hiragana letter Mu" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_Me"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_Me">
                                    <img src="./Hiragana/Hiragana_letter_Me.svg" alt="Hiragana letter Me" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_Mo"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_Mo">
                                    <img src="./Hiragana/Hiragana_letter_Mo.svg" alt="Hiragana letter Mo" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_Ya"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_Ya">
                                    <img src="./Hiragana/Hiragana_letter_Ya.svg" alt="Hiragana letter Ya" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_Yo"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_Yo">
                                    <img src="./Hiragana/Hiragana_letter_Yo.svg" alt="Hiragana letter Yo" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_Ra"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_Ra">
                                    <img src="./Hiragana/Hiragana_letter_Ra.svg" alt="Hiragana letter Ra" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_Ri"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_Ri">
                                    <img src="./Hiragana/Hiragana_letter_Ri.svg" alt="Hiragana letter Ri" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_Ru"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_Ru">
                                    <img src="./Hiragana/Hiragana_letter_Ru.svg" alt="Hiragana letter Ru" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_Re"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_Re">
                                    <img src="./Hiragana/Hiragana_letter_Re.svg" alt="Hiragana letter Re" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_Ro"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_Ro">
                                    <img src="./Hiragana/Hiragana_letter_Ro.svg" alt="Hiragana letter Ro" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_Wa"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_Wa">
                                    <img src="./Hiragana/Hiragana_letter_Wa.svg" alt="Hiragana letter Wa" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_Wi"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_Wi">
                                    <img src="./Hiragana/Hiragana_letter_Wi.svg" alt="Hiragana letter Wi" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_We"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_We">
                                    <img src="./Hiragana/Hiragana_letter_We.svg" alt="Hiragana letter We" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                        </div>
                        <div className="mb-3 d-inline-flex">
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_Wo"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_Wo">
                                    <img src="./Hiragana/Hiragana_letter_Wo.svg" alt="Hiragana letter Wo" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_N"/>
                                <label className="form-check-label" htmlFor="Hiragana_letter_N">
                                    <img src="./Hiragana/Hiragana_letter_N.svg" alt="Hiragana letter N" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                            <div className="p-2"><input className="form-check-input hiragana-checkbox" type="checkbox" checked value="" id="Hiragana_letter_Vu"/>
                                <label
                                    className="form-check-label" htmlFor="Hiragana_letter_Vu">
                                    <img src="./Hiragana/Hiragana_letter_Vu.svg" alt="Hiragana letter Vu" className="img-thumbnail hiragana-settings-letter"/>
                                </label>
                            </div>
                        </div>
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

import React from 'react';

const SlovakContent = () => {
    return (
        <div>
            <section>
                <h1>Úvod</h1>
                <p>
                    Táto webová aplikácia bola vytvorená ako školský projekt na Žilinskej Univerzite v Žiline.
                    Zmysel tejto aplikácie je uľahčiť tvorbu statických webových vizuálnych tém pre ľudí bez programátorských znalostí.
                    To samozrejme neznamená, že sa môže porovnávať s nástrojmi ako WordPress. Výhodou však je, že je
                    omnoho ľahšia na používanie.
                </p>
                <br/>
                <h1>Návod na použitie</h1>
                <ul>
                    <li key={1}>
                        K vytvoreniu vlastnej webovej témy musíte byť <b>prihlásený</b> do používateľského <b>účtu</b>.
                        Môžete sa buď prihlásiť do existujúceho účtu, alebo si vytvoriť nový v sekcii <b>Prihlásenie / registrácia</b>
                    </li><br/>
                    <li key={2}>
                        Pokračujte do sekcie <b>Vytvoriť</b> a vyberte si či chcete vytvoriť novú tému alebo pokračovať v
                        dizajnovaní nejakej z vašich existujúcich tém.
                    </li><br/>
                    <li key={3}>
                        Ak ste si zvolili vytvorenie novej <b>témy</b>, zobrazí sa Vám formulár. Vyplňte
                        názov Vašej novej témy (rovnaký používateľ nesmie mať viacero rovnako pomenovaných tém),
                        vyberte si <b>úroveň zdieľania</b> a nepovinne môžete pridať popis. Tieto vlastnosti môžete kedykoľvek editovať.
                    </li><br/>
                    <li key={4}>
                        Existujú 3 <b>úrovne zdieľania</b> tém.
                        <ul>
                            <li><b>Súkromná</b> (viditeľná len pre vlastníka)</li>
                            <li><b>Viditeľná len pre prihlásených</b></li>
                            <li><b>Verejná</b> (viditeľná pre každého)</li>
                        </ul>
                    </li><br/>
                    <li key={5}>
                        Každá téma môže mať viacero stránok, môžete ich pridať kliknutím na tlačidlo <b>Pridať stránku</b>.
                    </li>
                    <li>
                        Môžete editovať stránky kliknutím na tlačidlo <b>Edit</b> v zozname stránok. Potom sa Vám zobrazí menu s GUI
                        ako môžete vidieť na <a href="#showcase-video" onClick={() => window.location='#showcase-video'}>videu dole</a>.
                    </li>
                    <li key={6}>
                        Keď máte dokončenú svoju tému, môžete ju stiahnuť kliknutím na tlačidlo <b>Download</b>.
                    </li>
                </ul>
            </section>
        </div>
    );
}

export default SlovakContent;
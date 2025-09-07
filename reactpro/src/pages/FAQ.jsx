import React from "react";

class FAQ extends React.Component{
    render(){
        return(
            <main id="maincontent">
            <h1>FAQ</h1>
            <section id="info">
                <section id="VanligaFrågor">
                    <h2>Vanliga frågor</h2>

                    <div className="faq">
                        <div className="question">När brukar ni få valpar?</div>
                        <div className="answer">De brukar vara på hösten och på våren.</div>

                        <div className="question">Vad kostar en valp?</div>
                        <div className="answer">Det varierar från kull till kull, kontakta oss om du undrar över en specifik.</div>

                        <div className="question">Får man kolla på valpen innan köp?</div>
                        <div className="answer">Absolut, det är viktigt för oss att matcha valp med rätt ägare. Kontakt oss för att boka en tid.</div>

                        <div className="question">Får man kolla på valpen innan köp?</div>
                        <div className="answer">Absolut, det är viktigt för oss att matcha valp med rätt ägare. Kontakt oss för att boka en tid.</div>

                        <div className="question">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a tellus ut rutrum. 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a metus quis ligula.</div>
                        <div className="answer">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a tellus ut rutrum. 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a metus quis ligula.</div>
                    </div>
                </section>

                <section id="Kontaktformulär">
                    <h2>Kontaktformulär</h2>

                    <form action="mailto:kennelbearcroft@gmail.com" method="post" encType="text/plain">
                        <label htmlFor="fname">Förnamn:*</label><br />
                        <input 
                            type="text" 
                            id="fname" 
                            name="fname" 
                            defaultValue=""
                            placeholder="Namn" 
                            required 
                        /><br />

                        <label htmlFor="lname">Efternamn:*</label><br />
                        <input 
                            type="text" 
                            id="lname" 
                            name="lname" 
                            defaultValue=""
                            placeholder="Efternamn" 
                            required 
                        /><br />

                        <label htmlFor="email">Skriv in din e-post:*</label><br />
                        <input 
                            type="email" 
                            id="email" 
                            name="email"
                            placeholder="namn.efternamn@gmail.com" 
                            required 
                        /><br />

                        <label htmlFor="phone">Skriv ditt mobilnummer:*</label><br />
                        <input 
                            type="tel" 
                            id="phone" 
                            name="phone" 
                            pattern="[0-9]{3}[0-9]{7}"
                            placeholder="070xxxxxxx" 
                            required 
                        /><br />

                        <label htmlFor="message">Meddelande:*</label><br />
                        <textarea 
                            id="message" 
                            name="message" 
                            rows="10" 
                            cols="30" 
                            required
                        ></textarea><br />

                        <input type="submit" value="Skicka" />
                        <input type="reset" value="Rensa" />
                    </form>
                </section>
            </section>  
            </main>
        );
    }
}

export default FAQ;
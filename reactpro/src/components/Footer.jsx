import React from "react";

class Footer extends React.Component{
    render(){
        return(
        <footer id="footer">
            <h2>Kontakta oss</h2>
            <table id="contact-table">
                <tbody>
                    <tr>
                        <td>Snäckerbotorpsvägen 293</td>
                        <td>Mobil: 073-4120092</td>
                        <td>Jenny och Roger Nilsson</td>
                    </tr>
                    <tr>
                        <td>266 95 Munka-Ljungby</td>
                        <td>Telefon: 043-1441031</td>
                        <td>
                            <a href="mailto:kennelbearcroft@gmail.com" target="_self" title="Det här tar dig till mail">
                                kennelbearcroft@gmail.com
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </footer>
        );
    }
}

export default Footer;
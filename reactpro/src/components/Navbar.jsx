import React from "react";
import { NavLink, Link } from "react-router-dom";

class Navbar extends React.Component{
    render(){
        return(
            <div id="navbar">
            <NavLink to="/" target="_self" title="Det här tar dig till Våran startsida">
                Bear Croft <br /> Newfoundland
            </NavLink>

            <div id="navbarOptions">
                <NavLink to="/our_newfs" target="_self" title="Det här tar dig till Våra Newfoundlands">
                    Våra Newfoundlands
                </NavLink>
            
                <NavLink to="/replacements" target="_self" title="Det här tar dig till Omplacering">
                    Omplacering
                </NavLink>

                <NavLink to="/photos" target="_self" title="Det här tar dig till Foton">
                    Foton
                </NavLink>

                <NavLink to="/about_us" target="_self" title="Det här tar dig till Om oss">
                    Om oss
                </NavLink>

                <NavLink to="/faq" target="_self" title="Det här tar dig till FAQ">
                    FAQ
                </NavLink>
            </div>
            </div>
        );
    }
}

export default Navbar

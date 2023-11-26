import React, { useState } from 'react';
import SectionNav from "../components/SectionNav";
import Navbar from './Navbar';

function Header() {
    return (
        <div>
            <Navbar />
            <SectionNav />
        </div>
    );
}

export default Header;

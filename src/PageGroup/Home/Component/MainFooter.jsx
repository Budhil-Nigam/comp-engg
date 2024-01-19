import React from 'react';
import { Link } from 'react-router-dom';

const MainFooter = () => {
    return(
        <div className="main-footer-end bg-green-deep text-slate-50 p-6 text-center">
            <span>Copyright© crafted with love 🤍</span>
            <a href='/people/developer'><span>Development Team at Jamia</span></a>
            <span>Jamia Millia Islamia, New Delhi, 110025</span>
        </div>
    )
}

export default MainFooter;
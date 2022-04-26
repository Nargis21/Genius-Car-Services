import React from 'react';

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <div>
            <footer className='text-secondary text-center p-5'>
                <p><small>Copyright @ {year}</small></p>
            </footer>
        </div>
    );
};

export default Footer;
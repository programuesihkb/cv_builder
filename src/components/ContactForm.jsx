import React from 'react';
import Input from './Input.jsx';
import Button from './Button.jsx';
function ContactForm({ contactInfo, setContactInfo }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setContactInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <form className="contact-info">
            <h2>Enter your information</h2>
            <Input
                label="Name"
                type="text"
                name="name"
                placeholder="Filan Fisteku"
                value={contactInfo.name}
                onChange={handleChange}
            />
            <Input
                label="Email"
                type="email"
                name="email"
                placeholder="filan.fisteku@shembull.com"
                value={contactInfo.email}
                onChange={handleChange}
            />
            <Input
                label="Phone"   
                type="tel"
                name="phone"
                placeholder="+355 69 123 4567"
                value={contactInfo.phone}
                onChange={handleChange}
            />
            <Input
                label="LinkedIn"
                type="text"
                name="linkedin"
                placeholder="https://linkedin.com/in/filanfisteku"
                value={contactInfo.linkedin}
                onChange={handleChange}
            />
            <Input
                label="GitHub"
                type="text"
                name="github"
                placeholder="https://github.com/filanfisteku"               
                value={contactInfo.github}
                onChange={handleChange}
            />
        </form>
    );
}

export default ContactForm;
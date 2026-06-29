import React from 'react';
import '../styles/FormData.css';
import ContactForm from './ContactForm.jsx';
import ExperienceForm from './ExperienceForm.jsx';
import EducationForm from './EducationForm.jsx';
import Skillform from './SkillForm.jsx';


function FormData({ 
    contactInfo, 
    setContactInfo, 
    experience, 
    setExperience, 
    education, 
    setEducation,
    skills,
    setSkills 
}) {
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setContactInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleAddExperience = () => {
        if (experience.length === 0 || experience[experience.length - 1].position !== '') {
            displayExperienceForm();
        }
    };

    const handleAddEducation = () => {
        if (education.length === 0 || education[education.length - 1].degree !== '') {
            displayEducationForm();
        }
    };


    const displayExperienceForm = () => {
        setExperience(prevExperience => [
            ...prevExperience,
            { position: '', company: '' }
        ]);
    }

    const displayEducationForm = () => {
        setEducation(prevEducation => [
            ...prevEducation,
            { degree: '', institution: '' }
        ]);
    }

    return (
        <div className="form-data">
            
            <ContactForm contactInfo={contactInfo} setContactInfo={setContactInfo} />

            <ExperienceForm experience={experience} setExperience={setExperience} handleAddExperience={handleAddExperience} />

            <EducationForm education={education} setEducation={setEducation} handleAddEducation={handleAddEducation} />
            
            <Skillform skills={skills} setSkills={setSkills} />
        </div>
    );
}

export default FormData;
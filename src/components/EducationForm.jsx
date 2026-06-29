import React from 'react';
import Input from './Input.jsx';
import Button from './Button.jsx';

function EducationForm({ education, setEducation, handleAddEducation }) {
    return (
        <form className="education-form">
                <h2>Education</h2>
                {education.map((edu, index) => (
                    <div key={index} className="education-entry">
                        <Input
                            label="Degree"
                            type="text"
                            placeholder="Degree"
                            value={edu.degree}
                            onChange={(e) => {
                                const newEducation = [...education];
                                newEducation[index].degree = e.target.value;
                                setEducation(newEducation);
                            }}
                        />
                        <Input
                            label="Institution"
                            type="text"
                            placeholder="Institution"
                            value={edu.institution}
                            onChange={(e) => {
                                const newEducation = [...education];
                                newEducation[index].institution = e.target.value;
                                setEducation(newEducation);
                            }}
                        />
                    </div>
                ))}
                <div className="add-education-button">
                    <Button 
                        text="Add Education" 
                        onClick={handleAddEducation}
                        className="btn"
                     />
                </div>
            </form>
    );
}

export default EducationForm;
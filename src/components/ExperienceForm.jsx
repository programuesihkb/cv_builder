import React from 'react';
import Input from './Input.jsx';
import Button from './Button.jsx';

function ExperienceForm({ experience, setExperience, handleAddExperience }) {
    const handleChange = (index, field, value) => {
        const newExperience = [...experience];
        newExperience[index][field] = value;
        setExperience(newExperience);
    }

    return (
    <form className="experience-form">
                <h2>Experience</h2>
                {experience.length > 0 ? (
                    experience.map((exp, index) => (
                        <div key={index} className="experience-entry">
                            <Input
                                label="Position"
                                type="text"
                                placeholder="e.g. Software Engineer"
                                value={exp.position}
                                onChange={(e) => {
                                    const newExperience = [...experience];
                                    newExperience[index].position = e.target.value;
                                    setExperience(newExperience);
                                }}
                            /> 
                            <Input
                                label="Company"
                                type="text"
                                placeholder="e.g. Google"
                                value={exp.company}
                                onChange={(e) => {
                                    const newExperience = [...experience];
                                    newExperience[index].company = e.target.value;
                                    setExperience(newExperience);
                                }}
                            />
                            <Input
                                label="Start Date"
                                type="date"
                                value={exp.startDate}
                                onChange={(e) => {
                                    const newExperience = [...experience];
                                    newExperience[index].startDate = e.target.value;
                                    setExperience(newExperience);
                                }}
                            />                          

                            {!exp.current && (
                                <Input
                                    label="End Date"
                                    type="date"
                                    value={exp.endDate}
                                    onChange={(e) => {
                                        const newExperience = [...experience];
                                        newExperience[index].endDate = e.target.value;
                                        setExperience(newExperience);
                                    }}
                                />
                            )}
                            
                        <Input
                            label="Current Position"
                            type="checkbox"
                            checked={exp.current}
                            onChange={(e) => {
                                const newExperience = [...experience];
                                newExperience[index].current = e.target.checked;
                                setExperience(newExperience);
                            }}
                        />
                        <Input
                            label="Description"
                            type="textarea"
                            placeholder="Describe your responsibilities and achievements..."
                            value={exp.description}
                            className="full-width"
                            onChange={(e) => {
                                const newExperience = [...experience];
                                newExperience[index].description = e.target.value;
                                setExperience(newExperience);
                            }}
                        />
                    </div>
                    ))
                ) : <div className="no-experience">No experience added yet.</div>}
            <div className="add-experience-button">
                    <Button 
                        text="Add Experience" 
                        onClick={handleAddExperience}
                        className="btn"
                     />
            </div>
            </form>
    );
}

export default ExperienceForm;
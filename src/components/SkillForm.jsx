import React from 'react';

function SkillForm({ skills, setSkills }) {
        return (
            <div className="skills-form">
                <h2>Skills</h2>
                <select
                    className="skills-select"
                    onChange={(e) => {
                        const selected = e.target.value;
                        if (selected && !skills.includes(selected)) {
                            setSkills([...skills, selected]);
                        }
                        e.target.value = '';
                    }}
                    defaultValue=""
                >
                    <option value="" disabled>Select a skill...</option>
                    {[
                        'JavaScript', 'TypeScript', 'React', 'Vue', 'Angular',
                        'Node.js', 'Python', 'Java', 'C#', 'C++',
                        'SQL', 'MongoDB', 'PostgreSQL', 'GraphQL', 'REST APIs',
                        'Git', 'Docker', 'AWS', 'Linux', 'Figma',
                        'CSS', 'HTML', 'Tailwind CSS', 'SASS', 'Next.js'
                    ].map(skill => (
                        <option key={skill} value={skill}>{skill}</option>
                    ))}
                </select>
                <div className="skills-bubbles">
                    {skills.map(skill => (
                        <span key={skill} className="skill-bubble">
                            {skill}
                            <button
                                type="button"
                                className="skill-remove"
                                onClick={() => setSkills(skills.filter(s => s !== skill))}
                            >×</button>
                        </span>
                    ))}
                </div>
            </div>
        )
}

export default SkillForm;
import React, { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import '../styles/CVPreview.css'

function CVPreview(
    { contactInfo,
        experience,
        education,
        skills
    }) {

    const printRef = useRef(null);

    const hasContent =
        contactInfo.name || contactInfo.email || contactInfo.phone ||
        contactInfo.linkedin || contactInfo.github ||
        experience.some(exp => exp.position) ||
        education.some(edu => edu.degree) ||
        (skills && skills.length > 0);

    const isComplete = skills && skills.length > 0;

    const handlePrint = useReactToPrint({
        contentRef: printRef,
        documentTitle: contactInfo.name ? `${contactInfo.name} - CV` : 'CV',
    });

    return (
        <div className="cv-preview" ref={printRef}>
            <h2>Your CV</h2>
            {!hasContent && (
                <p className="cv-empty-state">Your CV preview will appear here as you fill in the form.</p>
            )}
            {hasContent && <div className="cv-preview-content">
                <div className="cv-sidebar">
                    {contactInfo.name &&
                        <div className="cv-name"> 
                            <h2>{contactInfo.name.split(' ')[0]}</h2>
                            <h2>{contactInfo.name.split(' ')[1]}</h2>
                        </div>
                    }
                    <div className="cv-contact-info">
                        {contactInfo.email && 
                            <p className="cv-contact-entry"><strong>Email:</strong> 
                            {contactInfo.email}</p>
                        }
                        {contactInfo.phone && 
                            <p className="cv-contact-entry"><strong>Phone:</strong> 
                            {contactInfo.phone}</p>
                        }
                        {contactInfo.linkedin && 
                            <p className="cv-contact-entry"><strong>LinkedIn:</strong> 
                            <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer">
                            LinkedIn</a></p>}
                        {contactInfo.github && 
                        <p className="cv-contact-entry"><strong>GitHub:</strong> 
                        <a href={contactInfo.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                        </p>}

                    </div>
                    {skills && skills.length > 0 && (
                        <div className="cv-skills">
                            <h3>Skills</h3>
                            <div className="cv-skills-bubbles">
                                {skills.map(skill => (
                                    <span key={skill} className="cv-skill-bubble">{skill}</span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                <div className="cv-main">
                    {experience.some(exp => exp.position) && (
                        <section className="cv-section">
                            <h3 className="cv-section-title">Experience</h3>
                            {experience.map((exp, index) => (
                                exp.position && (
                                    <div key={index} className="cv-entry">
                                        <div className="cv-entry-header">
                                            <span className="cv-entry-title">{exp.position}</span>
                                            {exp.company && <span className="cv-entry-subtitle">{exp.company}</span>}
                                        </div>
                                        {(exp.startDate || exp.current) && (
                                            <p className="cv-entry-dates">
                                                {exp.startDate && exp.startDate}
                                                {exp.current
                                                    ? ' — Present'
                                                    : exp.endDate && ` — ${exp.endDate}`}
                                            </p>
                                        )}
                                        {exp.description && <p className="cv-entry-description">{exp.description}</p>}
                                    </div>
                                )
                            ))}
                        </section>
                    )}

                    {education.some(edu => edu.degree) && (
                        <section className="cv-section">
                            <h3 className="cv-section-title">Education</h3>
                            {education.map((edu, index) => (
                                edu.degree && (
                                    <div key={index} className="cv-entry">
                                        <div className="cv-entry-header">
                                            <span className="cv-entry-title">{edu.degree}</span>
                                            {edu.institution && <span className="cv-entry-subtitle">{edu.institution}</span>}
                                        </div>
                                    </div>
                                )
                            ))}
                        </section>
                    )}
                </div>
            </div>}
            {hasContent && (
                <div className="cv-print-row">
                    <button
                        className={`cv-print-btn${isComplete ? '' : ' cv-print-btn--disabled'}`}
                        onClick={isComplete ? handlePrint : undefined}
                        title={isComplete ? 'Download your CV as PDF' : 'Add at least one skill to enable PDF download'}
                    >
                        Download PDF
                    </button>
                </div>
            )}
        </div>
    )
}

export default CVPreview
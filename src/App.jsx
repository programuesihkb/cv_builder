import { useState } from 'react'
import '../src/styles/App.css'
import Navbar from './components/Navbar.jsx'
import FormData from './components/FormData.jsx'
import CVPreview from './components/CVPreview.jsx'
import Footer from './components/Footer.jsx'

function App() {

  const [contactInfo, setContactInfo] = useState({
        name: '',
        email: '',
        phone: '',
        linkedin: '',
        github: ''
    });

    const [experience, setExperience] = useState([
        { position: '', company: '', startDate: '', endDate: '', current: false, description: '' }
    ]);
    const [education, setEducation] = useState([
        { degree: '', institution: '' }
    ]);

    const [skills, setSkills] = useState([]);

  return (
      <div className="app">
        <Navbar />
        <div className="app-container">
          <FormData 
            contactInfo={contactInfo}
            setContactInfo={setContactInfo}
            experience={experience}
            setExperience={setExperience}
            education={education}
            setEducation={setEducation}
            skills={skills}
            setSkills={setSkills}
          />
          <CVPreview 
            contactInfo={contactInfo}
            experience={experience}
            education={education}
            skills={skills}
          />
        </div>
        <Footer />
      </div>
  )
}

export default App

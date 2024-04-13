import React,{useState} from 'react'
import Title from '../layouts/Title'
import Education from './Education'
import Skills from './Skills'
import Experience from './Experience'
import Achievements from './Achievements'
import "./Resume.css"

const Resume = () => {
    const [educationData,setEducationData]=useState(true);
    const [skillData,setSkillData]=useState(false);
    const [experienceData,setExperienceData]=useState(false);
    const [acheivementData,setAcheivementData]=useState(false);
    const [selectedNavItem, setSelectedNavItem] = useState('education');
    const handleNavItemClick = (navItem) => {
        setSelectedNavItem(navItem);
        switch (navItem) {
            case 'education':
                setEducationData(true);
                setSkillData(false);
                setExperienceData(false);
                setAcheivementData(false);
                break;
            case 'skills':
                setEducationData(false);
                setSkillData(true);
                setExperienceData(false);
                setAcheivementData(false);
                break;
            case 'experience':
                setEducationData(false);
                setSkillData(false);
                setExperienceData(true);
                setAcheivementData(false);
                break;
            case 'achievements':
                setEducationData(false);
                setSkillData(false);
                setExperienceData(false);
                setAcheivementData(true);
                break;
            default:
                break;
        }
    };

    return (
    <section
    id='resume' className='w-full py-20 border-b-[1px] border-b-black'>
        <div className='flex justify-center '>
        <Title
        title="EXPERIENCE OF MORE THAN 3 YEARS"
        desc="My RESUME"/>
        </div>
        <div className='p-1px'>
            <ul className='w-full grid grid-cols-4' 
                style={{
                    margin:"10px"
                }}
            >
                <li onClick={() => handleNavItemClick('education')} className={`resumeLi ${selectedNavItem === 'education' ? 'selected' : ''}`}>Education</li>
                <li onClick={() => handleNavItemClick('skills')} className={`resumeLi ${selectedNavItem === 'skills' ? 'selected' : ''}`}>Professional Skills</li>
                <li onClick={() => handleNavItemClick('experience')} className={`resumeLi ${selectedNavItem === 'experience' ? 'selected' : ''}`}>Experience</li>
                <li onClick={() => handleNavItemClick('achievements')} className={`resumeLi ${selectedNavItem === 'achievements' ? 'selected' : ''}`}>Achievements</li>
            </ul>
        </div>
        {
            educationData && <Education/>
        }
        {
            !educationData && skillData && <Skills/>
        }
        {
            acheivementData && !educationData && <Achievements/>
        }
        {
            experienceData && !educationData && <Experience/>
        }
    </section>
  )
}

export default Resume
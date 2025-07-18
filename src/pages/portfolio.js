import SkillWheel from '../components/SkillWheel';
// import certificationsData from '../data/certifications.json';
// import skillsData from '../data/skills.json';
// import projectsData from '../data/projects.json';
import Link from 'next/link';
import Layout from '../components/ProLayout'
import ProjectCard from '../components/ProjectCard';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FiMail,FiGithub, FiDownload, FiLinkedin, FiX, FiFacebook } from 'react-icons/fi';
import fs from 'fs';
import path from 'path';

export async function getStaticProps() {
    const skillsFilePath = path.join(process.cwd(), 'src', 'data', 'skills.json');
    const certificationsFilePath = path.join(process.cwd(), 'src', 'data', 'certifications.json');
    const projectsFilePath = path.join(process.cwd(), 'src', 'data', 'projects.json');
    
    const skillsData = JSON.parse(fs.readFileSync(skillsFilePath, 'utf-8'));
    const certificationsData = JSON.parse(fs.readFileSync(certificationsFilePath, 'utf-8'));
    const projectsData = JSON.parse(fs.readFileSync(projectsFilePath, 'utf-8'));

    const formattedDate = new Date().toLocaleString('en-US', {
        timeZone: 'Asia/Manila',       
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }) + " GMT+8";

    return {
      props: {
        skillsData,
        certificationsData,
        projectsData,
        formattedDate
      }
    };
  }

  
export default function ProfessionalPage({skillsData, certificationsData, projectsData, formattedDate }) {
  return (
    <Layout>
        <main className="container py-5">
            <header className="text-center mb-5">
                <h1 className="display-4 nameHeader">Milan Avorque</h1>
                <p className="lead">Web Developer • IT Support</p>
            </header>
            <section id="intro" className='mb-5'>
                <div className='text-center'>
                    <p>
                        Hey there! I&apos;m Milan Avorque. I bring a unique blend of skills as a <b>web developer</b> and 
                        <b> IT support specialist</b>. After a year of full-time <b>PHP/jQuery</b> development, and another year of
                        full-stack <b>ASP.NET MVC</b> development,
                        I spent three years sharpening my problem-solving abilities in IT support, and getting various
                        certifications to support
                        My passion for development continues through freelance work and learning <b>Next.js</b>.
                    </p>
                    <p>
                        I&apos;ve earned multiple Google Specializations in <strong>Data Analytics, UX Design, and Project Management</strong> to broaden my expertise and find areas I truly enjoy. This diverse learning journey continually enhances my <strong>programming and IT support problem-solving</strong> skills, proving especially invaluable for <strong>understanding client needs and independently managing projects</strong> in my day job, where I often handle requests solo due to limited team size. While I also contribute to side projects as part of a team, these certifications help me excel across all my work.
                    </p>
                    <p>
                        I&apos;m currently looking for <b>home-based</b> or <b>part-time roles</b> where I can contribute my versatile tech background.
                    </p>
                </div>
                <hr />
                <div className="d-flex justify-content-center align-items-center gap-3">
                    <a href="mailto:milan.avorque@gmail.com" className="footer-link">
                        <FiMail size={20} /> Email
                    </a>
                    <a href="https://github.com/atsukiri" target="_blank" className="footer-link" rel="noopener noreferrer">
                        <FiGithub size={20} /> GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/milan-avorque-82a860320/" target="_blank" className="footer-link" rel="noopener noreferrer">
                        <FiLinkedin size={20} /> LinkedIn
                    </a>
                    <a href="/resume.pdf" target="_blank" className="footer-link">
                        <FiDownload size={20} /> Resume
                    </a>
                </div>
            </section>
            <section id="about" className="mb-5 d-none">
                <h1 className="sectionHeader">About Me</h1>
                <hr />
                <p>
                I began my career as a full-time programmer, working with PHP and jQuery to build web systems. After a year, 
                I joined my current company where I initially developed using ASP.NET and jQuery, and later explored React.js for front-end work.
                I was eventually promoted to an IT Support role, where I’ve been focused for the past three years. While I no longer develop full systems 
                in this position, I occasionally handle maintenance and bug fixes.
                Outside of work, I sometimes collaborate as a part-time side hustle on freelance projects typically assisting with specific areas like feature implementation, bug fixing, 
                or enhancements using PHP, jQuery, and CodeIgniter. I’m currently expanding my skill set with Next.js through this portfolio.
                I enjoy both programming and IT support for the satisfaction they bring when solving problems and delivering working solutions.
                    {/* Optional: Keep strictly professional; personal hobbies should wait for the personal portfolio. */}
                    {/* <!-- If you want, you could mention you're seeking home-based or part-time roles due to your current commitments. --> */}
                </p>
                <p>
                    For now, I’m currently looking for <strong>home-based</strong> or <strong>part-time</strong> roles due to personal limitations,
                    while I continue my current position to manage financial commitments.
                </p>
            </section>

            <section id="skills" className="mb-5 text-md-start text-center">
                {/* <h2>Skills</h2>
                <div className="d-flex flex-wrap justify-content-center">
                {skillsData.map((skill) => (
                    <SkillWheel key={skill.name} {...skill} />
                ))}
                </div> */}
                 <h1>Skills</h1>
                 <hr />
                 <div className='row'>
                    {Object.entries(skillsData).map(([cat, arr]) => (
                        <div key={cat} className="mb-4 col-md-6 text-xs-center text-md-left">
                            <h3 className=''>{cat}</h3>
                            <hr className='my-2' />
                            <div className="d-flex flex-wrap justify-content-center justify-content-md-start">
                                {arr.map(skill => <div className='mb-2' key={skill.name}>
                                    <div className='d-flex align-items-center justify-content-center justify-content-md-start'>
                                        <h5 className='me-2 m-0 d-inline fw-bold'>{skill.name}</h5>
                                        <span style={{fontSize:10}} className={'badge bg-'+(skill.experienceLevel == "Proficient" ? "warning text-dark" : (skill.experienceLevel == "Intermediate" ? "primary" : "success"))+' d-inline badge-pill'}>{skill.experienceLevel}</span>
                                    </div>
                                    <div>{skill.description}</div>
                                </div>)} 
                                {/* <SkillWheel key={skill.name} {...skill} /> */}
                            </div>  
                        </div>
                ))}
                </div>
            </section>
            <section id="certifications" className="mb-5">
                <h1>Certifications</h1>
                <hr />
                <div className='row'>
                    
                    {Object.entries(certificationsData).map(([category, items]) => (
                    <div key={category} className="col-md-6 mb-4">
                        <h3>{category}</h3>
                        <ul className="list-unstyled">
                        {items.map((cert) => (
                            <li className="cert-item" key={cert.title}>
                                <a href={cert.link} target="_blank" rel="noopener noreferrer">
                                    {cert.title}
                                </a>
                                {
                                    cert.link ? <FaExternalLinkAlt className='ms-1' color="#FFFFFF" /> : ""
                                }
                                <span>• {cert.issuer}</span>
                                {cert.description && <span>– {cert.description}</span>}
                            </li>
                            // <li key={cert.title}>
                            // {cert.link ? (
                            //     <>
                            //     <FaExternalLinkAlt /> <a href={cert.link} target="_blank" rel="noopener noreferrer">
                            //     {cert.title} 
                            //     </a>
                            //     </>
                            // ) : (
                            //     <span>{cert.title}</span>
                            // )}
                            // {' '}• {cert.issuer}
                            // {cert.description && <> – {cert.description}</>}
                            // </li>
                        ))}
                        </ul>
                    </div>
                    ))}
                </div>
            </section>
            
            <section id="projects" className="mb-5">
                <h1>What I’ve Built</h1>
                <hr />
                <div className="row">
                    {projectsData.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>
            </section>

            <footer className="py-4 mt-auto text-center">
                <hr className='my-2' />
                <p className="text-gold" style={{ fontSize: '0.875rem' }}>
                    © <Link href="/">Milan Avorque</Link>  - 2025 | Last updated: { formattedDate } 
                </p>
            </footer>
        </main>
    </Layout>
  );
}

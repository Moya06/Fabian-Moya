import React, { useState, useEffect } from 'react';
import blog1 from '../assets/img/blog-1.jpeg';
import blog2 from '../assets/img/blog-2.jpeg';
import blog3 from '../assets/img/blog-3.jpg';
import blog4 from '../assets/img/blog-4.jpg';
import blog5 from '../assets/img/blog-5.jpeg';

const blogPosts = [
  {
    id: 1,
    image: blog1,
    alt: "Python",
    category: "Certification",
    tecnology: "Python",
    date: "Sep 18, 2025",
    title: "Strengthening my Python skills!",
    text: "I completed Cisco's PCAP: Programming Essentials in Python course to solidify my Python fundamentals. This is a vital step toward my focus on Artificial Intelligence.",
    fullContent: `
            <p>I'm excited to share that I completed the PCAP: Programming Essentials in Python course from Cisco Networking Academy. This course was especially important to me because it allowed me to solidify and build upon the Python knowledge I already had, reinforcing my programming foundations.</p>
            
            <p>Having these skills strengthened is a key step toward my long-term goal of focusing on artificial intelligence, as Python is such a crucial tool in that field. I'm motivated to keep learning and applying these skills to future AI projects! 🚀</p>
            
            <div style="margin-top: 1.5rem; padding: 1rem; background: rgba(30, 132, 73, 0.1); border-radius: 8px;">
                <h4 style="color: #1E8449; margin-bottom: 0.5rem;">Skills Acquired:</h4>
                <ul style="margin: 0; padding-left: 1.2rem;">
                    <li>Python syntax and semantics</li>
                    <li>Object-oriented programming</li>
                    <li>File handling and exceptions</li>
                    <li>Modules and packages</li>
                    <li>Basic algorithms and data structures</li>
                </ul>
            </div>
            
            <div style="margin-top: 1rem; display: flex; gap: 0.5rem; flex-wrap: wrap;">
                <span style="background: rgba(30, 132, 73, 0.2); color: #1E8449; padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.8rem;">#OpenEDG</span>
                <span style="background: rgba(30, 132, 73, 0.2); color: #1E8449; padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.8rem;">#PCAP</span>
                <span style="background: rgba(30, 132, 73, 0.2); color: #1E8449; padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.8rem;">#Python</span>
                <span style="background: rgba(30, 132, 73, 0.2); color: #1E8449; padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.8rem;">#Programming</span>
                <span style="background: rgba(30, 132, 73, 0.2); color: #1E8449; padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.8rem;">#ArtificialIntelligence</span>
                <span style="background: rgba(30, 132, 73, 0.2); color: #1E8449; padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.8rem;">#CareerGrowth</span>
                <span style="background: rgba(30, 132, 73, 0.2); color: #1E8449; padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.8rem;">#ContinuousLearning</span>
            </div>
        `
  },
  {
    id: 2,
    image: blog2,
    alt: "Operating systems",
    category: "Certification",
    tecnology: "Linux",
    date: "Sep 18, 2025",
    title: "Expanding my knowledge in operating systems!",
    text: "I finished the NDG Linux Essentials course, gaining a solid base in Linux commands and operations. This skill is crucial for me when working with servers and the cloud.",
    fullContent: `
            <p>🐧 Expanding my knowledge in operating systems!</p>
            
            <p>Last year, I completed the NDG Linux Essentials course from Cisco Networking Academy.</p>
            
            <p>As a programmer, learning Linux is incredibly important because it is widely used in servers, development environments, and cloud systems. This course gave me a solid foundation in Linux fundamentals, including command-line operations, file management, user and group administration, basic networking, and system security.</p>
            
            <p>Understanding multiple operating systems is key for any developer or IT professional, and this experience strengthened my ability to work efficiently across different platforms. I'm motivated to continue exploring and mastering diverse technologies! 🚀</p>
            
            <div style="margin-top: 1rem; display: flex; gap: 0.5rem; flex-wrap: wrap;">
                <span style="background: rgba(30, 132, 73, 0.2); color: #1E8449; padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.8rem;">#NetworkDevelopmentGroup</span>
                <span style="background: rgba(30, 132, 73, 0.2); color: #1E8449; padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.8rem;">#NDGLinuxEssentials</span>
                <span style="background: rgba(30, 132, 73, 0.2); color: #1E8449; padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.8rem;">#LinuxEssentials</span>
                <span style="background: rgba(30, 132, 73, 0.2); color: #1E8449; padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.8rem;">#Linux</span>
                <span style="background: rgba(30, 132, 73, 0.2); color: #1E8449; padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.8rem;">#Programming</span>
                <span style="background: rgba(30, 132, 73, 0.2); color: #1E8449; padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.8rem;">#ITSkills</span>
                <span style="background: rgba(30, 132, 73, 0.2); color: #1E8449; padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.8rem;">#ContinuousLearning</span>
                <span style="background: rgba(30, 132, 73, 0.2); color: #1E8449; padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.8rem;">#CareerGrowth</span>
            </div>
        `
  },
  {
    id: 3,
    image: blog3,
    alt: "Learning",
    category: "Certification",
    tecnology: "Leadership",
    date: "Sep 18, 2025",
    title: "Learning to Lead Effectively!",
    text: "I completed the Soft Skills Unit, learning that effective leadership means listening and supporting my team. This improved my collaboration skills in any workplace setting.",
    fullContent: `
            <p>🌟 Learning to Lead Effectively!</p>
            
            <p>Last year, I completed the Soft Skills Development Unit at CEDES Don Bosco, a program that taught me the importance of developing interpersonal and professional skills alongside technical knowledge.</p>
            
            <p>One of the most valuable lessons was learning how to be a good leader. The program showed me that leadership isn't just about giving directions—it's about listening, empathizing, supporting your team, and fostering a positive environment.</p>
            
            <p>This experience strengthened my ability to lead, collaborate, and contribute to any team in a meaningful way. I'm excited to continue applying these skills in my professional journey! 💼✨</p>
            
            <div style="margin-top: 1rem; display: flex; gap: 0.5rem; flex-wrap: wrap;">
                <span style="background: rgba(30, 132, 73, 0.2); color: #1E8449; padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.8rem;">#CEDESDonBosco</span>
                <span style="background: rgba(30, 132, 73, 0.2); color: #1E8449; padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.8rem;">#Leadership</span>
                <span style="background: rgba(30, 132, 73, 0.2); color: #1E8449; padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.8rem;">#SoftSkills</span>
                <span style="background: rgba(30, 132, 73, 0.2); color: #1E8449; padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.8rem;">#Teamwork</span>
                <span style="background: rgba(30, 132, 73, 0.2); color: #1E8449; padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.8rem;">#ProfessionalGrowth</span>
                <span style="background: rgba(30, 132, 73, 0.2); color: #1E8449; padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.8rem;">#ContinuousLearning</span>
            </div>
        `
  },
  {
    id: 4,
    image: blog4,
    alt: "Networks",
    category: "New Knowledge",
    tecnology: "Cisco CCNA",
    date: "Sep 18, 2025",
    title: "CCNA: Introduction to Networks",
    text: "I completed Cisco's CCNA: Introduction to Networks course, gaining essential knowledge of networking and device configuration. This is foundational for my career in IT and Cybersecurity.",
    fullContent: `
            <p>Last year, I completed the CCNA: Introduction to Networks course from Cisco Networking Academy, which gave me a solid understanding of how networks function and how critical they are in today's digital world.</p>
            
            <p>Learning about networking fundamentals, IP addressing, device configuration, troubleshooting, and basic network security has been essential for my growth in IT and cybersecurity.</p>
            
            <p>This course has not only strengthened my technical skills but also highlighted the importance of reliable and secure networks in every aspect of technology. I'm excited to keep applying this knowledge and continue advancing in my career. 🚀</p>
            
            <div style="margin-top: 1.5rem; padding: 1rem; background: rgba(30, 132, 73, 0.1); border-radius: 8px;">
                <h4 style="color: #1E8449; margin-bottom: 0.5rem;">Skills Acquired:</h4>
                <ul style="margin: 0; padding-left: 1.2rem;">
                    <li>Network fundamentals and architecture</li>
                    <li>IP addressing and subnetting</li>
                    <li>Router and switch configuration</li>
                    <li>Network troubleshooting</li>
                    <li>Basic network security principles</li>
                </ul>
            </div>
            
            <div style="margin-top: 1rem; display: flex; gap: 0.5rem; flex-wrap: wrap;">
                <span style="background: rgba(30, 132, 73, 0.2); color: #1E8449; padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.8rem;">#CiscoNetworkingAcademy</span>
                <span style="background: rgba(30, 132, 73, 0.2); color: #1E8449; padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.8rem;">#CCNA</span>
                <span style="background: rgba(30, 132, 73, 0.2); color: #1E8449; padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.8rem;">#Networking</span>
                <span style="background: rgba(30, 132, 73, 0.2); color: #1E8449; padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.8rem;">#ITSkills</span>
                <span style="background: rgba(30, 132, 73, 0.2); color: #1E8449; padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.8rem;">#Cybersecurity</span>
                <span style="background: rgba(30, 132, 73, 0.2); color: #1E8449; padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.8rem;">#CareerGrowth</span>
            </div>
        `
  },
  {
    id: 5,
    image: blog4,
    alt: "Cisco",
    category: "Certification",
    tecnology: "Cisco IT Essentials",
    date: "Sep 18, 2025",
    title: "IT Essentials course from Cisco Networking Academy.",
    text: "I finished the IT Essentials course, learning to build, maintain, and troubleshoot computers and operating systems. This gave me a strong technical base in IT and basic Cybersecurity.",
    fullContent: `
        <p>Last year I challenged myself to grow my tech skills — and I'm happy to share that I completed the IT Essentials course from Cisco Networking Academy.</p>
        
        <p>It was an amazing experience where I learned how to:</p>
        
        <div style="margin-top: 1.5rem; padding: 1rem; background: rgba(30, 132, 73, 0.1); border-radius: 8px;">
            <h4 style="color: #1E8449; margin-bottom: 0.5rem;">Skills Acquired:</h4>
            <ul style="margin: 0; padding-left: 1.2rem;">
                <li>Build and maintain computers</li>
                <li>Install and troubleshoot operating systems</li>
                <li>Understand the basics of networking and cybersecurity</li>
            </ul>
        </div>
        <br>
        <p>This course gave me a solid foundation and made me even more passionate about technology. Excited to keep learning and applying these skills in real projects! 🚀</p>
        
        <div style="margin-top: 1rem; display: flex; gap: 0.5rem; flex-wrap: wrap;">
            <span style="background: rgba(30, 132, 73, 0.2); color: #1E8449; padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.8rem;">#LearningJourney</span>
            <span style="background: rgba(30, 132, 73, 0.2); color: #1E8449; padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.8rem;">#ITEssentials</span>
            <span style="background: rgba(30, 132, 73, 0.2); color: #1E8449; padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.8rem;">#CiscoNetworkingAcademy</span>
            <span style="background: rgba(30, 132, 73, 0.2); color: #1E8449; padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.8rem;">#TechSkills</span>
            <span style="background: rgba(30, 132, 73, 0.2); color: #1E8449; padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.8rem;">#Cybersecurity</span>
            <span style="background: rgba(30, 132, 73, 0.2); color: #1E8449; padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.8rem;">#Networking</span>
        </div>
    `
  },
  {
    id: 6,
    image: blog5,
    alt: "Cybersecurity",
    category: "Certification",
    tecnology: "Cybersecurity",
    date: "Sep 18, 2025",
    title: "I took a big step into the world of cybersecurity",
    text: "I completed the Junior Cybersecurity Analyst path, gaining hands-on experience in threat analysis and incident response. This significantly strengthened my cyber defense skills.",
    fullContent: `
        <p>Last year, I took a big step into the world of cybersecurity by completing the Junior Cybersecurity Analyst Career Path from Cisco Networking Academy.</p>
        
        <p>This program gave me hands-on experience in:</p>
        
        <div style="margin-top: 1.5rem; padding: 1rem; background: rgba(30, 132, 73, 0.1); border-radius: 8px;">
            <h4 style="color: #1E8449; margin-bottom: 0.5rem;">Skills Acquired:</h4>
            <ul style="margin: 0; padding-left: 1.2rem;">
                <li>Understanding cybersecurity fundamentals and analyzing threats</li>
                <li>Protecting networks and responding to incidents</li>
                <li>Securing communications and managing access</li>
                <li>Practicing real-world scenarios through labs and simulations</li>
            </ul>
        </div>
        
        <p>It was an amazing learning journey that strengthened my skills and confirmed my passion for cybersecurity. I'm excited to continue exploring this field and taking on new challenges! 💻✨</p>
        
        <div style="margin-top: 1rem; display: flex; gap: 0.5rem; flex-wrap: wrap;">
            <span style="background: rgba(30, 132, 73, 0.2); color: #1E8449; padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.8rem;">#Cybersecurity</span>
            <span style="background: rgba(30, 132, 73, 0.2); color: #1E8449; padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.8rem;">#CiscoNetworkingAcademy</span>
            <span style="background: rgba(30, 132, 73, 0.2); color: #1E8449; padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.8rem;">#InfoSec</span>
            <span style="background: rgba(30, 132, 73, 0.2); color: #1E8449; padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.8rem;">#CyberDefense</span>
            <span style="background: rgba(30, 132, 73, 0.2); color: #1E8449; padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.8rem;">#CareerGrowth</span>
        </div>
    `
  },
  {
    id: 7,
    image: blog3,
    alt: "Skills",
    category: "Certification",
    tecnology: "Soft Skills",
    date: "Sep 18, 2025",
    title: "Building more than technical skills!",
    text: "I finished the Soft Skills Unit, boosting my essential skills like communication, teamwork, and adaptability. I believe these interpersonal skills are key to my professional growth.",
    fullContent: `
            <p>🌟 Building more than technical skills!</p>
            
            <p>Last year, I completed the Soft Skills Development Unit at CEDES Don Bosco, a program that helped me strengthen essential interpersonal and professional skills.</p>
            
            <p>I believe that developing soft skills such as communication, teamwork, empathy, problem-solving, and adaptability is just as important as technical knowledge. These skills are key not only for professional growth but also for fostering good collaboration and a positive environment in any team.</p>
            
            <p>I'm grateful for this experience and motivated to keep applying both my hard and soft skills in my journey as a professional. 💼✨</p>
            
            <div style="margin-top: 1.5rem; padding: 1rem; background: rgba(30, 132, 73, 0.1); border-radius: 8px;">
                <h4 style="color: #1E8449; margin-bottom: 0.5rem;">Key Soft Skills Developed:</h4>
                <ul style="margin: 0; padding-left: 1.2rem;">
                    <li>Effective communication and active listening</li>
                    <li>Team collaboration and conflict resolution</li>
                    <li>Problem-solving and critical thinking</li>
                    <li>Adaptability and emotional intelligence</li>
                    <li>Time management and organization</li>
                </ul>
            </div>
            
            <div style="margin-top: 1rem; display: flex; gap: 0.5rem; flex-wrap: wrap;">
                <span style="background: rgba(30, 132, 73, 0.2); color: #1E8449; padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.8rem;">#CEDESDonBosco</span>
                <span style="background: rgba(30, 132, 73, 0.2); color: #1E8449; padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.8rem;">#SoftSkills</span>
                <span style="background: rgba(30, 132, 73, 0.2); color: #1E8449; padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.8rem;">#ProfessionalGrowth</span>
                <span style="background: rgba(30, 132, 73, 0.2); color: #1E8449; padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.8rem;">#Teamwork</span>
                <span style="background: rgba(30, 132, 73, 0.2); color: #1E8449; padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.8rem;">#Communication</span>
                <span style="background: rgba(30, 132, 73, 0.2); color: #1E8449; padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.8rem;">#ContinuousLearning</span>
            </div>
        `
  }
];
const categories = [
  { id: 'all', name: 'All' },
  { id: 'Certification', name: 'Certification' },
  { id: 'New Knowledge', name: 'New Knowledge' }
];

const Blog = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalAnimating, setIsModalAnimating] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(null);

  // Efecto para manejar la tecla ESC
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  const filteredPosts = blogPosts.filter(post => {
    const matchCategory = activeFilter === 'all' || post.category === activeFilter;
    const matchSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tecnology.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  // Abrir modal
  const openModal = (entry) => {
    setSelectedEntry(entry);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
    setTimeout(() => setIsModalAnimating(true), 10);
  };

  // Cerrar modal
  const closeModal = () => {
    setIsModalAnimating(false);
    setTimeout(() => {
      setIsModalOpen(false);
      setSelectedEntry(null);
      document.body.style.overflow = 'auto';
    }, 300);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) closeModal();
  };

  // Función para renderizar contenido HTML seguro
  const createMarkup = (htmlContent) => {
    return { __html: htmlContent };
  };

  return (
    <article className="blog" data-page="blog">
      <header>
        <h2 className="h2 article-title">My Blog</h2>
      </header>

      <section className="blog-posts">
        {/* Filtros y buscador */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          marginBottom: '2rem',
          color: '#b9b9b9ff'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0'
          }}>
            {categories.map((category, index) => (
              <div key={category.id} style={{ display: 'flex', alignItems: 'center' }}>
                <button
                  className={activeFilter === category.id ? 'active' : ''}
                  onClick={() => setActiveFilter(category.id)}
                  style={{
                    color: activeFilter === category.id ? 'var(--vegas-gold)' : 'inherit',
                    border: 'none',
                    background: 'transparent',
                    cursor: 'pointer',
                    padding: '0.5rem 0.8rem',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {category.name}
                </button>
                {index < categories.length - 1 && <span style={{ margin: '0 0.5rem' }}>|</span>}
              </div>
            ))}
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            alignSelf: 'center'
          }}>
            <input
              type="text"
              placeholder="Type to search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                background: 'transparent',
                border: 'none',
                borderBottom: '1px solid #b9b9b9ff',
                outline: 'none',
                padding: '4px 6px',
                color: 'inherit',
                minWidth: '160px',
                transition: 'border-color 0.3s ease'
              }}
              onFocus={(e) => { e.target.style.borderBottomColor = 'var(--vegas-gold)'; }}
              onBlur={(e) => { e.target.style.borderBottomColor = '#b9b9b9ff'; }}
            />
            <ion-icon
              name="search-outline"
              style={{
                fontSize: '1.2rem',
                marginLeft: '6px',
                color: 'inherit'
              }}
            ></ion-icon>
          </div>
        </div>

        {/* Lista de posts */}
        <ul className="blog-posts-list" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '2rem',
          listStyle: 'none',
          padding: 0,
          margin: 0
        }}>
          {filteredPosts.map(post => (
            <li
              key={post.id}
              className="blog-post-item"
              style={{
                background: 'transparent',
                borderRadius: '0',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                border: '2px solid rgba(185, 185, 185, 0.3)', // Borde gris opaco por defecto
                borderRadius: '10px',
                padding: '1rem'
              }}
              onMouseEnter={(e) => { 
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.borderColor = 'var(--vegas-gold)'; // Borde amarillo al hover
              }}
              onMouseLeave={(e) => { 
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(185, 185, 185, 0.3)'; // Vuelve al borde gris opaco
              }}
              onClick={() => openModal(post)}
            >
              <figure className="blog-banner-box" style={{ margin: 0, marginBottom: '1rem' }}>
                <img
                  src={post.image}
                  alt={post.alt}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '8px'
                  }}
                />
              </figure>
              <div className="blog-content" style={{ padding: '0' }}>
                <div className="blog-meta" style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '0.8rem',
                  marginBottom: '0.8rem',
                  color: '#b9b9b9ff',
                  flexWrap: 'wrap',
                  gap: '0.3rem'
                }}>
                  <span className="blog-tecnology" style={{
                    fontWeight: '600',
                    color: 'var(--vegas-gold)',
                    background: 'rgba(30, 132, 73, 0.1)',
                    padding: '2px 6px',
                    borderRadius: '4px'
                  }}>
                    {post.tecnology}
                  </span>
                  <span className="dot" style={{
                    width: '3px',
                    height: '3px',
                    background: '#b9b9b9ff',
                    borderRadius: '50%',
                    display: 'inline-block'
                  }}></span>
                  <p className="blog-category" style={{ margin: 0, fontWeight: '500' }}>
                    {post.category}
                  </p>
                  <span className="dot" style={{
                    width: '3px',
                    height: '3px',
                    background: '#b9b9b9ff',
                    borderRadius: '50%',
                    display: 'inline-block'
                  }}></span>
                  <time dateTime="2022-02-23" style={{ fontSize: '0.8rem' }}>
                    {post.date}
                  </time>
                </div>
                <h3 className="h3 blog-item-title" style={{
                  margin: '0 0 0.8rem 0',
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  color: '#ffffff',
                  lineHeight: '1.3'
                }}>
                  {post.title}
                </h3>
                <p className="blog-text" style={{
                  margin: 0,
                  fontSize: '0.9rem',
                  lineHeight: '1.6',
                  color: '#b9b9b9ff'
                }}>
                  {post.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Modal */}
      {isModalOpen && selectedEntry && (
        <div
          onClick={handleOverlayClick}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.6)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
            opacity: isModalAnimating ? 1 : 0,
            transition: 'opacity 0.3s ease'
          }}
        >
          <div
            style={{
              background: '#1e1e1e',
              padding: '2rem',
              borderRadius: '12px',
              maxWidth: '700px',
              width: '90%',
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative',
              transform: isModalAnimating ? 'translateY(0)' : 'translateY(-20px)',
              transition: 'transform 0.3s ease'
            }}
            className="custom-scrollbar"
          >
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '0rem',
                right: '10px',
                background: 'transparent',
                border: 'none',
                fontSize: '1.5rem',
                color: '#fff',
                cursor: 'pointer',
                zIndex: 10
              }}
              title="Cerrar (ESC)"
            >
              ×
            </button>

            <figure style={{ marginBottom: '1.5rem' }}>
              <img
                src={selectedEntry.image}
                alt={selectedEntry.alt}
                style={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover',
                  borderRadius: '8px'
                }}
              />
            </figure>

            <div style={{ marginBottom: '1rem' }}>
              <span style={{
                background: 'rgba(30, 132, 73, 0.1)',
                color: 'var(--vegas-gold)',
                padding: '0.3rem 0.8rem',
                borderRadius: '4px',
                fontSize: '0.8rem',
                fontWeight: '600'
              }}>
                {selectedEntry.tecnology}
              </span>
              <span style={{ color: '#b9b9b9ff', fontSize: '0.9rem' }}>{selectedEntry.date}</span>
            </div>

            <h3 style={{
              margin: '0 0 1rem 0',
              color: 'var(--vegas-gold)',
              fontSize: '1.5rem',
              fontWeight: '600'
            }}>
              {selectedEntry.title}
            </h3>

            <div
              className="modal-content"
              style={{
                color: '#ffffff',
                lineHeight: '1.6',
                fontSize: '0.95rem'
              }}
              dangerouslySetInnerHTML={createMarkup(selectedEntry.fullContent)}
            />
          </div>
        </div>
      )}

      <style>{`
        /* Estilos para la barra de desplazamiento personalizada */
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #444;
          border-radius: 4px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #555;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:active {
          background: #666;
        }

        /* Para Firefox */
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #444 transparent;
        }

        /* Animaciones y otros estilos existentes */
        @keyframes fadeIn { 
          from { opacity: 0; transform: translateY(10px); } 
          to { opacity: 1; transform: translateY(0); } 
        }
        
        .blog-post-item { 
          animation: fadeIn 0.5s ease forwards; 
        }
        
        .modal-content p {
          margin-bottom: 1rem;
        }
        
        .modal-content ul {
          margin-bottom: 1rem;
        }
        
        .modal-content li {
          margin-bottom: 0.3rem;
        }

        .blog-posts-list {
          scrollbar-width: thin;
          scrollbar-color: #444 transparent;
        }

        .blog-posts-list::-webkit-scrollbar {
          width: 6px;
        }

        .blog-posts-list::-webkit-scrollbar-thumb {
          background: #444;
          border-radius: 3px;
        }
      `}</style>
    </article>
  );
};

export default Blog;
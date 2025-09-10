// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active navigation highlighting
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Navbar background on scroll (minimal effect for dark theme)
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = '#3b4252';
        navbar.style.borderBottom = '1px solid #434c5e';
    } else {
        navbar.style.background = '#3b4252';
        navbar.style.borderBottom = '1px solid #434c5e';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.project-card, .experience-card, .education-card');

    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Form validation (if contact form is added later)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Typing effect for hero section (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Initialize typing effect on page load
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-text h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 150);
    }
});

// Scroll to top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll to top button (optional)
document.addEventListener('DOMContentLoaded', () => {
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '↑';
    scrollButton.className = 'scroll-to-top';
    scrollButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 40px;
        height: 40px;
        background: #3b4252;
        color: #88c0d0;
        border: 1px solid #434c5e;
        font-size: 16px;
        cursor: pointer;
        opacity: 0;
        transition: all 0.2s ease;
        z-index: 1000;
        font-family: 'Fira Code', monospace;
    `;

    scrollButton.addEventListener('click', scrollToTop);
    scrollButton.addEventListener('mouseenter', () => {
        scrollButton.style.background = '#88c0d0';
        scrollButton.style.color = '#2e3440';
    });
    scrollButton.addEventListener('mouseleave', () => {
        scrollButton.style.background = '#3b4252';
        scrollButton.style.color = '#88c0d0';
    });

    document.body.appendChild(scrollButton);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollButton.style.opacity = '1';
        } else {
            scrollButton.style.opacity = '0';
        }
    });
});

// ========================================
// DATA SECTION
// ========================================
// Projects data - Edit this section to add/modify projects
const projects = [
    {
        "name": "Resume Tailor",
        "description": "An AI-powered resume tailoring tool that assists job seekers in optimizing their resumes by comparing them with job descriptions using Google Gemini AI. The tool provides personalized suggestions and match scores to enhance resume relevance.",
        "tech": ["Python", "Flask", "Docker", "Google Gemini AI", "SQLite", "Prisma", "Tailwind CSS", "Next.js"],
        "links": [
            { "text": "GitHub", "url": "https://github.com/rahsuttank/resume-tailor" },
            { "text": "Demo Video", "url": "https://www.loom.com/share/eeff6cf87f2b4a938e57bef3247d5fd0" }
        ]
    },
    {
        "name": "GraphQL Event Manager",
        "description": "A simple Node.js and Express backend application that utilizes GraphQL for managing events and users. It features JWT authentication, MongoDB Atlas for data storage, and is fully Dockerized for easy deployment.",
        "tech": ["Node.js", "Express", "GraphQL", "MongoDB Atlas", "Mongoose", "JWT Authentication", "Docker"],
        "links": [
            { "text": "GitHub", "url": "https://github.com/rahsuttank/graphql-event-manager" }
        ]
    },
    {
        name: "Australia IR",
        description: "A comprehensive information retrieval system designed to analyze and cluster Australian news articles. This project employs web scraping, natural language processing (NLP), and machine learning techniques to process and categorize news data, providing insights into Australian media trends.",
        tech: ["Python", "Flask", "Docker", "BeautifulSoup", "NLTK", "Scikit-learn", "Solr", "Flask-RESTful"],
        links: [
            { text: "GitHub", url: "https://github.com/rahsuttank/Australia-IR" }
        ]
    },
    {
        name: "Job Filter Chrome Extension",
        description: "A lightweight Chrome extension that enhances LinkedIn's job search by filtering out unwanted job postings based on user-defined criteria. It automatically hides promoted jobs and allows users to blacklist companies for a cleaner job search experience.",
        tech: ["JavaScript", "HTML", "CSS", "Chrome Extensions API", "MutationObserver"],
        links: [
            { text: "GitHub", url: "https://github.com/rahsuttank/job-filter-extension" }
        ]
    },
    {
        name: "Walmart Split Extension V2",
        description: "A Chrome extension that extracts itemized data from your Walmart order page, allows you to assign items to friends or participants, calculates individual costs, and exports the results (along with order details) as a CSV file.",
        tech: ["JavaScript", "HTML", "CSS", "Chrome Extensions API", "CSV Export"],
        links: [
            { text: "GitHub", url: "https://github.com/rahsuttank/walmart-split-extension-v2" }
        ]
    },
    {
        name: "Market Prediction System",
        description: "An LSTM neural network for stock market prediction using PySpark, achieving an R-squared of 0.70 with real-time data processing.",
        tech: ["PySpark", "LSTM", "Python", "MapReduce", "Kafka", "Elasticsearch"],
        links: [
            { text: "GitHub", url: "https://github.com/tushartank/market-prediction" }
        ]
    }
];

// Experience data - Edit this section to add/modify experience
const experiences = [
    {
        title: "Software Developer",
        company: "Heartland Community Network",
        duration: "Aug 2024 – Present",
        responsibilities: [
            "Architected foundational cloud infrastructure for a recipe app, deploying Node.js backend on AWS Elastic Beanstalk with Amazon DocumentDB.",
            "Migrated authentication system from Supabase to custom Node.js and JWT solution, eliminating monthly costs and cutting user login time by 50%.",
            "Developed AI-powered content pipeline using Amazon Rekognition and AWS Lambda for automatic image moderation and recipe tagging.",
            "Built responsive React Native and TypeScript UI with reusable component library using NativeWind."
        ]
    },
    {
        title: "Software Engineer",
        company: "Persistent Systems",
        duration: "Nov 2020 – Jul 2023",
        responsibilities: [
            "Architected Quality Assurance platform in Java & Scala for diagnostic instruments, deployed across 10,000+ labs and clinics.",
            "Led backend integration of clinical devices using JavaScript data transformers, cutting report generation time by 43%.",
            "Engineered microservices architecture using Python and Flask, processing 500,000+ requests daily with HIPAA and HL7 compliance.",
            "Created automated testing framework with Python and Selenium, reducing manual validation time by 50% and increasing bug detection by 80%."
        ]
    }
];

// ========================================
// DYNAMIC PROJECTS SECTION
// ========================================

// Function to render projects dynamically
// Configuration for "View More" functionality
const INITIAL_PROJECTS_COUNT = 3;
let showingAllProjects = false;

function renderProjects(showAll = false) {
    const projectsGrid = document.querySelector('.projects-grid');

    projectsGrid.innerHTML = '';
    const projectsToShow = showAll ? projects : projects.slice(0, INITIAL_PROJECTS_COUNT);

    projectsToShow.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';

        const techString = project.tech.join(', ');
        const linksHTML = project.links.map(link =>
            `<a href="${link.url}" target="_blank">${link.text}</a>`
        ).join('');

        projectCard.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <p><strong>Tech:</strong> ${techString}</p>
            <div class="project-links">
                ${linksHTML}
            </div>
        `;

        projectsGrid.appendChild(projectCard);
    });
    if (projects.length > INITIAL_PROJECTS_COUNT) {
        addViewMoreButton(showAll);
    }
}

function addViewMoreButton(showingAll) {
    const projectsGrid = document.querySelector('.projects-grid');

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'view-more-container';
    buttonContainer.style.textAlign = 'center';
    buttonContainer.style.marginTop = '2rem';
    const viewMoreBtn = document.createElement('button');
    viewMoreBtn.className = 'view-more-btn';
    viewMoreBtn.textContent = showingAll ? 'View Less' : `View More`;

    viewMoreBtn.addEventListener('click', () => {
        showingAllProjects = !showingAllProjects;
        renderProjects(showingAllProjects);

        if (!showingAllProjects) {
            document.querySelector('#projects').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });

    buttonContainer.appendChild(viewMoreBtn);
    projectsGrid.appendChild(buttonContainer);
}

// Initialize projects and experience when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    renderExperience();
});

// ========================================
// HOW TO ADD/EDIT CONTENT:
// ========================================
// 1. PROJECTS: Edit /data/projects.js
// 2. EXPERIENCE: Edit /data/experience.js
// 3. Save the files - content will update automatically!
// ========================================

// ========================================
// DYNAMIC EXPERIENCE SECTION
// ========================================

// Function to render experience dynamically
function renderExperience() {
    const experienceTimeline = document.querySelector('.experience-timeline');

    experienceTimeline.innerHTML = '';
    experiences.forEach(experience => {
        const experienceCard = document.createElement('div');
        experienceCard.className = 'experience-card';

        const responsibilitiesHTML = experience.responsibilities.map(responsibility =>
            `<li>${responsibility}</li>`
        ).join('');
        experienceCard.innerHTML = `
            <h3>${experience.title} - ${experience.company}</h3>
            <p class="duration">${experience.duration}</p>
            <ul>
                ${responsibilitiesHTML}
            </ul>
        `;

        experienceTimeline.appendChild(experienceCard);
    });
}


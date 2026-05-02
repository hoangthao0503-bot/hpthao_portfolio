// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Render Academic Projects
    const academicGrid = document.getElementById('academic-grid');
    portfolioData.academic.forEach(project => {
        const tagsHtml = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
        const html = `
            <div class="card reveal">
                <div class="card-header">
                    <div class="card-icon">🎓</div>
                </div>
                <h3 class="card-title">${project.title}</h3>
                <p class="card-desc">${project.description}</p>
                <div class="card-tags">
                    ${tagsHtml}
                </div>
                <div class="card-links">
                    <a href="${project.githubLink}" target="_blank" rel="noopener noreferrer" class="card-link">
                        <svg viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        View Project
                    </a>
                </div>
            </div>
        `;
        academicGrid.innerHTML += html;
    });

    // Render Professional Experience
    const professionalTimeline = document.getElementById('professional-timeline');
    portfolioData.professional.forEach(exp => {
        const html = `
            <div class="timeline-item reveal">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <span class="timeline-date">${exp.date}</span>
                    <h3 class="timeline-title">${exp.title}</h3>
                    <div class="timeline-company">${exp.company}</div>
                    <p class="timeline-desc">${exp.description}</p>
                </div>
            </div>
        `;
        professionalTimeline.innerHTML += html;
    });

    // Render Entrepreneurial Projects
    const entrepreneurialGrid = document.getElementById('entrepreneurial-grid');
    portfolioData.entrepreneurial.forEach(project => {
        const tagsHtml = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
        const html = `
            <div class="card reveal">
                <div class="card-header">
                    <div class="card-icon">🚀</div>
                </div>
                <h3 class="card-title">${project.title}</h3>
                <p class="card-desc">${project.description}</p>
                <div class="card-tags">
                    ${tagsHtml}
                </div>
                <div class="card-links">
                    <a href="${project.githubLink}" target="_blank" rel="noopener noreferrer" class="card-link">
                        <svg viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        View Project
                    </a>
                </div>
            </div>
        `;
        entrepreneurialGrid.innerHTML += html;
    });

    // Scroll Reveal Animation
    const reveals = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        reveals.forEach(reveal => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    
    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', () => {
        revealOnScroll();
        handleScroll();
    });

    // Trigger once on load
    revealOnScroll();
    handleScroll();
});

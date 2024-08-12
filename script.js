document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Fetch and display projects
    fetchProjects();

    // Handle contact form submission
    document.getElementById('contact-form').addEventListener('submit', handleFormSubmit);
});

async function fetchProjects() {

    const projects = [
        { title: 'Project 1', description: 'Description of Project 1', image: 'path/to/image1.jpg', link: '#' },
        { title: 'Project 2', description: 'Description of Project 2', image: 'path/to/image2.jpg', link: '#' },

    ];

    const projectGrid = document.querySelector('.project-grid');
    projects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectGrid.appendChild(projectCard);
    });
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <div class="content">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        </div>
    `;
    return card;
}

function handleFormSubmit(e) {
    e.preventDefault();

    console.log('Form submitted');

    e.target.reset();
}

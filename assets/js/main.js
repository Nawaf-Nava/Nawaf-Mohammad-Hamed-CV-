document.addEventListener('DOMContentLoaded', () => {
    async function loadSection(id, file) {
        try {
            const response = await fetch('sections/' + file);
            if (!response.ok) throw new Error('Failed to load ' + file);
            const html = await response.text();
            document.getElementById(id).innerHTML = html;
        } catch (e) {
            console.error(e);
        }
    }

    const sections = [
        {id: 'about-section', file: 'about.html'},
        {id: 'projects-section', file: 'projects.html'},
        {id: 'experience-section', file: 'experience.html'},
        {id: 'blog-section', file: 'blog.html'},
        {id: 'gallery-section', file: 'gallery.html'},
        {id: 'contact-section', file: 'contact.html'}
    ];

    sections.forEach(s => loadSection(s.id, s.file));
});

let activeGrade = 'all';

function filterBooks() {
    const query = document.getElementById('bookSearch').value.trim().toLowerCase();
    const cards = document.querySelectorAll('.book-card');
    let visibleCount = 0;

    cards.forEach(card => {
        const title   = (card.querySelector('h3')?.textContent || '').toLowerCase();
        const desc    = (card.querySelector('p')?.textContent  || '').toLowerCase();
        const subject = (card.dataset.subject || '').toLowerCase();
        const grade   = card.dataset.grade || '';

        const matchesSearch = !query || title.includes(query) || desc.includes(query) || subject.includes(query);
        const matchesGrade  = activeGrade === 'all' || grade === activeGrade;

        if (matchesSearch && matchesGrade) {
            card.style.display = '';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });

    // Show/hide no-results message
    let noResults = document.getElementById('noResults');
    if (!noResults) {
        noResults = document.createElement('div');
        noResults.id = 'noResults';
        noResults.className = 'no-results';
        noResults.innerHTML = `
            <span class="no-results-icon">📚</span>
            <h3>No books found</h3>
            <p>Try a different search term or grade filter.</p>
        `;
        document.getElementById('booksGrid').after(noResults);
    }
    noResults.style.display = visibleCount === 0 ? 'block' : 'none';
}

function setGradeFilter(grade) {
    activeGrade = grade;

    // Update active tab styling
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    event.target.classList.add('active');

    filterBooks();
}

// Hamburger nav toggle
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('navToggle');
    const navLinks  = document.getElementById('navLinks');
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
    }

    // Live search on input
    const searchInput = document.getElementById('bookSearch');
    if (searchInput) {
        searchInput.addEventListener('input', filterBooks);
    }
});

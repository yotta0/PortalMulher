document.addEventListener('DOMContentLoaded', function() {
    const faqList = document.getElementById('faq-list');
    let faqEntries = [];

    axios.get('http://localhost:8000/api/faq_entries')
        .then(response => {
            faqEntries = response.data;
            renderFAQs(faqEntries);
        })
        .catch(error => {
            console.error('Error fetching FAQ entries:', error);
        });

    window.filterFAQs = function() {
        const searchValue = document.getElementById('search-input').value.toLowerCase();
        const filteredFAQs = faqEntries.filter(entry =>
            entry.question.toLowerCase().includes(searchValue) ||
            entry.answer.toLowerCase().includes(searchValue)
        );
        renderFAQs(filteredFAQs);
    };

    function renderFAQs(faqs) {
        faqList.innerHTML = '';
        faqs.forEach(entry => {
            const faqItem = document.createElement('div');
            faqItem.classList.add('faq-item');

            faqItem.innerHTML = `
                <div class="faq-question">${entry.question}</div>
                <div class="faq-answer">${entry.answer}</div>
            `;

            faqList.appendChild(faqItem);
        });
    }
});

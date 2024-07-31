document.addEventListener('DOMContentLoaded', function() {
    const newsGrid = document.getElementById('news-grid');

    axios.get('http://localhost:8000/api/news')
        .then(response => {
            const newsItems = response.data;
            newsItems.forEach(item => {
                const newsItem = document.createElement('div');
                newsItem.classList.add('news-item');

                // Ensure the image URL is not empty and valid
                const image = item.image_link ? `<img src="${item.image_link}" alt="${item.title}" class="news-image" onerror="this.src='https://via.placeholder.com/150';">` : '';

                // Format the published date
                const publishedDate = new Date(item.published_date);
                const formattedDate = publishedDate.toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric'
                });

                newsItem.innerHTML = `
                    ${image}
                    <div class="news-content">
                        <h3 class="news-title">${item.title}</h3>
                        <p class="news-description">${item.description}</p>
                        <p class="news-date">${formattedDate}</p>
                        <a href="${item.link}" class="news-link">Leia mais</a>
                    </div>
                `;

                newsGrid.appendChild(newsItem);
            });
        })
        .catch(error => {
            console.error('Error fetching news:', error);
        });
});

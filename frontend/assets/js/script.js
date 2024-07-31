document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const serviceList = document.getElementById('service-list');

    function filterServices() {
        const query = searchInput.value.toLowerCase();
        const services = serviceList.querySelectorAll('.column');

        services.forEach(service => {
            const serviceName = service.querySelector('h3').textContent.toLowerCase();
            const serviceDescription = service.querySelector('p').textContent.toLowerCase();

            if (serviceName.includes(query) || serviceDescription.includes(query)) {
                service.style.display = 'block';
            } else {
                service.style.display = 'none';
            }
        });
    }

    searchButton.addEventListener('click', filterServices);
    searchInput.addEventListener('input', filterServices);
});

document.addEventListener("DOMContentLoaded", function () {
    axios.get('http://localhost:8000/api/contacts')
        .then(response => {
            const data = response.data;
            const contactList = document.getElementById('contact-list');
            if (data.length === 0) {
                // Exibe uma mensagem quando não há contatos disponíveis
                const noContactsMessage = document.createElement('p');
                noContactsMessage.textContent = 'Nenhum contato encontrado no momento.';
                contactList.appendChild(noContactsMessage);
            } else {
                data.forEach(contact => {
                    const contactCard = document.createElement('div');
                    contactCard.classList.add('column');
                    contactCard.innerHTML = `
                        <div class="card">
                            <div class="icon-wrapper">
                                <i class="fas ${getIconClass(contact.service_type)}"></i>
                            </div>
                            <h3>${contact.name}</h3>
                            <p>
                                <span class="phone-number">
                                    <i class="fas fa-phone-alt"></i> ${contact.phone}
                                </span>
                                <button class="copy-btn" data-phone="${contact.phone}" aria-label="Copiar número">
                                    <i class="fas fa-copy"></i> Copiar
                                </button>
                            </p>
                            <p>Email: ${contact.email}</p>
                            ${contact.address ? `<p>Endereço: ${contact.address}</p>` : ''}
                            ${contact.description ? `<p>${contact.description}</p>` : ''}
                        </div>
                    `;
                    contactList.appendChild(contactCard);
                });

                // Adiciona eventos de clique para os botões de copiar
                document.querySelectorAll('.copy-btn').forEach(button => {
                    button.addEventListener('click', function () {
                        const phoneNumber = this.getAttribute('data-phone');
                        navigator.clipboard.writeText(phoneNumber)
                            .then(() => {
                                alert('Número de telefone copiado para a área de transferência!');
                            })
                            .catch(err => {
                                console.error('Erro ao copiar o número de telefone: ', err);
                            });
                    });
                });
            }
        })
        .catch(error => {
            console.error('Erro ao buscar contatos:', error);
            // Opcional: você pode adicionar uma mensagem de erro para o usuário aqui
        });
});

function getIconClass(serviceType) {
    switch(serviceType) {
        case 'emergency':
            return 'fa-exclamation-triangle';
        case 'support':
            return 'fa-hands-helping';
        default:
            return 'fa-phone-alt';
    }
}

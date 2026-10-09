document.addEventListener('DOMContentLoaded', () => {
    
    // Datos de los festivales
    const festivalesData = {
        1: {
            title: 'Coachella 2026',
            location: ' Indio, California, USA',
            date: '📅 10-12 y 17-19 Abril, 2026',
            image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800',
            lineup: ['Bad Bunny', 'Billie Eilish', 'The Weeknd', 'Dua Lipa', 'Tyler, The Creator'],
            prices: [
                { tier: 'General', price: '$499' },
                { tier: 'VIP', price: '$999' }
            ]
        },
        2: {
            title: 'Tomorrowland 2026',
            location: '📍 Boom, Bélgica',
            date: '📅 17-19 y 24-26 Julio, 2026',
            image: 'https://images.unsplash.com/photo-1459749411177-287ce34e4e89?w=800',
            lineup: ['Martin Garrix', 'David Guetta', 'Armin van Buuren', 'Tiësto', 'Afrojack'],
            prices: [
                { tier: 'General', price: '€299' },
                { tier: 'VIP', price: '€699' }
            ]
        },
        3: {
            title: 'Glastonbury 2026',
            location: '📍 Somerset, Reino Unido',
            date: '📅 24-28 Junio, 2026',
            image: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800',
            lineup: ['Arctic Monkeys', 'Foo Fighters', 'The Strokes', 'Tame Impala', 'Royal Blood'],
            prices: [
                { tier: 'General', price: '£335' },
                { tier: 'VIP', price: '£750' }
            ]
        },
        4: {
            title: 'Lollapalooza 2026',
            location: '📍 Chicago, USA',
            date: '📅 30 Julio - 2 Agosto, 2026',
            image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800',
            lineup: ['Kendrick Lamar', 'SZA', 'Post Malone', 'Olivia Rodrigo', 'Travis Scott'],
            prices: [
                { tier: 'General', price: '$385' },
                { tier: 'VIP', price: '$850' }
            ]
        },
        5: {
            title: 'Primavera Sound 2026',
            location: '📍 Barcelona, España',
            date: '📅 28 Mayo - 1 Junio, 2026',
            image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800',
            lineup: ['Rosalía', 'The National', 'Caroline Polachek', 'Blur', 'New Order'],
            prices: [
                { tier: 'General', price: '€220' },
                { tier: 'VIP', price: '€450' }
            ]
        },
        6: {
            title: 'Vive Latino 2026',
            location: '📍 Ciudad de México, México',
            date: '📅 14-15 Marzo, 2026',
            image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800',
            lineup: ['Peso Pluma', 'Feid', 'Karol G', 'Caifanes', 'Molotov'],
            prices: [
                { tier: 'General', price: '$2,500 MXN' },
                { tier: 'VIP', price: '$5,800 MXN' }
            ]
        },
        7: {
            title: 'Ultra Music Festival',
            location: '📍 Miami, USA',
            date: '📅 27-29 Marzo, 2026',
            image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800',
            lineup: ['Calvin Harris', 'Marshmello', 'Steve Aoki', 'Zedd', 'Kygo'],
            prices: [
                { tier: 'General', price: '$399' },
                { tier: 'VIP', price: '$899' }
            ]
        },
        8: {
            title: 'Rock in Rio 2026',
            location: ' Río de Janeiro, Brasil',
            date: '📅 12-21 Septiembre, 2026',
            image: 'https://images.unsplash.com/photo-1501612780327-45045538702b?w=800',
            lineup: ['Imagine Dragons', 'Shakira', 'Maroon 5', 'Ivete Sangalo', 'Anitta'],
            prices: [
                { tier: 'General', price: 'R$ 650' },
                { tier: 'VIP', price: 'R$ 1,400' }
            ]
        },
        9: {
            title: 'Estéreo Picnic 2026',
            location: '📍 Bogotá, Colombia',
            date: '📅 19-22 Marzo, 2026',
            image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800',
            lineup: ['Bad Bunny', 'J Balvin', 'Shakira', 'Carlos Vives', 'Aterciopelados'],
            prices: [
                { tier: 'General', price: '$450,000 COP' },
                { tier: 'VIP', price: '$950,000 COP' }
            ]
        }
    };

    // Filtros
    const filtroBtns = document.querySelectorAll('.filtro-btn');
    const festivalCards = document.querySelectorAll('.festival-card');

    filtroBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remover active de todos
            filtroBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            festivalCards.forEach(card => {
                if (filter === 'todos' || card.dataset.category === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // Modal
    const modal = document.getElementById('festival-modal');
    const modalClose = document.getElementById('modal-close');
    const btnVerDetalles = document.querySelectorAll('.festival-card__btn-ver');

    btnVerDetalles.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const festivalId = btn.dataset.festival;
            const data = festivalesData[festivalId];

            if (data) {
                document.getElementById('modal-img').src = data.image;
                document.getElementById('modal-img').alt = data.title;
                document.getElementById('modal-title').textContent = data.title;
                document.getElementById('modal-location').textContent = data.location;
                document.getElementById('modal-date').textContent = data.date;

                const lineupList = document.getElementById('modal-lineup');
                lineupList.innerHTML = '';
                data.lineup.forEach(artist => {
                    const li = document.createElement('li');
                    li.textContent = artist;
                    lineupList.appendChild(li);
                });

                const pricesContainer = document.getElementById('modal-prices');
                pricesContainer.innerHTML = '';
                data.prices.forEach(price => {
                    const div = document.createElement('div');
                    div.className = 'modal__price-option';
                    div.innerHTML = `
                        <div class="tier-label">${price.tier}</div>
                        <div class="tier-price">${price.price}</div>
                    `;
                    div.addEventListener('click', () => {
                        pricesContainer.querySelectorAll('.modal__price-option').forEach(p => p.classList.remove('selected'));
                        div.classList.add('selected');
                    });
                    pricesContainer.appendChild(div);
                });

                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    modalClose.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Botones de comprar
    const btnsComprar = document.querySelectorAll('.festival-card__btn-comprar, .modal__btn-comprar');
    btnsComprar.forEach(btn => {
        btn.addEventListener('click', () => {
            alert('¡Redirigiendo a la pasarela de pago segura! 🎟️');
        });
    });
});
$(document).ready(() => {

    $('#hamburger-menu').click(() => {
        $('#hamburger-menu').toggleClass('active')
        $('#nav-menu').toggleClass('active')
    })

    // SweetAlert2 para Sobre Mim
    $('#sobre-mim-btn').click(function (e) {
        e.preventDefault();
        Swal.fire({
            title: 'Sobre Mim',
            html: `<p>Sou Erick, designer gráfico e desenvolvedor front-end apaixonado por cinema e criatividade. Confira meu portfólio para conhecer meus projetos!</p>` +
                `<a href='https://elarssen.myportfolio.com/' target='_blank' class='swal2-confirm swal2-styled' style="
                    margin-top:15px;
                    display:inline-block;
                    padding:10px 28px;
                    font-size:1.1em;
                    font-weight:bold;
                    background: linear-gradient(90deg, #c0392b 0%, #e67e22 100%);
                    color:#fff;
                    border:none;
                    border-radius:30px;
                    box-shadow:0 4px 16px rgba(192,57,43,0.15);
                    cursor:pointer;
                    transition:background 0.3s, box-shadow 0.3s;
                "
                onmouseover="this.style.background='linear-gradient(90deg,#e67e22 0%,#c0392b 100%)';this.style.boxShadow='0 6px 24px rgba(192,57,43,0.25)';"
                onmouseout="this.style.background='linear-gradient(90deg,#c0392b 0%,#e67e22 100%)';this.style.boxShadow='0 4px 16px rgba(192,57,43,0.15)';"
                >Ver Portfólio</a>`,
            showConfirmButton: false,
            showCloseButton: true,
            width: 400
        });
    });

    let navText = ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"]

    $('#hero-carousel').owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: navText,
        autoplay: true,
        autoplayHoverPause: true
    })

    $('#top-movies-slide').owlCarousel({
        items: 2,
        dots: false,
        loop: true,
        autoplay: false,
        nav: true,
        navText: [
            '<i class="bx bx-chevron-left"></i>',
            '<i class="bx bx-chevron-right"></i>'
        ],
        responsive: {
            500: {
                items: 3
            },
            1280: {
                items: 4
            },
            1600: {
                items: 6
            }
        }
    })

    $('.movies-slide').owlCarousel({
        items: 2,
        dots: false,
        nav: true,
        navText: navText,
        margin: 15,
        responsive: {
            500: {
                items: 2
            },
            1280: {
                items: 4
            },
            1600: {
                items: 6
            }
        }
    })
})
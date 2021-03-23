        var openMenu = document.querySelector('#iconHam');
        var closeMenu = document.querySelector('#iconClose');
        var menu = document.querySelector('.nav_links');

        openMenu.addEventListener('click', () => {
            menu.classList.remove('d_none');
            openMenu.classList.add('d_none');
            closeMenu.classList.remove('d_none');
        })

        closeMenu.addEventListener('click', () => {
            menu.classList.add('d_none')
            openMenu.classList.remove('d_none');
            closeMenu.classList.add('d_none');
        })
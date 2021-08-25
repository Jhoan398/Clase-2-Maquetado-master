window.onscroll = () => {
    const fakeH = document.querySelector('#fakeHeader');
    const searchBar = document.querySelector('#searchBar');
    const fooT = document.querySelector('footer');
    if (window.innerWidth > 375) {
        if (window.pageYOffset >= 150) {
            fakeH.style.top = '0px';
            fakeH.style.opacity = '1';

        } else {
            fakeH.style.top = '-75px';
            fakeH.style.opacity = '0';

        }

    }
    if (window.innerWidth <= 375) {
        if (window.pageYOffset <= 150) {
            searchBar.style.top = '0px';
            fooT.style.bottom = '0px';
            fooT.style.opacity = '1';
            searchBar.style.opacity = '1';
        } else {
            searchBar.style.top = '-75px';
            searchBar.style.opacity = '0';
            fooT.style.bottom = '-75px';
            fooT.style.opacity = '0';
        }
    }

};
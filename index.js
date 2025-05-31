console.log('Happy developing ✨')


const links = document.querySelectorAll('.navigation li');
links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
    });
})
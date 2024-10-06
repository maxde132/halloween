document.addEventListener('DOMContentLoaded', (event) => {
    function getCookie(name) {
        let value = `; ${document.cookie}`;
        let parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            let date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = `; expires=${date.toUTCString()}`;
        }
        document.cookie = `${name}=${value || ""}${expires}; path=/`;
    }

    let visitorCount = localStorage.getItem('visitorCount') || 0;
    console.log('Initial visitor count:', visitorCount);

    if (!getCookie('visited')) {
        console.log('No visited cookie found, setting cookie and incrementing count.');
        visitorCount++;
        localStorage.setItem('visitorCount', visitorCount);
        setCookie('visited', 'true', 365); // Cookie expires in 1 year
    } else {
        console.log('Visited cookie found, not incrementing count.');
    }

    document.getElementById('visitor-count').innerText = `Visitors: ${visitorCount}`;
    console.log('Final visitor count:', visitorCount);

    document.getElementById('reset-button').addEventListener('click', () => {
        const password = document.getElementById('reset-password').value;
        const correctPassword = 'awesome'; // Set your password here

        if (password === correctPassword) {
            localStorage.setItem('visitorCount', 0);
            document.getElementById('visitor-count').innerText = 'Visitors: 0';
            alert('Visitor count has been reset.');
        } else {
            alert('Incorrect password.');
        }
    });

    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
});


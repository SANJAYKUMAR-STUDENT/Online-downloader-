// public/instagram.js
document.getElementById('instagram-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const url = document.getElementById('url').value;

    const response = await fetch('/instagram-download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
    });

    if (response.redirected) {
        window.location.href = response.url; // Redirect to the media URL
    } else {
        const message = await response.text();
        alert(message);
    }
});

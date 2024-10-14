// public/facebook.js
document.getElementById('facebook-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const url = document.getElementById('url').value;

    const response = await fetch('/facebook-download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
    });

    const message = await response.text();
    alert(message);
});

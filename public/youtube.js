// public/youtube.js
document.getElementById('youtube-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const url = document.getElementById('url').value;

    const response = await fetch('/youtube-download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
    });

    const blob = await response.blob();
    const downloadUrl = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = downloadUrl;
    a.download = 'video.mp4';
    document.body.appendChild(a);
    a.click();
    a.remove();
});

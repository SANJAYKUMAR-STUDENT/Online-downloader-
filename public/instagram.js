document.getElementById('downloadBtn').addEventListener('click', () => {
    const url = document.getElementById('urlInput').value;
    document.getElementById('result').innerText = `Initiating download for: ${url}`;
    // TODO: Implement the actual Instagram download logic
});

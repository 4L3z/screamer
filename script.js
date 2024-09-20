document.getElementById('sorpresaButton').addEventListener('click', function() {
    const screamerDiv = document.getElementById('screamer');
    const screamerVideo = document.getElementById('screamerVideo');
    
    screamerDiv.classList.remove('hidden');
    screamerVideo.play();
    
    screamerVideo.addEventListener('ended', function() {
        screamerDiv.classList.add('hidden');
    });
});

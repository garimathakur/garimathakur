// script.js
const video = document.getElementById('myVideo');
video.addEventListener('click', () => {
    if (video.muted) {
        video.muted = false;
    } else {
        video.muted = true;
    }
});


<video class="video" controls muted id="myVideo">
    <source src="your-video.mp4" type="video/mp4">
    <source src="your-video.webm" type="video/webm">
    Your browser does not support the video tag.
</video>

<script>
    const video = document.getElementById('myVideo');
    video.addEventListener('click', () => {
        if (video.muted) {
            video.muted = false;
        } else {
            video.muted = true;
        }
    });
</script>
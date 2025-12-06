onload = () => {
    // Keep animations paused initially
};

document.getElementById('revealBtn').addEventListener('click', function() {
    this.style.display = 'none';
    // Start flower animation immediately
    document.body.classList.remove("container");
});

document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress-bar");

    progressBars.forEach(bar => {
        const percentage = bar.getAttribute("data-percentage");
        const progress = bar.querySelector(".progress");
        progress.style.width = percentage + "%";
    });
});

function downloadResume() {
    window.location.href = 'resume.pdf';
}

console.log("Portfolio");

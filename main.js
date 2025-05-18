// const moreButtons = document.querySelectorAll(".info-container button");
//     moreButtons.forEach(button => {
//         button.addEventListener("click", function () {
//             alert("More information about this service coming soon!");
//         });
//     });

    // document.querySelectorAll('.scroll-link').forEach(link => {
    //     link.addEventListener('click', function(event) {
    //         event.preventDefault();
    //         const targetId = this.getAttribute('data-target');
    //         const targetSection = document.getElementById(targetId);
    //         if (targetSection) {
    //             targetSection.scrollIntoView({ behavior: 'smooth' });
    //         }
    //     });
    // });

   
document.querySelectorAll(".info-container button").forEach(button => {
    button.addEventListener("click", function () {
        alert("More information about this service coming soon!");
    });
});


document.querySelectorAll(".scroll-link").forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const targetId = this.getAttribute("data-target");
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            console.log(`Scrolling to section: #${targetId}`);
            targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
            console.error(`Section not found: #${targetId}`);
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript is loaded and running.");
});


document.addEventListener("DOMContentLoaded", function () {
    const banner = document.querySelector(".banner");
    let position = 0;
    let direction = 1; 
    const speed = 0.5; 
  
    function moveBanner() {
      position += direction * speed;
      banner.style.transform = `translateX(${position}px)`;
  
      
      if (position >= 50 || position <= 0) {
        direction *= -1;
      }
  
      requestAnimationFrame(moveBanner);
    }
  
    moveBanner();
  });

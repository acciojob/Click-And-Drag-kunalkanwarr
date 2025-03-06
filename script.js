// const container = document.getElementById('cube-container');
// let isDragging = false;
// let startX = 0;
// let scrollLeft = 0;

// // Function to handle the start of dragging
// container.addEventListener('mousedown', (e) => {
//     isDragging = true;
//     startX = e.pageX - container.offsetLeft;
//     scrollLeft = container.scrollLeft;
//     container.style.cursor = 'grabbing'; // Change cursor when dragging starts
// });

// // Function to handle dragging movement
// container.addEventListener('mousemove', (e) => {
//     if (!isDragging) return; // Do nothing if not dragging
//     const x = e.pageX - container.offsetLeft;
//     const walk = (x - startX) * 1; // Movement distance
//     container.scrollLeft = scrollLeft - walk; // Scroll the container
// });

// // Function to handle the end of dragging
// container.addEventListener('mouseup', () => {
//     isDragging = false;
//     container.style.cursor = 'grab'; // Change cursor back to grab
// });

// // To prevent text selection during dragging
// container.addEventListener('mouseleave', () => {
//     isDragging = false;
//     container.style.cursor = 'grab';
// });

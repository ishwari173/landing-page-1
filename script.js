document.addEventListener('DOMContentLoaded', function () {
    const timeline = gsap.timeline({ repeat: -1, yoyo: true, defaults: { duration: 1.5, ease: 'power2.inOut' } });
    timeline.fromTo(
        '#part2',
        { opacity: 0, x: -30, scale: 0.5 }, // Start state (smaller size)
        { opacity: 1, x: 0, scale: 1, stagger: 0.1, duration: 1 } // End state (move right and scale up)
    );
    timeline.fromTo(
        '#part4',
        { opacity: 0, x: 30 }, // Start state
        { opacity: 1, x: 0, duration: 1 }, // End state
        "+=0.5" // Delay before starting #part4 animation (e.g., 0.5 seconds after #part2 completes)
    );
    timeline.fromTo(
        '#smallimg-div',
        { x: 0 }, // Start state
        { x: -30, duration: 1 }, // End state (slightly to the left)
        '-=1' // Overlap animation with text
    );
    // Animate text one by one towards the right continuously
    timeline.fromTo(
        '#text-div h1',
        { opacity: 0, x: -50 }, // Start state
        { opacity: 1, x: 0, stagger: 0.3, duration: 1 } // End state with stagger effect
    );


    // Continuously move the small image slightly to the left and back


    timeline.fromTo(
        '#vertical-text',
        { y: 0 }, // Start state
        { y: -30, duration: 1 }, // End state (slightly upwards)
        '-=1' // Overlap animation with text
    );


});

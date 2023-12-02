class ButtonAnimator {
    constructor(button) {
        this.button = button;
        this.button.addEventListener('mousedown', (e) => this.mouseDown(e));
    }
    onAnimationFinish(ripple) {
        this.button.removeChild(ripple);
    }
    mouseDown(e) {
        const buttonRect = this.button.getBoundingClientRect();
        const diameter = Math.max(this.button.clientWidth, this.button.clientHeight);
		const radius = diameter / 2;

        let ripple = document.createElement("span");
        ripple.classList.add("ripple");
        ripple.style.width = ripple.style.height = `${diameter}px`;
        ripple.style.left = `${e.clientX - (buttonRect.left + radius)}px`;
        ripple.style.top = `${e.clientY - (buttonRect.top + radius)}px`;

        ripple.animate(
            {
                transform: ["scale(0)", "scale(4)"],
                opacity: [1, 0]
            },
            {
            duration: 666,
            easing: "linear"
        }).onfinish = () => this.onAnimationFinish(ripple);
        
        this.button.appendChild(ripple);
    }
}
document.querySelectorAll('.button').forEach((button) => {
    new ButtonAnimator(button);
});
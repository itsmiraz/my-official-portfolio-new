const ovserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add('show');

        }
        else {
            entry.target.classList.remove('show');
        }
    })
})

const hideElements = document.querySelectorAll('.hiden');

hideElements.forEach((el) => ovserver.observe(el))

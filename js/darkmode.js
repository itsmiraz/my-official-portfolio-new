
document.getElementById('night-mode').addEventListener('click', function () {
    const light = document.getElementById('light-mode');
    light.style.display = 'block';

    const night = document.getElementById('night-mode');
    night.style.display = 'none';
    document.body.style.backgroundColor = "white";

    const elementcollections = document.getElementsByTagName('header');
    for (const element of elementcollections) {
        element.style.color = 'black';
    }
    const elementscollections = document.getElementsByTagName('section');
    for (const element of elementscollections) {
        element.style.color = 'black';
    }
    const elementdcollections = document.getElementsByTagName('p');
    for (const element of elementdcollections) {
        element.style.color = 'black';
    }


})
document.getElementById('light-mode').addEventListener('click', function () {
    const night = document.getElementById('night-mode');

    night.style.display = 'block';

    const light = document.getElementById('light-mode');
    light.style.display = 'none';

    // Apply white theme 

    document.body.style.backgroundColor = "#1f1f23";

    const elementcollections = document.getElementsByTagName('header');
    for (const element of elementcollections) {
        element.style.color = 'white';
    }
    const elementscollections = document.getElementsByTagName('section');
    for (const element of elementscollections) {
        element.style.color = 'white';
    }
    const elementdcollections = document.getElementsByTagName('p');
    for (const element of elementdcollections) {
        element.style.color = 'white';
    }






})




// Contact
let images = ['/static/assets/photo1.jpeg', '/static/assets/inne1.jpeg', '/static/assets/inne2.jpg'];
let current = 0;
let photoIndex = 0;
let czcionkaCounter = 0;
function getPhotos() { return ['/static/assets/photo1.jpeg', '/static/assets/inne1.jpeg', '/static/assets/inne2.jpg'];}
function zmienCzcionke() {
  const czcionki = [
    '"Georgia", serif',
    '"Segoe UI", sans-serif',
    '"Helvetica Neue", sans-serif',
    '"Arial", sans-serif',
    '"Verdana", sans-serif',
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
  ];

  document.body.style.fontFamily = czcionki[czcionkaCounter];
  czcionkaCounter++;
}
function sekcja(sekcjaId) { document.getElementById(sekcjaId).scrollIntoView({ behavior: "smooth" }); }
function selectPhoto(index) {
    try {
        let photo = getPhotos()[index];
        document.getElementById('panelZdjec').style.backgroundImage = `url('${photo}')`;
    } catch (error) { console.error(error); }
}
function previousPhoto() {
    if (photoIndex === 0) {
        photoIndex = getPhotos().length - 1;
    }
    else {
        photoIndex = photoIndex - 1;
    }
    document.getElementById('panelZdjec').style.backgroundImage = `url('${getPhotos()[photoIndex]}'`;
    clearPhotoPanelButtonsBackgrounds();
    document.getElementById('panelZdjec').querySelectorAll(`button[data-index="${photoIndex}"]`)[0].style.background = 'black';
}
function nextPhoto() {
    if (photoIndex === getPhotos().length - 1) {
        photoIndex = 0;
    }
    else {
        photoIndex = photoIndex + 1;
    }
    document.getElementById('panelZdjec').style.backgroundImage = `url('${getPhotos()[photoIndex]}'`;
    clearPhotoPanelButtonsBackgrounds();
    document.getElementById('panelZdjec').querySelectorAll(`button[data-index="${photoIndex}"]`)[0].style.background = 'black';
}
function getPhotoPanelButtons() { return document.getElementById('panelZdjec').querySelectorAll('.bPanel2'); }
function clearPhotoPanelButtonsBackgrounds() {
 getPhotoPanelButtons().forEach(e => {
            e.style.background = 'transparent';
        });
}
function addPhotoPanelButtons() {
    getPhotos().forEach((e, index) => {
       let button = document.createElement('button');
        if (index === 0)
            button.style.background = 'black';
        button.className = 'bPanel2';
        button.setAttribute('data-index', index);
        button.onclick = () => {
            clearPhotoPanelButtonsBackgrounds();
            button.style.background = 'black';
            selectPhoto(index);
            photoIndex = index;
        };

       document.getElementById('panelZdjecPrzyciski').appendChild(button);
    });

}
function showSlide(index) {
    slider.style.backgroundImage = `url('${images[index]}')`;
    slider2.style.backgroundImage = `url('${images[index]}')`;
    slider3.style.backgroundImage = `url('${images[index]}')`;
}

function nextSlide() {
  current = (current + 1) % images.length;
  showSlide(current);
}

function prevSlide() {
  current = (current - 1 + images.length) % images.length;
  showSlide(current);
}

window.onload = () => {
    document.getElementById('panelZdjec').style.backgroundImage = `url('${getPhotos()[0]}')`;
    addPhotoPanelButtons();

    const slider = document.getElementById('slider');
    const slider2 = document.getElementById('slider2');
    const slider3 = document.getElementById('slider3');

    // automatyczne przewijanie co 3 sekundy
    setInterval(nextSlide, 3000);

    // pierwszy obrazek
    showSlide(current);
}


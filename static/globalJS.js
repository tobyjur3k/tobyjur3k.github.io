function getS1PanelPhotos() {
    let p = ['Photo1.jpeg', 'inne2.jpg', 'aboutme2.jpeg', 'new4.jpeg', 'inne1.jpeg', ]; let result = [];
    p.forEach((e, index) => { result.push('/static/assets/' + p[index]); });
    return result;
}
function getScrollbarWidth() {
  const scrollDiv = document.createElement('div');
  scrollDiv.style.visibility = 'hidden';
  scrollDiv.style.overflow = 'scroll';
  scrollDiv.style.width = '100px';
  scrollDiv.style.height = '100px';
  document.body.appendChild(scrollDiv);

  const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
}
function createSection(sectionId) {
    const section = document.createElement('div'); section.id = sectionId;
    section.tabIndex = '-1';
    section.style.width = `calc(100vw - ${getScrollbarWidth()}px)`;
    section.style.height = returnClientView()[1] + 'px';
    return section;
}
function returnClientView() {
    const i = [window.innerWidth, window.innerHeight];
    return i;
}
function fillS2() {
    let s2 = document.getElementById('s2'); s2.innerHTML = `
        <div style="">
            <span style="font-size: 3rem; font-weight: bold; color: lightgrey;
            margin-left: 3rem;">FOOD TOURS</span>
        </div>`;
}
function fillS3() {
    let s3 = document.getElementById('s3'); s3.innerHTML = `
        <div style="">
            <span style="font-size: 3rem; font-weight: bold; color: lightgrey;
            margin-left: 3rem;">EVENTS & PRIVATE TOURS</span>
        </div>`;
}
function sectionMyReviews() {
    return `
        <div class="section-uni" style="flex-direction: column; background: lightgrey;">
            <span class="section-title" style="color: black;">MY REVIEWS</span>
            <div style="width: 100%; border: 1px solid black;">

            </div>
        </div>
    `;
}
function sectionAboutMe() {
    let spanTxt = `Born in the countryside and raised on the flavors of tradition, I’ve spent years in the hospitality industry
    sharing what I love most - good food and great stories. I graduated from the Agricultural University with a degree in Food
    Quality Assessment, and yes - I’ve even been a farmer and folk dancer along the way!

All of these experiences have shaped who I am and brought me here - ready to share the heart of Polish culture with you. As a
passionate guide, food lover, and home chef, I can’t wait to show you the flavors, history, and stories that make Poland so
special. I’m waiting for you – Just BeMyGuest!`
    return `
        <div class="section-uni">
            <div style="flex: 1; height: 100%; display: flex; flex-direction: column;">
                <span class="section-title">ABOUT ME</span>
                <span style="padding: 4rem; font-size: 3rem;">
                    ${spanTxt}
                </span>
            </div>
            <img src="/static/assets/photo2.jpeg" style="height: 100%;"></img>
        </div>`;
}
function sectionFooter() {
    return `
        <div id="footer" style="text-align: center; ">
        <div style="display: flex; justify-content: center;">
          <img src="/static/assets/logo_napis_bez_tla.png" style="width: 650px; height: 650px;">
        </div>
        <div style="display: flex; flex-direction: column;">
            <span>
              Corporate Events & Private Food Tours <br>
              Want to turn your business trip or group travel into something truly unforgettable? Just contact me – I’ll take care of everything to make your group’s experience truly special!
            </span>
            <a href="book@bmgpoland.com">book</a>
            <span>
              Be My Guest Adrian Cwiklinski | Tax number: 6821749133 | Polish Business Registry <br>
              Number: 540103360 | Registered in Poland
            </span>
            <span style="margin-top: 20px;">FIND ME</span>
        </div>
        <div class="socials">
          <a href="https://facebook.com" target="_blank"><i class="fab fa-facebook"></i></a>
          <a href="https://instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
          <a href="https://youtube.com" target="_blank"><i class="fab fa-youtube"></i></a>
        </div>
        <span>Privacy policy</span>
        <p>&copy; 2025 Adrian Ćwikliński. Wszelkie prawa zastrzeżone.</p>
        <a href="">Dlaczego to może się udać? (STĄD OTWORZY SIĘ PDF)</a>
      </div>
    `;
}
// PHOTO PANEL
const p1Photos = getS1PanelPhotos();
let p1Index = 0;

const opinionPhotos1 = [];
function createPhotoPanel(photoPanelId, photos) {
    const photoPanel = document.createElement('div');
    photoPanel.id = photoPanelId;
    photoPanel.style.width = '100%';
    photoPanel.style.height = '100%';
    photoPanel.style.backgroundImage = `url('${photos[0]}')`;
    photoPanel.setAttribute('data-current', photos[0]);
    photoPanel.style.backgroundSize = 'cover';
    photoPanel.style.backgroundPosition = 'center';
    photoPanel.style.backgroundRepeat = 'no-repeat';
    photoPanel.style.transition = 'background-image 1s ease';
    const photoInsidePanel = document.createElement('div');
    photoInsidePanel.id = photoPanelId + 'InsidePanel';
    photoInsidePanel.className = 'panel-zdjec';
    let photoButtonsPanelId = photoPanelId + 'buttonsPanel';
    photoPanel.setAttribute('data-photoButtonsPanelId', photoButtonsPanelId);
    let photoButtonsHTML = ``;
    photos.forEach((e, index) => {
        let ikona = 'far fa-circle';
        if (index === 0)
            ikona = 'fas fa-circle';
        photoButtonsHTML += `\n
        <button class="b2" data-img="${photos[index]}" onclick="setPanelPhoto('${photoPanelId}', ${index}); colorPanelPhotoButton('${photoButtonsPanelId}', '${index}');">
            <i class="${ikona}"></i>
        </button>`;
    })
    photoInsidePanel.innerHTML = `
        <button class="b1" onclick="changePanelPhoto('${photoPanelId}', 'previous');"><span style="font-size: 3rem;"><</span></button>
            <div style="display: flex; align-items: end; align-conent: end;">
                <div id="${photoButtonsPanelId}" class="pzpp1">${photoButtonsHTML}</div>
            </div>
        <button class="b1" onclick="changePanelPhoto('${photoPanelId}', 'next');"><span style="font-size: 3rem;">></span></button>
    `;
    photoPanel.appendChild(photoInsidePanel);

    return photoPanel
}
function colorPanelPhotoButton(photoButtonsPanelId, iconIndex) {
    document.getElementById(photoButtonsPanelId).querySelectorAll('i').forEach((e, index) => {
        if (index == iconIndex) e.className = 'fas fa-circle'; else e.className = 'far fa-circle'; })
}
function changePanelPhoto(photoPanelId, way) {
    if (way === 'previous') {
        if (p1Index === 0) { p1Index = p1Photos.length - 1; } else { p1Index--; }
    }
    else if (way === 'next') {
        if (p1Index === p1Photos.length - 1) { p1Index = 0; } else { p1Index++; }
    }
    setPanelPhoto(photoPanelId, p1Index);
}
function setPanelPhoto(photoPanelId, index) {
    p1Index = index;
    document.getElementById(photoPanelId).setAttribute('data-current', p1Photos[p1Index]);
    document.getElementById(photoPanelId).style.backgroundImage = `url('${p1Photos[p1Index]}')`;
    colorPanelPhotoButton(document.getElementById(photoPanelId).getAttribute('data-photoButtonsPanelId'), index);
}
// PHOTO PANEL
// NAVBAR
function sekcja(sekcjaId) { document.getElementById(sekcjaId).focus(); document.getElementById('navbar').style.top = '-30%'; }
function createNavbar() {
    const navbar = document.createElement('div');
    navbar.className = 'navbar';
    navbar.id = 'navbar';
    navbar.style.width = `calc(100vw - ${getScrollbarWidth()}px)`;
    navbar.innerHTML = `
        <div style="display: flex; width: 100%; height: 100%;">
            <div style="height: 100%; width: 15%;">
            <img src="/static/assets/logo_napis_bez_tla.png"
             style="height: 100%; width: 100%;"
            onclick="sekcja('s1');"></div>
            <div style="width: 100%; display: flex; flex-direction: column;">
                <div style="display: flex; justify-content: center; flex: 1;
                text-align: center; align-items: center;">
                    <span style="font-size: 3rem; ">Be My Guest by Adrian</span>
                </div>
                <div style="display: flex; justify-content: space-between; flex: 2;
                margin: 0 5rem 0 5rem;">
                    <button class="navbar-button" onclick="sekcja('s2');">FOOD TOURS</button>
                    <button class="navbar-button" onclick="sekcja('s3');">EVENTS & PRIVATE <br> TOURS </button>
                    <button class="navbar-button" onclick="sekcja('s4');">ABOUT ME</button>
                    <button class="navbar-button" onclick="sekcja('sMyReviews');">MY REVIEWS</button>
                </div>
            </div>
        </div>
    `;

    return navbar;
}
// NAVBAR
window.onload = () => {
    const body2 = document.getElementById('body2');
    body2.appendChild(createNavbar());
    body2.appendChild(createSection('s1'));
    document.getElementById('s1').appendChild(createPhotoPanel('pp1', p1Photos));
    setInterval(() => { changePanelPhoto('pp1', 'next'); }, 2000);

    let s2 = createSection('s2'); let s3 = createSection('s3'); let s4 = createSection('s4');
    let sMyReviews = createSection('sMyReviews'); let sFooter = createSection('sFooter');
    s4.innerHTML = sectionAboutMe(); sMyReviews.innerHTML = sectionMyReviews(); sFooter.innerHTML = sectionFooter();
    s2.style.borderBottom = '1px solid lightgrey'; s3.style.borderBottom = '1px solid lightgrey';
    s4.style.borderBottom = '1px solid lightgrey'; sMyReviews.style.borderBottom = '1px solid lightgrey';
    body2.appendChild(s2); body2.appendChild(s3); body2.appendChild(s4); body2.appendChild(sMyReviews);
    body2.appendChild(sFooter);
    fillS2(); fillS3();
    document.getElementById('footer').style.width = `calc(100vw - ${getScrollbarWidth()}px)`;
    document.getElementById('footer').style.height = returnClientView()[1] + 'px';
}
document.addEventListener('mousemove', function(event) {
    const navbar = document.getElementById('navbar');
    const navbarHeight = navbar.offsetHeight;
    if (event.clientY < navbarHeight - 40) { // 10px zapasu
        navbar.style.top = '0';
      } else {
        navbar.style.top = `-${navbarHeight}px`;
      }

    // Zapobiegamy znikaniu na najniższej części navbara
    navbar.addEventListener('mouseenter', () => {
      navbar.style.top = '0'; // Gdy mysz na navbarze, nie chowaj
    });

    navbar.addEventListener('mouseleave', () => {
      navbar.style.top = `-${navbarHeight}px`; // Znikaj, kiedy myszka opuści navbar
    });
});

import projectData from './projectData.js';

document.querySelector('.speaker-grid').innerHTML = projectData
  .map(
    (data) => `
<div class="speaker-description">
<div class="speaker-images">
  <div class="speaker-bg"></div>
  <div class="speaker-img">
    <img src=${data.snapshot} alt="speaker1" />
  </div>
</div>
<div class="speaker-info">
  <h3>${data.speakerName}</h3>
  <span
    ><em>${data.speakerTitle}</em></span
  >
  <p>${data.description}</p>
</div>
</div>
    `,
  )
  .join('');

function toggleAddMoreButton() {
  const size = window.matchMedia('(max-width: 768px)');
  if (size.matches) {
    Array.from(document.querySelectorAll('.speaker-description')).forEach((card, index) => {
      if (index >= 2) {
        card.classList.toggle('hide');
      }
    });
  }
}
toggleAddMoreButton();

function toggleShowSpeakers() {
  const buMore = document.querySelector('.bu-more');
  buMore.addEventListener('click', (e) => {
    toggleAddMoreButton();
    const arrow = e.target.querySelector('i');
    if (arrow.classList.contains('down')) {
      arrow.classList.remove('down');
      arrow.classList.add('up');
      buMore.childNodes[0].textContent = 'LESS ';
    } else {
      arrow.classList.remove('up');
      arrow.classList.add('down');
      buMore.childNodes[0].textContent = 'MORE ';
    }
  });
}
toggleShowSpeakers();
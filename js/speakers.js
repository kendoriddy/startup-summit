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

const main = document.querySelector('.projects-sec main');

fetch('projects.json')
    .then(data => data.json())
    .then(data => {
        data.forEach(data => {
            const text = document.createElement('div');
            text.classList.add('project')
            text.innerHTML = `
            <a href="${data.img}">
            <div class="img ${data.class}"></div>
            <div class="p-div-text">
              <h3>${data.name}</h3>
              <p>
                <span class="cat">HTML</span>
                <span class="cat">CSS</span>
                <span class="cat">JS</span>
              </p>
            </div>
          </a> 
            `
            main.appendChild(text)
        });
       
    })
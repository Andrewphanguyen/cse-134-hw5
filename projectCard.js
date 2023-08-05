class projectCard extends HTMLElement {
    constructor() {
      super()
    }
  }
  
  customElements.define("project-card", projectCard)

const form = document.getElementById("loadRemote");
const form2 = document.getElementById("loadLocal");





const local = [
    {
      "h2": "Andrews Project",
      "image": "beemovie.jpg",
      "alt": "Project Image",
      "p": "This is my project of data",
      "url": "https://mellow-boba-8183ed.netlify.app/homepage.html?"
    }
  ];

  const jsonString = JSON.stringify(local);

  localStorage.setItem('local', jsonString);

  const storedJSONstring = localStorage.getItem('local');

  const stored = JSON.parse(storedJSONstring);

  form2.addEventListener("click", event => {
    



    

      
        let placeHolder = document.querySelector("#data-output");
        let output = "";
        for(let datas of stored) {
            output += ` 
            
            <h2>${datas.h2}</h2>

          <img src='${datas.image}' alt='${datas.alt}'>
         <p>${datas.p}</p>

         <a href='${datas.url}'>Read More</a>
            
            
            
            `;  
            
            
        }
        placeHolder.innerHTML = output;

     






    

  })





form.addEventListener("click", event => {
    event.preventDefault();

   


    fetch("https://my-json-server.typicode.com/andrewphanguyen/demo/project")
    
    .then(function(response) {
        return response.json();
      })

      .then(function(data) {
        let placeHolder = document.querySelector("#data-output");
        let output = "";
        for(let datas of data) {
            output += ` 
            
            <h2>${datas.h2}</h2>

          <img src='${datas.image}' alt='${datas.alt}'>
         <p>${datas.p}</p>

         <a href='${datas.url}'>Read More</a>
            
            
            
            `;  
            
            
        }
        placeHolder.innerHTML = output;

      })

})

 
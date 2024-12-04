function getData() {
    fetch('https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/chocolatier.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('La réponse du réseau n\'était pas correcte');
        }
        return response.json();
      })
      .then((data) => {
        tout(data.nomEntreprise, data.slogan, data.bouton);
        produits(data["produits"]);
        
      })
      .catch((error) => console.error('Erreur lors de la lecture des données :', error));
  }

function tout(nom, slogan, bouton) {
    console.log("error");
    
}

function produits(produits) {    
    let Lproduits=document.getElementById("produits");
    produits.forEach(element => {
        Lproduits.innerHTML+=`
        <div class="produit">
            <img src="${element["image-url"]}">
            <div>
                <h3>${element["titre"]}</h3>
                <p>${element["presentation"]}</p>
            </div>
        </div>
        `;
    console.log(Lproduits);
    });
}

getData()
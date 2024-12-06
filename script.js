function getData() {
    fetch('https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/chocolatier.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('La réponse du réseau n\'était pas correcte');
        }
        return response.json();
      })
      .then((data) => {
        start(data["nomEntreprise"], data["slogan"], data["bouton"]);
        produits(data["produits"]);
        avantages(data["listeBeneficesClients"]);
        avis(data["clients"]);
      })
      .catch((error) => console.error('Erreur lors de la lecture des données :', error));
  }

function start(nom, slogan, bouton) {
    let Lstart=document.getElementById("start");
    Lstart.innerHTML+=`
        <div>
            <h1>${nom}</h1>
            <p>${slogan}</p>
        </div>
        <a href=index.html>${bouton}</a>
        `;
}

function avantages(truc) {
    let Lavantages=document.getElementById("avantages");
    let ul=document.createElement("ul");
    ul.id="Lavantage"
    Lavantages.appendChild(ul);
    truc.forEach(element => {
        ul.innerHTML+=`
        <li>
            <p>${element}</p>
        </li>
        `;
    });
}

function produits(produits) {    
    let Lproduits=document.getElementById("produits");
    produits.forEach(element => {
        Lproduits.innerHTML+=`
        <div class="produit">
            <img class="Pimg" src="${element["image-url"]}">
            <div>
                <h3>${element["titre"]}</h3>
                <p>${element["presentation"]}</p>
            </div>
        </div>
        `;
    });
}

function avis(avis) {
    let Lavis=document.getElementById("clients");
    avis.forEach(element => {
        Lavis.innerHTML+=`
        <div class="client">
            <div>
                <p class="titre">${element["typePrestation"]}</p>
                <p>"${element["commentaire"]}"</p>
                <p>${element["note"]}/5</p>
            </div>
            <p class="nom">${element["nom"]}</p>
        </div>
        `;
    });
}

getData()
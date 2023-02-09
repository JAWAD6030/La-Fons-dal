let input_total = document.getElementById("prix_tot");
input_total.value = 0;

function ajouterAupanier(P_id){
    let article= document.getElementById(P_id);
    let nom= article.firstElementChild.innerHTML;
    let prix = article.children[1].innerHTML;

    let tpanier = document.getElementById("mon_panier").children;
    let trouve = false;
    for (let i=0; i < tpanier.length && !trouve;i++)
    {
        let nomProd = tpanier[i].firstElementChild.innerHTML;

            if (nom == nomProd){
                    trouve = true;
                    tpanier[i].lastElementChild.innerHTML = parseInt(tpanier[i].lastElementChild.innerHTML) + 1;
                }

    }
    if (!trouve) {
        let panier = document.getElementById("mon_panier");
        let new_tr = document.createElement("tr");
        let td_nom = document.createElement("td");
        let td_prix = document.createElement("td");
        let td_qte = document.createElement("td");

        td_nom.innerHTML = nom;
        td_prix.innerHTML = (prix);
        td_qte.innerHTML = 1;

        new_tr.appendChild(td_nom);
        new_tr.appendChild(td_prix);
        new_tr.appendChild(td_qte);
        panier.appendChild(new_tr);

    }
    input_total.value = parseFloat(input_total.value) + parseFloat(prix);
}

function retirerDuPanier(P_id) {
    let article = document.getElementById(P_id);
    let nom = article.firstElementChild.innerHTML;
    let prix = article.children[1].innerHTML;

    let panier = document.getElementById("mon_panier");
    let trouve = false;

    for (let i = 0; i < panier.children.length && !trouve; i++) {
        let nomProdPan = panier.children[i].firstElementChild.innerHTML;
        let qteProdPan = parseInt(panier.children[i].lastElementChild.innerHTML);

        if (nom == nomProdPan) {
            trouve = true;
            if (qteProdPan > 0) {
                panier.children[i].lastElementChild.innerHTML = qteProdPan - 1;
                input_total.value = parseFloat(input_total.value) - parseFloat(prix);
            }
            if (parseInt(panier.children[i].lastElementChild.innerHTML) == 0) {
                panier.removeChild(panier.children[i])
            }
        }
    }
}
var div = document.getElementById('affichage');
var bout = document.getElementById('bouton');
var multi = document.getElementById('multiplicateur');
var compteur = 1;
var score = 0;
bout.addEventListener('click', function () {
    div.innerHTML = (score += compteur);
}, false);


//affichage incrementer dans le bouton
var malus = 50;

function incrementer() {
    var first = multi.firstChild;
    first.textContent = "Multiplicateur x " + (compteur + 1) + " cout prochain achat : " + malus;

    if (div.innerHTML >= 0) {
        div.innerHTML = (score - malus);
        score = score - 50;
        if (div.innerHTML < 0) {
            score = 0;
            div.innerHTML = (score);
        }

    }
    malus *= 2;
    compteur++;
    return compteur;
};
multi.addEventListener('click', incrementer, false);
window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");
    visProdukt();
}


function visProdukt() {
    //klon produkt_template
    var klon = document.querySelector("#produkt_template").contentEditable.cloneNode(true);

    //indsæt data i klonen

    //append klon til .produkt_liste
    document.querySelector(".produktliste").appendChild(klon);

}

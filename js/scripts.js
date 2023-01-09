// Consegna:
// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano)
// gli elementi della lista individualmente con un ciclo while.
// Consigli:
// - Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
// - Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita,
//  all'interno ciclo while

const listaSpesa = ['Latte','Uova','Zucchero','Pane','Formaggio','Burro','Limoni','Petto di pollo'];

let i = 0;

while (i < listaSpesa.length) {

    document.write(listaSpesa[i] + '<br>' );

    console.log(listaSpesa[i]);

    i++; 

}
function ajouterTransaction(montant, raison) {
    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    const nouvelleTransaction = {
        montant: montant,
        raison: raison,
        date: new Date().toISOString()
    };
    transactions.push(nouvelleTransaction);
    localStorage.setItem('transactions', JSON.stringify(transactions));
    afficherTransactions();
}

function retirerTransaction(montant, raison) {
    ajouterTransaction(-montant, raison);
}

function afficherTransactions() {
    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    const listeTransactions = document.getElementById('liste-transactions');
    listeTransactions.innerHTML = '';

    transactions.forEach(transaction => {
        const li = document.createElement('li');
        li.textContent = `${transaction.date}: ${transaction.montant}€ - ${transaction.raison}`;
        listeTransactions.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    afficherTransactions();

    const formulaire = document.getElementById('formulaire-transaction');
    formulaire.addEventListener('submit', (e) => {
        e.preventDefault();
        const montant = parseFloat(document.getElementById('montant').value);
        const raison = document.getElementById('raison').value;

        if (!isNaN(montant) && raison) {
            ajouterTransaction(montant, raison);
            formulaire.reset();
        }
    });
});
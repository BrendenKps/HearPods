document.getElementById('view-products').addEventListener('click', function() {
    let choice = prompt("Wat wil je kopen? Typ 'AirPods', 'smartphone' of 'watch'.");
    switch (choice.toLowerCase()) {
        case 'airpods':
            window.location.href = 'airpods.html';
            break;
        case 'smartphone':
            window.location.href = 'smartphone.html';
            break;
        case 'watch':
            window.location.href = 'watch.html';
            break;
        default:
            alert("Voer een geldige keuze in.");
            break;
    }
});

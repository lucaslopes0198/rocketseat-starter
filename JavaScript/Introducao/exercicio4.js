function experiencia(anos) {
    switch (true) {
        case (anos <= 1):
            return "Iniciante"
            break;
        case (anos <= 3):
            return "Intermediário"
            break;
        case (anos <= 6):
            return "Avançado"
            break;
        case (anos >= 7):
            return "Jedi Master"
            break;
        default:
            break;
    }
}

var anosEstudo = 1;
console.log(experiencia(anosEstudo));
// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master
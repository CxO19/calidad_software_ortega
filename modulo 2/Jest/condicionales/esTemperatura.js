function esTemperatura(temperatura) {
    if (temperatura > 30) {
        return 'Calor';
    } else if (temperatura >= 15) {
        return 'Templado';
    } else {
        return 'Frio';
    }
}
// Gibt das aktuelle tagesdatum Datum im Format z.B. "Dienstag, 3. August 2022" aus.

(function() {
    function berechne (){
        var jetzt = new Date(),
            tag = jetzt.getDate(),
            tagZahl = jetzt.getDay(),
            wochentag = ['Sonntag',
                         'Montag',
                         'Dienstag',
                         'Mittwoch',
                         'Donnerstag',
                         'Freitag',
                         'Samstag'],
            monatZahl = jetzt.getMonth(),
            monat = ['Januar',
                     'Februar',
                     'März',
                     'April',
                     'Mai',
                     'Juni',
                     'Juli',
                     'August',
                     'September',
                     'Oktober',
                     'November',
                     'Dezember'],
            jahr = jetzt.getFullYear(),
            text;
            text = wochentag[tagZahl];
            document.getElementById('tagausgabe').innerHTML = text;
    }
    document.addEventListener("DOMContentLoaded", function() {
        berechne();
    });
}());

(function() {
    function berechne (){
        var jetzt = new Date(),
            tag = jetzt.getDate(),
            tagZahl = jetzt.getDay(),
            wochentag = ['Sonntag',
                         'Montag',
                         'Dienstag',
                         'Mittwoch',
                         'Donnerstag',
                         'Freitag',
                         'Samstag'],
            monatZahl = jetzt.getMonth(),
            monat = ['Januar',
                     'Februar',
                     'März',
                     'April',
                     'Mai',
                     'Juni',
                     'Juli',
                     'August',
                     'September',
                     'Oktober',
                     'November',
                     'Dezember'],
            jahr = jetzt.getFullYear(),
            text;
            text = ', ' + tag + '. ' + monat[monatZahl] + '' + jahr;
            document.getElementById('datumsausgabe').innerHTML = text;
    }
    document.addEventListener("DOMContentLoaded", function() {
        berechne();
    }); 
}());
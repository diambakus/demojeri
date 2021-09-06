import { Item } from '../../../types/PCF'

export let operations: Item[] = [{
    id: 1,
    label: 'Trennen / Abschnittherstellung',
    refId: null,
    children: [{
        id: 1,
        label: 'Sägen',
        refId: null,
        children: [{
            id: 1,
            label: 'Individueller Sägeprozess',
            refId: 'Trennen / Abschnittherstellung, Sägen, Individueller Sägeprozess',
            children: []
        }, {
            id: 2,
            label: 'Kreissäge (Firma 1)',
            refId: 'Trennen / Abschnittherstellung, Sägen, Kreissäge (Firma 1)',
            children: []
        }, {
            id: 3,
            label: 'Kreissäge (Firma 2)',
            refId: 'Trennen / Abschnittherstellung, Sägen, Kreissäge (Firma 2)',
            children: []
        }, {
            id: 4,
            label: 'Kreissäge Branchenmittelwert',
            refId: 'Trennen / Abschnittherstellung, Sägen, Kreissäge Branchenmittelwert',
            children: []
        }, {
            id: 5,
            label: 'Kreissäge dickes Material (Eisele)',
            refId: 'Trennen / Abschnittherstellung, Sägen, Kreissäge dickes Material (Eisele)',
            children: []
        }, {
            id: 6,
            label: 'Kreissäge dünnes Material (Eisele)',
            refId: 'Trennen / Abschnittherstellung, Sägen, Kreissäge dünnes Material (Eisele)',
            children: []
        }]
    }, {
        id: 2,
        label: 'Scheren',
        refId: null,
        children: [{
            id: 1,
            label: 'Individueller Scherprozess',
            refId: 'Trennen / Abschnittherstellung, Scheren, Individueller Scherprozess',
            children: []
        }, {
            id: 2,
            label: 'kalt (Firma 1)',
            refId: 'Trennen / Abschnittherstellung, Scheren, kalt (Firma 1)',
            children: []
        }, {
            id: 3,
            label: 'kalt (Firma 2)',
            refId: 'Trennen / Abschnittherstellung, Scheren, kalt (Firma 2)',
            children: []
        }, {
            id: 4,
            label: 'kalt (Firma 3)',
            refId: 'Trennen / Abschnittherstellung, Scheren, kalt (Firma 3)',
            children: []
        }, {
            id: 5,
            label: 'kalt Mittelwert',
            refId: 'Trennen / Abschnittherstellung, Scheren, kalt Mittelwert',
            children: []
        }, {
            id: 6,
            label: 'mit Stangenvorwärmung 60°C (Firma 1)',
            refId: 'Trennen / Abschnittherstellung, Scheren, mit Stangenvorwärmung 60°C (Firma 1)',
            children: []
        }]
    }]
}, {
    id: 2,
    label: 'Erwärmung',
    refId: null,
    children: [{
        id: 1,
        label: 'Gasofen',
        refId: null,
        children: [{
            id: 1,
            label: 'Individueller Gasofen',
            refId: 'Erwärmung, Gasofen, Individueller Gasofen',
            children: []
        }, {
            id: 2,
            label: 'Stahl - 1250°C Firma 1',
            refId: 'Erwärmung, Gasofen, Stahl - 1250°C Firma 1',
            children: []
        }, {
            id: 3,
            label: 'Stahl - 1250°C Stahl Mittelwert',
            refId: 'Erwärmung, Gasofen, Stahl - 1250°C Stahl Mittelwert',
            children: []
        }, {
            id: 4,
            label: 'Aluminium - Schmiedetemperatur (Firma 1, 1. Angabe)',
            refId: 'Erwärmung, Gasofen, Aluminium - Schmiedetemperatur (Firma 1, 1. Angabe)',
            children: []
        }, {
            id: 5,
            label: 'Aluminium - Schmiedetemperatur (Firma 1, 2. Angabe)',
            refId: 'Erwärmung, Gasofen, Aluminium - Schmiedetemperatur (Firma 1, 2. Angabe)',
            children: []
        }, {
            id: 6,
            label: 'Aluminium - Schmiedetemperatur (Firma 1, 3. Angabe)',
            refId: 'Erwärmung, Gasofen, Aluminium - Schmiedetemperatur (Firma 1, 3. Angabe)',
            children: []
        }, {
            id: 7,
            label: 'Aluminium - Schmiedetemperatur, Mittelwert',
            refId: 'Erwärmung, Gasofen, Aluminium - Schmiedetemperatur, Mittelwert',
            children: []
        }, {
            id: 8,
            label: 'Aluminium - Wiedererwärmung nach Vorformoperation, Mittelwert',
            refId: 'Erwärmung, Gasofen, Aluminium - Wiedererwärmung nach Vorformoperation, Mittelwert',
            children: []
        }]
    }, {
        id: 2,
        label: 'Induktion Stahl',
        refId: null,
        children: [{
            id: 1,
            label: 'Individuelle Induktionserwärmung',
            refId: 'Erwärmung, Induktion Stahl, Individuelle Induktionserwärmung',
            children: []
        }, {
            id: 2,
            label: ' 900 °C (Firma 1) (0,358 kWh/kg)',
            refId: 'Erwärmung, Induktion Stahl,  900 °C (Firma 1) (0,358 kWh/kg)',
            children: []
        }, {
            id: 3,
            label: '1130 °C (Firma 1) (0,828 kWh/kg)',
            refId: 'Erwärmung, Induktion Stahl, 1130 °C (Firma 1) (0,828 kWh/kg)',
            children: []
        }, {
            id: 4,
            label: '1230 °C (Firma 6) (0,653 kWh/kg)',
            refId: 'Erwärmung, Induktion Stahl, 1230 °C (Firma 6) (0,653 kWh/kg)',
            children: []
        }, {
            id: 5,
            label: '1250 °C Hohe Effizienz (0,38 kWh/kg)',
            refId: 'Erwärmung, Induktion Stahl, 1250 °C Hohe Effizienz (0,38 kWh/kg)',
            children: []
        }, {
            id: 6,
            label: '1250 °C (Firma 1) (0,38 kWh/kg))',
            refId: 'Erwärmung, Induktion Stahl, 1250 °C (Firma 1) (0,38 kWh/kg))',
            children: []
        }, {
            id: 7,
            label: '1250 °C (Firma 2) (0,55 kWh/kg)',
            refId: 'Erwärmung, Induktion Stahl, 1250 °C (Firma 2) (0,55 kWh/kg)',
            children: []
        }, {
            id: 8,
            label: '1250 °C (Firma 3) (0,426 kWh/kg)',
            refId: 'Erwärmung, Induktion Stahl, 1250 °C (Firma 3) (0,426 kWh/kg)',
            children: []
        }, {
            id: 9,
            label: '1250 °C (Firma 4) (0,43 kWh/kg)',
            refId: 'Erwärmung, Induktion Stahl, 1250 °C (Firma 4) (0,43 kWh/kg)',
            children: []
        }, {
            id: 10,
            label: '1250 °C Niedrige Effizienz (0,90 kWh/kg)',
            refId: 'Erwärmung, Induktion Stahl, 1250 °C Niedrige Effizienz (0,90 kWh/kg)',
            children: []
        }, {
            id: 11,
            label: '1250 °C Mittelwert Branche (0,66 kWh/kg)',
            refId: 'Erwärmung, Induktion Stahl, 1250 °C Mittelwert Branche (0,66 kWh/kg)',
            children: []
        }]
    }, {
        id: 3,
        label: 'Konduktion',
        refId: null,
        children: [{
            id: 1,
            label: 'Individuelle konduktive Erwärmung',
            refId: 'Erwärmung, Konduktion, Individuelle konduktive Erwärmung',
            children: []
        }, {
            id: 2,
            label: '1250°C (Firma 8)',
            refId: 'Erwärmung, Konduktion, 1250°C (Firma 8)',
            children: []
        }]
    }]
}, {
    id: 3,
    label: 'Umformung',
    refId: null,
    children: [{
        id: 1,
        label: 'Freiformschmieden',
        refId: null,
        children: [{
            id: 1,
            label: 'Individuelles Freiformschmieden',
            refId: 'Umformung, Freiformschmieden, Individuelles Freiformschmieden',
            children: []
        }, {
            id: 2,
            label: 'hydraulisch',
            refId: 'Umformung, Freiformschmieden, hydraulisch',
            children: []
        }]
    }, {
        id: 2,
        label: 'Hammer',
        refId: null,
        children: [{
            id: 1,
            label: 'Individueller Hammer',
            refId: 'Umformung, Hammer, Individueller Hammer',
            children: []
        }, {
            id: 2,
            label: 'Gegenschlaghammer',
            refId: 'Umformung, Hammer, Gegenschlaghammer',
            children: []
        }]
    }, {
        id: 3,
        label: 'Presse - Spindelpresse',
        refId: null,
        children: [{
            id: 1,
            label: 'Individuelle Spindelpresse',
            refId: 'Umformung, Presse - Spindelpresse, Individuelle Spindelpresse',
            children: []
        }, {
            id: 2,
            label: 'Friktionsspindelpresse (Firma 1, 1. Angabe)',
            refId: 'Umformung, Presse - Spindelpresse, Friktionsspindelpresse (Firma 1, 1. Angabe)',
            children: []
        }, {
            id: 3,
            label: 'Friktionsspindelpresse (Firma 1, 2. Angabe)',
            refId: 'Umformung, Presse - Spindelpresse, Friktionsspindelpresse (Firma 1, 2. Angabe)',
            children: []
        }, {
            id: 4,
            label: 'Friktionsspindelpresse (Firma 1, 3. Angabe)',
            refId: 'Umformung, Presse - Spindelpresse, Friktionsspindelpresse (Firma 1, 3. Angabe)',
            children: []
        }, {
            id: 5,
            label: 'Kupplungsspindelpresse',
            refId: 'Umformung, Presse - Spindelpresse, Kupplungsspindelpresse',
            children: []
        }, {
            id: 6,
            label: 'Spindelpresse mit elektrischem Direktantrieb (Firma 1, 1. Angabe)',
            refId: 'Umformung, Presse - Spindelpresse, Spindelpresse mit elektrischem Direktantrieb (Firma 1, 1. Angabe)',
            children: []
        }, {
            id: 7,
            label: 'Spindelpresse mit elektrischem Direktantrieb (Firma 1, 2. Angabe)',
            refId: 'Umformung, Presse - Spindelpresse, Spindelpresse mit elektrischem Direktantrieb (Firma 1, 2. Angabe)',
            children: []
        }]
    }, {
        id: 4,
        label: 'Presse - hydraulisch',
        refId: null,
        children: [{
            id: 1,
            label: 'Individuelle hydraulische Presse',
            refId: 'Umformung, Presse - hydraulisch, Individuelle hydraulische Presse',
            children: []
        }, {
            id: 2,
            label: 'Kaltkalibrieren Gamei hydraulisch stehend',
            refId: 'Umformung, Presse - hydraulisch, Kaltkalibrieren Gamei hydraulisch stehend',
            children: []
        }, {
            id: 3,
            label: '1000t Mittelwert (0,25 kWh/kg Strom, 0,34 kWh/kg Gas Werkzeugheizung)',
            refId: 'Umformung, Presse - hydraulisch, 1000t Mittelwert (0,25 kWh/kg Strom, 0,34 kWh/kg Gas Werkzeugheizung)',
            children: []
        }]
    }, {
        id: 5,
        label: 'Presse - liegend',
        refId: null,
        children: [{
            id: 1,
            label: 'Individuelle liegende Presse',
            refId: 'Umformung, Presse - liegend, Individuelle liegende Presse',
            children: []
        }, {
            id: 2,
            label: 'Exzenterpresse AMP20 ',
            refId: 'Umformung, Presse - liegend, Exzenterpresse AMP20 ',
            children: []
        }, {
            id: 3,
            label: 'Exzenterpresse AMP30',
            refId: 'Umformung, Presse - liegend, Exzenterpresse AMP30',
            children: []
        }, {
            id: 4,
            label: 'Exzenterpresse AMP30/HM35 (Firma 1, 1. Angabe)',
            refId: 'Umformung, Presse - liegend, Exzenterpresse AMP30/HM35 (Firma 1, 1. Angabe)',
            children: []
        }, {
            id: 5,
            label: 'Exzenterpresse AMP30/HM35 (Firma 1, 2. Angabe)',
            refId: 'Umformung, Presse - liegend, Exzenterpresse AMP30/HM35 (Firma 1, 2. Angabe)',
            children: []
        }, {
            id: 6,
            label: 'Exzenterpresse AMP30/HM35 (WinningBLW)',
            refId: 'Umformung, Presse - liegend, Exzenterpresse AMP30/HM35 (WinningBLW)',
            children: []
        }, {
            id: 7,
            label: 'Exzenterpresse AMP70 (Firma 1, 1. Angabe)',
            refId: 'Umformung, Presse - liegend, Exzenterpresse AMP70 (Firma 1, 1. Angabe)',
            children: []
        }, {
            id: 8,
            label: 'Exzenterpresse AMP70 (Firma 1, 2. Angabe)',
            refId: 'Umformung, Presse - liegend, Exzenterpresse AMP70 (Firma 1, 2. Angabe)',
            children: []
        }, {
            id: 9,
            label: 'Exzenterpresse AMP70L',
            refId: 'Umformung, Presse - liegend, Exzenterpresse AMP70L',
            children: []
        }, {
            id: 10,
            label: 'Kalt, mehrstufig vom Draht Mittelwert (0,19 kWh/kg)',
            refId: 'Umformung, Presse - liegend, Kalt, mehrstufig vom Draht Mittelwert (0,19 kWh/kg)',
            children: []
        }]
    }, {
        id: 6,
        label: 'Presse - Kurbelpresse',
        refId: null,
        children: [{
            id: 1,
            label: 'Individuelle Kurbelpresse',
            refId: 'Umformung, Presse - Kurbelpresse, Individuelle Kurbelpresse',
            children: []
        }, {
            id: 2,
            label: 'Eumuco 1600 t',
            refId: 'Umformung, Presse - Kurbelpresse, Eumuco 1600 t',
            children: []
        }, {
            id: 3,
            label: 'Kurbelpresse Gesenkschmieden mit Grat, Mittelwert',
            refId: 'Umformung, Presse - Kurbelpresse, Kurbelpresse Gesenkschmieden mit Grat, Mittelwert',
            children: []
        }, {
            id: 4,
            label: 'Mechanische stehende Halbwarmpresse Polymaster 1',
            refId: 'Umformung, Presse - Kurbelpresse, Mechanische stehende Halbwarmpresse Polymaster 1',
            children: []
        }, {
            id: 5,
            label: 'Stehende Kaltpresse P9',
            refId: 'Umformung, Presse - Kurbelpresse, Stehende Kaltpresse P9',
            children: []
        }, {
            id: 6,
            label: 'Stehende Kaltpresse P11',
            refId: 'Umformung, Presse - Kurbelpresse, Stehende Kaltpresse P11',
            children: []
        }]
    }, {
        id: 7,
        label: 'Walzen',
        refId: null,
        children: [{
            id: 1,
            label: 'Individuelles Walzen',
            refId: 'Umformung, Walzen, Individuelles Walzen',
            children: []
        }, {
            id: 2,
            label: 'Ringwalzen (stehend)',
            refId: 'Umformung, Walzen, Ringwalzen (stehend)',
            children: []
        }, {
            id: 3,
            label: 'Querkeilwalzen',
            refId: 'Umformung, Walzen, Querkeilwalzen',
            children: []
        }, {
            id: 4,
            label: 'Reckwalzen',
            refId: 'Umformung, Walzen, Reckwalzen',
            children: []
        }]
    }]
}, {
    id: 4,
    label: 'Warmbehandlung',
    refId: null,
    children: [{
        id: 1,
        label: 'Elektroofen',
        refId: null,
        children: [{
            id: 1,
            label: 'Individueller Ofen',
            refId: 'Warmbehandlung, Elektroofen, Individueller Ofen',
            children: []
        }, {
            id: 2,
            label: 'GKZ aus Schmiedehitze',
            refId: 'Warmbehandlung, Elektroofen, GKZ aus Schmiedehitze',
            children: []
        }, {
            id: 3,
            label: 'Nitrieren',
            refId: 'Warmbehandlung, Elektroofen, Nitrieren',
            children: []
        }]
    }, {
        id: 2,
        label: 'Gasofen - Aluminium',
        refId: null,
        children: [{
            id: 1,
            label: 'Individueller Ofen',
            refId: 'Warmbehandlung, Gasofen - Aluminium, Individueller Ofen',
            children: []
        }, {
            id: 2,
            label: 'Aluminium Lösungsglühen',
            refId: 'Warmbehandlung, Gasofen - Aluminium, Aluminium Lösungsglühen',
            children: []
        }, {
            id: 3,
            label: 'Aluminium Warmauslagern',
            refId: 'Warmbehandlung, Gasofen - Aluminium, Aluminium Warmauslagern',
            children: []
        }]
    }, {
        id: 3,
        label: 'Gasofen - Stahl',
        refId: null,
        children: [{
            id: 1,
            label: 'Individueller Ofen',
            refId: 'Warmbehandlung, Gasofen - Stahl, Individueller Ofen',
            children: []
        }, {
            id: 2,
            label: 'Normalisieren',
            refId: 'Warmbehandlung, Gasofen - Stahl, Normalisieren',
            children: []
        }, {
            id: 3,
            label: 'BG-Glühen',
            refId: 'Warmbehandlung, Gasofen - Stahl, BG-Glühen',
            children: []
        }, {
            id: 4,
            label: 'Einsatzhärten',
            refId: 'Warmbehandlung, Gasofen - Stahl, Einsatzhärten',
            children: []
        }, {
            id: 5,
            label: 'Isothermglühen',
            refId: 'Warmbehandlung, Gasofen - Stahl, Isothermglühen',
            children: []
        }, {
            id: 6,
            label: 'GKZ',
            refId: 'Warmbehandlung, Gasofen - Stahl, GKZ',
            children: []
        }, {
            id: 7,
            label: 'Vergüten (Härten + Anlassen)',
            refId: 'Warmbehandlung, Gasofen - Stahl, Vergüten (Härten + Anlassen)',
            children: []
        }, {
            id: 8,
            label: 'Rekristallisationsglühen',
            refId: 'Warmbehandlung, Gasofen - Stahl, Rekristallisationsglühen',
            children: []
        }]
    }, {
        id: 4,
        label: 'Abkühlband',
        refId: null,
        children: [{
            id: 1,
            label: 'Individuelles Abkühlband',
            refId: 'Warmbehandlung, Abkühlband, Individuelles Abkühlband',
            children: []
        }, {
            id: 2,
            label: 'nach Halbwarmmaschine',
            refId: 'Warmbehandlung, Abkühlband, nach Halbwarmmaschine',
            children: []
        }, {
            id: 3,
            label: 'nach Warmmaschine',
            refId: 'Warmbehandlung, Abkühlband, nach Warmmaschine',
            children: []
        }]
    }]
}, {
    id: 5,
    label: 'Veränderung Oberfläche',
    refId: null,
    children: [{
        id: 1,
        label: 'Vor der Umformung',
        refId: null,
        children: [{
            id: 1,
            label: 'Individueller Prozess',
            refId: 'Veränderung Oberfläche, Vor der Umformung, Individueller Prozess',
            children: []
        }, {
            id: 2,
            label: 'Druckwasserentzundern (Firma 1)',
            refId: 'Veränderung Oberfläche, Vor der Umformung, Druckwasserentzundern (Firma 1)',
            children: []
        }, {
            id: 3,
            label: 'Druckwasserentzundern Mittelwert',
            refId: 'Veränderung Oberfläche, Vor der Umformung, Druckwasserentzundern Mittelwert',
            children: []
        }, {
            id: 4,
            label: 'Reinigungsstrahlen Mittelwert',
            refId: 'Veränderung Oberfläche, Vor der Umformung, Reinigungsstrahlen Mittelwert',
            children: []
        }]
    }, {
        id: 2,
        label: 'Nach der Umformung',
        refId: null,
        children: [{
            id: 1,
            label: 'Individueller Prozess',
            refId: 'Veränderung Oberfläche, Nach der Umformung, Individueller Prozess',
            children: []
        }, {
            id: 2,
            label: 'Reinigungsstrahlen Mittelwert',
            refId: 'Veränderung Oberfläche, Nach der Umformung, Reinigungsstrahlen Mittelwert',
            children: []
        }, {
            id: 3,
            label: 'Waschen und Rostschutz',
            refId: 'Veränderung Oberfläche, Nach der Umformung, Waschen und Rostschutz',
            children: []
        }]
    }]
}, {
    id: 6,
    label: 'QS+Verpacken',
    refId: null,
    children: [{
        id: 1,
        label: 'Alle Vorgänge',
        refId: null,
        children: [{
            id: 1,
            label: 'Individueller Prozess',
            refId: 'QS+Verpacken, Alle Vorgänge, Individueller Prozess',
            children: []
        }, {
            id: 2,
            label: 'Mittelwert Branche',
            refId: 'QS+Verpacken, Alle Vorgänge, Mittelwert Branche',
            children: []
        }]
    }]
}, {
    id: 7,
    label: 'Transport',
    refId: null,
    children: [{
        id: 1,
        label: 'Extern (außerhalb des Werkes)',
        refId: null,
        children: [{
            id: 1,
            label: 'Transportmodi individuell kombinierbar',
            refId: 'Transport, Extern (außerhalb des Werkes), Transportmodi individuell kombinierbar',
            children: []
        }, {
            id: 2,
            label: 'Individueller Carbon Footprint',
            refId: 'Transport, Extern (außerhalb des Werkes), Individueller Carbon Footprint',
            children: []
        }]
    }, {
        id: 2,
        label: 'Intern',
        refId: null,
        children: [{
            id: 1,
            label: 'Individueller Prozess',
            refId: 'Transport, Intern, Individueller Prozess',
            children: []
        }, {
            id: 2,
            label: 'Dieselstapler Mittelwert',
            refId: 'Transport, Intern, Dieselstapler Mittelwert',
            children: []
        }, {
            id: 3,
            label: 'Gasstapler Mittelwert',
            refId: 'Transport, Intern, Gasstapler Mittelwert',
            children: []
        }, {
            id: 4,
            label: 'Aluminiumremelting und Strangpresserei',
            refId: 'Transport, Intern, Aluminiumremelting und Strangpresserei',
            children: []
        }, {
            id: 5,
            label: 'Leichtere Schmiedeteile bis 5kg',
            refId: 'Transport, Intern, Leichtere Schmiedeteile bis 5kg',
            children: []
        }]
    }]
}, {
    id: 8,
    label: 'Individueller Prozess',
    refId: 'Individueller Prozess',
    children: []
}]

export let material: Item[] = [{
    id: 1,
    label: 'Individuelles Halbzeug',
    refId: null,
    children: []
}, {
    id: 2,
    label: 'Stahl',
    refId: null,
    children: [{
        id: 1,
        label: 'Elektrostahl - 1.0xxx-1.1xxx',
        refId: null,
        children: [{
            id: 1,
            label: 'Unlegierter Edelbaustahl - Fertigprodukt auf Basis Grünstrom 0 g/kWh, Scope 1+2 (DEW) (275 g/kg)',
            refId: '9a44fa0d-1d13-4ac2-80f2-bcf0277a4fe1',
            children: []
        }, {
            id: 2,
            label: 'warmgewalzt (Stahlwerk 1) (345 g/kg)',
            refId: '880467f2-27ae-4c69-8d53-539c53490407',
            children: []
        }, {
            id: 3,
            label: 'warmgewalzt (Italienisches Stahlwerk via Firma 1) (400 g/kg)',
            refId: 'c2f78f59-de7c-40e2-907b-d3fc012343a1',
            children: []
        }, {
            id: 4,
            label: 'warmgewalzt - FP-geglüht (Stahlwerk 1) (413 g/kg)',
            refId: 'b9f0bd0d-a1c9-4571-8493-db7dc9c54280',
            children: []
        }, {
            id: 5,
            label: 'warmgewalzt - kaltscherbar (Stahlwerk 1) (413 g/kg)',
            refId: 'f5d7096b-3b26-4fa0-89c8-62c55364f656',
            children: []
        }, {
            id: 6,
            label: 'warmgewalzt - AC-GKZ-geglüht (Stahlwerk 1) (413 g/kg)',
            refId: 'bd6f51e8-e532-43d7-84fc-9dc31eee93a4',
            children: []
        }, {
            id: 7,
            label: 'Unlegierter Edelbaustahl - Fertigprodukt auf Basis deutscher Strommix 401g/kWh, Scope 1+2 (DEW) (555 g/kg)',
            refId: 'ee103165-d865-4e4b-aa9a-c13e4577f008',
            children: []
        }]
    }, {
        id: 2,
        label: 'Elektrostahl - 1.35xxx',
        refId: null,
        children: [{
            id: 1,
            label: 'warmgewalzt (Stahlwerk 1) (345 g/kg)',
            refId: '880467f2-27ae-4c69-8d53-539c53490407',
            children: []
        }, {
            id: 2,
            label: 'Wälzlagerstahl - Fertigprodukt auf Basis Grünstrom 0 g/kWh, Scope 1 + 2 (DEW) (405 g/kg)',
            refId: '2f15ae7d-ae55-41ca-b65f-4a24071b4544',
            children: []
        }, {
            id: 3,
            label: 'warmgewalzt - AC-GKZ-geglüht (Stahlwerk 1) (413 g/kg)',
            refId: 'bd6f51e8-e532-43d7-84fc-9dc31eee93a4',
            children: []
        }, {
            id: 4,
            label: 'Wälzlagerstahl - Fertigprodukt auf Basis deutscher Strommix 401g/kWh, Scope 1+2 (DEW) (715 g/kg)',
            refId: 'df2b708b-3595-4ae3-8540-7655c8de0e6b',
            children: []
        }, {
            id: 5,
            label: '100Cr6 weichgeglüht und geschält. Scope 1+2+3 (upstream), (Sidenor, base 2019) (806 g/kg)',
            refId: '51f6223c-8e75-4267-b973-04172b4de0f8',
            children: []
        }]
    }, {
        id: 3,
        label: 'Elektrostahl - 1.4xxx',
        refId: null,
        children: [{
            id: 1,
            label: 'RSH-Stahl - Fertigprodukt auf Basis Grünstrom 0 g/kWh, Scope 1+2 (DEW) (525 g/kg)',
            refId: 'ba851e2e-dcad-42d6-b419-f6dd6cee6089',
            children: []
        }, {
            id: 2,
            label: 'RSH-Stahl - Fertigprodukt auf Basis deutscher Strommix 401g/kWh, Scope 1+2 (DEW) (880 g/kg)',
            refId: '984fb537-d8a4-4fbb-97fd-7374dc637251',
            children: []
        }]
    }, {
        id: 4,
        label: 'Elektrostahl - 1.5xxx-1.7xxx',
        refId: null,
        children: [{
            id: 1,
            label: 'Legierter Edelbaustahl - Fertigprodukt auf Basis Grünstrom 0 g/kWh, Scope 1+2 (DEW) (305 g/kg)',
            refId: '907f2007-6a3d-44a7-953f-1635841f3b57',
            children: []
        }, {
            id: 2,
            label: 'warmgewalzt (Stahlwerk 1) (345 g/kg)',
            refId: '880467f2-27ae-4c69-8d53-539c53490407',
            children: []
        }, {
            id: 3,
            label: 'warmgewalzt (Italienisches Stahlwerk via Firma 1) (400 g/kg)',
            refId: 'c2f78f59-de7c-40e2-907b-d3fc012343a1',
            children: []
        }, {
            id: 4,
            label: 'warmgewalzt - FP-geglüht (Stahlwerk 1) (413 g/kg)',
            refId: 'b9f0bd0d-a1c9-4571-8493-db7dc9c54280',
            children: []
        }, {
            id: 5,
            label: 'warmgewalzt - kaltscherbar (Stahlwerk 1) (413 g/kg)',
            refId: 'f5d7096b-3b26-4fa0-89c8-62c55364f656',
            children: []
        }, {
            id: 6,
            label: 'warmgewalzt - AC-GKZ-geglüht (Stahlwerk 1) (413 g/kg)',
            refId: 'bd6f51e8-e532-43d7-84fc-9dc31eee93a4',
            children: []
        }, {
            id: 7,
            label: 'Legierter Edelbaustahl- Fertigprodukt auf Basis deutscher Strommix 401g/kWh, Scope 1+2 (DEW) (595 g/kg)',
            refId: 'b7fc1269-38f5-424a-8d29-0594f2e85545',
            children: []
        }, {
            id: 8,
            label: '16MnCr5 gewalzt. Scope 1+2+3 (upstream), (Sidenor, base 2019) (642 g/kg)',
            refId: '3afd9593-bf61-4f08-87b6-0888728575c5',
            children: []
        }, {
            id: 9,
            label: '16MnCr5 gewalzt geschält. Scope 1+2+3 (upstream), (Sidenor, base 2019) (670 g/kg)',
            refId: '1c8bfe1d-47b0-437e-8f94-d4e98eb118f9',
            children: []
        }, {
            id: 10,
            label: '16MnCr5 gewalzt, weichgeglüht. Scope 1+2+3 (upstream), (Sidenor, base 2019) (690 g/kg)',
            refId: 'bafecdcd-792c-4c73-b250-80afae46a36c',
            children: []
        }, {
            id: 11,
            label: '42CrMo4 gewalzt, weichgeglüht. Scope 1+2+3 (upstream), (Sidenor, base 2019) (762 g/kg)',
            refId: '4cdf93e8-adb6-40d3-b213-1c56a4c77cd5',
            children: []
        }, {
            id: 12,
            label: '16MnCr5 gewalzt, FP. Scope 1+2+3 (upstream), (Sidenor, base 2019) (780 g/kg)',
            refId: '5c7b9b50-0909-4071-8cbd-f2f8350e61cf',
            children: []
        }, {
            id: 13,
            label: '16MnCr5 FP und geschält. Scope 1+2+3 (upstream), (Sidenor, base 2019) (810 g/kg)',
            refId: '545f4b3a-d543-4be6-8c65-77a88b6f487d',
            children: []
        }]
    }, {
        id: 5,
        label: 'Elektrostahl - alle Stähle',
        refId: null,
        children: [{
            id: 1,
            label: 'warmgewalzt (Stahlwerk 1) (345 g/kg)',
            refId: '880467f2-27ae-4c69-8d53-539c53490407',
            children: []
        }, {
            id: 2,
            label: 'warmgewalzt (Italienisches Stahlwerk via Firma 1) (400 g/kg)',
            refId: 'c2f78f59-de7c-40e2-907b-d3fc012343a1',
            children: []
        }, {
            id: 3,
            label: 'warmgewalzt - FP-geglüht (Stahlwerk 1) (413 g/kg)',
            refId: 'b9f0bd0d-a1c9-4571-8493-db7dc9c54280',
            children: []
        }, {
            id: 4,
            label: 'warmgewalzt - kaltscherbar (Stahlwerk 1) (413 g/kg)',
            refId: 'f5d7096b-3b26-4fa0-89c8-62c55364f656',
            children: []
        }, {
            id: 5,
            label: 'warmgewalzt - AC-GKZ-geglüht (Stahlwerk 1) (413 g/kg)',
            refId: 'bd6f51e8-e532-43d7-84fc-9dc31eee93a4',
            children: []
        }, {
            id: 6,
            label: 'Information von Hammerwerk Fridingen (732 g/kg)',
            refId: '0d17327c-95ae-45a0-be42-3d921593b407',
            children: []
        }]
    }, {
        id: 6,
        label: 'LD',
        refId: null,
        children: [{
            id: 1,
            label: 'Unbenannter Hersteller (HF) (2021 g/kg)',
            refId: '85a177e6-2692-4e82-a7da-d0d4fec14b5b',
            children: []
        }, {
            id: 2,
            label: 'Saarstahl Geschäftsbericht (2200 g/kg)',
            refId: 'f1b0e594-7b6c-4f43-99ca-5d793b10d19e',
            children: []
        }]
    }]
}, {
    id: 3,
    label: 'Aluminium',
    refId: null,
    children: [{
        id: 1,
        label: '6000er',
        refId: null,
        children: [{
            id: 1,
            label: 'T4, zu 95% auf Schrottbasis, Schrottradius 300km, stranggepresst (Firma 1) (1558 g/kg)',
            refId: 'd202e736-f0dd-46e9-aec5-ff1b2075e3e9',
            children: []
        }, {
            id: 2,
            label: 'Hyforge Reduxa, fertig für Massivumformung, stranggegossen (Hydro) (4090 g/kg)',
            refId: 'ce123fc8-c35c-4ef8-8afb-52b5665fdbce',
            children: []
        }, {
            id: 3,
            label: 'Durchschnitt Hydro Europa, stranggegossen (Hydro) (5900 g/kg)',
            refId: '447ddf97-3ecd-435e-82ce-b52a250e74e5',
            children: []
        }, {
            id: 4,
            label: 'Durchschnitt Hydro Europa, stranggepresst (EAA) (6200 g/kg)',
            refId: 'c0c9cca6-444b-4648-93d0-0172359953cd',
            children: []
        }]
    }, {
        id: 2,
        label: 'nicht spezifizierte Legierungsgruppe',
        refId: null,
        children: [{
            id: 1,
            label: 'Durchschnitt produziert in Europa, Zustand unerheblich (EAA) (7000 g/kg)',
            refId: '56783f79-86de-45ee-9374-3635646db947',
            children: []
        }, {
            id: 2,
            label: 'Durchschnitt verbraucht in Europa, Zustand unerheblich (EAA) (8900 g/kg)',
            refId: '67d13706-9f24-4d3e-9ce2-9171afef03ba',
            children: []
        }, {
            id: 3,
            label: 'Durchschnitt Welt, Zustand unerheblich (IAI) (16700 g/kg)',
            refId: '218ee47e-55fc-42c0-b176-e516b806e500',
            children: []
        }, {
            id: 4,
            label: 'Durchschnitt China, Zustand unerheblich (IAI) (20000 g/kg)',
            refId: '8df9dca1-f6eb-4555-9f71-15dcc7bc8527',
            children: []
        }]
    }]
}]

export let electricity: Item[] = [{
    id: 1,
    label: 'Individueller Strommix',
    refId: null,
    children: []
}, {
    id: 2,
    label: 'Deutscher Grünstrom, Annahme CO₂-frei (0 g/kWh)',
    refId: '5a5f2c75-66b0-422b-bab4-eed8d4905ad7',
    children: []
}, {
    id: 3,
    label: 'Firmenbezogener Strommix, Firma 2 (0 g/kWh)',
    refId: 'eec1e60d-99e1-44d6-bc84-c13392ce495b',
    children: []
}, {
    id: 4,
    label: 'Firmenbezogener Strommix, badenova/HF (129 g/kWh)',
    refId: 'd256d7f8-eb8b-423a-8864-51aa670eae91',
    children: []
}, {
    id: 5,
    label: 'Mittelwert deutsche Schmiedeindustrie (253 g/kWh)',
    refId: 'a462ad23-9fc8-42cb-a554-dbfbb637d7f9',
    children: []
}, {
    id: 6,
    label: 'Firmenbezogener Strommix, Firma 3 (280 g/kWh)',
    refId: 'f8a6ab49-d101-4380-91e5-8eb00c228db5',
    children: []
}, {
    id: 7,
    label: 'Deutscher Strommix, 2019 (UBA) (401 g/kWh)',
    refId: 'd75a2339-9ea8-4a1b-aed8-63599fd2e1c8',
    children: []
}, {
    id: 8,
    label: 'EU27 Strommix, 2015 (Hydro) (424 g/kWh)',
    refId: '4e209b96-e41c-452f-a4a5-744acf783256',
    children: []
}, {
    id: 9,
    label: 'Firmenbezogener Strommix, Firma 1 (548 g/kWh)',
    refId: '52bfe1af-fdee-4678-9481-321d3508d287',
    children: []
}, {
    id: 10,
    label: 'Strommix China, 2010 (Die Zeit) (837 g/kWh)',
    refId: '25d78ab9-d592-41ce-a2d6-af41b5c25f63',
    children: []
}]

export let gas: Item[] = [{
    id: 1,
    label: 'Individueller Gasmix',
    refId: null,
    children: []
}, {
    id: 2,
    label: 'Deutscher Gasmix, Rucksack berechnet aus Gasmix D (Rus/No/Nl/D) (UBA, 2015) (36 g/kWh)',
    refId: '2d5884ce-6587-4fd9-8adf-99b95b6866c2',
    children: []
}]

export let air: Item[] = [{
    id: 1,
    label: 'Individueller Strombedarf',
    refId: null,
    children: []
}, {
    id: 2,
    label: 'Kalt, Firma 2 (0,060 kWh/m³)',
    refId: '42d0e488-9e41-453d-8f65-394bf5508a9b',
    children: []
}, {
    id: 3,
    label: 'Kalt, Mittelwert aus 3 Angaben (0,084 kWh/m³)',
    refId: '3c49ef61-9d1c-40bc-90eb-8469b06d6dad',
    children: []
}, {
    id: 4,
    label: 'Kalt, HF (0,091 kWh/m³)',
    refId: 'ef4ca2db-83fa-4f26-b058-b4bc5813500a',
    children: []
}, {
    id: 5,
    label: 'Kalt, Firma 1 (0,099 kWh/m³)',
    refId: '726e29c4-0266-4c2e-99a1-4f472726da6b',
    children: []
}, {
    id: 6,
    label: 'Warm , Firma 1 (0,105 kWh/m³)',
    refId: 'b184da33-c7e4-409b-b413-10cb7f1563b9',
    children: []
}]

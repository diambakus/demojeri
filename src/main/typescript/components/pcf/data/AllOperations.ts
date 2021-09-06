import { Operation } from '../../../types/PCF'

export let operations: Operation[] = [
    { no: 1, title: 'Trennen / Abschnittherstellung, Sägen, Individueller Sägeprozess', loss: 0.0, exchanges: [
        {
            no: 1,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.0,
            module: '2',
            explanation: '',
            providers: [
            ]
        }, {
            no: 2,
            product: 'Druckluft',
            unit: 'm³/kg',
            type: 'material',
            amount: 0.0,
            module: '3',
            explanation: '',
            providers: [
            ]
        }, {
            no: 3,
            product: 'Schmierstoff',
            unit: 'kg/kg',
            type: 'material',
            amount: 0.0,
            module: '3',
            explanation: '',
            providers: [
                {
                    refId: 'aca3365e-8013-4435-94d7-8cf017168dbe',
                    name: 'Schmierstoff, Öl'
                }
            ]
        }
    ]},
    { no: 2, title: 'Trennen / Abschnittherstellung, Sägen, Kreissäge (Firma 1)', loss: 0.08, exchanges: [
        {
            no: 4,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.0,
            module: '2',
            explanation: '',
            providers: [
            ]
        }
    ]},
    { no: 3, title: 'Trennen / Abschnittherstellung, Sägen, Kreissäge (Firma 2)', loss: 0.056, exchanges: [
        {
            no: 5,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.011,
            module: '2',
            explanation: '',
            providers: [
            ]
        }
    ]},
    { no: 4, title: 'Trennen / Abschnittherstellung, Sägen, Kreissäge Branchenmittelwert', loss: 0.05, exchanges: [
        {
            no: 6,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.01,
            module: '2',
            explanation: '',
            providers: [
            ]
        }
    ]},
    { no: 5, title: 'Trennen / Abschnittherstellung, Sägen, Kreissäge dickes Material (Eisele)', loss: 0.12, exchanges: [
        {
            no: 7,
            product: 'Druckluft',
            unit: 'm³/kg',
            type: 'material',
            amount: 0.02,
            module: '3',
            explanation: '',
            providers: [
            ]
        }
    ]},
    { no: 6, title: 'Trennen / Abschnittherstellung, Sägen, Kreissäge dünnes Material (Eisele)', loss: 0.08, exchanges: [
        {
            no: 8,
            product: 'Druckluft',
            unit: 'm³/kg',
            type: 'material',
            amount: 0.08,
            module: '3',
            explanation: '',
            providers: [
            ]
        }, {
            no: 9,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.051,
            module: '2',
            explanation: '',
            providers: [
            ]
        }
    ]},
    { no: 7, title: 'Trennen / Abschnittherstellung, Scheren, Individueller Scherprozess', loss: 0.0, exchanges: [
        {
            no: 10,
            product: 'Druckluft',
            unit: 'm³/kg',
            type: 'material',
            amount: 0.0,
            module: '3',
            explanation: '',
            providers: [
            ]
        }, {
            no: 11,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.0,
            module: '2',
            explanation: '',
            providers: [
            ]
        }, {
            no: 12,
            product: 'Schmierstoff',
            unit: 'kg/kg',
            type: 'material',
            amount: 0.0,
            module: '3',
            explanation: '',
            providers: [
                {
                    refId: 'aca3365e-8013-4435-94d7-8cf017168dbe',
                    name: 'Schmierstoff, Öl'
                }
            ]
        }
    ]},
    { no: 8, title: 'Trennen / Abschnittherstellung, Scheren, kalt (Firma 1)', loss: 0.0, exchanges: [
        {
            no: 13,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.011,
            module: '2',
            explanation: '',
            providers: [
            ]
        }
    ]},
    { no: 9, title: 'Trennen / Abschnittherstellung, Scheren, kalt (Firma 2)', loss: 0.04, exchanges: [
        {
            no: 14,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.03,
            module: '2',
            explanation: '',
            providers: [
            ]
        }
    ]},
    { no: 10, title: 'Trennen / Abschnittherstellung, Scheren, kalt (Firma 3)', loss: 0.05, exchanges: [
        {
            no: 15,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.0,
            module: '2',
            explanation: '',
            providers: [
            ]
        }
    ]},
    { no: 11, title: 'Trennen / Abschnittherstellung, Scheren, kalt Mittelwert', loss: 0.04, exchanges: [
        {
            no: 16,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.02,
            module: '2',
            explanation: '',
            providers: [
            ]
        }
    ]},
    { no: 12, title: 'Trennen / Abschnittherstellung, Scheren, mit Stangenvorwärmung 60°C (Firma 1)', loss: 0.0, exchanges: [
        {
            no: 17,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.0167441860465116,
            module: '2',
            explanation: '',
            providers: [
            ]
        }
    ]},
    { no: 13, title: 'Erwärmung, Gasofen, Individueller Gasofen', loss: 0.0, exchanges: [
        {
            no: 18,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.0,
            module: '2',
            explanation: '',
            providers: [
            ]
        }, {
            no: 19,
            product: 'Gas',
            unit: 'kWh/kg',
            type: 'gas',
            amount: 0.0,
            module: '3',
            explanation: 'Die direkten CO₂ Emissionen werden automatisch berechnet (202 g CO₂ Äq./kWh).',
            providers: [
            ]
        }
    ]},
    { no: 14, title: 'Erwärmung, Gasofen, Stahl - 1250°C Firma 1', loss: -1.0, exchanges: [
        {
            no: 20,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.00547,
            module: '2',
            explanation: '',
            providers: [
            ]
        }, {
            no: 21,
            product: 'Gas',
            unit: 'kWh/kg',
            type: 'gas',
            amount: 1.92099,
            module: '3',
            explanation: 'Die direkten CO₂ Emissionen werden automatisch berechnet (202 g CO₂ Äq./kWh).',
            providers: [
            ]
        }
    ]},
    { no: 15, title: 'Erwärmung, Gasofen, Stahl - 1250°C Stahl Mittelwert', loss: -1.0, exchanges: [
        {
            no: 22,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.01,
            module: '2',
            explanation: '',
            providers: [
            ]
        }, {
            no: 23,
            product: 'Gas',
            unit: 'kWh/kg',
            type: 'gas',
            amount: 1.6,
            module: '3',
            explanation: 'Die direkten CO₂ Emissionen werden automatisch berechnet (202 g CO₂ Äq./kWh).',
            providers: [
            ]
        }
    ]},
    { no: 16, title: 'Erwärmung, Gasofen, Aluminium - Schmiedetemperatur (Firma 1, 1. Angabe)', loss: -1.0, exchanges: [
        {
            no: 24,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.0,
            module: '2',
            explanation: '',
            providers: [
            ]
        }, {
            no: 25,
            product: 'Gas',
            unit: 'kWh/kg',
            type: 'gas',
            amount: 0.564,
            module: '3',
            explanation: 'Die direkten CO₂ Emissionen werden automatisch berechnet (202 g CO₂ Äq./kWh).',
            providers: [
            ]
        }
    ]},
    { no: 17, title: 'Erwärmung, Gasofen, Aluminium - Schmiedetemperatur (Firma 1, 2. Angabe)', loss: -1.0, exchanges: [
        {
            no: 26,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.0,
            module: '2',
            explanation: '',
            providers: [
            ]
        }, {
            no: 27,
            product: 'Gas',
            unit: 'kWh/kg',
            type: 'gas',
            amount: 0.779,
            module: '3',
            explanation: 'Die direkten CO₂ Emissionen werden automatisch berechnet (202 g CO₂ Äq./kWh).',
            providers: [
            ]
        }
    ]},
    { no: 18, title: 'Erwärmung, Gasofen, Aluminium - Schmiedetemperatur (Firma 1, 3. Angabe)', loss: -1.0, exchanges: [
        {
            no: 28,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.0,
            module: '2',
            explanation: '',
            providers: [
            ]
        }, {
            no: 29,
            product: 'Gas',
            unit: 'kWh/kg',
            type: 'gas',
            amount: 0.67155,
            module: '3',
            explanation: 'Die direkten CO₂ Emissionen werden automatisch berechnet (202 g CO₂ Äq./kWh).',
            providers: [
            ]
        }
    ]},
    { no: 19, title: 'Erwärmung, Gasofen, Aluminium - Schmiedetemperatur, Mittelwert', loss: -1.0, exchanges: [
        {
            no: 30,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.0,
            module: '2',
            explanation: '',
            providers: [
            ]
        }, {
            no: 31,
            product: 'Gas',
            unit: 'kWh/kg',
            type: 'gas',
            amount: 0.67,
            module: '3',
            explanation: 'Die direkten CO₂ Emissionen werden automatisch berechnet (202 g CO₂ Äq./kWh).',
            providers: [
            ]
        }
    ]},
    { no: 20, title: 'Erwärmung, Gasofen, Aluminium - Wiedererwärmung nach Vorformoperation, Mittelwert', loss: -1.0, exchanges: [
        {
            no: 32,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.0,
            module: '2',
            explanation: '',
            providers: [
            ]
        }, {
            no: 33,
            product: 'Gas',
            unit: 'kWh/kg',
            type: 'gas',
            amount: 0.19,
            module: '3',
            explanation: 'Die direkten CO₂ Emissionen werden automatisch berechnet (202 g CO₂ Äq./kWh).',
            providers: [
            ]
        }
    ]},
    { no: 21, title: 'Erwärmung, Induktion Stahl, Individuelle Induktionserwärmung', loss: -1.0, exchanges: [
        {
            no: 34,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.0,
            module: '2',
            explanation: '',
            providers: [
            ]
        }
    ]},
    { no: 22, title: 'Erwärmung, Induktion Stahl,  900 °C (Firma 1) (0,358 kWh/kg)', loss: -1.0, exchanges: [
        {
            no: 35,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.35813953,
            module: '2',
            explanation: '',
            providers: [
            ]
        }
    ]},
    { no: 23, title: 'Erwärmung, Induktion Stahl, 1130 °C (Firma 1) (0,828 kWh/kg)', loss: -1.0, exchanges: [
        {
            no: 36,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.82760989,
            module: '2',
            explanation: '',
            providers: [
            ]
        }
    ]},
    { no: 24, title: 'Erwärmung, Induktion Stahl, 1230 °C (Firma 6) (0,653 kWh/kg)', loss: -1.0, exchanges: [
        {
            no: 37,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.65337302,
            module: '2',
            explanation: '',
            providers: [
            ]
        }
    ]},
    { no: 25, title: 'Erwärmung, Induktion Stahl, 1250 °C Hohe Effizienz (0,38 kWh/kg)', loss: -1.0, exchanges: [
        {
            no: 38,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.038,
            module: '2',
            explanation: '',
            providers: [
            ]
        }
    ]},
    { no: 26, title: 'Erwärmung, Induktion Stahl, 1250 °C (Firma 1) (0,38 kWh/kg))', loss: -1.0, exchanges: [
        {
            no: 39,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.3793,
            module: '2',
            explanation: '',
            providers: [
            ]
        }
    ]},
    { no: 27, title: 'Erwärmung, Induktion Stahl, 1250 °C (Firma 2) (0,55 kWh/kg)', loss: -1.0, exchanges: [
        {
            no: 40,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.55,
            module: '2',
            explanation: '',
            providers: [
            ]
        }
    ]},
    { no: 28, title: 'Erwärmung, Induktion Stahl, 1250 °C (Firma 3) (0,426 kWh/kg)', loss: -1.0, exchanges: [
        {
            no: 41,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.426,
            module: '2',
            explanation: '',
            providers: [
            ]
        }
    ]},
    { no: 29, title: 'Erwärmung, Induktion Stahl, 1250 °C (Firma 4) (0,43 kWh/kg)', loss: -1.0, exchanges: [
        {
            no: 42,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.43,
            module: '2',
            explanation: '',
            providers: [
            ]
        }
    ]},
    { no: 30, title: 'Erwärmung, Induktion Stahl, 1250 °C Niedrige Effizienz (0,90 kWh/kg)', loss: -1.0, exchanges: [
        {
            no: 43,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.9,
            module: '2',
            explanation: '',
            providers: [
            ]
        }
    ]},
    { no: 31, title: 'Erwärmung, Induktion Stahl, 1250 °C Mittelwert Branche (0,66 kWh/kg)', loss: -1.0, exchanges: [
        {
            no: 44,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.66182,
            module: '2',
            explanation: '',
            providers: [
            ]
        }
    ]},
    { no: 32, title: 'Erwärmung, Konduktion, Individuelle konduktive Erwärmung', loss: -1.0, exchanges: [
        {
            no: 45,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.0,
            module: '2',
            explanation: '',
            providers: [
            ]
        }
    ]},
    { no: 33, title: 'Erwärmung, Konduktion, 1250°C (Firma 8)', loss: -1.0, exchanges: [
        {
            no: 46,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.416,
            module: '2',
            explanation: '',
            providers: [
            ]
        }
    ]},
    { no: 34, title: 'Umformung, Freiformschmieden, Individuelles Freiformschmieden', loss: 0.0, exchanges: [
        {
            no: 47,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.0,
            module: '2',
            explanation: '',
            providers: [
            ]
        }, {
            no: 48,
            product: 'Druckluft',
            unit: 'm³/kg',
            type: 'material',
            amount: 0.0,
            module: '3',
            explanation: '',
            providers: [
            ]
        }, {
            no: 49,
            product: 'Schmierstoff',
            unit: 'kg/kg',
            type: 'material',
            amount: 0.0,
            module: '3',
            explanation: '',
            providers: [
                {
                    refId: 'aca3365e-8013-4435-94d7-8cf017168dbe',
                    name: 'Schmierstoff, Öl'
                }
            ]
        }
    ]},
    { no: 35, title: 'Umformung, Freiformschmieden, hydraulisch', loss: 0.0, exchanges: [
        {
            no: 50,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.0,
            module: '2',
            explanation: '',
            providers: [
            ]
        }, {
            no: 51,
            product: 'Druckluft',
            unit: 'm³/kg',
            type: 'material',
            amount: 0.0,
            module: '3',
            explanation: '',
            providers: [
            ]
        }, {
            no: 52,
            product: 'Schmierstoff',
            unit: 'kg/kg',
            type: 'material',
            amount: 0.0,
            module: '3',
            explanation: '',
            providers: [
                {
                    refId: 'aca3365e-8013-4435-94d7-8cf017168dbe',
                    name: 'Schmierstoff, Öl'
                }
            ]
        }
    ]},
    { no: 36, title: 'Umformung, Hammer, Individueller Hammer', loss: 0.0, exchanges: [
        {
            no: 53,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.0,
            module: '2',
            explanation: '',
            providers: [
            ]
        }, {
            no: 54,
            product: 'Druckluft',
            unit: 'm³/kg',
            type: 'material',
            amount: 0.0,
            module: '3',
            explanation: '',
            providers: [
            ]
        }, {
            no: 55,
            product: 'Gas',
            unit: 'kWh/kg',
            type: 'gas',
            amount: 0.0,
            module: '3',
            explanation: 'Die direkten CO₂ Emissionen werden automatisch berechnet (202 g CO₂ Äq./kWh).',
            providers: [
            ]
        }, {
            no: 56,
            product: 'Schmierstoff',
            unit: 'kg/kg',
            type: 'material',
            amount: 0.0,
            module: '3',
            explanation: '',
            providers: [
            ]
        }
    ]},
    { no: 37, title: 'Umformung, Hammer, Gegenschlaghammer', loss: 0.0, exchanges: [
        {
            no: 57,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 2.3,
            module: '2',
            explanation: '',
            providers: [
            ]
        }, {
            no: 58,
            product: 'Druckluft',
            unit: 'm³/kg',
            type: 'material',
            amount: 0.0,
            module: '3',
            explanation: '',
            providers: [
            ]
        }, {
            no: 59,
            product: 'Schmierstoff',
            unit: 'kg/kg',
            type: 'material',
            amount: 0.005,
            module: '3',
            explanation: '',
            providers: [
                {
                    refId: 'aca3365e-8013-4435-94d7-8cf017168dbe',
                    name: 'Schmierstoff, Öl'
                }
            ]
        }
    ]},
    { no: 38, title: 'Umformung, Presse - Spindelpresse, Individuelle Spindelpresse', loss: 0.0, exchanges: [
        {
            no: 60,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.0,
            module: '2',
            explanation: '',
            providers: [
            ]
        }, {
            no: 61,
            product: 'Gas',
            unit: 'kWh/kg',
            type: 'gas',
            amount: 0.0,
            module: '3',
            explanation: 'Die direkten CO₂ Emissionen werden automatisch berechnet (202 g CO₂ Äq./kWh).',
            providers: [
            ]
        }, {
            no: 62,
            product: 'Druckluft',
            unit: 'm³/kg',
            type: 'material',
            amount: 0.0,
            module: '3',
            explanation: '',
            providers: [
            ]
        }, {
            no: 63,
            product: 'Schmierstoff',
            unit: 'kg/kg',
            type: 'material',
            amount: 0.0,
            module: '3',
            explanation: '',
            providers: [
                {
                    refId: 'aca3365e-8013-4435-94d7-8cf017168dbe',
                    name: 'Schmierstoff, Öl'
                }
            ]
        }
    ]},
    { no: 39, title: 'Umformung, Presse - Spindelpresse, Friktionsspindelpresse (Firma 1, 1. Angabe)', loss: 0.14, exchanges: [
        {
            no: 64,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.39,
            module: '2',
            explanation: '',
            providers: [
            ]
        }, {
            no: 65,
            product: 'Druckluft',
            unit: 'm³/kg',
            type: 'material',
            amount: 0.0,
            module: '3',
            explanation: '',
            providers: [
            ]
        }, {
            no: 66,
            product: 'Schmierstoff',
            unit: 'kg/kg',
            type: 'material',
            amount: 0.0,
            module: '3',
            explanation: '',
            providers: [
                {
                    refId: 'aca3365e-8013-4435-94d7-8cf017168dbe',
                    name: 'Schmierstoff, Öl'
                }
            ]
        }
    ]},
    { no: 40, title: 'Umformung, Presse - Spindelpresse, Friktionsspindelpresse (Firma 1, 2. Angabe)', loss: 0.16, exchanges: [
        {
            no: 67,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.53,
            module: '2',
            explanation: '',
            providers: [
            ]
        }, {
            no: 68,
            product: 'Druckluft',
            unit: 'm³/kg',
            type: 'material',
            amount: 0.0,
            module: '3',
            explanation: '',
            providers: [
                {
                    refId: 'aca3365e-8013-4435-94d7-8cf017168dbe',
                    name: 'Schmierstoff, Öl'
                }
            ]
        }, {
            no: 69,
            product: 'Schmierstoff',
            unit: 'kg/kg',
            type: 'material',
            amount: 0.0,
            module: '3',
            explanation: '',
            providers: [
            ]
        }
    ]},
    { no: 41, title: 'Umformung, Presse - Spindelpresse, Friktionsspindelpresse (Firma 1, 3. Angabe)', loss: 0.17, exchanges: [
        {
            no: 70,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.48,
            module: '2',
            explanation: '',
            providers: [
            ]
        }, {
            no: 71,
            product: 'Druckluft',
            unit: 'm³/kg',
            type: 'material',
            amount: 0.0,
            module: '3',
            explanation: '',
            providers: [
            ]
        }, {
            no: 72,
            product: 'Schmierstoff',
            unit: 'kg/kg',
            type: 'material',
            amount: 0.0,
            module: '3',
            explanation: '',
            providers: [
                {
                    refId: 'aca3365e-8013-4435-94d7-8cf017168dbe',
                    name: 'Schmierstoff, Öl'
                }
            ]
        }
    ]},
    { no: 42, title: 'Umformung, Presse - Spindelpresse, Kupplungsspindelpresse', loss: 0.16, exchanges: [
        {
            no: 73,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.43,
            module: '2',
            explanation: '',
            providers: [
            ]
        }, {
            no: 74,
            product: 'Druckluft',
            unit: 'm³/kg',
            type: 'material',
            amount: 0.0,
            module: '3',
            explanation: '',
            providers: [
            ]
        }, {
            no: 75,
            product: 'Schmierstoff',
            unit: 'kg/kg',
            type: 'material',
            amount: 0.0,
            module: '3',
            explanation: '',
            providers: [
                {
                    refId: 'aca3365e-8013-4435-94d7-8cf017168dbe',
                    name: 'Schmierstoff, Öl'
                }
            ]
        }
    ]},
    { no: 43, title: 'Umformung, Presse - Spindelpresse, Spindelpresse mit elektrischem Direktantrieb (Firma 1, 1. Angabe)', loss: 0.27, exchanges: [
        {
            no: 76,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.48,
            module: '2',
            explanation: '',
            providers: [
            ]
        }, {
            no: 77,
            product: 'Druckluft',
            unit: 'm³/kg',
            type: 'material',
            amount: 0.0,
            module: '3',
            explanation: '',
            providers: [
            ]
        }, {
            no: 78,
            product: 'Schmierstoff',
            unit: 'kg/kg',
            type: 'material',
            amount: 0.0,
            module: '3',
            explanation: '',
            providers: [
                {
                    refId: 'aca3365e-8013-4435-94d7-8cf017168dbe',
                    name: 'Schmierstoff, Öl'
                }
            ]
        }
    ]},
    { no: 44, title: 'Umformung, Presse - Spindelpresse, Spindelpresse mit elektrischem Direktantrieb (Firma 1, 2. Angabe)', loss: 0.14, exchanges: [
        {
            no: 79,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.39,
            module: '2',
            explanation: '',
            providers: [
            ]
        }, {
            no: 80,
            product: 'Druckluft',
            unit: 'm³/kg',
            type: 'material',
            amount: 0.0,
            module: '3',
            explanation: '',
            providers: [
            ]
        }, {
            no: 81,
            product: 'Schmierstoff',
            unit: 'kg/kg',
            type: 'material',
            amount: 0.0,
            module: '3',
            explanation: '',
            providers: [
                {
                    refId: 'aca3365e-8013-4435-94d7-8cf017168dbe',
                    name: 'Schmierstoff, Öl'
                }
            ]
        }
    ]},
    { no: 45, title: 'Umformung, Presse - hydraulisch, Individuelle hydraulische Presse', loss: 0.0, exchanges: [
        {
            no: 82,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.0,
            module: '2',
            explanation: '',
            providers: [
            ]
        }, {
            no: 83,
            product: 'Gas',
            unit: 'kWh/kg',
            type: 'gas',
            amount: 0.0,
            module: '3',
            explanation: 'Die direkten CO₂ Emissionen werden automatisch berechnet (202 g CO₂ Äq./kWh).',
            providers: [
            ]
        }, {
            no: 84,
            product: 'Druckluft',
            unit: 'm³/kg',
            type: 'material',
            amount: 0.0,
            module: '3',
            explanation: '',
            providers: [
            ]
        }, {
            no: 85,
            product: 'Schmierstoff',
            unit: 'kg/kg',
            type: 'material',
            amount: 0.0,
            module: '3',
            explanation: '',
            providers: [
                {
                    refId: 'aca3365e-8013-4435-94d7-8cf017168dbe',
                    name: 'Schmierstoff, Öl'
                }
            ]
        }
    ]},
    { no: 46, title: 'Umformung, Presse - hydraulisch, Kaltkalibrieren Gamei hydraulisch stehend', loss: 0.0, exchanges: [
        {
            no: 86,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.07535,
            module: '2',
            explanation: '',
            providers: [
            ]
        }, {
            no: 87,
            product: 'Druckluft',
            unit: 'm³/kg',
            type: 'material',
            amount: 0.0,
            module: '3',
            explanation: '',
            providers: [
            ]
        }, {
            no: 88,
            product: 'Schmierstoff',
            unit: 'kg/kg',
            type: 'material',
            amount: 0.0,
            module: '3',
            explanation: '',
            providers: [
                {
                    refId: 'aca3365e-8013-4435-94d7-8cf017168dbe',
                    name: 'Schmierstoff, Öl'
                }
            ]
        }
    ]},
    { no: 47, title: 'Umformung, Presse - hydraulisch, 1000t Mittelwert (0,25 kWh/kg Strom, 0,34 kWh/kg Gas Werkzeugheizung)', loss: 0.0, exchanges: [
        {
            no: 89,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.247,
            module: '2',
            explanation: '',
            providers: [
            ]
        }, {
            no: 90,
            product: 'Gas',
            unit: 'kWh/kg',
            type: 'gas',
            amount: 0.34,
            module: '3',
            explanation: 'Die direkten CO₂ Emissionen werden automatisch berechnet (202 g CO₂ Äq./kWh).',
            providers: [
            ]
        }
    ]},
    { no: 48, title: 'Umformung, Presse - liegend, Individuelle liegende Presse', loss: 0.0, exchanges: [
        {
            no: 91,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.0,
            module: '2',
            explanation: '',
            providers: [
            ]
        }, {
            no: 92,
            product: 'Druckluft',
            unit: 'm³/kg',
            type: 'material',
            amount: 0.0,
            module: '3',
            explanation: '',
            providers: [
            ]
        }, {
            no: 93,
            product: 'Schmierstoff',
            unit: 'kg/kg',
            type: 'material',
            amount: 0.0,
            module: '3',
            explanation: '',
            providers: [
                {
                    refId: 'aca3365e-8013-4435-94d7-8cf017168dbe',
                    name: 'Schmierstoff, Öl'
                }
            ]
        }
    ]},
    { no: 49, title: 'Umformung, Presse - liegend, Exzenterpresse AMP20 ', loss: 0.11, exchanges: [
        {
            no: 94,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.033,
            module: '2',
            explanation: '',
            providers: [
            ]
        }
    ]},
    { no: 50, title: 'Umformung, Presse - liegend, Exzenterpresse AMP30', loss: 0.14, exchanges: [
        {
            no: 95,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.048,
            module: '2',
            explanation: '',
            providers: [
            ]
        }
    ]},
    { no: 51, title: 'Umformung, Presse - liegend, Exzenterpresse AMP30/HM35 (Firma 1, 1. Angabe)', loss: 0.14, exchanges: [
        {
            no: 96,
            product: 'Druckluft',
            unit: 'm³/kg',
            type: 'material',
            amount: 0.0,
            module: '3',
            explanation: '',
            providers: [
            ]
        }, {
            no: 97,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.0119,
            module: '2',
            explanation: '',
            providers: [
            ]
        }, {
            no: 98,
            product: 'Schmierstoff',
            unit: 'kg/kg',
            type: 'material',
            amount: 5.48E-4,
            module: '3',
            explanation: '',
            providers: [
                {
                    refId: 'aca3365e-8013-4435-94d7-8cf017168dbe',
                    name: 'Schmierstoff, Öl'
                }
            ]
        }
    ]},
    { no: 52, title: 'Umformung, Presse - liegend, Exzenterpresse AMP30/HM35 (Firma 1, 2. Angabe)', loss: 0.17, exchanges: [
        {
            no: 99,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.0557,
            module: '2',
            explanation: '',
            providers: [
            ]
        }, {
            no: 100,
            product: 'Druckluft',
            unit: 'm³/kg',
            type: 'material',
            amount: 0.0,
            module: '3',
            explanation: '',
            providers: [
            ]
        }, {
            no: 101,
            product: 'Schmierstoff',
            unit: 'kg/kg',
            type: 'material',
            amount: 5.48E-4,
            module: '3',
            explanation: '',
            providers: [
                {
                    refId: 'aca3365e-8013-4435-94d7-8cf017168dbe',
                    name: 'Schmierstoff, Öl'
                }
            ]
        }
    ]},
    { no: 53, title: 'Umformung, Presse - liegend, Exzenterpresse AMP30/HM35 (WinningBLW)', loss: 0.005, exchanges: [
        {
            no: 102,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.1462,
            module: '2',
            explanation: '',
            providers: [
            ]
        }, {
            no: 103,
            product: 'Druckluft',
            unit: 'm³/kg',
            type: 'material',
            amount: 0.0,
            module: '3',
            explanation: '',
            providers: [
            ]
        }
    ]},
    { no: 54, title: 'Umformung, Presse - liegend, Exzenterpresse AMP70 (Firma 1, 1. Angabe)', loss: 0.0, exchanges: [
        {
            no: 104,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.10713791,
            module: '2',
            explanation: '',
            providers: [
            ]
        }, {
            no: 105,
            product: 'Druckluft',
            unit: 'm³/kg',
            type: 'material',
            amount: 0.02335165,
            module: '3',
            explanation: '',
            providers: [
            ]
        }, {
            no: 106,
            product: 'Schmierstoff',
            unit: 'kg/kg',
            type: 'material',
            amount: 0.00712088,
            module: '3',
            explanation: '',
            providers: [
                {
                    refId: 'aca3365e-8013-4435-94d7-8cf017168dbe',
                    name: 'Schmierstoff, Öl'
                }
            ]
        }
    ]},
    { no: 55, title: 'Umformung, Presse - liegend, Exzenterpresse AMP70 (Firma 1, 2. Angabe)', loss: 0.0, exchanges: [
        {
            no: 107,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.06071,
            module: '2',
            explanation: '',
            providers: [
            ]
        }, {
            no: 108,
            product: 'Druckluft',
            unit: 'm³/kg',
            type: 'material',
            amount: 0.03373,
            module: '3',
            explanation: '',
            providers: [
            ]
        }, {
            no: 109,
            product: 'Schmierstoff',
            unit: 'kg/kg',
            type: 'material',
            amount: 0.00595,
            module: '3',
            explanation: '',
            providers: [
                {
                    refId: 'aca3365e-8013-4435-94d7-8cf017168dbe',
                    name: 'Schmierstoff, Öl'
                }
            ]
        }
    ]},
    { no: 56, title: 'Umformung, Presse - liegend, Exzenterpresse AMP70L', loss: 0.0, exchanges: [
        {
            no: 110,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.05,
            module: '2',
            explanation: '',
            providers: [
            ]
        }
    ]},
    { no: 57, title: 'Umformung, Presse - liegend, Kalt, mehrstufig vom Draht Mittelwert (0,19 kWh/kg)', loss: 0.0, exchanges: [
        {
            no: 111,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.194,
            module: '2',
            explanation: '',
            providers: [
            ]
        }, {
            no: 112,
            product: 'Druckluft',
            unit: 'm³/kg',
            type: 'material',
            amount: 0.11,
            module: '3',
            explanation: '',
            providers: [
            ]
        }, {
            no: 113,
            product: 'Schmierstoff',
            unit: 'kg/kg',
            type: 'material',
            amount: 0.002,
            module: '3',
            explanation: '',
            providers: [
                {
                    refId: 'aca3365e-8013-4435-94d7-8cf017168dbe',
                    name: 'Schmierstoff, Öl'
                }
            ]
        }
    ]},
    { no: 58, title: 'Umformung, Presse - Kurbelpresse, Individuelle Kurbelpresse', loss: 0.0, exchanges: [
        {
            no: 114,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.0,
            module: '2',
            explanation: '',
            providers: [
            ]
        }, {
            no: 115,
            product: 'Gas',
            unit: 'kWh/kg',
            type: 'gas',
            amount: 0.0,
            module: '3',
            explanation: 'Die direkten CO₂ Emissionen werden automatisch berechnet (202 g CO₂ Äq./kWh).',
            providers: [
            ]
        }, {
            no: 116,
            product: 'Druckluft',
            unit: 'm³/kg',
            type: 'material',
            amount: 0.0,
            module: '3',
            explanation: '',
            providers: [
            ]
        }, {
            no: 117,
            product: 'Schmierstoff',
            unit: 'kg/kg',
            type: 'material',
            amount: 0.0,
            module: '3',
            explanation: '',
            providers: [
                {
                    refId: 'aca3365e-8013-4435-94d7-8cf017168dbe',
                    name: 'Schmierstoff, Öl'
                }
            ]
        }
    ]},
    { no: 59, title: 'Umformung, Presse - Kurbelpresse, Eumuco 1600 t', loss: 0.0, exchanges: [
        {
            no: 118,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.48,
            module: '2',
            explanation: '',
            providers: [
            ]
        }
    ]},
    { no: 60, title: 'Umformung, Presse - Kurbelpresse, Kurbelpresse Gesenkschmieden mit Grat, Mittelwert', loss: 0.2, exchanges: [
        {
            no: 119,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.03421,
            module: '2',
            explanation: '',
            providers: [
            ]
        }, {
            no: 120,
            product: 'Druckluft',
            unit: 'm³/kg',
            type: 'material',
            amount: 0.0,
            module: '3',
            explanation: '',
            providers: [
            ]
        }, {
            no: 121,
            product: 'Schmierstoff',
            unit: 'kg/kg',
            type: 'material',
            amount: 0.0,
            module: '3',
            explanation: '',
            providers: [
                {
                    refId: 'aca3365e-8013-4435-94d7-8cf017168dbe',
                    name: 'Schmierstoff, Öl'
                }
            ]
        }
    ]},
    { no: 61, title: 'Umformung, Presse - Kurbelpresse, Mechanische stehende Halbwarmpresse Polymaster 1', loss: 0.0, exchanges: [
        {
            no: 122,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.19325581,
            module: '2',
            explanation: '',
            providers: [
            ]
        }, {
            no: 123,
            product: 'Gas',
            unit: 'kWh/kg',
            type: 'gas',
            amount: 0.007,
            module: '3',
            explanation: 'Die direkten CO₂ Emissionen werden automatisch berechnet (202 g CO₂ Äq./kWh).',
            providers: [
            ]
        }, {
            no: 124,
            product: 'Druckluft',
            unit: 'm³/kg',
            type: 'material',
            amount: 0.01581395,
            module: '3',
            explanation: '',
            providers: [
            ]
        }, {
            no: 125,
            product: 'Schmierstoff',
            unit: 'kg/kg',
            type: 'material',
            amount: 0.02111628,
            module: '3',
            explanation: '',
            providers: [
                {
                    refId: 'aca3365e-8013-4435-94d7-8cf017168dbe',
                    name: 'Schmierstoff, Öl'
                }
            ]
        }
    ]},
    { no: 62, title: 'Umformung, Presse - Kurbelpresse, Stehende Kaltpresse P9', loss: 0.0, exchanges: [
        {
            no: 126,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.04988814,
            module: '2',
            explanation: '',
            providers: [
            ]
        }, {
            no: 127,
            product: 'Druckluft',
            unit: 'm³/kg',
            type: 'material',
            amount: 0.07606264,
            module: '3',
            explanation: '',
            providers: [
            ]
        }, {
            no: 128,
            product: 'Schmierstoff',
            unit: 'kg/kg',
            type: 'material',
            amount: 0.0,
            module: '3',
            explanation: '',
            providers: [
                {
                    refId: 'aca3365e-8013-4435-94d7-8cf017168dbe',
                    name: 'Schmierstoff, Öl'
                }
            ]
        }
    ]},
    { no: 63, title: 'Umformung, Presse - Kurbelpresse, Stehende Kaltpresse P11', loss: 0.0, exchanges: [
        {
            no: 129,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.04076087,
            module: '2',
            explanation: '',
            providers: [
            ]
        }, {
            no: 130,
            product: 'Druckluft',
            unit: 'm³/kg',
            type: 'material',
            amount: 0.0923913,
            module: '3',
            explanation: '',
            providers: [
            ]
        }, {
            no: 131,
            product: 'Schmierstoff',
            unit: 'kg/kg',
            type: 'material',
            amount: 0.0,
            module: '3',
            explanation: '',
            providers: [
                {
                    refId: 'aca3365e-8013-4435-94d7-8cf017168dbe',
                    name: 'Schmierstoff, Öl'
                }
            ]
        }
    ]},
    { no: 64, title: 'Umformung, Walzen, Individuelles Walzen', loss: 0.0, exchanges: [
        {
            no: 132,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.0,
            module: '2',
            explanation: '',
            providers: [
            ]
        }, {
            no: 133,
            product: 'Druckluft',
            unit: 'm³/kg',
            type: 'material',
            amount: 0.0,
            module: '3',
            explanation: '',
            providers: [
            ]
        }, {
            no: 134,
            product: 'Schmierstoff',
            unit: 'kg/kg',
            type: 'material',
            amount: 0.0,
            module: '3',
            explanation: '',
            providers: [
                {
                    refId: 'aca3365e-8013-4435-94d7-8cf017168dbe',
                    name: 'Schmierstoff, Öl'
                }
            ]
        }
    ]},
    { no: 65, title: 'Umformung, Walzen, Ringwalzen (stehend)', loss: 0.0, exchanges: [
        {
            no: 135,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.0,
            module: '2',
            explanation: '',
            providers: [
            ]
        }, {
            no: 136,
            product: 'Druckluft',
            unit: 'm³/kg',
            type: 'material',
            amount: 0.0,
            module: '3',
            explanation: '',
            providers: [
            ]
        }, {
            no: 137,
            product: 'Schmierstoff',
            unit: 'kg/kg',
            type: 'material',
            amount: 0.0,
            module: '3',
            explanation: '',
            providers: [
                {
                    refId: 'aca3365e-8013-4435-94d7-8cf017168dbe',
                    name: 'Schmierstoff, Öl'
                }
            ]
        }
    ]},
    { no: 66, title: 'Umformung, Walzen, Querkeilwalzen', loss: 0.0, exchanges: [
        {
            no: 138,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.0,
            module: '2',
            explanation: '',
            providers: [
            ]
        }, {
            no: 139,
            product: 'Druckluft',
            unit: 'm³/kg',
            type: 'material',
            amount: 0.0,
            module: '3',
            explanation: '',
            providers: [
            ]
        }, {
            no: 140,
            product: 'Schmierstoff',
            unit: 'kg/kg',
            type: 'material',
            amount: 0.0,
            module: '3',
            explanation: '',
            providers: [
                {
                    refId: 'aca3365e-8013-4435-94d7-8cf017168dbe',
                    name: 'Schmierstoff, Öl'
                }
            ]
        }
    ]},
    { no: 67, title: 'Umformung, Walzen, Reckwalzen', loss: 0.0, exchanges: [
        {
            no: 141,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.0,
            module: '2',
            explanation: '',
            providers: [
            ]
        }, {
            no: 142,
            product: 'Druckluft',
            unit: 'm³/kg',
            type: 'material',
            amount: 0.0,
            module: '3',
            explanation: '',
            providers: [
            ]
        }, {
            no: 143,
            product: 'Schmierstoff',
            unit: 'kg/kg',
            type: 'material',
            amount: 0.0,
            module: '3',
            explanation: '',
            providers: [
                {
                    refId: 'aca3365e-8013-4435-94d7-8cf017168dbe',
                    name: 'Schmierstoff, Öl'
                }
            ]
        }
    ]},
    { no: 68, title: 'Warmbehandlung, Elektroofen, Individueller Ofen', loss: -1.0, exchanges: [
        {
            no: 144,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.0,
            module: '2',
            explanation: '',
            providers: [
            ]
        }, {
            no: 145,
            product: 'Gas',
            unit: 'kWh/kg',
            type: 'gas',
            amount: 0.0,
            module: '3',
            explanation: 'Die direkten CO₂ Emissionen werden automatisch berechnet (202 g CO₂ Äq./kWh).',
            providers: [
            ]
        }, {
            no: 146,
            product: 'Druckluft',
            unit: 'm³/kg',
            type: 'material',
            amount: 0.0,
            module: '3',
            explanation: '',
            providers: [
            ]
        }, {
            no: 147,
            product: 'Stickstoff',
            unit: 'kg/kg',
            type: 'material',
            amount: 0.0,
            module: '3',
            explanation: '',
            providers: [
                {
                    refId: '2275b73f-5b97-42bd-89a7-3bb86a986a69',
                    name: 'Stickstoff, firmenbezogen, unbenannt'
                }
            ]
        }
    ]},
    { no: 69, title: 'Warmbehandlung, Elektroofen, GKZ aus Schmiedehitze', loss: -1.0, exchanges: [
        {
            no: 148,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.348,
            module: '2',
            explanation: '',
            providers: [
            ]
        }, {
            no: 149,
            product: 'Stickstoff',
            unit: 'kg/kg',
            type: 'material',
            amount: 0.0,
            module: '3',
            explanation: '',
            providers: [
                {
                    refId: '2275b73f-5b97-42bd-89a7-3bb86a986a69',
                    name: 'Stickstoff, firmenbezogen, unbenannt'
                }
            ]
        }
    ]},
    { no: 70, title: 'Warmbehandlung, Elektroofen, Nitrieren', loss: -1.0, exchanges: [
        {
            no: 150,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.65,
            module: '2',
            explanation: '',
            providers: [
            ]
        }
    ]},
    { no: 71, title: 'Warmbehandlung, Gasofen - Aluminium, Individueller Ofen', loss: -1.0, exchanges: [
        {
            no: 151,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.0,
            module: '2',
            explanation: '',
            providers: [
            ]
        }, {
            no: 152,
            product: 'Gas',
            unit: 'kWh/kg',
            type: 'gas',
            amount: 0.0,
            module: '3',
            explanation: 'Die direkten CO₂ Emissionen werden automatisch berechnet (202 g CO₂ Äq./kWh).',
            providers: [
            ]
        }
    ]},
    { no: 72, title: 'Warmbehandlung, Gasofen - Aluminium, Aluminium Lösungsglühen', loss: -1.0, exchanges: [
        {
            no: 153,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.0,
            module: '2',
            explanation: '',
            providers: [
            ]
        }, {
            no: 154,
            product: 'Gas',
            unit: 'kWh/kg',
            type: 'gas',
            amount: 0.5,
            module: '3',
            explanation: 'Die direkten CO₂ Emissionen werden automatisch berechnet (202 g CO₂ Äq./kWh).',
            providers: [
            ]
        }
    ]},
    { no: 73, title: 'Warmbehandlung, Gasofen - Aluminium, Aluminium Warmauslagern', loss: -1.0, exchanges: [
        {
            no: 155,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.0,
            module: '2',
            explanation: '',
            providers: [
            ]
        }, {
            no: 156,
            product: 'Gas',
            unit: 'kWh/kg',
            type: 'gas',
            amount: 0.08,
            module: '3',
            explanation: 'Die direkten CO₂ Emissionen werden automatisch berechnet (202 g CO₂ Äq./kWh).',
            providers: [
            ]
        }
    ]},
    { no: 74, title: 'Warmbehandlung, Gasofen - Stahl, Individueller Ofen', loss: -1.0, exchanges: [
        {
            no: 157,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.0,
            module: '2',
            explanation: '',
            providers: [
            ]
        }, {
            no: 158,
            product: 'Gas',
            unit: 'kWh/kg',
            type: 'gas',
            amount: 0.0,
            module: '3',
            explanation: 'Die direkten CO₂ Emissionen werden automatisch berechnet (202 g CO₂ Äq./kWh).',
            providers: [
            ]
        }, {
            no: 159,
            product: 'Druckluft',
            unit: 'm³/kg',
            type: 'material',
            amount: 0.0,
            module: '3',
            explanation: '',
            providers: [
            ]
        }
    ]},
    { no: 75, title: 'Warmbehandlung, Gasofen - Stahl, Normalisieren', loss: -1.0, exchanges: [
        {
            no: 160,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.038915,
            module: '2',
            explanation: '',
            providers: [
            ]
        }, {
            no: 161,
            product: 'Gas',
            unit: 'kWh/kg',
            type: 'gas',
            amount: 0.7783,
            module: '3',
            explanation: 'Die direkten CO₂ Emissionen werden automatisch berechnet (202 g CO₂ Äq./kWh).',
            providers: [
            ]
        }
    ]},
    { no: 76, title: 'Warmbehandlung, Gasofen - Stahl, BG-Glühen', loss: -1.0, exchanges: [
        {
            no: 162,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.032015,
            module: '2',
            explanation: '',
            providers: [
            ]
        }, {
            no: 163,
            product: 'Gas',
            unit: 'kWh/kg',
            type: 'gas',
            amount: 0.6403,
            module: '3',
            explanation: 'Die direkten CO₂ Emissionen werden automatisch berechnet (202 g CO₂ Äq./kWh).',
            providers: [
            ]
        }
    ]},
    { no: 77, title: 'Warmbehandlung, Gasofen - Stahl, Einsatzhärten', loss: -1.0, exchanges: [
        {
            no: 164,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.08004,
            module: '2',
            explanation: '',
            providers: [
            ]
        }, {
            no: 165,
            product: 'Gas',
            unit: 'kWh/kg',
            type: 'gas',
            amount: 1.6008,
            module: '3',
            explanation: 'Die direkten CO₂ Emissionen werden automatisch berechnet (202 g CO₂ Äq./kWh).',
            providers: [
            ]
        }
    ]},
    { no: 78, title: 'Warmbehandlung, Gasofen - Stahl, Isothermglühen', loss: -1.0, exchanges: [
        {
            no: 166,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.0,
            module: '2',
            explanation: '',
            providers: [
            ]
        }, {
            no: 167,
            product: 'Gas',
            unit: 'kWh/kg',
            type: 'gas',
            amount: 0.310738,
            module: '3',
            explanation: 'Die direkten CO₂ Emissionen werden automatisch berechnet (202 g CO₂ Äq./kWh).',
            providers: [
            ]
        }
    ]},
    { no: 79, title: 'Warmbehandlung, Gasofen - Stahl, GKZ', loss: -1.0, exchanges: [
        {
            no: 168,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.0,
            module: '2',
            explanation: '',
            providers: [
            ]
        }, {
            no: 169,
            product: 'Gas',
            unit: 'kWh/kg',
            type: 'gas',
            amount: 0.753533,
            module: '3',
            explanation: 'Die direkten CO₂ Emissionen werden automatisch berechnet (202 g CO₂ Äq./kWh).',
            providers: [
            ]
        }
    ]},
    { no: 80, title: 'Warmbehandlung, Gasofen - Stahl, Vergüten (Härten + Anlassen)', loss: -1.0, exchanges: [
        {
            no: 170,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.1,
            module: '2',
            explanation: '',
            providers: [
            ]
        }, {
            no: 171,
            product: 'Gas',
            unit: 'kWh/kg',
            type: 'gas',
            amount: 1.3,
            module: '3',
            explanation: 'Die direkten CO₂ Emissionen werden automatisch berechnet (202 g CO₂ Äq./kWh).',
            providers: [
            ]
        }
    ]},
    { no: 81, title: 'Warmbehandlung, Gasofen - Stahl, Rekristallisationsglühen', loss: -1.0, exchanges: [
        {
            no: 172,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.0,
            module: '2',
            explanation: '',
            providers: [
            ]
        }, {
            no: 173,
            product: 'Gas',
            unit: 'kWh/kg',
            type: 'gas',
            amount: 0.78,
            module: '3',
            explanation: 'Die direkten CO₂ Emissionen werden automatisch berechnet (202 g CO₂ Äq./kWh).',
            providers: [
            ]
        }
    ]},
    { no: 82, title: 'Warmbehandlung, Abkühlband, Individuelles Abkühlband', loss: -1.0, exchanges: [
        {
            no: 174,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.047907,
            module: '2',
            explanation: '',
            providers: [
            ]
        }
    ]},
    { no: 83, title: 'Warmbehandlung, Abkühlband, nach Halbwarmmaschine', loss: -1.0, exchanges: [
        {
            no: 175,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.047907,
            module: '2',
            explanation: '',
            providers: [
            ]
        }
    ]},
    { no: 84, title: 'Warmbehandlung, Abkühlband, nach Warmmaschine', loss: -1.0, exchanges: [
        {
            no: 176,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.0032967,
            module: '2',
            explanation: '',
            providers: [
            ]
        }
    ]},
    { no: 85, title: 'Veränderung Oberfläche, Vor der Umformung, Individueller Prozess', loss: 0.0, exchanges: [
        {
            no: 177,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.0,
            module: '2',
            explanation: '',
            providers: [
            ]
        }, {
            no: 178,
            product: 'Gas',
            unit: 'kWh/kg',
            type: 'gas',
            amount: 0.0,
            module: '3',
            explanation: 'Die direkten CO₂ Emissionen werden automatisch berechnet (202 g CO₂ Äq./kWh).',
            providers: [
            ]
        }, {
            no: 179,
            product: 'Druckluft',
            unit: 'm³/kg',
            type: 'material',
            amount: 0.0,
            module: '3',
            explanation: '',
            providers: [
            ]
        }, {
            no: 180,
            product: 'Schmierstoff',
            unit: 'kg/kg',
            type: 'material',
            amount: 0.0,
            module: '3',
            explanation: '',
            providers: [
                {
                    refId: 'aca3365e-8013-4435-94d7-8cf017168dbe',
                    name: 'Schmierstoff, Öl'
                }
            ]
        }
    ]},
    { no: 86, title: 'Veränderung Oberfläche, Vor der Umformung, Druckwasserentzundern (Firma 1)', loss: -1.0, exchanges: [
        {
            no: 181,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.003935,
            module: '2',
            explanation: '',
            providers: [
            ]
        }
    ]},
    { no: 87, title: 'Veränderung Oberfläche, Vor der Umformung, Druckwasserentzundern Mittelwert', loss: -1.0, exchanges: [
        {
            no: 182,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.003,
            module: '2',
            explanation: '',
            providers: [
            ]
        }
    ]},
    { no: 88, title: 'Veränderung Oberfläche, Vor der Umformung, Reinigungsstrahlen Mittelwert', loss: 0.0, exchanges: [
        {
            no: 183,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.02,
            module: '2',
            explanation: '',
            providers: [
            ]
        }
    ]},
    { no: 89, title: 'Veränderung Oberfläche, Nach der Umformung, Individueller Prozess', loss: -1.0, exchanges: [
        {
            no: 184,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.0,
            module: '2',
            explanation: '',
            providers: [
            ]
        }, {
            no: 185,
            product: 'Gas',
            unit: 'kWh/kg',
            type: 'gas',
            amount: 0.0,
            module: '3',
            explanation: 'Die direkten CO₂ Emissionen werden automatisch berechnet (202 g CO₂ Äq./kWh).',
            providers: [
            ]
        }, {
            no: 186,
            product: 'Druckluft',
            unit: 'm³/kg',
            type: 'material',
            amount: 0.0,
            module: '3',
            explanation: '',
            providers: [
            ]
        }, {
            no: 187,
            product: 'Schmierstoff',
            unit: 'kg/kg',
            type: 'material',
            amount: 0.0,
            module: '3',
            explanation: '',
            providers: [
                {
                    refId: 'aca3365e-8013-4435-94d7-8cf017168dbe',
                    name: 'Schmierstoff, Öl'
                }
            ]
        }
    ]},
    { no: 90, title: 'Veränderung Oberfläche, Nach der Umformung, Reinigungsstrahlen Mittelwert', loss: 0.0, exchanges: [
        {
            no: 188,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.018,
            module: '2',
            explanation: '',
            providers: [
            ]
        }
    ]},
    { no: 91, title: 'Veränderung Oberfläche, Nach der Umformung, Waschen und Rostschutz', loss: -1.0, exchanges: [
        {
            no: 189,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.0186047,
            module: '2',
            explanation: '',
            providers: [
            ]
        }, {
            no: 190,
            product: 'Gas',
            unit: 'kWh/kg',
            type: 'gas',
            amount: 0.0432558,
            module: '3',
            explanation: 'Die direkten CO₂ Emissionen werden automatisch berechnet (202 g CO₂ Äq./kWh).',
            providers: [
            ]
        }, {
            no: 191,
            product: 'Schmierstoff',
            unit: 'kg/kg',
            type: 'material',
            amount: 5.116E-4,
            module: '3',
            explanation: '',
            providers: [
                {
                    refId: 'aca3365e-8013-4435-94d7-8cf017168dbe',
                    name: 'Schmierstoff, Öl'
                }
            ]
        }
    ]},
    { no: 92, title: 'QS+Verpacken, Alle Vorgänge, Individueller Prozess', loss: 0.0, exchanges: [
        {
            no: 192,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.0,
            module: '2',
            explanation: '',
            providers: [
            ]
        }, {
            no: 193,
            product: 'Druckluft',
            unit: 'm³/kg',
            type: 'material',
            amount: 0.0,
            module: '3',
            explanation: '',
            providers: [
            ]
        }, {
            no: 194,
            product: 'Schmierstoff',
            unit: 'kg/kg',
            type: 'material',
            amount: 0.0,
            module: '3',
            explanation: '',
            providers: [
                {
                    refId: 'aca3365e-8013-4435-94d7-8cf017168dbe',
                    name: 'Schmierstoff, Öl'
                }
            ]
        }
    ]},
    { no: 93, title: 'QS+Verpacken, Alle Vorgänge, Mittelwert Branche', loss: 0.01, exchanges: [
        {
            no: 195,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.00804,
            module: '2',
            explanation: '',
            providers: [
            ]
        }
    ]},
    { no: 94, title: 'Transport, Extern (außerhalb des Werkes), Transportmodi individuell kombinierbar', loss: -1.0, exchanges: [
        {
            no: 196,
            product: 'Transport, Schiene',
            unit: 'km',
            type: 'transport',
            amount: 0.0,
            module: '3',
            explanation: 'Wie viele km wurde der Werkstoff/das Werkstück transportiert? Die Distanz wird automatisch mit dem entsprechenden Gewicht verrechnet (Bsp.: 20 kg werden für 10 km transportiert - ergibt 200 kg*km).',
            providers: [
                {
                    refId: '1d1faa7a-e04f-4a1e-8fb5-a525a68572fe',
                    name: 'Transport, Schiene (UBA 2019) (17 g/(t*km))'
                }, {
                    refId: '2e8fe0f3-42af-4b36-8f02-c31973bc5245',
                    name: 'Transport, Schiene (HF) (24 g/(t*km))'
                }
            ]
        }, {
            no: 197,
            product: 'Transport, Straße',
            unit: 'km',
            type: 'transport',
            amount: 0.0,
            module: '3',
            explanation: 'Wie viele km wurde der Werkstoff/das Werkstück transportiert? Die Distanz wird automatisch mit dem entsprechenden Gewicht verrechnet (Bsp.: 20 kg werden für 10 km transportiert - ergibt 200 kg*km).',
            providers: [
                {
                    refId: 'b0bdcaae-9144-46aa-9310-a0ac6ebfffce',
                    name: 'Transport, Straße, (Klimanko) (43,5 g/(t*km))'
                }, {
                    refId: '692fd0a9-8d27-4ef5-81e9-d79f7ce4cb69',
                    name: 'Transport, Straße, Sattelzug (ProBas+) (50,7 g/(t*km))'
                }, {
                    refId: 'cd2f3f14-75d8-453b-b367-6ec958f851dd',
                    name: 'Transport, Straße (HF) (63,15 g/(t*km))'
                }, {
                    refId: '9820ceed-4349-449a-b5bb-66ae8b5dcaa1',
                    name: 'Transport, Straße, Pritschen LKW (UBA) (68 g/(t*km))'
                }
            ]
        }, {
            no: 198,
            product: 'Transport, Schiff',
            unit: 'km',
            type: 'transport',
            amount: 0.0,
            module: '3',
            explanation: 'Wie viele km wurde der Werkstoff/das Werkstück transportiert? Die Distanz wird automatisch mit dem entsprechenden Gewicht verrechnet (Bsp.: 20 kg werden für 10 km transportiert - ergibt 200 kg*km).',
            providers: [
                {
                    refId: 'f3b10311-9a21-4bbc-8d9e-7a15367c393e',
                    name: 'Transport, Schiff, Binnenschifffahrt D (UBA) (30 g/(t*km))'
                }
            ]
        }
    ]},
    { no: 95, title: 'Transport, Extern (außerhalb des Werkes), Individueller Carbon Footprint', loss: -1.0, exchanges: [
        {
            no: 199,
            product: 'Treibstoff',
            unit: 'kWh/kg',
            type: 'material',
            amount: 0.0,
            module: '3',
            explanation: '',
            providers: [
                {
                    refId: '29802803-1a0c-45e7-b3c1-03fd3b5b7dbf',
                    name: 'Heizöl/Diesel'
                }
            ]
        }, {
            no: 200,
            product: 'Kohlenstoffdioxid',
            unit: 'g/kg',
            type: 'emission',
            amount: 0.0,
            module: '1',
            explanation: 'Wie viel CO₂ wird direkt emittiert?',
            providers: [
            ]
        }
    ]},
    { no: 96, title: 'Transport, Intern, Individueller Prozess', loss: -1.0, exchanges: [
        {
            no: 201,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.0,
            module: '2',
            explanation: '',
            providers: [
            ]
        }, {
            no: 202,
            product: 'Gas',
            unit: 'kWh/kg',
            type: 'gas',
            amount: 0.0,
            module: '3',
            explanation: 'Die direkten CO₂ Emissionen werden automatisch berechnet (202 g CO₂ Äq./kWh).',
            providers: [
            ]
        }
    ]},
    { no: 97, title: 'Transport, Intern, Dieselstapler Mittelwert', loss: -1.0, exchanges: [
        {
            no: 203,
            product: 'Treibstoff',
            unit: 'kWh/kg',
            type: 'material',
            amount: 1.0,
            module: '3',
            explanation: '',
            providers: [
                {
                    refId: '29802803-1a0c-45e7-b3c1-03fd3b5b7dbf',
                    name: 'Heizöl/Diesel'
                }
            ]
        }
    ]},
    { no: 98, title: 'Transport, Intern, Gasstapler Mittelwert', loss: -1.0, exchanges: [
        {
            no: 204,
            product: 'Gas',
            unit: 'kWh/kg',
            type: 'gas',
            amount: 0.0,
            module: '3',
            explanation: 'Die direkten CO₂ Emissionen werden automatisch berechnet (202 g CO₂ Äq./kWh).',
            providers: [
            ]
        }
    ]},
    { no: 99, title: 'Transport, Intern, Aluminiumremelting und Strangpresserei', loss: -1.0, exchanges: [
        {
            no: 205,
            product: 'Gas',
            unit: 'kWh/kg',
            type: 'gas',
            amount: 0.01,
            module: '3',
            explanation: 'Die direkten CO₂ Emissionen werden automatisch berechnet (202 g CO₂ Äq./kWh).',
            providers: [
            ]
        }
    ]},
    { no: 100, title: 'Transport, Intern, Leichtere Schmiedeteile bis 5kg', loss: -1.0, exchanges: [
        {
            no: 206,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.0,
            module: '2',
            explanation: '',
            providers: [
            ]
        }, {
            no: 207,
            product: 'Treibstoff',
            unit: 'kWh/kg',
            type: 'material',
            amount: 0.0,
            module: '3',
            explanation: '',
            providers: [
                {
                    refId: '29802803-1a0c-45e7-b3c1-03fd3b5b7dbf',
                    name: 'Heizöl/Diesel'
                }
            ]
        }, {
            no: 208,
            product: 'Kohlenstoffdioxid',
            unit: 'g/kg',
            type: 'emission',
            amount: 0.005,
            module: '1',
            explanation: 'Wie viel CO₂ wird direkt emittiert?',
            providers: [
            ]
        }
    ]},
    { no: 101, title: 'Individueller Prozess', loss: 0.0, exchanges: [
        {
            no: 209,
            product: 'Elektrischer Strom',
            unit: 'kWh/kg',
            type: 'power',
            amount: 0.0,
            module: '2',
            explanation: '',
            providers: [
            ]
        }, {
            no: 210,
            product: 'Druckluft',
            unit: 'm³/kg',
            type: 'material',
            amount: 0.0,
            module: '3',
            explanation: '',
            providers: [
            ]
        }, {
            no: 211,
            product: 'Gas',
            unit: 'kWh/kg',
            type: 'gas',
            amount: 0.0,
            module: '3',
            explanation: 'Die direkten CO₂ Emissionen werden automatisch berechnet (202 g CO₂ Äq./kWh).',
            providers: [
            ]
        }, {
            no: 212,
            product: 'Schmierstoff',
            unit: 'kg/kg',
            type: 'material',
            amount: 0.0,
            module: '3',
            explanation: '',
            providers: [
                {
                    refId: 'aca3365e-8013-4435-94d7-8cf017168dbe',
                    name: 'Schmierstoff, Öl'
                }
            ]
        }, {
            no: 213,
            product: 'Stickstoff',
            unit: 'kg/kg',
            type: 'material',
            amount: 0.0,
            module: '3',
            explanation: '',
            providers: [
                {
                    refId: '2275b73f-5b97-42bd-89a7-3bb86a986a69',
                    name: 'Stickstoff, firmenbezogen, unbenannt'
                }
            ]
        }, {
            no: 214,
            product: 'Strahlmittel',
            unit: 'kg/kg',
            type: 'material',
            amount: 0.0,
            module: '3',
            explanation: '',
            providers: [
                {
                    refId: '88b74786-048c-4188-8669-1b6218f5b213',
                    name: 'Strahlmittel'
                }
            ]
        }, {
            no: 215,
            product: 'Treibstoff',
            unit: 'kWh/kg',
            type: 'material',
            amount: 0.0,
            module: '3',
            explanation: '',
            providers: [
                {
                    refId: '29802803-1a0c-45e7-b3c1-03fd3b5b7dbf',
                    name: 'Heizöl/Diesel'
                }
            ]
        }, {
            no: 216,
            product: 'Transport, Schiene',
            unit: 'km',
            type: 'transport',
            amount: 0.0,
            module: '3',
            explanation: 'Wie viele km wurde der Werkstoff/das Werkstück transportiert? Die Distanz wird automatisch mit dem entsprechenden Gewicht verrechnet (Bsp.: 20 kg werden für 10 km transportiert - ergibt 200 kg*km).',
            providers: [
                {
                    refId: '1d1faa7a-e04f-4a1e-8fb5-a525a68572fe',
                    name: 'Transport, Schiene (UBA 2019) (17 g/(t*km))'
                }, {
                    refId: '2e8fe0f3-42af-4b36-8f02-c31973bc5245',
                    name: 'Transport, Schiene (HF) (24 g/(t*km))'
                }
            ]
        }, {
            no: 217,
            product: 'Transport, Straße',
            unit: 'km',
            type: 'transport',
            amount: 0.0,
            module: '3',
            explanation: 'Wie viele km wurde der Werkstoff/das Werkstück transportiert? Die Distanz wird automatisch mit dem entsprechenden Gewicht verrechnet (Bsp.: 20 kg werden für 10 km transportiert - ergibt 200 kg*km).',
            providers: [
                {
                    refId: 'b0bdcaae-9144-46aa-9310-a0ac6ebfffce',
                    name: 'Transport, Straße, (Klimanko) (43,5 g/(t*km))'
                }, {
                    refId: '692fd0a9-8d27-4ef5-81e9-d79f7ce4cb69',
                    name: 'Transport, Straße, Sattelzug (ProBas+) (50,7 g/(t*km))'
                }, {
                    refId: 'cd2f3f14-75d8-453b-b367-6ec958f851dd',
                    name: 'Transport, Straße (HF) (63,15 g/(t*km))'
                }, {
                    refId: '9820ceed-4349-449a-b5bb-66ae8b5dcaa1',
                    name: 'Transport, Straße, Pritschen LKW (UBA) (68 g/(t*km))'
                }
            ]
        }, {
            no: 218,
            product: 'Transport, Schiff',
            unit: 'km',
            type: 'transport',
            amount: 0.0,
            module: '3',
            explanation: 'Wie viele km wurde der Werkstoff/das Werkstück transportiert? Die Distanz wird automatisch mit dem entsprechenden Gewicht verrechnet (Bsp.: 20 kg werden für 10 km transportiert - ergibt 200 kg*km).',
            providers: [
                {
                    refId: 'f3b10311-9a21-4bbc-8d9e-7a15367c393e',
                    name: 'Transport, Schiff, Binnenschifffahrt D (UBA) (30 g/(t*km))'
                }
            ]
        }
    ]}
]

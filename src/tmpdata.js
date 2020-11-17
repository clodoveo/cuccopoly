const caselle = [
  {
    id: 0,
    x: 11,
    y: 0,
    w: 76,
    h: 93,
    special: false,
    testo: ""
  },
  {
    id: 1,
    x: 91,
    y: 0,
    w: 76,
    h: 93,
    special: false,
    testo: ""
  },
  {
    id: 2,
    x: 174,
    y: 0,
    w: 76,
    h: 93,
    special: false,
    testo: ""
  },
  {
    id: 3,
    x: 258,
    y: -5,
    w: 80,
    h: 105,
    special: true,
    testo: "Pizzette per tutti!"
  },
  {
    id: 4,
    x: 340,
    y: 0,
    w: 76,
    h: 93,
    special: false,
    testo: ""
  },
  {
    id: 5,
    x: 423,
    y: 0,
    w: 76,
    h: 93,
    special: false,
    testo: ""
  },
  {
    id: 6,
    x: 506,
    y: -5,
    w: 80,
    h: 105,
    special: true,
    testo: "Ruba un Jolly o donalo a chi vuoi"
  },
  {
    id: 7,
    x: 588,
    y: 0,
    w: 76,
    h: 93,
    special: false,
    testo: ""
  },
  {
    id: 8,
    x: 671,
    y: 0,
    w: 76,
    h: 93,
    special: false,
    testo: ""
  },
  {
    id: 9,
    x: 754,
    y: 0,
    w: 76,
    h: 93,
    special: false,
    testo: ""
  },
  {
    id: 10,
    x: 837,
    y: 0,
    w: 76,
    h: 93,
    special: false,
    testo: ""
  },
  {
    id: 11,
    x: 920,
    y: 0,
    w: 76,
    h: 93,
    special: false,
    testo: ""
  },
  {
    id: 12,
    x: 1003,
    y: -5,
    w: 80,
    h: 105,
    special: true,
    testo: "Porta una torta"
  },
  {
    id: 13,
    x: 1003,
    y: 100,
    w: 76,
    h: 103,
    special: false,
    testo: ""
  },
  {
    id: 14,
    x: 1005,
    y: 212,
    w: 80,
    h: 105,
    special: true,
    testo: "Lascia il caffè offerto a tutto lo staff"
  },
  {
    id: 15,
    x: 1003,
    y: 318,
    w: 76,
    h: 103,
    special: false,
    testo: ""
  },
  {
    id: 16,
    x: 1003,
    y: 426,
    w: 76,
    h: 103,
    special: false,
    testo: ""
  },
  {
    id: 17,
    x: 1003,
    y: 533,
    w: 76,
    h: 103,
    special: false,
    testo: ""
  },
  {
    id: 18,
    x: 1003,
    y: 643,
    w: 76,
    h: 103,
    special: false,
    testo: ""
  },
  {
    id: 19,
    x: 922,
    y: 648,
    w: 80,
    h: 103,
    special: true,
    testo: "Pizzette per tutti!"
  },
  {
    id: 20,
    x: 836,
    y: 643,
    w: 76,
    h: 103,
    special: false,
    testo: ""
  },
  {
    id: 21,
    x: 755,
    y: 649,
    w: 80,
    h: 103,
    special: true,
    testo: "Porta una torta!"
  },
  {
    id: 22,
    x: 672,
    y: 643,
    w: 76,
    h: 103,
    special: false,
    testo: ""
  },
  {
    id: 23,
    x: 588,
    y: 643,
    w: 76,
    h: 103,
    special: false,
    testo: ""
  },
  {
    id: 24,
    x: 505,
    y: 643,
    w: 76,
    h: 103,
    special: false,
    testo: ""
  },
  {
    id: 25,
    x: 423,
    y: 649,
    w: 80,
    h: 103,
    special: true,
    testo: "Riordina i fogli visita nelle rispettive cartelline"
  },
  {
    id: 26,
    x: 340,
    y: 643,
    w: 76,
    h: 103,
    special: false,
    testo: ""
  },
  {
    id: 27,
    x: 256,
    y: 643,
    w: 76,
    h: 103,
    special: false,
    testo: ""
  },
  {
    id: 28,
    x: 175,
    y: 643,
    w: 76,
    h: 103,
    special: false,
    testo: ""
  },
  {
    id: 29,
    x: 92,
    y: 643,
    w: 76,
    h: 103,
    special: false,
    testo: ""
  },
  {
    id: 30,
    x: 9,
    y: 649,
    w: 80,
    h: 103,
    special: true,
    testo: "Pizzette per tutti!"
  },
  {
    id: 31,
    x: 9,
    y: 535,
    w: 76,
    h: 103,
    special: false,
    testo: ""
  },
  {
    id: 32,
    x: 9,
    y: 426,
    w: 76,
    h: 103,
    special: false,
    testo: ""
  },
  {
    id: 33,
    x: 9,
    y: 317,
    w: 76,
    h: 103,
    special: false,
    testo: ""
  },
  {
    id: 34,
    x: 9,
    y: 209,
    w: 76,
    h: 103,
    special: false,
    testo: ""
  }
];

const utenti = [
  {
    nome: "filippo",
    colore: "blue",
    jolly: 3,
    punti: 5,
    NumeroTransazioni: 10,
    NumeroAcquisizioni: 2,
    NumeroIncarichiHomeStaging: 1,
    NumeroJollyPersiPerPenalita: 0
  },
  {
    nome: "anna",
    colore: "green",
    jolly: 1,
    punti: 25,
    NumeroTransazioni: 10,
    NumeroAcquisizioni: 2,
    NumeroIncarichiHomeStaging: 1,
    NumeroJollyPersiPerPenalita: 0
  },
  {
    nome: "dario",
    colore: "orange",
    jolly: 2,
    punti: 6,
    NumeroTransazioni: 10,
    NumeroAcquisizioni: 2,
    NumeroIncarichiHomeStaging: 1,
    NumeroJollyPersiPerPenalita: 0
  },
  {
    nome: "sandro",
    colore: "purple",
    jolly: 2,
    punti: 3,
    NumeroTransazioni: 10,
    NumeroAcquisizioni: 2,
    NumeroIncarichiHomeStaging: 1,
    NumeroJollyPersiPerPenalita: 0
  },

  {
    nome: "milena",
    colore: "red",
    jolly: 2,
    punti: 3,
    NumeroTransazioni: 10,
    NumeroAcquisizioni: 2,
    NumeroIncarichiHomeStaging: 1,
    NumeroJollyPersiPerPenalita: 0
  },
  {
    nome: "samuel",
    colore: "#286CB2",
    jolly: 2,
    punti: 15,
    NumeroTransazioni: 10,
    NumeroAcquisizioni: 2,
    NumeroIncarichiHomeStaging: 1,
    NumeroJollyPersiPerPenalita: 0
  }
];
export { caselle, utenti };

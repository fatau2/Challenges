function lotusRealms(clans) {
    var attacked = {};
    for (let i = 0; i < clans.length; i++) {
        console.log(clans[i]);
    }
}
  
  console.log(lotusRealms([
    { clan: 'Serpent', attack: 'Samurai', totalAttack: 300, totalHealth: 1000 },
    { clan: 'Samurai', attack: 'Wolf', totalAttack: 400, totalHealth: 500 },
    { clan: 'Wolf', attack: 'Serpent', totalAttack: 300, totalHealth: 600 },
    { clan: 'Lotus', attack: 'Wolf', totalAttack: 2000, totalHealth: 3000 }
  ]))
  /*
    [
      { clan: 'Serpent', totalHealth: 700 },
      { clan: 'Samurai', totalHealth: 200 },
      { clan: 'Lotus', totalHealth: 3000 }
    ]
  */
  
  /* console.log(lotusRealms([
    { clan: 'Wolf', attack: 'Wolf', totalAttack: 300, totalHealth: 600 },
    { clan: 'Lotus', attack: 'Wolf', totalAttack: 2000, totalHealth: 3000 }
  ]))
  /*
    [ { clan: 'Lotus', totalHealth: 3000 } ]  
  */ 
function lotusRealms(clans) {
    var survivors = [];
    var attacks = [];
    for (let i = 0; i < clans.length; i++) {
        var survivor = {};
        survivor["round"] = i;
        survivor["clan"] = clans[i]["clan"];
        survivor["totalHealth"] = clans[i]["totalHealth"];
        survivors.push(survivor);
        var offense = {};
        offense["round"] = i;
        offense["target"] = clans[i]["attack"];
        offense["force"] = clans[i]["totalAttack"] 
        attacks.push(offense);
    }
    for (let i = 0; i < survivors.length; i++) {
        for (let j = 0; j < attacks.length; j++) {
            if (survivors[i]["clan"] === attacks[j]["target"] && survivors[i]["round"] < attacks[j]["round"]){
                survivors[i]["totalHealth"] = survivors[i]["totalHealth"] - attacks[j]["force"];
            }            
        }
    }
    var survived = [];
    for (let i = 0; i < survivors.length; i++) {
        if (survivors[i]["totalHealth"] > 0){
            var temp = {
                clan: survivors[i]["clan"],
                totalHealth: survivors[i]["totalHealth"]
            }
            survived.push(temp);
        }   
    }
    return JSON.stringify(survived, null, 2);
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
      { clan: 'Samurai', totalHealth: 500 },
      { clan: 'Lotus', totalHealth: 3000 }
    ]
  */
  
   console.log(lotusRealms([
    { clan: 'Wolf', attack: 'Wolf', totalAttack: 300, totalHealth: 600 },
    { clan: 'Lotus', attack: 'Wolf', totalAttack: 2000, totalHealth: 3000 }
  ]))
  /*
    [ { clan: 'Lotus', totalHealth: 3000 } ]  
  */ 
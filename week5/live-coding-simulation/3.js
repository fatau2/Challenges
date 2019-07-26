/*
  /////////////////////
  2ND WINNER GUILD WARS
  /////////////////////

  Function Guild Wars akan menentukkan juara ke-2 dalam bentuk string, dari peringkat 1 ke 4.
  Jumlah peserta selalu array dengan length 4.  

  EXAMPLE
  INPUT: ['OOOO', 'ooOO', 'o', 'OOo']
  INFO:
  - O dihitung 2 
  - o dihitung 1
  GUIDE: 
  - Awal Sisi Kiri: (Tim 1 vs Tim 2) dan Sisi Kanan: (Tim 3 vs Tim 4)
  - Pemenang dari Sisi Kiri vs pemenang dari Sisi Kanan menghasilkan juara 1 dan 2
  - Yang kalah dari Sisi Kiri vs yang kalah dari Sisi Kanan menghasilkan juara 3 dan 4
  PROCESS:
  - Sisi Kiri => OOOO vs ooOO => OOOO (win), ooOO (lose)
  - Sisi Kanan => o vs OOo => o (lose), OOo (win)
  - Winner vs Winner => OOOO vs OOo => OOOO (1), OOo (2)
  - Loser vs Loser => ooOO vs o => ooOO(3), o (4)
  - Urutan pemenang [OOOO, OOo, ooOO, o]
  OUTPUT:
  Juara Ke-2 adalah tim OOo

  RULES:
  1. Jumlah yang bertanding selalu 4 tim
  2. Asumsi total kekuatan di setiap tim tidak ada yang sama
*/

function guildWars(guilds) {
  var teamOneScore = 0;
  var teamTwoScore = 0;
  var leftTeamWinner = "";
  
  for (let i = 0; i < guilds[0].length; i++) {
    if(guilds[0][i] === 'O'){
      teamOneScore = teamOneScore + 2;
    } else {
      teamOneScore++;
    }
  }
  for (let i = 0; i < guilds[1].length; i++) {
    if(guilds[1][i] === 'O'){
      teamTwoScore = teamTwoScore + 2;
    } else {
      teamTwoScore++;
    }
  }
  if (teamOneScore > teamTwoScore){
    leftTeamWinner = [guilds[0], teamOneScore];
  } else {
    leftTeamWinner = [guilds[1], teamTwoScore];
  }
  var teamThreeScore = 0;
  var teamFourScore = 0;
  var rightTeamWinner = "";

  for (let i = 0; i < guilds[2].length; i++) {
    if(guilds[2][i] === 'O'){
      teamThreeScore = teamThreeScore + 2;
    } else {
      teamThreeScore++;
    }
  }
  for (let i = 0; i < guilds[3].length; i++) {
    if(guilds[3][i] === 'O'){
      teamFourScore = teamFourScore + 2;
    } else {
      teamFourScore++;
    }
  }
  if (teamThreeScore > teamFourScore){
    rightTeamWinner = [guilds[2], teamThreeScore];
  } else {
    rightTeamWinner = [guilds[3], teamFourScore];
  }
  
  if (leftTeamWinner[1] > rightTeamWinner[1]){
    return "Juara ke-2 adalah tim " + rightTeamWinner[0];
  } else {
    return "Juara ke-2 adalah tim " + leftTeamWinner[0];
  }
}

console.log(guildWars(['OOOO', 'ooOO', 'o', 'OOo']))
// Juara ke-2 adalah tim OOo
console.log(guildWars(['OO', 'OOO', 'ooOOO', 'OOOo']))
// Juara ke-2 adalah tim OOO
console.log(guildWars(['ooo', 'oooo', 'oo', 'o']))
// Juara ke-2 adalah tim oo
/**
 * Function takes in a user's membership number and budget, buys
 * everything that the user's money can buy and display the receipt
 * 
 * @param memberId String
 * @param money int 
 */
function shoppingTime(memberId, money) {
    var items = [["sepatu stacattu",1500000], ["baju zoro", 500000], ["baju H&N", 250000], ["sweater uniklooh", 175000
], ["casing handphone", 50000]];
    var change = money;
    var listPurchased = [];
    for (let i = 0; i< items.length; i++) {
      if(items[i][1] <= change){
          change = change - items[i][1];
          listPurchased.push(items[i][0]);
      }
    }
    if(memberId === "" || memberId === undefined){
        return "Mohon maaf, toko X hanya berlaku untuk member saja";
    } else if (money <= 15000){
        return "Maaf uang tidak cukup";
    } else {
        var myPurchase = {
            "memberId" : memberId,
            "money" : money,
            "listPurchased" : listPurchased,
            "changeMoney" : change
        }
        return myPurchase;
    }   
}

  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
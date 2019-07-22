/**
 * Function takes in customers' orders
 * If the orders are fulfilled (items are in stock) then function
 * calculates the revenue from the sale, the remaining stock, and the
 * name of the customers who purchased them
 * 
 * @param shoppers array 
 */
function countProfit(shoppers) {
    let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweater Uniklooh', 175000, 1]
                     ];
    var totalProfit;
    var objects = [];
    if (shoppers[0] !== undefined){
        for (let i = 0; i < listBarang.length; i++) {
            var totalProfit = 0;
            var buyers = [];
            for (let j = 0; j < shoppers.length; j++) {
                if (listBarang[i][0] === shoppers[j].product){
                    if (listBarang[i][2] >= shoppers[j].amount){
                        buyers.push(shoppers[j].name);
                        listBarang[i][2] = listBarang[i][2] - shoppers[j].amount;
                        totalProfit = totalProfit + listBarang[i][1] * shoppers[j].amount;
                    }
                }          
            }
            var itemOnSale = {
                "product" : listBarang[i][0],
                "shoppers" : buyers,
                "leftOver" : listBarang[i][2],
                "totalProfit" : totalProfit
            } 
            objects.push(itemOnSale);
        }
    }
    return JSON.stringify(objects,null,2);
} 
     
  

  // TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]
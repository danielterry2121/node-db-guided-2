
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('fruits').truncate()//truncte or del
    .then(function () {
      // Inserts seed entries
      return knex('fruits').insert([
        {name: "dragon fruit",avgWeightOZ: 16.7,delicious: true, color:"red"},
        {name: "durian",avgWeightOZ: 52.9,delicious: false, color:"yellow"},
        {name: "lingonberry",avgWeightOZ: 0.01 ,delicious: true , color:"red"},
        {name: "golden goosberries",avgWeightOZ: 0.02 ,delicious: false, color:"yellow"},
      ]);
    });
};

const { fake } = require('faker');
var faker = require('faker');
var mysql = require('mysql');


const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'milin98.',
    database : 'join_us'
});


//-----------------insert one--------------------
/*
var person = {
    email: faker.internet.email(),
    created_at: faker.date.past()
};
 
var end_result = connection.query('INSERT INTO users SET ?', person, function(err, result) {
  if (err) throw err;
  console.log(result);
});

console.log(end_result.sql);
*/



//------------------------multiple inserts-----------------------


var data = [];
for(var i = 0; i < 500; i++){
    data.push([
        faker.internet.email(),
        faker.date.past()
    ]);
}
 
 
var q = 'INSERT INTO users (email, created_at) VALUES ?';
 
connection.query(q, [data], function(err, result) {
  console.log(err);
  console.log(result);
});





connection.end();


/*
function generateAddress(){
    console.log(faker.internet.email());
    console.log(faker.address.city());
    console.log(faker.address.streetAddress());
}

generateAddress();*/


const db = require('../controllers/booksControllers');
const books_db = require("../models");

describe('test', function(){
  it('test1', () => {
    console.log("test1");
    expect(true).toBe(true)
  })

  // it('test find all', () => {
  //   console.log("test find all")
  //   db.findAll({query: {} }, result =>{
  //     console.log(JSON.stringify(result))
  //     expect(typeof result).toBe(Object)
  //   })
  // })

  // it('test book db', (done) => {
  //   books_db.Book.find(function(err, res){
  //     if(err) throw err;
  //     console.log(res)
  //     expect(typeof res).toBe(object)
  //     done
  //   })
  // })
})
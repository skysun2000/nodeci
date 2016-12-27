var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where the program is running.

var server = supertest.agent("http://localhost:4000");

// UNIT test begin

describe("SAMPLE unit test",function(){

 

   it("should sucess",function(){
       var iIndex=1;
       iIndex.should.equal(1);
    
  });


});
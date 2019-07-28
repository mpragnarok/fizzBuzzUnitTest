var should = chai.should()

describe('Test fizzbuzz function', function () {
  // [case 1] input: 9, expect output : Fizz 
  it('The integer number is divisible by 3 then return Fizz', function () {
    let result = fizzBuzz(9)
    result.should.be.equal('Fizz')
  })
  // [case 2] input: 10, expect output: Buzz
  it('The integer number is divisible by 5 then return Buzz', function () {
    let result = fizzBuzz(10)
    result.should.be.equal('Buzz')
  })
  // [case 3] input: 15, expect output: FizzBuzz
  it('The integer number is divisible by 3 and 5 then return FizzBuzz', function () {
    let result = fizzBuzz(15)
    result.should.be.equal('FizzBuzz')
  })
  // [case4] input: abc, expect ouput: abc
  it('If input can not divisible by 3 or 5 then return itself', function () {
    let result = fizzBuzz('abc')
    result.should.be.equal('abc')
  })
})
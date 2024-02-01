//1.show output after 3.5 second 
function doSomething(){
    console.log('i am a good girl')
}
console.log('i want to go in a market')
setTimeout(doSomething,3500); 

//2.take a number using prompt.add 200.then alert the result
 const add =()=>{
    const addNumber = prompt('Enter number')
    if(addNumber){
       const number = parseInt(addNumber)+200
       alert(number)
    }
} 
//3.do you want to see  the href. if ok.console.log kore diba href ke.na bolle kisu korar dorkar nai
   const seeingHref = () => {
      const response = confirm('do you want to see  the href');
      if(response===true){
        console.log(location.href);
      }
   }
//4 cookies user er information store kore rakhe.ja amra serach kori .next time abar ashle ager chaite better experience dey.

/* cookies purpose
 cookies store users information.which we are search.next time we  visit again website, the better experience give us.because the cookies keep store first  information. */
//5

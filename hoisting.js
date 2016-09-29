 var a = 1;
 
function test() {
   console.log(a); 
   console.log(foo());

  
   function foo() {
      return 2;
   }
}
test();
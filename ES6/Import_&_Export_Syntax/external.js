let keyValue = 1000;
 
function test() {
  keyValue = 2000;
  console.log('tested!');
}
   
export {keyValue, test}; //Export the variable and the function

// Default export

let ab = 'Some text';
export default ab; 

/*
Only one export default can be defined
*/
/* Module */

//a JS file is a module when it exports one or more of its symbols (variables, functions, objects)

exports.sumProperties = data.reduce((acc, n) => {    //loop through data array objects and sum objects properties
    for (var prop in n) {
      if (acc.hasOwnProperty(prop)) acc[prop] += n[prop];
      else acc[prop] = n[prop];
      }
      return acc;
      }, {});

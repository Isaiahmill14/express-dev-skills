const skills = [
    {id: 203485, skill: 'HTML', learned: true},
    {id: 195747, skill: 'CSS', learned: true},
    {id: 178345, skill: 'Java Script', learned: false},
    {id: 157403, skill: 'Node.js', learned: false}
  ];
  
  module.exports = {
    getAll
  };
  
  function getAll() {
    return skills;
  }
 
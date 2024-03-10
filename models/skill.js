const skills = [
    {id: 203485, skill: 'HTML', learned: true},
    {id: 195747, skill: 'CSS', learned: true},
    {id: 178345, skill: 'Java Script', learned: false},
    {id: 157403, skill: 'Node.js', learned: false}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
  };
  
function deleteOne(id) {
  id = parseInt(id)
  const idx = skills.findIndex(skill => skill.id === id)
  skills.splice(idx, 1)
}

function create(skill) {
  skill.id = Date.now() % 1000000
  skill.done = false
  console.log(skill)
  skills.push(skill)
}

function getAll() {
    return skills;
}

function getOne(id) {
  id = parseInt(id)
  const skill = skills.find(skill => skill.id === id)
  return skill
}
let poll = new Map();

function addOption(option){
  if(option === ""){
    return 'Option cannot be empty.';
  }
  if(poll.has(option)){
    return `Option "${option}" already exists.`;
  }
  poll.set(option, new Set());
  return `Option "${option}" added to the poll.`;
}

function vote(option, voterId) {
  if (!poll.has(option)){
    return `Option "${option}" does not exist.`;
  }
  let voters = poll.get(option);
  if(voters.has(voterId)){
    return `Voter ${voterId} has already voted for "${option}".`
  }
  voters.add(voterId);
  return `Voter ${voterId} voted for "${option}".`
}

function displayResults(){
  let result= "Poll Results:";
  for(let [option, voters ] of  poll){
    result += `\n${option}: ${voters.size} votes`;
  }
  return result;
}

addOption('Turkey');
addOption('Nepal');
addOption('US');

vote("Turkey", "Pasang");
vote('Turkey', "Arun");
vote("Nepal", "Subodh");
vote("Nepal", "pema");

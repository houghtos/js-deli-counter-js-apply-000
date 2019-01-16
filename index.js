function takeANumber(line, name){
  line.push(name)
  var welcomeMessage = `Welcome, ${name}. You are number ${line.length} in line.`;
  return welcomeMessage
}

function nowServing(line){
  if (line.length === 0){
    var firstPerson = ""
  }
  var firstPerson = line[0]
}
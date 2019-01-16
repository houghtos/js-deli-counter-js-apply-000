function takeANumber(line, name){
  line.push(name)
  var welcomeMessage = `Welcome, ${name}. You are number ${line.length} in line.`;
  return welcomeMessage
}

function 
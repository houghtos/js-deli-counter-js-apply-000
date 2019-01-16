function takeANumber(line, name){
  line.push(name)
  var welcomeMessage = `Welcome, ${name}. You are number ${line.length} in line.`;
  return welcomeMessage
}

function nowServing(line){
  if (line.length === 0){
    var firstPerson = "There is nobody waiting to be served!";
  }
  if(line.length > 0) {
    var firstPerson = `Currently serving ${line.shift()}.`;
  }
return firstPerson
}

function currentLine(line){
  if (line.length === 0){
    var lineReturn = "The line is currently empty."
  }
  else{
    
  }
  
}
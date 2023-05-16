console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('readable', function () {
  var name = process.stdin.read();
  if (name) {
    name += '';
    console.log('Your name is: ' + name.trim());
  }
});

process.stdin.on('end', function () {
  console.log('This important software is now closing');
});

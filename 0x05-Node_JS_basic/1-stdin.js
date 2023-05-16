console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('readable', function () {
  const name = process.stdin.read();
  if (name) {
    console.log('Your name is: ' + (name + '').trim());
  }
});

process.stdin.on('end', function () {
  console.log('This important software is now closing');
});

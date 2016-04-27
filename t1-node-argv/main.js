
console.log('Hello world!');

// process.argv is an Array of arguments passed to node application. 
// First element is Node, second javascript file. Next additional arguments.

// process.stdin.on event 'readable', calls a function, passing input line as a Buffer object.
// process.stdin.destroy() closes the stream.
// Reminder: Buffer.toString, String.trim

// Task: Modify the script so it reads the input from the user. When the input line matches any of passed parameters, script ends.

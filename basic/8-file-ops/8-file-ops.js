//file other work

//Create a new, empty file using the open() method:
//fs.open(filename, file mode refer below table, function (err, file){});
var fs = require('fs');

fs.open("new-file.txt", "w", function (err, file) {
  if (err) throw err;
  console.log("Saved!");
});
/*
Flag Description
r

Open for reading. An exception occurs if the file does not exist.

r+

Open for reading and writing. An exception occurs if the file does not exist.

rs

Open for reading in synchronous mode, which instructs the operating system to bypass the system cache. This is mostly used for opening files on NFS mounts; it does not make open() a synchronous method.

rs+

Open for reading and writing in synchronous mode.

w

Open for writing. If the file does not exist, it is created. If the file already exists, it is truncated.

wx

Similar to the w flag, but the file is opened in exclusive mode. Exclusive mode ensures that the files are newly created.

w+

Open for reading and writing. If the file does not exist, it is created. If the file already exists, it is truncated.

wx+

Similar to the w+ flag, but the file is opened in exclusive mode.

a

Open for appending. If the file does not exist, it is created.

ax

Similar to the a flag, but the file is opened in exclusive mode.

a+

Open for reading and appending. If the file does not exist, it is created.

ax+

Similar to the a+ flag, but the file is opened in exclusive mode.


*/

//Create a new file using the writeFile() method:
//fs.writeFile(filename, content to be written, function (err){});

fs.writeFile("new-file-2.txt", "Hello content!", function (err) {
  if (err) throw err;
  console.log("Saved!");
});

//Append "This is my text." to the end of the file "mynewfile1.txt":
// fs.appendFile(filename, content to be appended, function (err){});

fs.appendFile("new-file-2.txt", " This is my text.", function (err) {
  if (err) throw err;
  console.log("Updated!");
});

//Replace the content of the file "mynewfile3.txt":
//fs.writeFile(filename, content to be written(over writting text), function (err){});

fs.writeFile("new-file.txt", "This is my text", function (err) {
  if (err) throw err;
  console.log("Replaced!");
});


//Rename "mynewfile1.txt" to "myrenamedfile.txt":
//fs.rename(old file name, new file name,  function(err){} );

fs.rename("new-file.txt", "new-file-1.txt", function (err) {
    if (err) throw err;
    console.log("File Renamed!");
  });
  


//Delete "mynewfile2.txt":
//fs.unlink(filename, function (err){});

fs.unlink("new-file-1.txt", function (err) {
  if (err) throw err;
  console.log("File deleted!");
});


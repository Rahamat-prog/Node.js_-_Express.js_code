const fs = require('fs');
const { buffer } = require('stream/consumers');

console.log('read start');

// Asynchronous way to read file

fs.readFile('input.txt', function(error, data) {
    if(error) {
        console.log('error', error);
        // return error;
    }
    console.log('data', data.toString());
    console.log('read end');
    // return data;
});

console.log('other stuff');


// synchronous way to read file

const data = fs.readFileSync('input.txt');
    console.log('data', data.toString())
    console.log('read end');
    console.log('other stuff');


// before read the file open and agter reading close the file

const buf = new Buffer(1024);
fs.open('input.txt', 'r+', function(err, fd) {
    if(err) {
        console.log('error in ijpening file : ', err);
    }
    console.log('File opne successfully');

    fs.read(fd, buf, 0, buf.length, 0, function(er, bytes){ // fd -> referance ,buf -> storage, 0 -> position,where to start, 0 -> ofset, callback fundtion
        if(er){
            console.log('error in reading file');
        }
        console.log('data', bytes);
        console.log('data', buf.slice(0, bytes).toString())

        fs.close(fd, function(err) {
            if(err) {
                console.log('error in closing file', err);
            }
            else {
                console.log('suceess in closing file');
            }
        })
    })
})

// writing to a  file 

fs.writeFile('input.txt', 'Hello World', function(err) {  
    if(err) {
        console.log('error in writing file', err)
    }
    else{
        console.log('writing successfull'); // besically Hellow world will be added in the input file but remove all the data which was previously.
    }
})


//Append to file

fs.appendFile('input.txt', 'Welcompet to NOde.js', 'utf-8', function(err){
    if(err) {
        console.log('error in appending file', err)
    }
    else{
        console.log('success in appenidng file'); // besically  Welcompet to NOde.js will be added in the input file.
    }
})

// delete file

fs.unlink('input.txt', function(err) {
    if(err) {
        console.log('error in deleting', err);
    }
    else {
        console.log('success in deleteing file')
    }
})


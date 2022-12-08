const fs = require('fs')

// const data =  fs.readFileSync('./Test.txt', 'utf8')

// console.log(data);

// fs.writeFileSync('./Test.txt', 'Hello we are using writefile command')

// fs.unlinkSync('./Test.txt')

// fs.mkdirSync('./Example/Example2')

// fs.writeFileSync('./Example/Example2/rendom.txt', '')

// fs.readFile('./Test.txt', 'utf8', (error, data) =>{
//     console.log(data);
// })

// fs.readFile('./Tes.txt', 'utf8', (error, data) =>{
//     if (error) console.log(error);
//     else console.log(data);
// })

// fs.writeFile('./Test.txt', 'we are using write file in async', () => {
//     console.log('Done');
// })

fs.appendFile('./Test.txt', 'appending file in async', () => {
    console.log('Done');
})


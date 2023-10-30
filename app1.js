const names = require('./name');
const fun = require('./utils');

const {readFileSync, writeFileSync} = require('fs')
const {readFile, writeFile} = require('fs')

const first = readFileSync('./first.txt', 'utf-8')
const second = readFileSync('./first.txt', 'utf-8')
// writeFileSync('./new.txt',`hello new ${first}, ${second}`)
console.log('start')
readFile('./first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const r1 = result
    readFile('./second.txt','utf-8',(err, result)=>{
        if(err){
            console.log(err)
            return 
        }
        const r2 = result 
        writeFile('./new1.txt',
        `here is result:: ${r1}, ${r2}`,
        (err, result)=>{
            if(err){
                console.log(err)
                return 
            }
            console.log('done with current task')
        })
    })
})
console.log('end')

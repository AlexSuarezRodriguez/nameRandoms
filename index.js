const fileSystem=require('fs');
const {faker} = require('@faker-js/faker');
const arr=[];
for(i=1;i<=1000;i++){
  const randomName = faker.name.findName();
  arr.push({numero:i,
    name:randomName})
}
//fileSystem.writeFile('names.txt', NodeJS.ArrayBufferView(arr))
fileSystem.writeFileSync('names.txt',JSON.stringify(arr))
console.log("file of names created")

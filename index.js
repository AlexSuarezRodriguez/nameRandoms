const fileSystem=require('fs');
const {faker} = require('@faker-js/faker');
const arr=[];
for(i=1;i<=1000;i++){
  const randomName = faker.name.findName();
  arr.push({numero:i,
    name:randomName});
}
fileSystem.writeFileSync('names.txt',JSON.stringify(arr));
arr.length===1000 ? console.log("created file") : console.log("error")

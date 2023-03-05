
const fs = require ("fs");
const PersonsData = require("./PersonsData")
const yargs = require("yargs");
const { array } = require("yargs");

yargs.command({
    command:"add",
    describe:"you are already added",
    builder: {
        fname:{
            describe:"add fname",
            demandOption:true,
            type:"string"
        },
        lname:{
            describe:"add lname",
            demandOption:true,
            type:"string"
        },
        arraydegree:{
            describe:"add your degree",
            demandOption:true,
            type:array
        }

    },
    handler:(x)=>{
        PersonsData.allPersonsData (x.id, x.fname , x.lname,x.age , x.city,x.arraydegree);
    }

})

yargs.command({
    command:"delete",
    describe:"you are already deleting",
    handler:(y)=>{
        PersonsData.deletedata(y.id);
    }
})

yargs.command({
    command:"read",
    describe:"you can read all data from here",
    builder:{
        id:{
            describe:"add id",
            demandOption:true,
            type:"string"
        }
    },
    handler:(x)=>{
        PersonsData.readdata(x.id)
    }
})

yargs.command({
    command:"list",
    describe:"to coagulate all fname ,age and city",
    handler:()=>{
        PersonsData.datalist()
    }

})
// console.log(yargs.argv);
yargs.parse()


const fs = require ("fs");

const allPersonsData = ( id ,fname , lname , age , city ) =>{

    const persondata = loaddata();

    const duplecateddata = persondata.filter((obj)=>{
        return obj.id===id
    })
    console.log(duplecateddata);
    if(duplecateddata.length == 0){
    persondata.push({
        id:id,
        fname:fname,
        lname:lname,
        age:age,
        city:city
    });
    savealldata(persondata)
}else{
    console.log("ERROR DUPLECATED ID");
}
}
//////////////////////////////////////////////////////////////////////////////////
const loaddata = () =>{
    try {
        const datajson = fs.readFileSync("data.json").toString()
        return JSON.parse (datajson)
    } catch {
        return []
    }
}
///////////////////////////////////////////////////////////////////////////////////////////
const savealldata = (persondata)=>{
    const savealldatajson = JSON.stringify(persondata);
    fs.writeFileSync("data.json",savealldatajson )
}
//////////////////////////////////////////////////////////////////////////////
const deletedata = (id)=>{
    const persondata = loaddata();
    const datatokeep = persondata.filter((obj)=>{
        return obj.id !==id
    })
    console.log(datatokeep);
    savealldata(datatokeep)
}
//////////////////////////////////////////////////////////
const readdata = (id)=>{
    const persondata = loaddata()
    const items = persondata.find((obj)=>{
        return obj.id ==id
    })
    console.log(items);
    savealldata(items)
}
//////////////////////////////////////////////////////////////////

 const datalist = ()=>{
    const persondata = loaddata()

     persondata.forEach((obj) => {
        console.log(obj.fname, obj.age , obj.city);
    })

 }



module.exports={
   allPersonsData,
   deletedata,
   readdata,
   datalist
}
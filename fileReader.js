const fs=require('fs');
class Reader{
    readFile(file){
        try{
            return fs.readFileSync(file,'utf8').trim();
        }
        catch(error){
            console.error(error);
        }
        return null;
    }
}

module.exports=Reader;
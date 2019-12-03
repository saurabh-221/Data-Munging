const Reader=require('./fileReader');
const reader=new Reader();

class Weather{
    static parseWeather(){
        var data=reader.readFile('./weather.dat').split('\n').slice(2);
        var mapSplit=data.map(line=> line.trim().split(/\s+/))
        return mapSplit.map(line=>({day:Number(line[0]),maximum:parseInt(line[1]),minimum:parseInt(line[2]),
        }));
    }

    static get smallestSpread(){
        const parsed=this.parseWeather();
        return parsed.sort((day1,day2)=> (day1.maximum-day1.minimum)-(day2.maximum-day2.minimum))[0];
    }
}
module.exports=Weather;
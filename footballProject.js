const Reader=require('./fileReader');
const reader=new Reader();

class Football{
    static footballData(){
        const data=reader.readFile('./football.dat').split('\n').slice(1);
        return data.slice(0,17).concat(data.slice(18));
    }

    static parseFootball(){
        const foot=this.footballData();
        const data=foot.map(line=> line.replace('-','').split(/\s+/));
        return data.map(line=>({team:line[2],goalsFor:parseInt(line[7]),goalsAgainst:parseInt(line[8]),
        }));
    }

    static smallestDifference(){
        const parsed=this.parseFootball();
        return parsed.sort((team1,team2)=> Math.abs(team1.goalsFor-team1.goalsAgainst)-Math.abs(team2.goalsFor-team2.goalsAgainst))[0];
    }
}
module.exports=Football;
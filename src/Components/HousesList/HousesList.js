import React, {Component} from 'react';
import House from '../House/House';
import HouseUnknown from '../../assets/images/unknownHouse.jpg';


class HousesList extends Component{
    state={
        housesApiParam : [362, 229, 378, 285, 398],
        houses : []
    }

    ulStyle={
        padding:'0',
        margin:'0',
    }

    async componentDidMount(){
        let housesApiParamLength=this.state.housesApiParam.length,housesList=[];
        for (let i=0;i<housesApiParamLength;i++){
            let response = await fetch(`https://anapioficeandfire.com/api/houses/${this.state.housesApiParam[i]}`).then(res => res.json());
            housesList.push(response);
        }
        this.setState({
            houses:housesList
        })
        console.log(housesList);
    }

    getHousesBgImage(houseNumber){
        switch(houseNumber){
            case 362:
                return `${process.env.PUBLIC_URL}/Housesimg/starks.jpg`;
            case 229:
                return `${process.env.PUBLIC_URL}/Housesimg/Lannister.jpg`;
            case 378:
                return `${process.env.PUBLIC_URL}/Housesimg/targaryen.jpg`;
            case 285:
                return `${process.env.PUBLIC_URL}/Housesimg/martell.jpg`;
            case 398:
                return `${process.env.PUBLIC_URL}/Housesimg/tyrell.jpg`;        
            default:
                return HouseUnknown;
        }
    }
    
    render(){
        let houses=null;
        if(!this.state.houses.length){
            houses= <p>Loading ...</p>
        }
        else{
            let houseNumberList=this.state.housesApiParam;
            houses =this.state.houses.map((data, index)=>{
                return <House bgimg={this.getHousesBgImage(this.state.housesApiParam[index])} houseName={data.name} swornMembers={data.swornMembers} key={houseNumberList[index]} >

                </House>
            })
        }
        return(
            <div>
                <ul style={this.ulStyle}>
                {houses}
                </ul>
            </div>
        )
    }

}

export default HousesList;
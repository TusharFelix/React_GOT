import React, {Component} from 'react';
import Radium from 'radium';
import Starkcard from '../../assets/images/swornMembersCard/StarkCard.jpg';
import Lannistercard from '../../assets/images/swornMembersCard/lannCard.jpg';
import MartellCard from '../../assets/images/swornMembersCard/martellCrad.jpg';
import Targeriancard from '../../assets/images/swornMembersCard/TargCrad.jpg';
import TyrellCard from '../../assets/images/swornMembersCard/tyrellCard.jpg';

 class SwornMember extends Component {

    state={
        data:null,
    }

    SwornMemberCardStyle = {
        listStyleType :'none',
        minWidth:'230px',
        height:'400px',
        color:'white',
        margin:'20px 15px',
        display:'flex',
        flexDirection :'column',
        fontSize : '26px',
        fontFamily : 'got6',
        position :'relative',
        transition : 'all 0.4s',
        ':hover':{
            cursor:'pointer',
        }
    };

    swornMemberCardBackground={
        height:'350px',
        width:'100%',
        // position:'absolute',
        // top:'0',
        // left:'0',
        // opacity:'0.2'
    }

    swornMemberName={
        fontSize:'23px',
        margin:'10px'
    }

    swornMemberTitle={
        fontSize:'12px',
        fontFamily:'got1',
        marginBottom:'5px'
    }

    swornMemberDetailsWrap={
        minHeight:'100px',
        border :'2px solid #ffffff',
    }

    getHouseCardColor = () => {
        switch (this.props.houseName){
            case 'House Tyrell of Highgarden': 
                return ['#214810','#dccc3b', TyrellCard];
            case 'House Stark of Winterfell':
                return ['#3b3b3b', '#c4c4c2', Starkcard];
            case 'House Lannister of Casterly Rock':
                return ['#5b130e', '#ef8e07', Lannistercard];
            case "House Targaryen of King's Landing":
                return ['#000000', '#b93027', Targeriancard];
            case "House Nymeros Martell of Sunspear":
                return ['#8e4b01', '#ffffff', MartellCard];
            default:return [];
        }
    }

    async componentDidMount (){
        const data= await fetch(`${this.props.swornMemberApi}`).then(res => res).then(res=> res.json());
        this.setState({
            data:{...data}
        })
    }

    render(){
        let swornMemberCard;
        if(this.state.data){
            swornMemberCard=<li style={this.SwornMemberCardStyle}>
                    <div style={this.swornMemberCardBackground}>

                    </div>
                    <div style={this.swornMemberDetailsWrap}>
                        <h2 style={this.swornMemberName} >{this.state.data.name}</h2>
                        <p style={this.swornMemberTitle } >{this.state.data.titles[0]}</p>
                    </div>
                </li >
            let [bgcolor, textcolor, backgroundImage] = this.getHouseCardColor();
            this.swornMemberCardBackground.background='url('+backgroundImage+') 0% 0% / cover no-repeat' ;
            this.SwornMemberCardStyle.color=textcolor;
            this.swornMemberDetailsWrap.backgroundColor=bgcolor;
        }
        else{
            swornMemberCard=null;
        }
        return(
            <React.Fragment>
                {swornMemberCard}
                {/* <span style={{fontFamily:'got' , color:'white'}}>  ojsjslkjd </span> */}
            </React.Fragment>
        )
    }
}

export default Radium(SwornMember);
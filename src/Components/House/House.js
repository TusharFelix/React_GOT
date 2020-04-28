import React, {Component} from 'react';
import styled from 'styled-components';
import SwornMember from '../SwornMember/SwornMember';

class House extends Component{

    constructor(){
        super()
        this.swornMemberData="";
    }

     StyledList=styled.li`
        min-height:100vh;
        background:url("${props => props.bgimg}") fixed no-repeat;
        width:100%;
        background-size:cover;
        list-style-type:none;
        display:flex;
        align-items:center;
    `;

    SwornMembersList=styled.ul`
        display:flex;
        overflow-x:auto;
        white-space:nowrap;
        width:65%;
     `;

    HouseName=styled.h1`
        font-family:got6;
        background-color:grey;
        font-size:30px;
        width:35%;
    `;

    //Promise.all implementation


    // async componentDidMount(){
    //     // this.swornMember
    //     let final=[]
    //     this.props.swornMembers.slice(0,6).map((data)=>{
    //         final.push(fetch(`${data}`))            
    //     })
    //     // console.log(final)
    //     let swornMembersJson = await Promise.all(final);
    //     console.log(await swornMembersJson[0].json());
    // }
    
    render(){
        let swornMembersList = this.props.swornMembers.slice(0,5).map((data)=>{
            let keyId=(data.split("/")[5]);
            return <SwornMember swornMemberApi={data} key={keyId} houseName={this.props.houseName}/>
        })
        return(
            <this.StyledList bgimg={this.props.bgimg} >
                <this.HouseName>{this.props.houseName} </this.HouseName>
                <this.SwornMembersList>
                    { swornMembersList }
                </this.SwornMembersList>
            </this.StyledList>
        )
    }
}

export default House;
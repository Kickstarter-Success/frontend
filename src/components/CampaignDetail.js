import React, {useState, useEffect}from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Campaign = styled.div`
    display: flex;
`


const CampaignDetail = (props) => {

    const sampleObj = {
        "id": 1,
        "user_id": 1,
        "campaignName": "Test_Project_1",
        "categories": "Games",
        "description": "Put the decription here and bla bla bla.",
        "monetaryGoal": 100000,
        "duration": 30,
        "country": "USA"
    }

    const [kickObj, setKickObj] = useState([])
    const [kickUrl, setKickUrl] = useState('')

    useEffect(()=>{
    
        axios
        .get(kickUrl)
        .then(res=>{
            if (Array.isArray(res.data)){//res.data is an array when /all is called **everything is shown**
                setKickObj(res.data)// therefore this state setter is need
            }else{
                setKickObj([ ...kickObj, res.data ])// otherwise we need to put individual objects into list for map to work
            }
        })
        .catch(error=>console.log(error))
    },[kickUrl]//useEffect will run when kickUrl is updated
)


if (!kickUrl) { //This block of code will determine what path was used to get to this component and will run only if kickUrl is empty
    if(props.match.params.user){
    const user = props.match.params.user;
    const id = props.match.params.id;
    setKickUrl(`https://kickstarter-backend.herokuapp.com/api/kickstarter/${user}/${id}`) //user/id path
    
}else if (Number(props.match.params.id)){
    const id = props.match.params.id;
    setKickUrl(`https://kickstarter-backend.herokuapp.com/api/kickstarter/${id}`) // id path
    
}else{
    setKickUrl(`https://kickstarter-backend.herokuapp.com/api/kickstarter/all`) // all path
}

  }
    return(
        <div>
            {kickObj.map((obj,indx)=>{
            return(
                <div key={indx}>
                    <h1>{obj.campaignName}</h1>
                    <p>{obj.description}</p>
                    <p>{obj.categories}</p>
                    <p>{obj.monetaryGoal}</p>
                    <p>{obj.duration}</p>
                    <p>{obj.country}</p>
                </div>
            )
            })
            }
        </div>
    )
}
export {CampaignDetail}
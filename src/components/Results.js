import React, { useState, useEffect } from "react";
import axios from "axios";


const output = {
	results: "int(result[0])",
	custom_stats: {
		1: "custom_results1",
		2: "custom_results2",
		3: "custom_results3",
		4: "custom_results4",
		5: "custom_results5",
		6: "custom_results6"
	}
};

const Data = [
    {
        "id": 1,
        "user_id": 1,
        "campaignName": "Test_Project_1",
        "categories": "Games",
        "description": "Put the decription here and bla bla bla.",
        "monetaryGoal": 100000,
        "duration": 30,
        "country": "USA"
    },
]
function Results() {
    const [results, setResults] = useState({});
    const [campaign, setCampaign] = useState([]);

	useEffect(() => {
        // axios.all([
        //     axios.get('#'),
        //     axios.get('#')
        //   ])
        //   .then(axios.spread((resultsData, campaignData) => {
        //     setResults(resultsData)
        //     setCampaign(campaignData)
        //   }));
          
        setResults(output.custom_stats);
        setCampaign(Data[0]);
	}, []);

	return (
		<>
			{/* {
            Object.keys(results).map((detail)=>(
                <div>{results[detail]}</div>
            ))
        } */}
			<div>
				<p>
                {results[1]} of campaigns raising more than {campaign.monetaryGoal} have been successful
                </p>
			</div>
            <div>
				<p>
                {results[2]}% of campaigns in {campaign.categories} are successful
                </p>
			</div>
            <div>
				<p>
                Campaigns in {campaign.categories} raise an average of ${results[3]} successfully    
                </p>
			</div>
            <div>
				<p>
                Successful campaigns raising over {campaign.monetaryGoal} have an average duration of {results[4]} days
                </p>
			</div>
            <div>
				<p>
                Campaigns raising {campaign.monetaryGoal} have an average number of {results[5]} backers 
                </p>
			</div>
            <div>
				<p>
                Successful campaigns in {campaign.categories} raise an average of {results[6]} above their goal
                </p>
			</div>
		</>
	);
}

export default Results;

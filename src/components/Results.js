import React, { useState, useEffect } from 'react'
import axios from 'axios'

const output = {
    'results': 'int(result[0])',
    'custom_stats': {
        1: 'custom_results1',
        2: 'custom_results2',
        3: 'custom_results3',
        4: 'custom_results4',
        5: 'custom_results5',
        6: 'custom_results6'
    }
}

function Results(){
    const [results, setResults] = useState({});
    
    useEffect(()=>{
        // axios.get('#')
        // .then((res)=>{
        //     setResults(res.data)
        // })
        // .catch((err)=>{
        //     console.log(err)
        // })
        setResults(output)
    },[]);

// these are the questions we will answer 
// # {####} of campaigns raising more than {persons amount} have been successful
// # {##}% of campaigns in {persons category} are successful
// # campaigns in {persons category} raise an average of {$$$} successfully

// # successful campaigns raising over {persons amount} have an average duration of {##} days
// # campaigns raising (persons amount) have an average number of {####} backers
// # successful campaigns in {persons category} raise an average of {$$$$} above their goal
    
    return(
        <>
        <div></div>

        </>
    );
};

export default Results;
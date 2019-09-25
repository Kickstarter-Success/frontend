import React, { useState, useEffect } from "react";
import { withFormik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import CampaginCard from "./CampaignCard";


function SearchCampaignForm({ status, values, isSubmitting }) {
	const [foundCampaign, setFoundCampaign] = useState([]);

	useEffect(() => {
		if (status) {
            setFoundCampaign(status);
		}
    }, [status, foundCampaign]);
    

	return (
		<>
			<h1>Search Campaign</h1>
			<Form>
				<Field type='text' name='campaignName' placeholder='Campaign Name' />
				<br />
				<ErrorMessage name='campaignName' />
				<br />

				<Field component='select' name='category' placeholder='Category'>
					<option>Select A Category</option>
					<option value='Games'>Games</option>
				</Field>
				<br />

				<Field
					type='number'
					name='monetaryGoal'
					placeholder='Monetary Goal Amount'
				/>
				<br />

				<br />
				<Field component='select' name='country' placeholder='Country'>
					<option>Select A Country</option>
					<option value='USA'>USA</option>
					<option value='CHINA'>CHINA</option>
					<option value='RUSSIA'>RUSSIA</option>
				</Field>
				<br />
				
		
				<button type='submit' disabled={isSubmitting}>
					Search
				</button>
			</Form>
            {
                foundCampaign.map(campaign => (
				<CampaginCard key={campaign.id} campaign={campaign}/>
            ))
            
            }
		</>
	);
}

export default withFormik({
	mapPropsToValues({
		campaignName,
		category,
		monetaryGoal,
		country,

	}) {
		return {
			campaignName: campaignName || "",
			category: category || "",
			monetaryGoal: monetaryGoal || "",
			country: country || "",
		};
	},
	handleSubmit(values, { setStatus, resetForm, setErrors, setSubmitting }) {
		axios
			.get("https://kickstarter-backend.herokuapp.com/api/kickstarter/all", values)
			.then(res => {
                const filteredAPIData = res.data.filter((dataSet)=>{
                   return  dataSet.country.includes(values.country) && dataSet.categories.includes(values.category) && dataSet.campaignName.includes(values.campaignName) && dataSet.monetaryGoal.toString().includes(values.monetaryGoal.toString()) ;
                });
                setStatus(filteredAPIData);
				resetForm();
				setSubmitting(false);
			})
			.catch(err => {
				console.log(err);
				setSubmitting(false);
			});
	}
})(SearchCampaignForm);


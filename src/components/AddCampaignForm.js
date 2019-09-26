import React, { useEffect, useState } from "react";
import { withFormik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { connect } from 'react-redux';
import { addCampaign, editCampaign } from '../store/actions/campaignAction'
import Loader from 'react-loader-spinner';
import { category, countries } from '../dropDownData';

function AddCampaignForm({ status, values, ...props }) {
	useEffect(() => {
		if (props.activeCampaign) {
			props.setValues(props.activeCampaign)
		}
	}, [props.activeCampaign]);

	if(props.isLoading) {
		return (
		<>
		<Loader type='Puff' color='#05ce78' height={60} width={60}/>
		</>)
	}

	const fuck =Object.keys(category);
	const off = Object.keys(countries);

	return (
		<>
			<h1>{props.activeCampaign ? 'Edit Campaign' : 'Add New Campaign'}</h1>
			<Form>
	
				<Field type='text' name='campaignName' placeholder='Campaign Name' />
				<br />
				<ErrorMessage name='campaignName' />
				<br/>

				<Field component='select' name='categories' placeholder='Categories'>
					<option>Select A Category</option>
					{
						fuck.map((cunt)=>(<option value={cunt}>{cunt}</option>))
					}
				</Field>
				<br />
				<ErrorMessage name='categories' />
				<br/>
	
				<Field type='text' name='description' placeholder='Description' />
				<br />
				<ErrorMessage name='description' />
				<br />
				<Field type='number' name='monetaryGoal' placeholder='Fundraising Goal Amount' />
				<br />
				<ErrorMessage name='monetaryGoal' />
				<br />
				<Field component='select' name='country' placeholder='Country'>
					<option>Select A Country</option>
					{
						off.map((bitch)=>(<option value={bitch}>{bitch}</option>))
					}
				</Field>
				<br />
				<ErrorMessage name='country' />
				<br />
				<Field
					type='number'
					name='duration'
					placeholder='Duration of Campaign'
				/>
				<br />
				<ErrorMessage name='duration' />
				<br />
				<button type='submit'>Submit</button>
			</Form>
		</>
	);
}

const FormikAddCampaignForm =  withFormik({
	mapPropsToValues({
		campaignName,
		categories,
		description,
		monetaryGoal,
		country,
		duration
	}) {
		return {
			campaignName: campaignName || '',
			categories: categories || "",
			description: description || "",
			monetaryGoal: monetaryGoal || '',
			country: country || "",
			duration: duration || ""
		};
	},
	validationSchema: Yup.object().shape({
		campaignName: Yup.string()
			.min(2, "Name must be 2 characters or longer")
			.required("Name is required"),
		categories: Yup.string()
			.required("Category is required"),
		description: Yup.string()
			.min(8, "Description must be more than 8 character")
			.required("Description is required"),
		monetaryGoal: Yup.number()
			.moreThan(100, "Your goal must be more than 100$ USD")
			.required("Fundraising goal is required"),
		country: Yup.string()
			.required("Country selection is required"),
		duration: Yup.number().required("Length of campaign is required")
	}),

	handleSubmit(values, { props }) {
		if(props.activeCampaign) {
			props.editCampaign(values, props.history, props.activeCampaign.id);
		} else {
		let user_id = localStorage.getItem('user_id');
		props.addCampaign(values, props.history, user_id)
	}}
})(AddCampaignForm);

const mapStateToProps = state => {
	return {
		campaigns: state.campaign.campaigns,
		activeCampaign: state.campaign.activeCampaign,
		error: state.campaign.error,
		isLoading: state.campaign.isLoading,
	}
};

export default connect(mapStateToProps, { addCampaign, editCampaign })(FormikAddCampaignForm)
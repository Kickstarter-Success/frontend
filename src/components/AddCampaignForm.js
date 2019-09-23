import React, { useState, useEffect } from "react";
import { withFormik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

function AddCampaignForm({ status, values, isSubmitting }) {
	const [campaign, setCampaign] = useState([]);

	useEffect(() => {
		if (status) {
			setCampaign([...campaign, status]);
		}
	}, [status, campaign]);

	return (
		<>
			<h1>Add New Campaign</h1>
			<Form>
	
				<Field type='text' name='campaignName' placeholder='Campaign Name' />
				<br />
				<ErrorMessage name='campaignName' />
				<br/>

				<Field component='select' name='category' placeholder='Category'>
					<option>Select A Category</option>
					<option value='tech'>Tech</option>
					<option value='health'>Health</option>
					<option value='education'>Education</option>
				</Field>
				<br />
				<ErrorMessage name='category' />
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
					<option value='US'>US</option>
					<option value='UK'>UK</option>
					<option value='China'>China</option>
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
				<button type='submit' disabled={isSubmitting}>
					Submit
				</button>
			</Form>
		</>
	);
}

export default withFormik({
	mapPropsToValues({
		campaignName,
		category,
		description,
		monetaryGoal,
		country,
		duration
	}) {
		return {
			campaignName: campaignName || '',
			category: category || "",
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
		category: Yup.string()
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
	handleSubmit(values, { setStatus, resetForm, setErrors, setSubmitting }) {
		axios
			.post("https://reqres.in/api/users", values)
			.then(res => {
				setStatus(res.data);
				console.log(res);
				console.log('hello');
				resetForm();
				setSubmitting(false);
			})
			.catch(err => {
				console.log(err);
				console.log('bye');
				setSubmitting(false);
			});
	}
})(AddCampaignForm);

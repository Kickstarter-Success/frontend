import React, { useEffect, useState } from "react";
import { withFormik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { connect } from 'react-redux';
import { addCampaign } from '../store/actions/campaignAction'
import {H1,WhiteButton, ColoredButton, Card, P, H2, H3} from './style'
import styled from 'styled-components'

const InputWrapper = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-content:space-between;
padding: 4%;
width: 100%;
`
const IWChild = styled.div`
margin: 2% 0;
width: 100%;
`
const Div = styled.div`
display:flex;
justify-content: space-evenly;
width:60%;
margin 0 auto;
align-content: center;
align-items:center ;

`

function AddCampaignForm({ status, values, ...props }) {
	const [campaign, setCampaign] = useState([]);

	useEffect(() => {
		if (status) {
			setCampaign([...campaign, status]);
		}
	}, [status, campaign]);

	return (
		<Card>
			<H1>Add New Campaign</H1>
			<Form>
				
				<InputWrapper>	
					<IWChild>
						<Field className='inputForm' type='text' name='campaignName' placeholder='Campaign Name' />
						
						<ErrorMessage name='campaignName'>{msg => <P fail>{msg}</P>}</ErrorMessage>
						
					</IWChild>
					<IWChild>
						<Field className='inputForm' component='select' name='categories' placeholder='Categories'>
							<option>Select A Category</option>
							<option value='tech'>Tech</option>
							<option value='health'>Health</option>
							<option value='education'>Education</option>
						</Field>
						
						<ErrorMessage name='categories'>{msg => <P fail>{msg}</P>}</ErrorMessage>
						
			
					</IWChild>
					<IWChild>
						<Div>
						<H2>$: </H2>
							<Field className='inputForm money' type='number' name='monetaryGoal' placeholder='Fundraising Goal Amount' />
						</Div>
						<ErrorMessage name='monetaryGoal'>{msg => <P fail>{msg}</P>}</ErrorMessage>
					</IWChild>
					<IWChild>
	
						<Field className='inputForm' component='select' name='country' placeholder='Country'>
							<option>Select A Country</option>
							<option value='US'>US</option>
							<option value='UK'>UK</option>
							<option value='China'>China</option>
						</Field>
					
						<ErrorMessage name='country'>{msg => <P fail>{msg}</P>}</ErrorMessage>				
					
						
					</IWChild>
					<IWChild>
					<Div>
					<H2 classename='days'>Days: </H2>
						<Field
							className='inputForm' 	
							type='number'
							name='duration'
							placeholder='Duration of Campaign'/>
						
					</Div>
						<ErrorMessage name='duration'>{msg => <P fail>{msg}</P>}</ErrorMessage>
					</IWChild>
					<IWChild>
						<Field className='inputForm' type='text' component='textarea' name='description' placeholder='Description' />
					
						<ErrorMessage name='description'>{msg => <P fail>{msg}</P>}</ErrorMessage>				
						
					</IWChild>
				</InputWrapper>
				<ColoredButton type='submit'>
					{props.isLoading ? "..." : 'Submit'}
				</ColoredButton>
			</Form>
		</Card>
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
		duration: Yup
		.number().required("Length of campaign is required")
		.min(1, "Must be at least 1 day")
	}),

	handleSubmit(values, { props }) {
		let user_id = localStorage.getItem('user_id');
		props.addCampaign(values, props.history, user_id)
	}
})(AddCampaignForm);

const mapStateToProps = state => {
	return {
		campaigns: state.campaign.campaigns,
		error: state.campaign.error,
		isLoading: state.campaign.isLoading,
	}
};

export default connect(mapStateToProps, { addCampaign })(FormikAddCampaignForm)
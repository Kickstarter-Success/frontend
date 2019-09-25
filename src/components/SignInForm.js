import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../store/actions/authAction'
import * as Yup from 'yup';
import { withFormik, Form, Field } from 'formik';

import styled from 'styled-components'

const Card = styled.div`
display: flex;
flex-direction: column;
justify-center: center;
align-content: center;
align-items: center;
margin: 10% auto;
box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
padding: 4% 0;
width: 25%
background-color: white;
`
//deleting background color

const inputs = document.getElementsByClassName('inputField')
inputs.style = 'margin: 2% auto;'

const SignInForm = ({ errors, touched, ...props }) => {
    return(
        <div>
            <Form>
                <Card>
                    <h2>Sign In</h2>
                    <Field className='inputField' type='text' name='username' placeholder='username'/>
                    {touched.username && errors.username && (<p className='error'>{errors.username}</p>)}
                    <Field className='inputField' type='password' name='password' placeholder='password'/>
                    {touched.password && errors.password && (<p className='error'>{errors.password}</p>)}
                    <button type='submit'>{props.isLoading ? '...' : 'Sign in'}</button>
                    <p>Don't have an account yet?</p>
                    <Link className='button' to={'/signup'}>Sign Up!</Link>
                </Card>
            </Form>
        </div>
    )
}

const FormikSignInForm = withFormik({
    mapPropsToValues({username, password}){
        return{
            username: username || "",
            password: password || ""
        };
    },
    validationSchema: Yup.object().shape({
        username:Yup.string().required(),
        password:Yup.string().required()
    }),
    handleSubmit(values, {resetForm, props}){
        props.login(values, props.history);
        resetForm();
    }
})(SignInForm)

const mapStateToProps = state => {
    return {
        isLoading: state.auth.isLoading,
        error: state.auth.error
    }
}

export default connect(mapStateToProps, { login })(FormikSignInForm)
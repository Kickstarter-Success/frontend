import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../store/actions/authAction';
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

const NewUserForm = ({ errors, touched, ...props }) => {  
    return(
        <div>
            <Form>
                <Card>
                    <h2>Sign Up</h2>
                    <Field type='text' name='username' placeholder='username'/>
                    {touched.username && errors.username && (<p className='error'>{errors.username}</p>)}
                    <Field type='password' name='password' placeholder='password'/>
                    {touched.password && errors.password && (<p className='error'>{errors.password}</p>)}
                    <button type='submit'>{props.isLoading ? '...' : 'Sign Up'}</button>
                    <p>Already Have an Account?</p>
                    <Link to={'/login'}>Sign In!</Link>
                </Card>
            </Form>
        </div>
    )
}

const FormikNewUserForm = withFormik({
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

    handleSubmit(values, { props }){
        let user = {
            username: values.username,
            password: values.password
        };
        props.register(user, props.history)
    }
})(NewUserForm)

const mapPropstoState = state => {
    return {
        isLoading: state.auth.isLoading,
        error: state.auth.error
    }
}

export default connect(mapPropstoState, { register })(FormikNewUserForm);
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../store/actions/authAction'
import * as Yup from 'yup';
import { withFormik, Form, Field } from 'formik';
import {H1, ColoredButton, Card, P} from './style'

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
`

const inputs = document.getElementsByClassName('inputField')
inputs.style = 'margin: 2% auto;'

const SignInForm = ({ errors, touched, ...props }) => {
    return(
        <div>
            <Form>
                <Card>
                    <H1>Sign In</H1>
                    <InputWrapper>
                    <IWChild>
                        <Field className='inputField' type='text' name='username' placeholder='username'/>
                        {touched.username && errors.username && (<P fail className='error'>{errors.username}</P>)}
                    </IWChild>
                    <IWChild>
                        <Field className='inputField' type='password' name='password' placeholder='password'/>
                        {touched.password && errors.password && (<P fail className='error'>{errors.password}</P>)}
                    </IWChild>
                    <IWChild>
                        <ColoredButton type='submit'>{props.isLoading ? '...' : 'Sign in'}</ColoredButton>
                    </IWChild>
                    </InputWrapper>
                    <P>Don't have an account yet?</P>
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
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../store/actions/authAction';
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

const NewUserForm = ({ errors, touched, ...props }) => {  
    return(
        <div>
            <Form>
                <Card>
                    <H1>Sign Up</H1>
                    <InputWrapper>
                    <IWChild>
                    <Field type='text' name='username' placeholder='username'/>
                    {touched.username && errors.username && (<P fail className='error'>{errors.username}</P>)}
                    </IWChild>
                    <IWChild>
                    <Field type='password' name='password' placeholder='password'/>
                    {touched.password && errors.password && (<P fail className='error'>{errors.password}</P>)}
                    </IWChild>
                    <IWChild>
                    <ColoredButton type='submit'>{props.isLoading ? '...' : 'Sign Up'}</ColoredButton>
                    </IWChild>
                    </InputWrapper>
                    <P>Already Have an Account?</P>
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
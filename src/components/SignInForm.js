import React, {useState, useEffect} from 'react'
import axios from 'axios'
import * as Yup from 'yup'
import {withFormik, Form, Field} from 'formik'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Card = styled.div`
display: flex;
flex-direction: column;
justify-center: center;
align-content: center;
align-items: center;
margin: 10% auto;
`

const SignInForm = ({errors, touched, status}) => {
    return(
        <div>
            <Form>
                <Card>
                    <h2>Sign In</h2>
                    <Field type='text' name='username' placeholder='username'/>
                    {touched.username && errors.username && (<p className='error'>{errors.username}</p>)}
                    <Field type='password' name='password' placeholder='password'/>
                    {touched.password && errors.password && (<p className='error'>{errors.password}</p>)}
                    <button type='submit'>Sign Up</button>
                    <p>Don't have an account yet?</p>
                    <Link to={'/sign_up'}>Sign Up!</Link>
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
    handleSubmit(values, {setStatus}){
        console.log('hello')
        axios
          .post("https://reqres.in/api/users/", values)
          .then(res => {
            console.log("https://reqres.in/api/users/", values)
            setStatus(res.data);
          })
          .catch(err => console.log(err.res));
    }
})(SignInForm)

export {FormikSignInForm}
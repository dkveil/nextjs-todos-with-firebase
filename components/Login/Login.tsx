import { useFormik } from 'formik';
import React from 'react';
import { Container } from '../../containers/container';
import { ContentWrapper, SectionWrapper } from './Login.styles';
import * as Yup from 'yup';

const Login = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (values, { setErrors }) => {
            alert(JSON.stringify(values));
            setErrors({});
        },
        validationSchema: Yup.object().shape({
            email: Yup.string().email().required().min(2, ''),
            password: Yup.string().required().min(2, ''),
        }),
        validateOnBlur: false,
        validateOnChange: false,
    });

    const { handleSubmit, values, handleChange, errors } = formik;

    return (
        <SectionWrapper>
            <Container>
                <ContentWrapper>
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        {Object.keys(errors).length > 0 ? <div className="error">Please enter a correct email and password</div> : null}
                        <input id="email" type="email" value={values.email} onChange={handleChange} />
                        <input id="password" type="password" value={values.password} onChange={handleChange} />
                        <button type="submit">login</button>
                    </form>
                </ContentWrapper>
            </Container>
        </SectionWrapper>
    );
};

export default Login;

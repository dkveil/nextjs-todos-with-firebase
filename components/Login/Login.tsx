import { useFormik } from 'formik';
import React from 'react';
import { Container } from '../../containers/container';
import { ContentWrapper, SectionWrapper } from './Login.styles';
import * as Yup from 'yup';

interface FormModel {
    email: string;
    password: string;
    confirmPassword?: string;
}

const Login = () => {
    const [isLoginForm, setIsLoginForm] = React.useState<boolean>(true);

    const changeLoginForm = () => setIsLoginForm((prev) => !prev);

    const initValues = {
        email: '',
        password: '',
    };

    const confirmPasswordValue = {
        confirmPassword: '',
    };

    const validateSchema = {
        email: Yup.string().email().required().min(2, ''),
        password: Yup.string().required().min(2, ''),
    };

    const confirmPasswordSchema = {
        confirmPassword: Yup.string()
            .required()
            .oneOf([Yup.ref('password')]),
    };

    const formik = useFormik<FormModel>({
        initialValues: isLoginForm ? initValues : Object.assign({}, initValues, confirmPasswordValue),
        onSubmit: (values, { setErrors }) => {
            if (isLoginForm) {
            } else {
            }
            alert(JSON.stringify(values));
            setErrors({});
        },
        validationSchema: Yup.object().shape(isLoginForm ? validateSchema : Object.assign({}, validateSchema, confirmPasswordSchema)),
        validateOnBlur: false,
        validateOnChange: false,
    });

    const { handleSubmit, values, handleChange, errors } = formik;

    return (
        <SectionWrapper>
            <Container>
                <ContentWrapper>
                    <h2>{isLoginForm ? 'Login' : 'Register'}</h2>
                    <form onSubmit={handleSubmit}>
                        {Object.keys(errors).length > 0 ? <div className="error">Please enter a correct email and password</div> : null}
                        <input id="email" type="email" value={values.email} onChange={handleChange} placeholder="email" />
                        <input id="password" type="password" value={values.password} onChange={handleChange} placeholder="password" />
                        {!isLoginForm && (
                            <input
                                id="confirmPassword"
                                type="password"
                                value={values.confirmPassword}
                                onChange={handleChange}
                                placeholder="confirm password"
                            />
                        )}
                        <button type="submit">{isLoginForm ? 'login' : 'register'}</button>
                    </form>
                    <h3 onClick={changeLoginForm}>{isLoginForm ? 'Create an account' : 'Log in'}</h3>
                </ContentWrapper>
            </Container>
        </SectionWrapper>
    );
};

export default Login;

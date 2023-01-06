import { useFormik } from 'formik';
import React from 'react';
import { Container } from '../../containers/container';
import { ContentWrapper, SectionWrapper } from './Login.styles';
import * as Yup from 'yup';
import { useAuthContext } from '../../context/AuthContext';

interface FormModel {
    email: string;
    password: string;
    confirmPassword?: string;
}

const Login = () => {
    const [isLoginForm, setIsLoginForm] = React.useState<boolean>(true);
    const [error, setError] = React.useState<string | undefined>(undefined);
    const { handleLogin, handleRegister } = useAuthContext();

    const changeLoginForm = () => setIsLoginForm((prev) => !prev);

    const validateSchema = {
        email: Yup.string().email().required(),
        password: Yup.string().required().min(6, 'Your password is too short'),
    };

    const confirmPasswordSchema = {
        confirmPassword: Yup.string()
            .required()
            .oneOf([Yup.ref('password')]),
    };

    const formik = useFormik<FormModel>({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
        },
        onSubmit: async (values, { setErrors }) => {
            const { email, password } = values;

            if (isLoginForm) {
                try {
                    await handleLogin(email, password);
                } catch (error) {
                    setError('Incorrect email or password');
                }

                setErrors({});
                return;
            }

            try {
                await handleRegister(email, password);
            } catch (error) {
                setError('sss');
            }
            setErrors({});
        },
        validationSchema: Yup.object().shape(isLoginForm ? validateSchema : Object.assign({}, validateSchema, confirmPasswordSchema)),
        validateOnBlur: false,
        validateOnChange: false,
        enableReinitialize: true,
    });

    const { handleSubmit, values, handleChange, errors } = formik;

    React.useEffect(() => {
        if (Object.keys(errors).length > 0) {
            setError(isLoginForm ? 'Please enter a correct email and password' : 'Please complete the registration form correctly');
        }
    }, [errors]);

    return (
        <SectionWrapper>
            <Container>
                <ContentWrapper>
                    <h2>{isLoginForm ? 'Login' : 'Register'}</h2>
                    <form onSubmit={handleSubmit}>
                        {error ? <div className="error">{error}</div> : null}
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

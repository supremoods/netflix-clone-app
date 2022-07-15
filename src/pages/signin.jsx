import React, {useState, useEffect} from 'react'
import FooterContainer from '../container/footer';
import HeaderContainer from '../container/header';
import Header from '../components/header';
import Form from '../components/form';
import { ShowPassword } from '../components/form/styles/form';

const Signin = () => {
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [emailFilled, isEmailFilled] = useState(false);
    const [passwordFilled, isPasswordFilled] = useState(false);


    // check form input elementss are valid
    // email & password

    useEffect(() =>{
        emailAddress !== "" ? isEmailFilled(true) : isEmailFilled(false);
        password !== "" ? isPasswordFilled(true) : isPasswordFilled(false);
    }, [emailAddress, password]);

    const FocusHandlerEmail = (e) => {
        emailAddress !== "" ? isEmailFilled(true) : isEmailFilled(false);
        setEmailAddress(e.target.value)
    }

    const FocusHandlerPassword = (e) => {
        password !== "" ? isPasswordFilled(true) : isPasswordFilled(false);
        setPassword(e.target.value)
    }

    const handleSignIn = (e) => {
        e.preventDefault();

    };

    const labelEmail = () =>{

    }

    return (
        <>
            <HeaderContainer>
                <Form>   
                    <Form.Title   onClick={()=> console.log('clicked')} >Sign In</Form.Title>
                    {error  && <Form.Error>{error}</Form.Error>}
                    <Form.Base onSubmit={handleSignIn} method="POST">
                        <Form.Fieldset>
                            <Form.Input
                                type="text"
                                value={emailAddress}
                                onChange={FocusHandlerEmail}
                                emailFilled={emailFilled}
                                // ref={emailInput}
                            />
                            <Form.Label onClick={labelEmail} emailFilled={emailFilled} >Email or phone number</Form.Label>
                        </Form.Fieldset>
                        <Form.Fieldset>
                            <Form.Input
                                type="password"
                                value={password}
                                onChange={FocusHandlerPassword}
                                passwordFilled={passwordFilled}
   
                            />
                            <Form.Label passwordFilled={passwordFilled}>Password</Form.Label>
                            <ShowPassword>SHOW</ShowPassword>
                        </Form.Fieldset>
                        <Form.Submit type="submit">
                            Sign In
                        </Form.Submit>
                    </Form.Base>
                    <Form.Text>
                        New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
                    </Form.TextSmall>
                </Form>
                <Header.Gradient/>
            </HeaderContainer>
            <FooterContainer/>
        </>
    )
}

export default Signin

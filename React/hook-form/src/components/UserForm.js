import React, {useState} from 'react';

// const UserForm = (props) => {
//     const{inputs, setInputs} = props;

//     const onChange = (event)  =>{
//         setInputs({inputs, 
//             [event.target.name]: event.target.value
//         })
//     }

//     return(
//         <form>
//             <h2>Form</h2>
//             <div className = "form-group">
//                 <label htmlFor = "firstName">First Name</label>
//                 <input onChange = {onChange} type = "text" name = "firstName"/>
//             </div>

//             <div className = "form-group">
//                 <label htmlFor = "lastName">Last Name</label>
//                 <input onChange = {onChange} type = "text" name = "lastName"/>
//             </div>

//             <div className = "form-group">
//                 <label htmlFor = "email">Email</label>
//                 <input onChange = {onChange} type = "text" name = "email"/>
//             </div>

//             <div className = "form-group">
//                 <label htmlFor = "password">Password</label>
//                 <input onChange = {onChange} type = "password" name = "password"/>
//             </div>

//             <div className = "form-group">
//                 <label htmlFor = "confirmPassword">Confirm Password</label>
//                 <input onChange = {onChange} type = "password" name = "confirmPassword"/>
//             </div>
//         </form>
//     )
// };
    
// export default UserForm;

////////////////////////////////////////////////////////////////////////////////////////////////


const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);
        setHasBeenSubmitted(true);
    };

    const firstNameValid = input => {
        setFirstName(input.target.value);
    }

    // const formMessage = () => {
    //     if(hasBeenSubmitted) {
    //         return "Thank you for submitting the form!";
    //     } else {
    //         return "Welcome, please complete the form.";
    //     }
    // }

    const validateFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFirstNameError("First Name is required!");
        } else if(e.target.value.length < 2) {
            setFirstNameError("First Name must be at least 2 Characters.");
        } else{
            setFirstNameError('');
        }
    }

    const validateLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLastNameError("Last Name is required!");
        } else if(e.target.value.length < 2) {
            setLastNameError("Last Name must be at least 2 Characters.");
        } else{
            setLastNameError('');
        }
    }

    const validateEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Email is required!");
        } else if(e.target.value.length < 2) {
            setEmailError("Email must be at least 2 Characters.");
        } else{
            setEmailError('');
        }
    }

    const validatePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("Password is required!");
        } else if(e.target.value.length < 2) {
            setPasswordError("Password must be at least 2 Characters.");
        } else{
            setPasswordError('');
        }
    }

    const validateConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value.length < 1) {
            setConfirmPasswordError("Confirm Password is required!");
        } else if(e.target.value.length < 2) {
            setConfirmPasswordError("Confirm Password must be at least 2 Characters.");
        } else{
            setConfirmPasswordError('');
        }
    }



    return(
        <>
            <form onSubmit={ createUser }>
            {
                hasBeenSubmitted ?
                <h3>Thank you for submitting the form!</h3> :
                <h3>Welcome, please complete the form.</h3>
            }
                <div>
                    <label>First Name: </label> 
                    <input type="text" onChange={ firstNameValid } />
                    {
                        firstName.length < 2 ?
                        <p style={{color:'red'}}>First Name must contain more than 2 characters.</p> : ''
                    }
                </div>
                <div>
                    <label>Last Name: </label> 
                    <input type="text" onChange={ validateLastName } />
                    {
                        lastNameError ?
                        <p style={{color:'red'}}>{lastNameError}</p> : ''
                    }
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="email" onChange={ validateEmail } />
                    {
                        emailError ?
                        <p style={{color:'red'}}>{emailError}</p> : ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={ validatePassword } />
                    {
                        passwordError ?
                        <p style={{color:'red'}}>{passwordError}</p> : ''
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={ validateConfirmPassword } />
                    {
                        confirmPasswordError ?
                        <p style={{color:'red'}}>{confirmPasswordError}</p> : ''
                    }
                </div>
                <input type="submit" value="Create User" />
            </form>

            <div>
                <h2>Results</h2>
                <p>First Name: {firstName}</p>
                <p> Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        </>
    );
};
    
export default UserForm;

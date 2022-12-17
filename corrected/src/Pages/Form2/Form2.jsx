import {useEffect, useState} from "react";

const Form2 = () => {
    // console.log('render')
    const [formValues, setFormValues] = useState({name:"", role:"", gender:""})
    const[isSubmitted, setIsSubmitted] = useState(false)
    const [formErrors, setFormErrors] = useState({name: '', role: '', gender: ''})
    const [needValid, setneedValid] = useState(false);

    useEffect( ()=> {
        isSubmitted && validateFields()
    }, [needValid])


    const onFieldChange = (event, key) => {
        console.log('render', formValues)
        setFormValues((prevState) => {
            return{
                ...prevState,
                [key]: event.target.value
            };
        });
        setneedValid(!needValid)
        isSubmitted && validateFields()
    };

    const validateFields = () => {
        Object.keys(formValues).map((key)=>{
            setFormErrors( (prevState) => {
                return{
                    ...prevState,
                    [key]: formValues[key] === "" ? 'Field required' : ''
                };
            });
        });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setIsSubmitted(true);
        validateFields();
        console.log("onSubmit", event)
        console.log(formValues)
    }

    return(
        <div>
            <h1>FORM</h1>
            <form onSubmit={handleFormSubmit}>
            <label>Name:
                <input type="text" name="name" value={formValues.name} onChange={ (event) => onFieldChange(event, "name")}/>
            </label>
            {formErrors.name && <span style={{color: "red"}}>{formErrors.name}</span>}
                <br/>
            <label>Role:
                <input type="text" name="role" value={formValues.role} onChange={ (event)=> onFieldChange(event, "role")}/>
            </label>
                {formErrors.role && <span style={{color: "red"}}>{formErrors.role}</span>}
                <br/>
            <label>Gender:
                <select name="gender" value={formValues.gender} onChange={ (event)=> onFieldChange(event, "gender")}>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </label>
             {formErrors.gender && <span style={{color: "red"}}>{formErrors.gender}</span>}

                <br/>
            <input type="submit" value="submit" />

            </form>
        </div>
    )
}

export default Form2;
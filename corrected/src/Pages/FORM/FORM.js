import {useEffect, useRef, useState} from "react";

// const FORM = () => {
//     // console.log('Render')
//     const [formValues, setFormValues] = useState({name: '', role: '', gender: ''})
//     const [formErrors, setFormErrors] = useState({name: '', role: '', gender: ''})
//     const [needValid, setneedValid] = useState(false);
//
//     const [isSubmitted, setIsSubmitted] = useState(false)// console.log('event', event.target.value )
//
//     useEffect( ()=> {
//         isSubmitted && validateFields()
//     }, [needValid])
//
//     const onFieldChange = (event, key) => {
//
//         console.log('Render', formValues )
//         console.log('Render isSubmitted', isSubmitted )
//         setFormValues ( (prevState)=> {
//             return{
//                 ...prevState,
//                 [key]: event.target.value
//             }
//         })
//         setneedValid(!needValid)
//         isSubmitted && validateFields()
//     }
//
//     const validateFields = () =>{
//         Object.keys(formValues).map((key)=>{
//              setFormErrors( (prevState)=> {
//                 return{
//                     ...prevState,
//                     [key]: formValues[key] === "" ? 'Field required' : ''
//                 }
//             })
//         })
//     }
//     const handleFormSubmit = (event) => {
//         event.preventDefault();
//         setIsSubmitted(true)
//         validateFields();
//         console.log("onSubmit", event)
//     }
//
//     return (
//        <div>
//            <h1>Registration</h1>
//            <form onSubmit={handleFormSubmit}>
//            <label>
//                Username:
//                <input type="text" name="name" value={formValues.name} onChange={ (event)=>onFieldChange(event, "name")}/>
//            </label>
//                {formErrors.name && <span style={{color: "red"}}>{formErrors.name}</span> }
//            <br/>
//            <label>
//                Role:
//                <input type="text" name="role" value={formValues.role} onChange={(event)=>onFieldChange(event, "role")}/>
//            </label>
//                {formErrors.role && <span style={{color: "red"}}>{formErrors.role}</span> }
//                <br/>
//            <label>
//                Gender:
//                <select name="gender" value={formValues.gender} onChange={(event)=>onFieldChange(event, "gender")}>>
//                    <option value="">Select gender</option>
//                    <option value="male">Male</option>
//                    <option value="female">Female</option>
//                    <option value="other">Other</option>
//                </select>
//            </label>
//                {formErrors.gender && <span style={{color: "red"}}>{formErrors.gender}</span> }
//
//                <br/>
//            <input type="submit" value="submit"/>
//            </form>
//        </div>
//
//     )
// }
//
// export default FORM;





const FORM = () => {
    // console.log('Render')
    const [formErrors, setFormErrors] = useState({name: '', role: '', gender: ''})
    const name = useRef(null);
    const role = useRef(null);
    const gender = useRef(null);

    console.log('Render');

    const validateFields = (data) =>{
        Object.keys(data).map((key)=>{
             setFormErrors( (prevState)=> {
                return{
                    ...prevState,
                    [key]: data[key] === "" ? 'Field required' : ''
                }
            })
        })
    }
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const data={
            name: name.current.value,
            role: role.current.value,
            gender: gender.current.value
        }
        validateFields(data);
        // console.log("submit", name.current.value)
    }

    return (
        <div>
            <h1>Registration</h1>
            <form onSubmit={handleFormSubmit}>
                <label>
                    Username:
                    <input type="text" name="name" ref ={name}/>
                </label>
                {formErrors.name && <span style={{color: "red"}}>{formErrors.name}</span> }
                <br/>
                <label>
                    Role:
                    <input type="text" name="role" ref={role}/>
                </label>
                {formErrors.role && <span style={{color: "red"}}>{formErrors.role}</span> }
                <br/>
                <label>
                    Gender:
                    <select name="gender" id="" ref={gender}>
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </label>
                {formErrors.gender && <span style={{color: "red"}}>{formErrors.gender}</span> }

                <br/>
                <input type="submit" value="submit"/>
            </form>
        </div>

    )
}

export default FORM;



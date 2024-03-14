import { useState } from 'react'

function Form(){
    const [count, setCount] = useState(0)

    const [formData, setFormData] = useState({
        name : "",
        email : "",
        pass : "",
        confirmpass : "",
        profession : "",
        notifybox : false,
        exp : ""
    })

    function listen(event){
        const {name, value, type, checked} = event.target
        setFormData((old) => {
            let n = {
                ...old,
                [name] : type==='checkbox' ? checked : value
            }
            return n
        })
    }

    function sub(event){
        event.preventDefault()
        console.log(formData.pass === formData.confirmpass ? "Successfully signed up" : ("passwords to not match"))
        console.log(formData.notifybox ? "Enthusiasm doubled !!" : "")
        console.log(JSON.stringify(formData))
    }
    

    return (
        <form onSubmit={sub}>
            <div className='details'>
                <label htmlFor='name'>Name</label>
                <input type='text' name='name' onChange={listen} value={formData.name}/>
                <label htmlFor='email'>E-mail</label>
                <input type='email' name='email' onChange={listen} value={formData.email}/>
                <label htmlFor='pass'>New Password</label>
                <input type='password' name='pass' onChange={listen} value={formData.pass}/>
                <label htmlFor='confirm-pass'>Confirm Password</label>
                <input type='password' name='confirmpass' onChange={listen} value={formData.confirmpass}/>
            </div>
            <hr></hr>

            <div className='radio'>
                <h4>Your Profession ? </h4>
                <input type='radio' value='Recruiter' onChange={listen} name='profession' />
                <label htmlFor='p1'>Recruiter</label>
                <input type='radio' value='Working Professional' onChange={listen} name='profession'/>
                <label htmlFor='p1'>Working Professional</label>
                <input type='radio' value='Student' onChange={listen} name='profession'/>
                <label htmlFor='p1'>Student</label>
            </div>
            <hr></hr>
            <div className='select'>
                <h4 htmlFor='exp'>Experience (in years)</h4>
                <select name='exp' value={formData.exp} onChange={listen}>
                    <option>-- Choose --</option>
                    <option value={0}>0</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5+</option>
                </select>
            </div>
            <hr></hr>

            <div className='notify'>
                <input type='checkbox' name='notifybox' onChange={listen} value={formData.notifybox} />
                <label>Enable Push notifications for latest Updates</label>
            </div>

            <button type='submit'>Sign Up</button>
            <hr></hr>
        </form>
    )
}

export default Form
import React, { useState } from 'react'
import axios from 'axios';

export const Former  = () => {
    const [values, setValues] = useState({name: '', message: '', email: ''})
    const [sent, setSent] = useState(false);
    const handleChange = e => {
        const {name, value} = e.target
        setValues({...values, [name]: value})
    }    

    async function handleSubmit(event) {
        event.preventDefault();
        const response=await axios.post(
	  'https://x2hfof4qrh.execute-api.us-east-1.amazonaws.com/production',	  
            { message: `${values.name}`, name: `${values.message}`, email: `${values.email}` }
        );
        console.log(response);
        setSent(true);
    }

    if (!sent) {
        return (
            <div style={{paddingLeft: '1vw',}}>
              <form onSubmit={handleSubmit}>
                <div style={{paddingTop: '2vh', paddingBottom: '2vh',}}>            
                  <label>Name:</label><br/>
                  <input
                    name="name"
                    onChange={handleChange}
                    value={values.name}
                  />
                </div>
                <div style={{paddingBottom: '2vh',}}>
                  <label>Email:</label><br/>
                  <input
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                  />
                </div>
                <div style={{paddingBottom: '2vh',}}>
                  <label>Message:</label><br/>
                  <input
                    name="message"
                    onChange={handleChange}
                    value={values.message}
                  />
                </div>

                <button type="submit">Send</button>
              </form>
            </div>
        );
    } else {
        return (
            <div style={{paddingLeft: '1vw',paddingTop: '1vh'}}>
              <p>Thanks for contacting us! </p>
              <p>We'll respond to your message shortly.</p>
            </div>            
        )
    }
}        



import React, { useState }from "react";

function Form() {
    const [data, setData] = useState({
        firstName:"",
        lastName:"",
        middleName:"",
        gender:"",
        dateOfBirth:"",
        phoneNumber:"",
        email:"",
    }
    )


    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value


        setData ({...data, [name]: value})
    };
    console.log({data})
    return(
        <div className="h-screen flex justify-center items-center bg-gradient-to-br from-fuchsia-400 to-orange-500">
            <div className="max-w-2xl w-full bg-white rounded-xl p-10">
                <form>
                    <div className="flex space-y-3 flex-col md:flex-row md:space-y-0 md:gap-2">
                       <div>
                        <label htmlFor="firstName" className="form-label">First Name
                        </label>
                         <input type="text" name="firstName" id="firstName" className="form-input" 
                         value={data.firstName}
                         onChange = {handleChange} />
                       </div>
                       <div>
                       <label htmlFor="lastName" className="form-label">Last Name
                       </label>
                       <input type="text" name="lastName" id="lastName" className="form-input"
                       value={data.lastName} 
                       onChange = {handleChange}/>
                       </div>
                       <div>
                       <label htmlFor="middleName" className="form-label">Middle Name
                       </label>
                       <input type="text" name="middleName" id="middleName" className="form-input"
                       value={data.middleName} 
                       onChange = {handleChange} />
                       </div>
                       </div>

                       <label htmlFor="gender" className="form-label">
                            Gender
                        </label>  
                       <div>
                        <label htmlFor="male">
                         <input type="radio" name="gender" value="male" id="male" 
                         onChange = {handleChange} />{""} 
                         Male
                         </label>

                    <label htmlFor="female">
                         <input type="radio" name="gender" value="female" id="female"
                         onChange = {handleChange}/>{""}
                         Female
                         </label>
                    </div>

                    <div>
                    <label htmlFor="dateOfBirth">Date of Birth
                         </label>
                         <input type="date"
                         name="dateOfBirth"
                         value={data.dateOfBirth} 
                         onChange = {handleChange}/> 
                    </div>

                    <div>
                    <label htmlFor="phone">Phone Number
                         </label>
                         <input type="number" placeholder="xxx-xxx-xxxx" name="phoneNumber"
                         value={data.phoneNumber} 
                         onChange = {handleChange}/> 
                    </div> 

                    <div>
                    <label htmlFor="email">Email
                         </label>
                         <input type="email" placeholder="adjorlolobless11@gmail.com" name="email" id="email"
                         value={data.email}
                         onChange = {handleChange}/> 
                    </div>   

                    <div>
                    <button type="submit">Sign Up</button>
                    </div>   
                </form>
            </div>
        </div>
    );
}

export default Form;
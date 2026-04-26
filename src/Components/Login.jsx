import { useState } from "react";
import { FaGraduationCap, FaSuitcase } from "react-icons/fa";
import { IoMdPeople } from "react-icons/io";
import './Login.css'

function Login(){
    const [role, setRole] = useState("Student");

    const getButtonText = () => {
        if(role === "Student") return "Login to the student portal"
        if(role === "Teaching staff") return "Login to the professors portal "
        if(role === "Employee") return "Login to the employee portal"
    };
    return(
        <>
            <div className="container-center">
        <div className="left-section">
            <h1 className="title">Your unified academic portal</h1>
            <p>A secure, integrated platform that brings together 
                all your academic and administrative services</p>
                <div className="roles">
                    <button className="role-btn"><span><FaGraduationCap/></span>Student</button>
                    <button className="role-btn"><span><IoMdPeople/></span>Teaching staff</button>
                    <button className="role-btn"><span><FaSuitcase/></span>Employee</button>

                </div>
        </div>

        <div className="right-section">
        <div className="card">
            <h2 className="main-title">Login</h2>
            <p className="sub-title">Choose your gateway and enter your details to proceed.</p>

            <div className="tabs">
                <div className="tab" onClick={() => setRole("Student")}><span><FaGraduationCap/></span>Student</div>
                <div className="tab" onClick={() => setRole("Teaching staff")}><span><IoMdPeople/></span>Teaching staff</div>
                <div className="tab" onClick={() => setRole("Employee")}><span><FaSuitcase/></span>Employee</div>
            </div>
                <label className="input-label">Email:</label>
            <input className="input" placeholder="Email"/>
            <label className="input-label">PassWord:</label>
            <input className="input" placeholder="PassWord"/>

                <button className={`btn-primar ${role}`} >{getButtonText()}</button>
        </div>

        </div>
        </div>
        </>

    );
}
export default Login;
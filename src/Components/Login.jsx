import { useState } from "react";
import { FaGraduationCap, FaSuitcase } from "react-icons/fa";
import { IoMdPeople } from "react-icons/io";
import './Login.css'

function Login(){
    const [role, setRole] = useState("Student");
    const [isLogin, setIsLogin] = useState(false);
    const [email, setEmail] = useState("");
    const [passWord, setPassWord] = useState("");

    const getButtonText = () => {
        if(role === "Student") return "Login to the student portal"
        if(role === "Teaching staff") return "Login to the professors portal "
        if(role === "Employee") return "Login to the employee portal"
    };

    const handleLogin = () =>{
        if(!email || !passWord){
            alert("Please fill in your email address and password.");
            return;
        }
        setIsLogin(true);
    };

    if(isLogin && role === "Student"){
        return <div className="page">Welcome to the student page</div>
    }
    if(isLogin && role === "Teaching staff"){
        return <div className="page">Welcome to the Teaching staff page</div>
    }
    if(isLogin && role === "Employee"){
        return <div className="page">Welcome to the Employee page</div>
    }
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
                <div className={`tab ${role === "Student" ? "active" : ""}`} onClick={() => setRole("Student")}><span><FaGraduationCap/></span>Student</div>
                <div className={`tab ${role === "Teaching staff" ? "active" : ""}`} onClick={() => setRole("Teaching staff")}><span><IoMdPeople/></span>Teaching staff</div>
                <div className={`tab ${role === "Employee" ? "active" : ""}`}  onClick={() => setRole("Employee")}><span><FaSuitcase/></span>Employee</div>
            </div>
                <div className="data"><label className="input-label">Email:</label>
            <input className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <label className="input-label">PassWord:</label>
            <input className="input" placeholder="PassWord" value={passWord} onChange={(e) => setPassWord(e.target.value)}/>
</div>
                <button className={`btn-primar ${role}`} onClick={handleLogin} >{getButtonText()}</button>
        </div>

        </div>
        </div>
        </>

    );
}
export default Login;
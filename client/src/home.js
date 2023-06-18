import styles from "./Login.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';

function Home() {

    const inputStyle = {
        borderRadius: '50px',
    }
   
    const navigate = useNavigate();
    const handleNav = () => {
        navigate("/upload")
    }
    const logo = "p{AI}tient"
    const quote = "deidentifying patient data"
    return (
        <body>
        <div className={styles.container}>
            <div className={styles.logo2}>
             <h1>{logo}</h1>
             </div>
            <div className={styles.logosmall}>
                <h1 style={{ fontSize: '30px'}}>{quote}</h1>
            </div>
            <div className={styles.right}>
            <button className={styles.back} onClick = {handleNav}>Take Me In</button>
            </div>
        </div>
        </body> 
        
    );
}

export default Home;
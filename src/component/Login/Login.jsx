import React, { useContext } from 'react'
import styles from './Login.module.css';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import GoogleIcon from '@mui/icons-material/Google';

import { auth, provider } from '../../utils/firebase';
import { signInWithPopup } from 'firebase/auth';
import { AuthContext } from '../../utils/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { setLogin, setUserInfo } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            // 🔹 Open Google login popup
            const result = await signInWithPopup(auth, provider);

            // 🔹 Get user info
            const user = result.user;
            console.log("User Info:", user);

            // 🔹 Save in Context + localStorage
            setLogin(true);
            setUserInfo(user);
            localStorage.setItem("isLogin", true);
            localStorage.setItem("userInfo", JSON.stringify(user));

            // 🔹 Redirect
            navigate('/dashboard');
        } catch (err) {
            alert("Something Went Wrong");
            console.error(err);
        }
    };

    return (
        <div className={styles.Login}>
            <div className={styles.loginCard}>
                <div className={styles.loginCardTitle}>
                    <h1>Login</h1>
                    <VpnKeyIcon />
                </div>

                <div className={styles.googleBtn} onClick={handleLogin}>
                    <GoogleIcon sx={{ fontSize: 20, color: "red" }} /> Sign in with Google
                </div>
            </div>
        </div>
    );
};

export default Login;

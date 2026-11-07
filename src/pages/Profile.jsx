import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext.jsx';

function Profile() {
  const {token, email, getProfile, logout} = useContext(GlobalContext);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        await getProfile();
      } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
     }};

     if (token) {
      fetchProfile();
     }
    }, [token]);

  const handleLogout = () => {
    logout();
    navigate("/");
  }; 
      
  return (
    <div className='profile'>
      <img src= "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="avatar" />
      <h2>Mi Perfil</h2>
      {loading && <p>Loading profile...</p>}
      {!loading && error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && (
        <h3>Email: {email}!</h3>)}
            
      <button className="btnNav" 
        onClick={handleLogout}>
        🔒Logout</button>     
    </div>
  )
}

export default Profile

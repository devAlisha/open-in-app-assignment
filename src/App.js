import { Link, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser, selectUser, setUser } from './slices/authSlice';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user)); 
      } else {
        dispatch(clearUser()); 
      }
    });

    return () => unsubscribe();
  }, [dispatch]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          user ? <Navigate to="/dashboard" /> : <Login />
        } />
        <Route path="/login" element={
          user ? <Navigate to="/dashboard" /> : <Login />
        } />
        <Route path="/dashboard" element={
          user ? <Dashboard /> : <Navigate to="/login" />
        } />
      </Routes>
    </div>
  );
}

export default App;

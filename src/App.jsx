import { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
  getUsersAsync,
  getUserInfoAsync,
  showUsers,
  showUserInfo,
} from './features/userSlice';
import { isLoading } from './features/userSlice';
import './App.css';

function App() {
  const users = useSelector(showUsers);
  const userInfo = useSelector(showUserInfo);

  const loading = useSelector(state => state.user.isLoading);
  const dispatch = useDispatch();

  console.log(loading);

  useEffect(() => {
    dispatch(getUsersAsync());
  }, []);

  const handleClick = (id) => { 
    dispatch(isLoading())
    dispatch(getUserInfoAsync(id))
  }

  return (
    <div className="App">
      <div className="card">
        {!loading &&
        <>
        <img key={userInfo.avatar} src={userInfo.avatar} />
        <p>
          <strong>{userInfo.first_name}</strong>
        </p>
        <p>{userInfo.email}</p>
        </>
      }
      {loading &&
      <h1>Loading....</h1>
      }
      </div>
      <div className="flex">
        {users.length &&
          users.map((item) => {
            return (
              <div key={item.id}>
                <button onClick={() => handleClick(item.id)}>
                  {item.id}
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;

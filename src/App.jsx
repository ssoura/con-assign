import { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
  getUsersAsync,
  getUserInfoAsync,
  showUsers,
  showUserInfo,
} from './features/userSlice';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const users = useSelector(showUsers);
  const userInfo = useSelector(showUserInfo);

  const f = async () => {
    dispatch(getUsersAsync());
  };
  useEffect(() => {
    dispatch(getUsersAsync());
  }, []);

  return (
    <div className="App">
      <div className="card">
        <img key={userInfo.avatar} src={userInfo.avatar} />
        <p>
          <strong>{userInfo.first_name}</strong>
        </p>
        <p>{userInfo.email}</p>
      </div>
      <div className="flex">
        {users.length &&
          users.map((item) => {
            return (
              <div key={item.id}>
                <button onClick={() => dispatch(getUserInfoAsync(item.id))}>
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

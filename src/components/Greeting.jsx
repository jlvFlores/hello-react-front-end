import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMessage } from '../redux/messages/messagesSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const { message } = useSelector((store) => store.message);

  useEffect(() => {
    dispatch(getMessage());
  }, [dispatch]);

  return (
    <h1>{message.content}</h1>
  );
};

export default Greeting;

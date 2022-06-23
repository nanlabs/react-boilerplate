import React from 'react';
import { useParams } from 'react-router';

const UserDetail = () => {
  const { userId } = useParams();
  return <div>hello {userId}</div>;
};

export default UserDetail;

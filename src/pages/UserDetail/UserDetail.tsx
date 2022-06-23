import React from 'react';
import { useParams } from 'react-router';
import DefaultLayout from 'layouts/Default';

const UserDetail = () => {
  const { userId } = useParams();

  return (
    <DefaultLayout>
      <div>hello {userId}</div>
    </DefaultLayout>
  );
};

export default UserDetail;

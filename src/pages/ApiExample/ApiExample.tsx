import React from 'react';
import DefaultLayout from 'layouts/Default';
import Repository from 'components/Repository';

const ApiExample = () => {
  return (
    <DefaultLayout>
      <Repository name={'tannerlinsley/react-query'} />
      <Repository name={'react-hook-form/react-hook-form'} />
      <Repository name={'pmndrs/jotai'} />
      <Repository name={'radix-ui/primitives'} />
    </DefaultLayout>
  );
};

export default ApiExample;

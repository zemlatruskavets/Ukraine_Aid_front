import { useEffect } from 'react';

import Modal from 'react-modal';
import { ModalStyles } from 'styles/components/Modal';
import PublicProfile from 'components/multiple/forms/accounts/PublicProfile';

const requestPage = ({ query }) => {
  return (
    <div style={{ display: 'grid', justifyContent: 'center' }}>
      <PublicProfile id={query.id} />
    </div>
  );
};

export default requestPage;

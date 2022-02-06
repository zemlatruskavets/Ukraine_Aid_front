import Modal from 'react-modal';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ModalStyles } from 'styles/components/Modal';

// import initial state object
import { AccountFields } from 'data/stateFields';

// graphQL imports
import { CREATE_NEW_ACCOUNT } from 'graphQL/mutations';
import { ALL_REQUESTS_QUERY } from 'graphQL/queries';

Modal.setAppElement('#__next');

export default function CreateNewAccount() {
  const router = useRouter();

  // this pre-renders the page from which the modal is launched
  useEffect(() => {
    router.prefetch('/');
  }, []);

  return (
    <Modal
      isOpen // the modal should always be shown on page load, it is the 'page'
      onRequestClose={() => router.back()}
      contentLabel="Account modal"
      style={ModalStyles}></Modal>
  );
}

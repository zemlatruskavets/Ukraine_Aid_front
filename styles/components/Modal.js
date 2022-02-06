import globalVariables from 'styles/general/globalVariables';

const ModalStyles = {
  overlay: {
    backdropFilter: 'blur(5px)',
    background: 'rgba(0, 0, 0, 0.05)',
    // background: "url('/Nbackground.jpg')",
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: '100% 100%',
  },
  content: {
    boxShadow: '0 0 10px gray',
    background: globalVariables.colours.background,
    border: '0',
    borderRadius: '30px',
    bottom: 'auto',
    minHeight: 'auto',
    maxHeight: '80%',
    left: '50%',
    padding: '4rem 2rem 2rem 2rem',
    position: 'fixed',
    right: 'auto',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    minWidth: '10rem',
    width: '40%',
    maxWidth: '40rem',
  },
};

export { ModalStyles };

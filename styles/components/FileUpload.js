import globalVariables from 'styles/general/globalVariables';

const DropZoneStyles = {
  dropzone: {
    overflow: 'hidden',
    borderRadius: '100%',
    border: '3px dashed lightgrey',
    justifyContent: 'center',
    alignContent: 'center',
  },
  dropzoneAccept: {
    background: 'lightgreen',
  },
  dropzoneActive: {
    border: '3px dashed blue',
  },
  dropzoneReject: {
    borderColor: '#F19373',
    backgroundColor: '#F1BDAB',
    fontFamily: globalVariables.text.bodyText2,
    fontWeight: '300',
    fontStyle: 'italic',
  },
  preview: {
    background: '#F1BDAB',
  },
  previewImage: {
    background: 'black',
  },
  inputLabelWithFiles: {
    margin: '100px',
    height: '150px',
    width: '150px',
  },
  inputLabel: (files, extra) =>
    extra.reject
      ? { color: '#A02800' }
      : {
          color: globalVariables.text.textColour,
          fontFamily: globalVariables.text.bodyText2,
          fontWeight: '300',
          fontSize: '1.2rem',
          fontStyle: 'italic',
          margin: '0 3rem',
        },
};

export default DropZoneStyles;

/* 
  *************************************************************************
  *************************************************************************

    NAME
    addWord.js

    SUMMARY
    This file defines the form used to add new words to the database.

    FLOW


  *************************************************************************
  *************************************************************************
*/

/* 
  ------------------
  import statements
  ------------------
*/

// external libraries
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';

// component imports
import { UploadPreview } from 'components/single/Images';

// style imports
import {
  MainGrid,
  Thumb,
  ActiveDiv,
  DropDiv,
  StyledText,
} from 'styles/components/FileUpload';
import { GreenButton } from 'components/single/Buttons';

/* 
  --------------------
  function definition
  --------------------
*/

function AddWordHere() {
  // 1. the state holding the information for the words is defined
  const [files, setFiles] = useState([]);

  // 2. this component watches for files dragged onto it and uploads them
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        )
      );
    },
  });

  // 3. this component puts each word on its own line
  const thumbs = files.map((file, index) => (
    <Thumb>
      <UploadPreview image={file.preview} />
      <StyledText placeholder="english" />
      <StyledText placeholder="ukrainian" />
    </Thumb>
  ));

  // 4. this renders the form

  console.log(files);
  return (
    <MainGrid>
      <h2>Add New Words</h2>
      <p>click on the photo to crop</p>
      <div {...getRootProps()}>
        {thumbs}
        {/* <input {...getInputProps()} /> */}

        {/* this conditionally displays the drop component based on whether there are files */}
        {isDragActive ? (
          <ActiveDiv>
            <p>Drop the files here ...</p>
          </ActiveDiv>
        ) : (
          <DropDiv>
            <p>Drag 'n' drop some files here, or click to select files</p>
          </DropDiv>
        )}
        <GreenButton>upload files</GreenButton>
      </div>
    </MainGrid>
  );
}

export { AddWordHere };

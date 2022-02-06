import styled from 'styled-components';

// circular image for list page and single word page
const CircularImage = styled.img.attrs((props) => ({
  src: props.image,
  alt: props.alt,
}))`
  width: 300px;
  height: 300px;
  margin: 2rem 0 1rem 0;
  object-fit: cover;
  border-radius: 100%;
  box-shadow: 0 0 20px grey;
`;

// circular image for the previews in the file upload box
const UploadPreview = styled.img.attrs((props) => ({
  src: props.image,
  alt: props.alt,
}))`
  width: 125px;
  height: 125px;
  object-fit: cover;
  border-radius: 100%;
`;

// circular image for the previews in the dropdown menu
const DropDownImage = styled.img.attrs((props) => ({
  src: props.image,
  alt: props.alt,
}))`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 100%;
`;

export { CircularImage, UploadPreview, DropDownImage };

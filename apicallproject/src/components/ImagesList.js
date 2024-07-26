import ImageItem from "./ImageItem";

// function ImagesList(imagesPlaceholder) {
//   return (
//     <div>
//       {imagesPlaceholder.map((image, index) => {
//         return <ImageItem key={index} image={image} />;
//       })}
//     </div>
//   );
// }

// export default ImagesList;

function ImageList({ imagesPlaceholder }) {
  const resultsArray = imagesPlaceholder?.data?.results;

  if (!resultsArray) {
    return null;
  }
  return (
    <div>
      {resultsArray.map((image, index) => (
        <ImageItem image={image} key={index} />
      ))}
    </div>
  );
}

export default ImageList;

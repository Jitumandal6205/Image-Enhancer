import React from "react";
import ImageUpload from "./ImageUpload";
import ImagePreview from "./ImagePreview";
import { useState } from "react";
import { enhancedImageAPI } from "../utils/enhancedImageApi";
const Home = () => {
  const [uploadImage, setuploadImage] = useState(null);
  const [enhancedImage, setenhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const UploadImageHandler = async (file) => {
    setuploadImage(URL.createObjectURL(file));
    setLoading(true);
    try {
      const enhancedURL = await enhancedImageAPI(file);
      setenhancedImage(enhancedURL);
      setLoading(false);
      // code which may produce the error
    } catch (error) {
      console.log(error);
      alert("Error occurred while enhancing the image");
      // handle the error
    }
    // Call the API to enhance the image
  };
  
  return (
    <>
      <ImageUpload UploadImageHandler={UploadImageHandler} />
      <ImagePreview
        loading={loading}
        uploaded={uploadImage}
        enhanced={enhancedImage?.image}
      />
    </>
  );
};

export default Home;

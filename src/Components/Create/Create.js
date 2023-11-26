import React, { Fragment } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { useState,useContext} from 'react';
import { ref,uploadBytesResumable,getDownloadURL} from 'firebase/storage';
import { Firebase } from '../../firebase/config';
import { Storage } from '../../firebase/config';
import { getFirestore,addDoc,collection } from 'firebase/firestore/lite';
import { AuthContext } from '../../store/Context';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const {users}= useContext(AuthContext)
  const [name,setName]=useState('')
  const [category,setCategory]=useState('')
  const [price,setPrice]=useState('')
  const [image,setImage]=useState('')
  const navigate=useNavigate()
  const date= new Date()
  const handleSubmit=async(e)=>{
    e.preventDefault()

    try {
      if (image) {
        // Create a storage reference
        const storageRef = ref(Storage, `images/${image.name}`);

        // Upload the image
        const uploadTask = uploadBytesResumable(storageRef, image);

        // Wait for the upload to complete
        await uploadTask;

        // Get the download URL of the uploaded image
        const downloadURL = await getDownloadURL(storageRef);

        // Now you can use the downloadURL as needed (e.g., save it to the database)
        console.log('Image uploaded. Download URL:', downloadURL);
        const db = getFirestore(Firebase);
        const prodtAdd = addDoc(collection(db, "Products"), { 
                  id:users.uid,
                  name,
                  price,
                  category,
                  url:downloadURL,
                  createdAt:date.toDateString()


                }).then(()=>{
                  navigate('/')
                  
                })
                console.log("Document written with ID: ", prodtAdd.id); 
         
                return prodtAdd; 
    


        // Add your logic to save other form data to the database
      } else {
        console.error('No image selected');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  } 


  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              defaultValue="John"
              value={name}
              onChange={(e)=>setName(e.target.value)}

            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              value={category}
              onChange={(e)=>setCategory(e.target.value) } />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname" name="Price" value={price} onChange={(e)=>setPrice(e.target.value)} />
            <br />
          </form>
          <br />
          <img alt="Posts" width="200px" height="200px" src={image?URL.createObjectURL(image):''} ></img>
          <form>
            <br />
            <input type="file"  onChange={(e)=>setImage(e.target.files[0])}/>
            <br />
            <button className="uploadBtn" onClick={handleSubmit}>upload and Submit</button>
          </form>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;

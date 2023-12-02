import React from 'react';
import { useContext,useEffect,useState } from 'react';
import { PostDetailsContext } from '../../store/PostContext';
import { Firebase } from '../../firebase/config';
import { getFirestore, collection, getDocs,where,query} from 'firebase/firestore/lite';

import './View.css';
function View() {
   const{postDetails}=useContext(PostDetailsContext)
   const[sellerData,setSellerData]=useState({})
   useEffect(() => {
    const fetchFirestoreData = async () => {
      const { id } = postDetails;
  
      // Check if the required data is available
      if (id !== undefined && id !== null) {
        const db = getFirestore(Firebase);
        const collectionRef = collection(db, 'users');
        const q = query(collectionRef, where('id', '==', id));
  
        try {
          const querySnapshot = await getDocs(q);
  
          if (!querySnapshot.empty) {
            querySnapshot.forEach((doc) => {
              const data = doc.data();
              setSellerData(data);
            });
          } else {
            console.log('No matching documents');
          }
        } catch (error) {
          console.error('Error getting documents:', error.message);
        }
      }
    };
  
    fetchFirestoreData();
  });
  
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        <div className="contactDetails">
          <p>{sellerData.name}</p>
          <p>{sellerData.phone}</p>
        </div>
      </div>
    </div>
  );
}
export default View;

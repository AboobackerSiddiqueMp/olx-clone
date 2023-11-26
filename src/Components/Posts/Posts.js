import React from 'react';
import { useEffect,useState } from 'react';

import Heart from '../../assets/Heart';
import './Post.css';
import { Firebase } from '../../firebase/config';
import { getDocs,collection,getFirestore} from 'firebase/firestore/lite';

function Posts() {
  const [products,setProducts]=useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore(Firebase);
      const collectionRef = collection(db, 'Products');

      try {
        const querySnapshot = await getDocs(collectionRef);

        // Extracting only the data from each document
        const productsData = querySnapshot.docs.map((doc) => doc.data());

        // Set the products state with the retrieved data
        setProducts(productsData);
      } catch (error) {
        console.error('Error getting documents: ', error);
      }
    };

    // Call the fetchData function
    fetchData();

  }, []); // Empty dependency array to run the effect only once when the component mounts



  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          {
            products.map((product)=>{

              return(
                <div className="card">
                <div className="favorite">
                  <Heart></Heart>
                </div>
                <div className="image">
                  <img src={product.url} alt="" />
                </div>
                <div className="content">
                  <p className="rate">&#x20B9; {product.price}</p>
                  <span className="kilometer">{product.category}</span>
                  <p className="name"> {product.name}</p>
                </div>
                <div className="date">
                  <span>{product.createdAt}</span>
                </div>
                </div>
                
              )



            })

          }
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;

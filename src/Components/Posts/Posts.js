import React from 'react';
import { useEffect,useState,useContext} from 'react';

import Heart from '../../assets/Heart';
import './Post.css';
import { Firebase } from '../../firebase/config';
import { getDocs,collection,getFirestore,query,orderBy} from 'firebase/firestore/lite';
import { PostDetailsContext } from '../../store/PostContext';

import { useNavigate } from 'react-router-dom';

function Posts() {
  const navigate=useNavigate()
  const [products,setProducts]=useState([]);
  const {setPostDetails}=useContext(PostDetailsContext)
  const[freshPost,setFreshpost]=useState([])
  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore(Firebase);
      const collectionRef = collection(db, 'Products');

      try {
        const querySnapshot = await getDocs(collectionRef);

        // Extracting only the data from each document
        const productsData = querySnapshot.docs.map((doc) => doc.data());
        const freshData = await getDocs(query(collectionRef, orderBy('createdAt','desc')));
        const productsDataFresh = freshData.docs.map((doc) => doc.data());




        // Set the products state with the retrieved data
        setProducts(productsData);
        setFreshpost(productsDataFresh)
      } catch (error) {
        console.error('Error getting documents: ', error);
      }
    };

    // Call the fetchData function
    fetchData();

  }, []); // Empty dependency array to run the effect only once when the component mounts

console.log(freshPost)

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
                <div className="card" onClick={()=>{
                  setPostDetails(product);
                  navigate('/viewpost')

                  
                  }}>
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
        {
          freshPost.map((data)=>{
            return(
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={data.url} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {data.price}</p>
              <span className="kilometer">{data.category}</span>
              <p className="name"> {data.name}</p>
            </div>
            <div className="date">
              <span>{data.createdAt}</span>
            </div>
          </div>
            )
          })


          }

        </div>

      </div>
    </div>
  );
}

export default Posts;

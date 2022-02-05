import React from 'react';


function Delete(props) {
  console.log(props.productid)
  const{setproducts}=props

  // let deleteProduct = async (productId) => {
  //   try {
  //     console.log(productId);
  //     await axios.delete(`https://jsonplaceholder.typicode.com/posts/${productId}`)
      
  //       //making api call and fetching the data
  //       props.fetchProducts();
  //   } catch (err) {
  //     alert(err.message);
  //   }
  // };

  const deleteProduct=(productid)=>{
  
   let newArray= props.products.filter((val,ind)=>{
      // console.log(ind)
  return ind!==productid
})
console.log(newArray)

props.setproducts(newArray)
console.log(productid)

    //  const response=await axios.delete(`https://jsonplaceholder.typicode.com/posts/${productid}`)
  //    props.fetchProducts();
   }
  return <div>
<button className="btn btn-danger" onClick={() => {deleteProduct(props.productid)}}>Delete</button>  </div>;
}

export default Delete;

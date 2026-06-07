import React from 'react'
import axios from 'axios'

const Dashboard = () => {

    useEffect(() => {
    axios.get('https://fakestoreapi.com/users')
      .then((response) => {
        setProducts(response.data); 
      })
      .catch((err) => {
        console.error("Axios product fetch error:", err.message);
         });
  }, []);

    return (
    <div>Dashboard
         fduysdgfhb Lorem ipsum dolor sit amet 
         consectetur adipisicing elit. Maiores iste doloremque nobis rerum non eaque officia, quo dolore numquam. Sapiente eos exercitationem quia harum repellat eveniet provident nostrum optio id!
    </div>
  )
}

export default Dashboard
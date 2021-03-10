import React, { useState, useEffect } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const Shop = () => {
    const [product, setProduct] = useState({});
    const history = useHistory();

    useEffect(() => {
        const token = window.localStorage.getItem('token');
        if(token){
            const config = {
                headers:{
                    'Authorization': `JWT ${token}`
                }
            };
            axios.get('https://ecomerce-master.herokuapp.com/api/v1/item', config)
                .then(({data,status}) => {
                    console.log(data,status);
                    setProduct(data);
                    
                })
                .catch(error => {
                    console.error(error.response.data);
                })
        }else{
            history.push('/')
        }
    }, [])

    return ( 
        <div className="container">
            <Card>
                <CardImg top width="100%" src={product.image} alt="Product Image" />
                <CardBody>
                    <CardTitle tag="h5">{product.product_name}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Price: ${product.price}.00</CardSubtitle>
                    <CardText>{product.category}</CardText>
                    <Button>Buy it!</Button>
                </CardBody>
            </Card>
        </div>
     );
}
 
export default Shop;
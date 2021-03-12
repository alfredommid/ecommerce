import React from 'react';
import {Link} from 'react-router-dom';
import {
  Card,
  CardImg, 
  CardTitle, 
  CardBody,
  Col
} from 'reactstrap';
import PropTypes from 'prop-types';
import '../components/showProducts.scss'
import Payload from '../utils/payload'
import {useDispatchCart} from '../Cart'

const ShowProducts = (product) => {
  const user= Payload();

  const dispatch = useDispatchCart();

  const addToCart = (item) => {
    console.log(item);
    dispatch({ type:"ADD", item})
  }

  const {id, name, price, brand, image} = product;
    return ( 
      <Col className="container cont-col">
        
          <Card className="carta mb-3 mt-3" style={{width: "200px"}}>
            <Link to={`shop/${id}`}>
              <span className="mt-2 text-center container blink" id="marca">{brand}</span>
              <CardImg className='p-2' top width="100%" src={image} alt="Show Image" />
              <CardBody>
                <CardTitle className="text-center blink" id="title" tag="h5">{name}</CardTitle>
                <span className="blink" id="price">${price} USD</span>
              </CardBody>
            </Link>
              <section className="d-flex justify-content-center mb-3">
                {user
                    ? <button  onClick={() => addToCart(product)}>Add to Cart</button>
                    : <Link to="/login">
                        <div className="logear">Log in to Buy</div>
                      </Link>
                }
              </section>
              
          </Card>
      </Col>
     );
}

ShowProducts.propTypes = {
  id: PropTypes.string.isRequired,
  image:PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number,
  brand: PropTypes.string
}
 
export default ShowProducts;


/*
                <Link to={`shop/${cardId}`}>
                    <Card>
                        <CardImg src={cardImage} alt="image"/>
                        <CardBody>
                            <CardTitle>{cardName}</CardTitle>
                            <p>${cardPrice}.00 USD</p>
                            <div className="d-flex smallparagraph">
                                <small>{cardCategory}</small>
                                <small>{cardBrand}</small>
                            </div>
                        </CardBody>
                    </Card>
                </Link>
*/
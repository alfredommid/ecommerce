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

const ShowProducts = (props) => {
  const {id, name, price, brand, image} = props;
    return ( 
      <Col className="container">
        <Link to={`shop/${id}`}>
          <Card className="mb-3 mt-3" style={{width: "200px", background:"#E0322F"}}>
            <span className="d-flex justify-content-center" style={{color:"#240C26"}}>{brand}</span>
            <CardImg className='p-2' top width="100%" src={image} alt="Show Image" />
            <CardBody>
              <CardTitle className="text-center" style={{color:"#240C26"}} tag="h5">{name}</CardTitle>
              <span className="price">${price} USD</span>
            </CardBody>
          </Card>
        </Link>
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
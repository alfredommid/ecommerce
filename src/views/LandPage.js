import React from 'react';
import {Row} from 'reactstrap';
import PropTypes from 'prop-types';
import ShowProducts from '../components/ShowProducts';
import no_image from '../assets/no_image.jpg'
import Banner from '../components/Banner'


const LandPage = ({products}) => {
    
    const cardData = () => {
        return products.map(prodObj => {
            return <ShowProducts
                key={prodObj._id}
                id={prodObj._id}
                image={
                    prodObj.image
                        ? prodObj.image
                        : no_image
                }
                brand={prodObj.brand}
                price={prodObj.price}
                name={prodObj.product_name}/>
        })
    }
   

    return ( 
        <>
            <Banner/>
            <Row xs="3" className="container shop-container">
                    {cardData()}
            </Row>
        </>       

     );
}

LandPage.propTypes= {
    products: PropTypes.array.isRequired
}
 
export default LandPage;
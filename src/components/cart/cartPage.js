import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addtoCart } from '../../actions/homePageActions';
import "../../css/homePage.css";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';

class CartPage extends Component {
    onAddCart(res) {
        let cartItems = [...this.props.cartlist]
        let newItems = cartItems.filter(li=>li.id!=res.id)
        this.props.addtoCart(newItems)
    }

    render() {
        return (
            <React.Fragment>
                <div className="cart_page_container">
                    <Container className="container" maxWidth="xl">
                        <div className="cart_items">My Cart</div>
                        <Grid className="grid_container" container spacing={4}>
                            {this.props.cartlist != undefined ? this.props.cartlist.map(res =>
                                <Grid item xs={12} sm={6} md={6} lg={3} xl={3} key={res.id}>
                                    <div className="item_container">
                                        <div className="first_row">
                                            <div className="gender">Gender: <span>{res.gender}</span></div>
                                            <div className="color">Color: <span>{res.color}</span></div>
                                        </div>
                                        <div className="image_container">
                                            <img src={res.img} alt="img" />
                                        </div>
                                        <div className="brand">{res.brand}</div>
                                        <div className="product_name">{res.product}</div>
                                        <div className="price_container">
                                            <div className="price">₹ {res.price}</div>
                                            <Rating name="half-rating-read" precision={0.5} value={parseFloat(res.ratings)} readOnly />
                                        </div>
                                        <div className="size_container">Size: <span>{res.sizes}</span></div>
                                            <Button
                                                onClick={() => this.onAddCart(res)}
                                                className="button_container"
                                                variant="contained"
                                                color="secondary"
                                            >
                                                Remove 
                                            </Button>
                                    </div>
                                </Grid>
                            ) : <div className="err_msg">No items in cart.</div>}
                        </Grid>
                    </Container>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    cartlist: state.cartlist
})

const mapDispatchToProps = dispatch => ({
    addtoCart: (data) => dispatch(addtoCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
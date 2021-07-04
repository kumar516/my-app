import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addtoCart, getData } from '../../actions/homePageActions';
import "../../css/homePage.css";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

class Homepage extends Component {
    componentDidMount() {
        if (this.props.itemlist == undefined) {
            this.props.getData()
        }
    }

    onAddCart(res) {
        if (this.props.cartlist != undefined) {
            let cartItems = []
            cartItems = [...this.props.cartlist]
            cartItems.push({
                id: res.productId,
                gender: res.gender,
                color: res.primaryColour,
                img: res.searchImage,
                brand: res.brand,
                product: res.product,
                price: res.price,
                ratings: res.rating,
                sizes: res.sizes
            })
            this.props.addtoCart(cartItems)
        }
        else {
            let cartItems = [{
                id: res.productId,
                gender: res.gender,
                color: res.primaryColour,
                img: res.searchImage,
                brand: res.brand,
                product: res.product,
                price: res.price,
                ratings: res.rating,
                sizes: res.sizes
            }]
            this.props.addtoCart(cartItems)
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="home_page_container">
                    <Container className="container" maxWidth="xl">
                        <Grid className="grid_container" container spacing={4}>
                            {this.props.itemlist != undefined ? this.props.itemlist.products.map(res =>
                                <Grid item xs={12} sm={6} md={6} lg={3} xl={3} key={res.productId}>
                                    <div className="item_container">
                                        <div className="first_row">
                                            <div className="gender">Gender: <span>{res.gender}</span></div>
                                            <div className="color">Color: <span>{res.primaryColour}</span></div>
                                        </div>
                                        <div className="image_container">
                                            <img src={res.searchImage} alt="img" />
                                        </div>
                                        <div className="brand">{res.brand}</div>
                                        <div className="product_name">{res.product}</div>
                                        <div className="price_container">
                                            <div className="price">₹ {res.price}</div>
                                            <Rating name="half-rating-read" precision={0.5} value={parseFloat(res.rating)} readOnly />
                                        </div>
                                        <div className="size_container">Size: <span>{res.sizes}</span></div>
                                        {this.props.cartlist != undefined ? this.props.cartlist.some(li => li.id == res.productId) == false ?
                                            <Button
                                                onClick={() => this.onAddCart(res)}
                                                className="button_container"
                                                variant="contained"
                                                color="primary"
                                            >
                                                Add to Cart
                                            </Button> :
                                            <Link to={"/cart"} className="cart_icon">
                                                <Button
                                                    onClick={() => this.onAddCart(res)}
                                                    className="button_container disable_btn"
                                                    variant="contained"
                                                    color="primary"
                                                    disabled
                                                >
                                                    Go to Cart
                                                </Button>
                                            </Link>
                                            : <Button
                                                onClick={() => this.onAddCart(res)}
                                                className="button_container"
                                                variant="contained"
                                                color="primary"
                                            >
                                                Add to Cart
                                            </Button>}
                                    </div>
                                </Grid>
                            ) : <div>Loading...</div>}
                        </Grid>
                    </Container>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    itemlist: state.itemlist,
    cartlist: state.cartlist
})

const mapDispatchToProps = dispatch => ({
    getData: () => dispatch(getData()),
    addtoCart: (data) => dispatch(addtoCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
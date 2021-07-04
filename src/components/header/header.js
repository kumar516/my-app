import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HomeIcon from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import React, { Component } from "react";
import "../../css/header.css";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <AppBar position="sticky">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <MenuIcon />
                            <div className="header_name">Shopping App</div>
                        </IconButton>
                        <div className="icon_main_container">
                            <Link to={"/"} className="cart_icon">
                                <HomeIcon className="icon_container" />
                            </Link>
                            <div className="icon_container1">
                                <div className="cart_count">
                                    <div className="cart_no">
                                        {this.props.cartlist != undefined ? this.props.cartlist.length : "0"}
                                    </div>
                                </div>
                                <Link to={"/cart"} className="cart_icon">
                                    <ShoppingCartIcon />
                                </Link>
                            </div>
                        </div>
                    </Toolbar>
                </AppBar>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    cartlist: state.cartlist
})

export default connect(mapStateToProps)(Header);
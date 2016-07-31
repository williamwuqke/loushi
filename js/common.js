/**
 * Created by wuqiongke703 on 16/7/5.
 */

//ReactBootstrap Global variable
var ButtonGroup = ReactBootstrap.ButtonGroup;
var Button = ReactBootstrap.Button;
var Nav = ReactBootstrap.Nav;
var Navbar = ReactBootstrap.Navbar;
var NavItem = ReactBootstrap.NavItem;
var Input = ReactBootstrap.Input;
var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;
var Modal = ReactBootstrap.Modal;
var FormGroup = ReactBootstrap.FormGroup;
var ControlLabel = ReactBootstrap.ControlLabel;
var FormControl = ReactBootstrap.FormControl;
var Table = ReactBootstrap.Table;
var NavDropdown = ReactBootstrap.NavDropdown;
var MenuItem = ReactBootstrap.MenuItem;

function handleErrorCode (responseObj) {

    if(responseObj.code==7){
        window.location.href = "/login";
    }else{
        alert(responseObj.msg);
    }
}

function delConfirm(msg) {
    if (confirm(msg) == true){
        return true;
    }else{
        return false;
    }
}
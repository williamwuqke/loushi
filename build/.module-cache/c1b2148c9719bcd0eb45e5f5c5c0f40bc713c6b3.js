/**
 * Created by wuqiongke on 16/7/24.
 */
var NavBar = React.createClass({displayName: "NavBar",
    render : function() {
        return (
        React.createElement(Navbar, {inverse: true, staticTop: true}, 
            React.createElement(Navbar.Header, null, 
                React.createElement(Navbar.Brand, null, 
                    React.createElement("a", {href: "#"}, "楼市传媒订单系统")
                ), 
                React.createElement(Navbar.Toggle, null)
            ), 
            React.createElement(Navbar.Collapse, null, 
                React.createElement(Nav, {activeKey: 1}, 
                    React.createElement(NavItem, {eventKey: 1, href: "#"}, "全部订单"), 
                    React.createElement(NavItem, {eventKey: 2, href: "#"}, "Link"), 
                    React.createElement(NavDropdown, {eventKey: 3, title: "Dropdown", id: "basic-nav-dropdown"}, 
                        React.createElement(MenuItem, {eventKey: 3.1}, "Action"), 
                        React.createElement(MenuItem, {eventKey: 3.2}, "Another action"), 
                        React.createElement(MenuItem, {eventKey: 3.3}, "Something else here"), 
                        React.createElement(MenuItem, {divider: true}), 
                        React.createElement(MenuItem, {eventKey: 3.3}, "Separated link")
                    )
                ), 
                React.createElement(Nav, {pullRight: true}, 
                    React.createElement(NavItem, {disabled: true}, React.createElement("div", null, "王海珊")), 
                    React.createElement(NavItem, {eventKey: 2, href: "#"}, "Link Right")
                )
            )
        )
        );
    }
});

ReactDOM.render(
    React.createElement(NavBar, null),
    document.getElementById('navigation')
);
/**
 * Created by wuqiongke on 16/7/24.
 */
var NavBar = React.createClass({displayName: "NavBar",
    getInitialState: function () {
        return {
            currentTabNum: 0,
            showConfigFileModal: false
        }
    },
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
                React.createElement(Nav, {activeKey: 2}, 
                    React.createElement(NavItem, {eventKey: 1, href: "#"}, "全部订单"), 
                    React.createElement(NavItem, {eventKey: 2, href: "#"}, "Link"), 
                    React.createElement(NavItem, {eventKey: 3, href: "#"}, "Link")
                ), 
                React.createElement(Nav, {pullRight: true}, 
                    React.createElement(NavItem, {disabled: true}, React.createElement("div", {className: "username"}, "王海珊")), 
                    React.createElement(NavItem, {eventKey: 2, href: "#"}, "退出登陆")
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
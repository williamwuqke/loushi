/**
 * Created by wuqiongke on 16/7/24.
 */
var TablePanel = React.createClass({displayName: "TablePanel",

});
var Main = React.createClass({displayName: "Main",
    getInitialState: function () {
        return {
            currentTabNum: 1
        }
    },
    changeTabPage: function (eventKey) {
        event.preventDefault();
        this.setState({
            currentTabNum: eventKey
        })

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
                React.createElement(Nav, {activeKey: this.state.currentTabNum, onSelect: this.changeTabPage}, 
                    React.createElement(NavItem, {eventKey: 1, href: "#"}, "全部订单"), 
                    React.createElement(NavItem, {eventKey: 2, href: "#"}, "未结算订单"), 
                    React.createElement(NavItem, {eventKey: 3, href: "#"}, "已结算订单")
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
    React.createElement(Main, null),
    document.getElementById('main')
);
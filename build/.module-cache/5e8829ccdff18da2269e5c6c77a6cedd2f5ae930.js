/**
 * Created by wuqiongke on 16/7/24.
 */
var TablePanel = React.createClass({displayName: "TablePanel",
    getInitialState: function () {
        return {
            dataList: [],
            showVersionEditModal: false,
            modVersionId: 0,
            modVersion: "",
            modVersionDesc: "",
        }
    },
    close: function () {
        this.setState({showVersionEditModal: false});
    },
    addVersion: function () {
        this.setState({
            versionModalTitle: "添加版本",
            showVersionEditModal: true,
            modVersionId: 0,
            modVersion: "",
            modVersionDesc: ""
        });

    },
    versionEditOpen: function (index) {
        var eVersionId = this.refs["versionId" + index].innerHTML
        var eVersion = this.refs["version" + index].innerHTML
        var eVersionDesc = this.refs["versionDesc" + index].innerHTML;
        this.setState({
            modVersionId: eVersionId,
            modVersion: eVersion,
            modVersionDesc: eVersionDesc,
            showVersionEditModal: true,
            versionModalTitle: "修改版本"
        })
    },
    versionEditSubmit: function () {
        //var editedUrl;
        //var editedData;
        //var alertInfo = "";
        //if (this.state.modVersionId) {
        //    console.log("it edited" + this.state.modVersion + this.state.modVersionId);
        //    editedUrl = updateVersionUrl;
        //    editedData = {
        //        bank_id: this.props.bankId,
        //        version_id: this.state.modVersionId,
        //        version: this.refs.modVersion.value,
        //        description: this.refs.modVersionDesc.value
        //    }
        //    alertInfo = "修改成功";
        //} else {
        //    console.log("it added" + this.state.modVersion + this.state.modVersionId);
        //    editedUrl = addVersionUrl;
        //    editedData = {
        //        bank_id: this.props.bankId,
        //        version: this.refs.modVersion.value,
        //        description: this.refs.modVersionDesc.value
        //    }
        //    alertInfo = "添加成功";
        //}
        //$.ajax({
        //    url: editedUrl,
        //    data: editedData,
        //    type: "POST",
        //    dataType: 'json',
        //    cache: false,
        //    success: function (response) {
        //        if (response.code == "0") {
        //            alert(alertInfo);
        //            this.setState({showVersionEditModal: false});
        //            this.refreshTabPage();
        //        }
        //        else {
        //            handleErrorCode(response);
        //        }
        //    }.bind(this)
        //});
    },
    versionDelSubmit: function (index) {
        var versionId = this.refs["versionId" + index].innerHTML;
        var status = delConfirm("确认删除版本id为" + versionId + "的版本?");
        if (status) {
            $.ajax({
                url: delVersionUrl,
                data: {
                    version_id: versionId
                },
                type: "POST",
                dataType: 'json',
                cache: false,
                success: function (response) {
                    if (response.code == "0") {
                        this.refreshTabPage();
                        alert("删除成功");
                    }
                    else {
                        handleErrorCode(response);
                    }
                }.bind(this)
            });
        }
    },
    loadTableDataFromServer: function (tabPage) {
        console.log(tabPage);
        this.setState({dataList:versionList.data.versionList});
    },
    refreshTable: function () {
        this.loadTableDataFromServer(this.props.tabPage);
    },
    componentWillReceiveProps: function (nextProps) {
        if (this.props.tabPage != nextProps.tabPage) {
            this.loadTableDataFromServer(nextProps.tabPage);
        }
    },
    componentDidMount: function () {
        this.loadTableDataFromServer(this.props.tabPage, this.props.currentBankId);
    },
    render : function(){
        var dataHtml = this.state.dataList.map(function (versionInfo) {
            return (React.createElement("tr", null, 
                React.createElement("td", {ref: "versionId"+versionInfo.version_id}, 
                    versionInfo.version_id
                ), 
                React.createElement("td", {ref: "version"+versionInfo.version_id}, 
                    versionInfo.version
                ), 
                React.createElement("td", {ref: "versionDesc"+versionInfo.version_id}, 
                    versionInfo.description
                ), 
                React.createElement("td", null, 
                    React.createElement(Button, {bsStyle: "info", bsSize: "xsmall"}, "编辑"), 
                    "  ", 
                    React.createElement(Button, {bsStyle: "warning", bsSize: "xsmall"}, "删除")
                )

            ));
        }.bind(this));
        return (
            React.createElement("div", {className: "tablediv"}, 
                React.createElement(Row, null, 
                    React.createElement(Button, {bsStyle: "success"}, "添加订单")
                ), 
                React.createElement(Row, null, 
                    React.createElement(Table, {striped: true, condensed: true, hover: true}, 
                        React.createElement("thead", null, 
                        React.createElement("tr", null, 
                            React.createElement("th", null, "订单号"), 
                            React.createElement("th", null, "订单名称"), 
                            React.createElement("th", null, "订单..."), 
                            React.createElement("th", null, "操作")
                        )
                        ), 
                        React.createElement("tbody", null, 
                        dataHtml
                        )
                    )
                )

            )
        );
    }

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
        React.createElement("div", null, 
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
            ), 
            React.createElement(TablePanel, {tabPage: this.state.currentTabNum})
        )
        );
    }
});

ReactDOM.render(
    React.createElement(Main, null),
    document.getElementById('main')
);
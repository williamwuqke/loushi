/**
 * Created by wuqiongke on 16/7/24.
 */
var TablePanel = React.createClass({displayName: "TablePanel",
    getInitialState: function () {
        return {
            dataList: [],
            showVersionEditModal: false,
        }
    },
    close: function () {
        this.setState({showVersionEditModal: false});
    },
    addVersion: function () {
        this.setState({
            versionModalTitle: "添加订单",
            showVersionEditModal: true,
        });

    },
    versionEditOpen: function (index) {
        //var eVersionId = this.refs["versionId" + index].innerHTML
        //var eVersion = this.refs["version" + index].innerHTML
        //var eVersionDesc = this.refs["versionDesc" + index].innerHTML;
        this.setState({
            showVersionEditModal: true,
            versionModalTitle: "修改版本"
        })
    },
    versionEditSubmit: function () {
        alert('操作成功!');
        this.setState({showVersionEditModal: false});
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
        var orderId = this.refs["orderId" + index].innerHTML;
        var status = delConfirm("确认删除版本id为" + orderId + "的版本?");
        if (status) {
            alert('删除成功!');
            //$.ajax({
            //    url: delVersionUrl,
            //    data: {
            //        version_id: versionId
            //    },
            //    type: "POST",
            //    dataType: 'json',
            //    cache: false,
            //    success: function (response) {
            //        if (response.code == "0") {
            //            this.refreshTabPage();
            //            alert("删除成功");
            //        }
            //        else {
            //            handleErrorCode(response);
            //        }
            //    }.bind(this)
            //});
        }
    },
    loadTableDataFromServer: function (tabPage) {
        console.log(tabPage);
        this.setState({dataList:orderList.data.orderList});
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
        this.loadTableDataFromServer(this.props.tabPage);
    },
    render : function(){
        var fourWordsWidth="70px";
        var fiveWordsWidth="80px";
        var dataHtml = this.state.dataList.map(function (orderInfo) {
            return (React.createElement("tr", null, 
                React.createElement("td", {ref: "orderId"+orderInfo.orderId}, 
                    orderInfo.orderId
                ), 
                React.createElement("td", {ref: "orderDate"+orderInfo.orderDate}, 
                    orderInfo.orderDate
                ), 
                React.createElement("td", {ref: "projectId"+orderInfo.projectId}, 
                    orderInfo.projectId
                ), 
                React.createElement("td", {ref: "projectName"+orderInfo.projectName}, 
                    orderInfo.projectName
                ), 
                React.createElement("td", {ref: "executeKOL"+orderInfo.executeKOL}, 
                    orderInfo.executeKOL
                ), 
                React.createElement("td", {ref: "type"+orderInfo.type}, 
                    orderInfo.type
                ), 
                React.createElement("td", {ref: "sendOut"+orderInfo.sendOut}, 
                    orderInfo.sendOut
                ), 
                React.createElement("td", {ref: "url"+orderInfo.url}, 
                    orderInfo.url
                ), 
                React.createElement("td", {ref: "amount"+orderInfo.amount}, 
                    orderInfo.amount
                ), 
                React.createElement("td", {ref: "paid"+orderInfo.paid}, 
                    orderInfo.paid
                ), 
                React.createElement("td", {ref: "customerInfo"+orderInfo.customerInfo}, 
                    orderInfo.customerInfo
                ), 
                React.createElement("td", {ref: "customerType"+orderInfo.customerType}, 
                    orderInfo.customerType
                ), 
                React.createElement("td", {ref: "paidWay"+orderInfo.paidWay}, 
                    orderInfo.paidWay
                ), 
                React.createElement("td", {ref: "paidName"+orderInfo.paidName}, 
                    orderInfo.paidName
                ), 
                React.createElement("td", {ref: "operator"+orderInfo.operator}, 
                    orderInfo.operator
                ), 
                React.createElement("td", {ref: "paidTime"+orderInfo.paidTime}, 
                    orderInfo.paidTime
                ), 
                React.createElement("td", {ref: "description"+orderInfo.description}, 
                    orderInfo.description
                ), 
                React.createElement("td", null, 
                    React.createElement(Button, {bsStyle: "info", bsSize: "xsmall", 
                            onClick: this.versionEditOpen.bind(this,orderInfo.orderId)}, "编辑"), 
                    "  ", 
                    React.createElement(Button, {bsStyle: "warning", bsSize: "xsmall", 
                            onClick: this.versionDelSubmit.bind(this,orderInfo.orderId)}, "删除")
                )

            ));
        }.bind(this));
        return (


            React.createElement("div", {className: "tablediv"}, 
                React.createElement(Row, null, 
                    React.createElement(Button, {bsStyle: "success"}, "添加订单")
                ), 
                React.createElement(Row, null, 
                    React.createElement(Table, {striped: true, condensed: true, hover: true, className: "tablelist"}, 
                        React.createElement("thead", null, 
                        React.createElement("tr", null, 
                            React.createElement("th", null, "订单号"), 
                            React.createElement("th", null, "时间"), 
                            React.createElement("th", null, "项目号"), 
                            React.createElement("th", {style: {width: fourWordsWidth}}, "项目名称"), 
                            React.createElement("th", null, "执行KOL"), 
                            React.createElement("th", null, "形式"), 
                            React.createElement("th", {style: {width: fourWordsWidth}}, "是否外派"), 
                            React.createElement("th", {style: {width: fourWordsWidth}}, "整理链接"), 
                            React.createElement("th", null, "金额"), 
                            React.createElement("th", null, "已付"), 
                            React.createElement("th", {style: {width: fourWordsWidth}}, "客户信息"), 
                            React.createElement("th", {style: {width: fourWordsWidth}}, "客户类型"), 
                            React.createElement("th", {style: {width: fourWordsWidth}}, "付款渠道"), 
                            React.createElement("th", {style: {width: fiveWordsWidth}}, "付款人信息"), 
                            React.createElement("th", null, "接单员"), 
                            React.createElement("th", {style: {width: fourWordsWidth}}, "付款时间"), 
                            React.createElement("th", null, "备注"), 
                            React.createElement("th", null, "操作")
                        )
                        ), 
                        React.createElement("tbody", null, 
                        dataHtml
                        )
                    )
                ), 
                React.createElement(Modal, {show: this.state.showVersionEditModal, onHide: this.close}, 
                    React.createElement(Modal.Header, {closeButton: true}, 
                        React.createElement(Modal.Title, null, this.state.versionModalTitle)
                    ), 
                    React.createElement(Modal.Body, null, 
                        React.createElement(FormGroup, null, 
                            React.createElement(ControlLabel, null, "版本号"), 
                            React.createElement("input", {className: "form-control", ref: "modVersion", type: "text", placeholder: "请输入版本号", 
                                   defaultValue: this.state.modVersion}), 
                            React.createElement(FormControl.Feedback, null)
                        ), 
                        React.createElement(FormGroup, null, 
                            React.createElement(ControlLabel, null, "描述"), 
                            React.createElement("textarea", {className: "form-control descTextArea", ref: "modVersionDesc", placeholder: "请输入版本描述", 
                                      defaultValue: this.state.modVersionDesc}), 
                            React.createElement(FormControl.Feedback, null)
                        )
                    ), 
                    React.createElement(Modal.Footer, null, 
                        React.createElement(Button, {onClick: this.close}, "Close"), 
                        React.createElement(Button, {bsStyle: "primary", onClick: this.versionEditSubmit}, "Submit")
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
                        React.createElement("a", {href: "#"}, "楼氏传播营销中心")
                    ), 
                    React.createElement(Navbar.Toggle, null)
                ), 
                React.createElement(Navbar.Collapse, null, 
                    React.createElement(Nav, {activeKey: this.state.currentTabNum, onSelect: this.changeTabPage}, 
                        React.createElement(NavItem, {eventKey: 1, href: "#"}, "订单表"), 
                        React.createElement(NavItem, {eventKey: 2, href: "#"}, "项目表"), 
                        React.createElement(NavItem, {eventKey: 3, href: "#"}, "流水表")
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
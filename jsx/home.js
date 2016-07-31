/**
 * Created by wuqiongke on 16/7/24.
 */
var TablePanel = React.createClass({
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
        var twoWordsWidth="20px";
        var fourWordsWidth="70px";
        var fiveWordsWidth="80px";
        var dataHtml = this.state.dataList.map(function (orderInfo) {
            return (<tr>
                <td ref={"orderId"+orderInfo.orderId}>
                    {orderInfo.orderId}
                </td>
                <td ref={"orderDate"+orderInfo.orderDate}>
                    {orderInfo.orderDate}
                </td>
                <td ref={"projectId"+orderInfo.projectId}>
                    {orderInfo.projectId}
                </td>
                <td ref={"projectName"+orderInfo.projectName}>
                    {orderInfo.projectName}
                </td>
                <td ref={"executeKOL"+orderInfo.executeKOL}>
                    {orderInfo.executeKOL}
                </td>
                <td ref={"type"+orderInfo.type}>
                    {orderInfo.type}
                </td>
                <td ref={"sendOut"+orderInfo.sendOut}>
                    {orderInfo.sendOut}
                </td>
                <td ref={"url"+orderInfo.url}>
                    {orderInfo.url}
                </td>
                <td ref={"amount"+orderInfo.amount}>
                    {orderInfo.amount}
                </td>
                <td ref={"paid"+orderInfo.paid}>
                    {orderInfo.paid}
                </td>
                <td ref={"customerInfo"+orderInfo.customerInfo}>
                    {orderInfo.customerInfo}
                </td>
                <td ref={"customerType"+orderInfo.customerType}>
                    {orderInfo.customerType}
                </td>
                <td ref={"paidWay"+orderInfo.paidWay}>
                    {orderInfo.paidWay}
                </td>
                <td ref={"paidName"+orderInfo.paidName}>
                    {orderInfo.paidName}
                </td>
                <td ref={"operator"+orderInfo.operator}>
                    {orderInfo.operator}
                </td>
                <td ref={"paidTime"+orderInfo.paidTime}>
                    {orderInfo.paidTime}
                </td>
                <td ref={"description"+orderInfo.description}>
                    {orderInfo.description}
                </td>
                <td>
                    <Button bsStyle="info" bsSize="xsmall"
                            onClick={this.versionEditOpen.bind(this,orderInfo.orderId)}>编辑</Button>
                    <Button bsStyle="warning" bsSize="xsmall"
                            onClick={this.versionDelSubmit.bind(this,orderInfo.orderId)}>删除</Button>
                    <Button bsStyle="primary" bsSize="xsmall"
                            onClick={this.versionDelSubmit.bind(this,orderInfo.orderId)}>转到</Button>
                </td>

            </tr>);
        }.bind(this));
        return (


            <div className="tablediv">
                <Row>
                    <Button bsStyle="success" >添加订单</Button>
                </Row>
                <Row>
                    <Table striped condensed hover className="tablelist">
                        <thead>
                        <tr>
                            <th>订单号</th>
                            <th>时间</th>
                            <th>项目号</th>
                            <th style={{width: fourWordsWidth}}>项目名称</th>
                            <th>执行KOL</th>
                            <th>形式</th>
                            <th style={{width: fourWordsWidth}}>是否外派</th>
                            <th style={{width: fourWordsWidth}}>整理链接</th>
                            <th>金额</th>
                            <th>已付</th>
                            <th style={{width: fourWordsWidth}}>客户信息</th>
                            <th style={{width: fourWordsWidth}}>客户类型</th>
                            <th style={{width: fourWordsWidth}}>付款渠道</th>
                            <th style={{width: fiveWordsWidth}}>付款人信息</th>
                            <th>接单员</th>
                            <th style={{width: fourWordsWidth}}>付款时间</th>
                            <th>备注</th>
                            <th style={{width: twoWordsWidth}}>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        {dataHtml}
                        </tbody>
                    </Table>
                </Row>
                <Modal show={this.state.showVersionEditModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.state.versionModalTitle}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormGroup>
                            <ControlLabel>版本号</ControlLabel>
                            <input className="form-control" ref="modVersion" type="text" placeholder="请输入版本号"
                                   defaultValue={this.state.modVersion}/>
                            <FormControl.Feedback />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>描述</ControlLabel>
                            <textarea className="form-control descTextArea" ref="modVersionDesc" placeholder="请输入版本描述"
                                      defaultValue={this.state.modVersionDesc}/>
                            <FormControl.Feedback />
                        </FormGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close}>Close</Button>
                        <Button bsStyle="primary" onClick={this.versionEditSubmit}>Submit</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }

});
var Main = React.createClass({
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
        <div>
            <Navbar inverse={true} staticTop={true}>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">楼氏传播营销中心</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav activeKey={this.state.currentTabNum} onSelect={this.changeTabPage}>
                        <NavItem eventKey={1} href="#">订单表</NavItem>
                        <NavItem eventKey={2} href="#">项目表</NavItem>
                        <NavItem eventKey={3} href="#">流水表</NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem disabled={true}><div className="username">王海珊</div></NavItem>
                        <NavItem eventKey={2} href="#">退出登陆</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <TablePanel tabPage={this.state.currentTabNum}/>
        </div>
        );
    }
});

ReactDOM.render(
    <Main />,
    document.getElementById('main')
);
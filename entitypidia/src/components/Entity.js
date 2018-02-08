import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import EntityOverview from './EntityOverview.js';
import Operations from './Operations.js';

export default class Entity extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {

    if(this.props.entityname){
      return (
        <div>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '1' })}
                onClick={() => { this.toggle('1'); }}
              >
                Referential
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '2' })}
                onClick={() => { this.toggle('2'); }}
              >
                Performance
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '3' })}
                onClick={() => { this.toggle('3'); }}
              >
                Operations
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <Row>
                  <br/>
              </Row>

              <Row>
                <Col sm="8">
                      <EntityOverview entityname={this.props.entityname}/>
                </Col>

              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                  <br/>
              </Row>

            </TabPane>
            <TabPane tabId="3">
              <Row>
              <br/>
              </Row>

            <Row>
              <Col sm="6">
              <Operations entityname={this.props.entityname} />
              </Col>

              <Col sm="4">
              ...
              </Col>
            </Row>

            </TabPane>
          </TabContent>
        </div>
      )
    }else{
      return ( 
      <div></div>
     )
  }
}
}
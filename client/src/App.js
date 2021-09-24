import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { handleInitialData } from './actions/questions'
import { LoadingBar } from 'react-redux-loading'
import Home from './components/Home'
import Exam from './components/Exam'
import Result from './components/Result'
import { connect } from 'react-redux'
import { Layout, Menu } from 'antd'

const { Header, Footer, Content } = Layout

class App extends Component{

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <Layout className="layout">
            <Header>
              <Menu className='center' theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <div className='title'>MCQ Exam</div>
              </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }} className='body'>
                    <div className="site-layout-content center">
                      <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/exam' component={Exam} />
                        <Route exact path='/result' component={Result} />
                      </Switch>
                    </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>MCQ App ©2021 Created by Seifeldin Abouelella</Footer>
          </Layout>          
        </Fragment>
      </Router>
    )
  }
}

export default connect()(App);
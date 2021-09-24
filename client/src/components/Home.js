import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'
import { connect } from 'react-redux'
import { setUser } from '../actions/user'

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${label} is required!'
};

export class Home extends Component {
    onFinish = (values) => {
        console.log(values.user.name)
        this.props.dispatch(setUser(values.user.name))
        this.props.history.push('/exam')
      };

    render() {
        return (
            <Form 
                layout={'vertical'}
                name='nest-messages'
                onFinish={this.onFinish} 
                validateMessages={validateMessages} 
                style={{ width: '30%' }}
            >
                <Form.Item
                    name={['user', 'name']}
                    label="Name"
                    rules={[{ required: true }]}
                >
                    <Input placeholder='Please enter your name!'/>
                </Form.Item>
                <Form.Item  >
                    <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                        Start Exam
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}

export default connect()(Home)
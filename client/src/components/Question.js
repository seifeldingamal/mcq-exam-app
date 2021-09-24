import React, { Component } from 'react'
import { Radio, Space, Button } from 'antd';
import { connect } from 'react-redux';
import { incScore } from '../actions/score';

class Question extends Component {

    state = {
        value: null,
    }

    onClick = () => {
        const { dispatch, goNext } = this.props
        const { isCorrect } = this.state.value

        if( isCorrect )
            dispatch(incScore())

        goNext()
    }
    
    onChange = e => {
        this.setState({
            value: e.target.value,
        })
    }

    finish = () => {
        const { dispatch, push } = this.props
        const { isCorrect } = this.state.value

        if( isCorrect )
            dispatch(incScore())

        push('/result')
    }

    render() {

        const { value } = this.state;
        const { question, shuffled, current } = this.props
        const { text } = question

        let button

        if (current !== 4) {
            button = <Button 
                        type="primary" 
                        htmlType="submit"
                        disabled={value == null} 
                        onClick={this.onClick}
                    >
                        Next
                    </Button>
        } else {
            button = <Button 
                        type="primary" 
                        htmlType="submit"
                        disabled={value == null} 
                        onClick={this.finish}
                    >
                        End Exam
                    </Button>
        }

        return (
            <Space direction="vertical">
                <h2>{text}</h2>
                <Radio.Group 
                    onChange={this.onChange}
                    value={value}
                >
                    <Space direction="vertical">
                    {
                        shuffled.map( (option, index) => {
                            return (
                                <Radio key={index} value={option}>{option.choice}</Radio>
                            )
                        })
                    }
                    </Space>
                </Radio.Group>
                <br />
                {button}
            </Space>
        )
    }
}

function mapStateToProps ({ questions, score }, { current }) {
    
    const question = questions[current]
    let shuffled = question.choices.map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)

    return {
        question,
        score,
        shuffled,
    }
}

export default connect(mapStateToProps)(Question)
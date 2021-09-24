import React, { Component } from 'react'
import { connect } from 'react-redux';
import Question from './Question';

export class Exam extends Component {

    state = {
        index: 0,
    }

    goNext = () => {
        const { questions } = this.props
        this.setState({ index: (this.state.index + 1) % questions.length })
    }

    render() {

        const { index } = this.state
        console.log(index);
        return (
            <>
                <Question current={index} goNext={this.goNext} push={this.props.history.push}/>
            </>
        )
    }
}

function mapStateToProps ({ questions }) {

    return {
        questions
    }

}

export default connect(mapStateToProps)(Exam)
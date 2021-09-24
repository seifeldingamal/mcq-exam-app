import { Descriptions } from 'antd'
import React from 'react'
import { connect } from 'react-redux'

const Result = ({ user, score }) => {
    return (
        <div style={{ width: '20%' }}>
            <Descriptions className='result' title="Exam Results" column={1}>
                <Descriptions.Item label="Name">{user}</Descriptions.Item>
                <Descriptions.Item label="Score">{score}</Descriptions.Item>
            </Descriptions>
        </div>
    )
}

function mapStateToProps ({ user, score }) {

    return {
        user,
        score,
    }

}

export default connect(mapStateToProps)(Result)

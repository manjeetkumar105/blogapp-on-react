import React, {Component} from 'react'
import {connect} from 'react-redux'

class Post extends Component {
    handleClick = () => {
        this.props.deletePost(this.props.post.id)
        this.props.history.push('/')
    }

    render() {
        const post = this.props.post ? (
            <div className="container">
                <h4 className="text-center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="text-center">
                    <button className="btn btn-danger" onClick={this.handleClick}>
                        Delet Post
                    </button>
                </div>
            </div>
        ) : (
            <p className="text-center">Loading post...</p>
        )
        return(
            <div className="container">
                {post}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id; 
    return {
        post: state.posts.find(post => post.id == id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => {dispatch({type: 'Delete_Post', id: id})}
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Post)
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class Home extends Component {
    render() {
        const {posts} = this.props;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="card" key={post.id}>
                        <div className="card-block">
                            <Link to={"/" + post.id}>
                            <h4 className="card-title">{post.title}</h4>
                            </Link>    
                            <p className="card-text">{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No post yet</div>
            )

        return (
                <div className="container">
                    <p>{postList}</p>
                </div>
            )
    }
    
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home)
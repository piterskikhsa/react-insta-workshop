import React, {Component} from 'react';
import User from './User';


export default class Post extends Component {
    render() {
        return (
            <div className="post">
                <User
                    src="https://cdn.thedailymash.co.uk/wp-content/uploads/20190324205530/man-serious-2.jpg"
                    name="Sarah Bob"
                    min
                />
                <img src={this.props.src} alt={this.props.alt}></img>
                <div className="post__name">
                    some account
                </div>
                <div className="post__descr">
                    lorem a;fka fk;sdlgk;lqwerjsdfjl sdlfkjllsdfn,smfnl jwelfsn,mfnsdl 
                </div>
            </div>
        )
    }
}
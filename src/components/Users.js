import React from 'react';
import User from './User';

export default function Users() {
    return (
        <div className="right">
                <User
                    src="https://cdn.thedailymash.co.uk/wp-content/uploads/20190324205530/man-serious-2.jpg"
                    name="Sarah Bob"
                />
            <div className="users__block">
                <User
                    src="https://cdn.thedailymash.co.uk/wp-content/uploads/20190324205530/man-serious-2.jpg"
                    name="Sarah Bob"
                    min
                />
                <User
                    src="https://cdn.thedailymash.co.uk/wp-content/uploads/20190324205530/man-serious-2.jpg"
                    name="Sarah Bob"
                    min
                />
                <User
                    src="https://cdn.thedailymash.co.uk/wp-content/uploads/20190324205530/man-serious-2.jpg"
                    name="Sarah Bob"
                    min
                />
                <User
                    src="https://cdn.thedailymash.co.uk/wp-content/uploads/20190324205530/man-serious-2.jpg"
                    name="Sarah Bob"
                    min
                />
            </div>
        </div>
    )
}
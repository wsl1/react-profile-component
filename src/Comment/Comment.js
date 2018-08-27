import React from 'react';
import './Comment.scss';
import CommentPhoto from './author1.jpg';

const Comment = ({data}) => (
    <div className="comment">
        <div className="comment__top">
            <img className="comment__photo" src={CommentPhoto} alt="author"/>
            <p className="comment__author">{data.author}</p>
        </div>
        <div className="comment__bottom">
            <p className="comment__content">{data.content}</p>
        </div>
    </div>
);

export default Comment;
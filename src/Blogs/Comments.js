import React, { useState, useEffect } from 'react';
import {Avatar} from '@material-ui/core';
import {db} from '../firebase';
import moment from 'moment'

function Comments({slug}) {
    const [comments, setcomments] = useState([])

    useEffect(() => {
       db.collection(slug).onSnapshot(snap => {
           let newComments = [];
           snap.forEach(res => {
               newComments.push({id: res.id, ...res.data()})
           })
           setcomments(newComments)
       })
    }, [slug])

    return (
        <div className="comments">
            <h3 className="heading">Comments ({comments.length})</h3>
            {
                comments.length <= 0 ?  <p> No comments yet ! </p>  : comments.map(comment => {
                      return (
                          <div key={comment.id} className=" comment">
                              <Avatar src={comment.photoUrl}></Avatar>
                              <div className="comment__description">
                                  <h6>{comment.username}</h6>
                                  <span>{moment(comment.createAt?.toDate()).fromNow()}</span>
                                 
                                  <p>{comment.comment}</p>
                              </div>
                          </div>
                      )
                })
            }

        </div>
    )
}

export default Comments

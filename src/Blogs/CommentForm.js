import React, { useState } from 'react';
import {auth, db, timestamp} from '../firebase'
import firebase from '../firebase'

function Contact({slug}) {
    const [comment, setcomment] = useState("");
    const [disabled, setdisabled] = useState(true);

    const handleChange = (e) => {
        setcomment(e.target.value);
        if(comment !== ''){
            setdisabled(false)
        }
    }
  console.log(slug)

    const handlesubmit = (e) => {
        e.preventDefault()
        if(comment !== ""){
            auth.onAuthStateChanged((user) => {
                if(user){
                    db.collection(slug).add({
                         comment,
                         createAt: timestamp(),
                         username: user.displayName,
                         photoUrl : user.photoURL
                    }).then( () => {
                        console.log("submited")
                        setcomment("")
                    })
                }
                else{
                    var provider = new firebase.auth.GoogleAuthProvider();
                    auth.signInWithPopup(provider).then(res => {
                        const user = res.user;
                        db.collection(slug).add({
                            comment,
                            createAt: timestamp(),
                            username: user.displayName,
                            photoUrl : user.photoURL
                       }).then(() => {
                        console.log("submited")
                        setcomment("")
                       })
                    }).catch(err => {
                        console.log(err)
                        alert("Sorry something went wrong")
                    })
                }
            });
           
        }
    }
    return (
        <form className="commentForm" onSubmit={handlesubmit}>
            <h3 className="heading"> Leave a Comment</h3>
            <textarea placeholder="Type here..." rows="8" value={comment} onChange={handleChange}></textarea>
            <br></br>
            <button disabled={disabled} type="submit">Add Comment</button>
        </form>
    )
}

export default Contact

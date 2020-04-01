import React from 'react'

import Comment from './Comment'

export default class Post extends React.Component {
   constructor(props){
      super(props);

      this.state = {
         comments: [],
         newCommentText: ''
      };
   
      this.handleSubimit = this.handleSubimit.bind(this)
      this.handleTextChange = this.handleTextChange.bind(this)
   }

   handleSubimit(e){
      this.setState({ 
         comments: [
            ...this.state.comments,
            { text: this.state.newCommentText }
         ]
      });

      this.setState({ newCommentText: '' })

      e.preventDefault();
   }  

   handleTextChange(e){
      this.setState({ newCommentText: e.target.value })
   }

   render() {
      return (
         <div>

            <form onSubmit = {this.handleSubimit}>

               <h2>{this.props.title}</h2>

               { this.state.comments.map((comments, index) => {
                  return <Comment key={index} text={comments.text}/> 
               }) }

               <input 
                  value={this.state.newCommentText} 
                  onChange={this.handleTextChange}
               />

               <button type="submit" > Comentar </button>

            </form>

         </div>
      )
   }
} 
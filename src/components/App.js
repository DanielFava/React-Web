import React from 'react'

import Post from './Post'

export default class App extends React.Component {
   constructor(props){
      super(props);

      this.state = {
         posts: [],
         newPostTitle: ''
      }

      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleTextChange = this.handleTextChange.bind(this)
   }

   handleSubmit(e) {
      this.setState({
         posts: [
            ...this.state.posts,
            { text: this.state.newPostTitle }
         ]
      })

      this.setState({ newPostTitle: '' })

      e.preventDefault()
   }

   handleTextChange(e) {
      this.setState({ newPostTitle: e.target.value })
   }
   
   render() {
      return (
         <div>
            <h1>Hello Word</h1>
            
            <form onSubmit={this.handleSubmit}>
               
               <input
                  value={this.state.newPostTitle}
                  onChange={this.handleTextChange}
               />
               <button type='submit'>Publicar</button>
               
            </form>

            { this.state.posts.map((posts, index) => {
               return  <Post key={ index } title={posts.text}/>           
            }) }

         </div> 
      )
   }
} 
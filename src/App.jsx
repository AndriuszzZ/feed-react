import { Post } from './Post'

export function App() {
  return (
    <div>
      <Post 
        author="Andre Lima" 
        content="Texto" 
      />

      <Post
        author="Gabriel"
        content="Texto 2"
      />
    </div>
    
  )
}


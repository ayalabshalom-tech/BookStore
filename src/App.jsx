import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Book } from './components/Book'

function App() {
  const books=[
    {title:"shamaim varetz",author:"liby klein",likes:250,isAvailable:true}
    ,{title:"malalel",author:"maya keinan",likes:100,isAvailable:false}
    ,{title:"dofliktim" ,author:"yona sapir",likes:70,isAvailable:true}
  ]; 
  
  return (
    <>
    
      <h1 className='h1'>Book Store </h1>
      {
       books.length > 0 ? 
       <ul>
         {books.map((b, index) =><Book title={b.title} author={b.author}likes={b.likes} index={index+1} isAvailable={b.isAvailable}></Book>)}
        </ul> :
        <p>no books</p>
        
      }
<h2>***ספרים מומלצים***</h2>
      {
        books.filter(b => b.likes > 100).length > 0 ? (
          <ul>
            {
              books.filter(b => b.likes > 100).map((b, index) => (
                <Book 
                  key={index} 
                  title={b.title} 
                  author={b.author} 
                  likes={b.likes} 
                  index={index + 1} 
                  isAvailable={b.isAvailable} 
                />
              ))
            }
          </ul>
        ) :
         (
          <p>אין ספרים מומלצים להצגה</p>
        )
      }
         
    </>
  )
}

export default App

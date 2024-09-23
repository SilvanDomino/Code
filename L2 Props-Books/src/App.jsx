import './App.css'
import { Book } from './Components/Book'

function App() {
  const books = [
    {
      title: "Dagboek van Anne Frank",
      author: "Anne Frank"
    },
    {
      title: "The C++ Programming Language",
      author: "Bjorne Strausrup"
    },
    {
      title: "De Davinci Code",
      author: "Dan Brown"
    },
    {
      title: "Death on the Nile",
      author: "Agatha Christie"
    },
    {
      title: "The Way of Kings",
      author: "Brandon Sanderson"
    },
    {
      title: "Harry Potter en de steen der wijzen",
      author: "JK Rowling"
    },
    {
      title: "Bakbijbel",
      author: "Rutger van den Broek"
    },
  ]
  return (
    <ul className='booklist'>
      {books.map(value => <Book title={value.title} author={value.author}/>
      )}
    </ul>
  )
}

export default App

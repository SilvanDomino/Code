import './Book.css';
export function Book(props){
  return (
    <li className="book">
      <div className="title">{props.title}</div>
      <div className="author">{props.author}</div>
    </li>
  )
}
import React from 'react'
import tempFile from '../../../TEMP/theme.json'
import Button from '../Button/Button';
import qwe from '../../../public/theme/1.jpg'
import { Link } from 'react-router-dom';

export default function CardTheme({el}) {
let choice = (el) =>{
    console.log("выбрана", el);
    
     
    
    
}

  return (
    <div>
    <div>
        <img style={{ weidth: '60px', height: '60px'}} src={el.imageURL} alt={el.theme} />
    </div>
<form>
    <div>{el.theme}</div>
<Link to={`/quiz/${el.id}`}>
<Button text = {"Выбрать"} onClick={() => choice(el.theme)}/>
</Link>
    </form>
    </div>
  )
}
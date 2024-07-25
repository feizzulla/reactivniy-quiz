import { Link } from 'react-router-dom';
import Button from "../../components/Button/Button";

export default function Header() {
  return (
    <div>
      <Link to='/'>
      <Button text="Главная" />
      </Link>
      <Link to='/stat'>
      <Button text="Статистика" />
      </Link>
      <Link to='/enter'>
      <Button text="Войти" />
      </Link>
      <Link to='/register'>
      <Button text="Регистрация" />
      </Link>
    </div>
  );
}

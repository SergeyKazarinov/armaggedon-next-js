import { useRouter } from 'next/router';
import Link from "next/Link";
import header from './Header.module.css';

function Header({}) {
  const {pathname} = useRouter();

  return(
    <header className={header.header}>
      <div className={header.flex_container}>
        <div className={`${header.flex} ${header.flex_column}`}>
          <h1 className={header.title}>ARMAGGEDON V2</h1>
          <p className={header.subtitle}>Сервис заказа уничтожения астероидов, опасно подлетающих к Земле.</p>
        </div>
        <nav className={`${header.flex} ${header.nav}`}>
          <Link href="/"><a className={`${header.button} ${pathname === "/" ? header.active : null}`}>Астероиды</a></Link>
          <Link href="/order"><a className={`${header.button} ${pathname === "/order" ? header.active : null}`}>Заказ</a></Link>
        </nav>
      </div>
      <img className={header.image} src="/headerBackground.jpg" alt="Картинка дня" />
    </header>
  )
}

export default Header;
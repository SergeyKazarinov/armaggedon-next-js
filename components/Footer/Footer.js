import footer from "./Footer.module.css"

function Footer({date}) {
  return(
    <footer className={footer.footer}>
      <p className={footer.copyright}>{date.getFullYear()} &#169; Все права и планеты защищены</p>
    </footer>
  )
}

export default Footer;
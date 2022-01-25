import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Header.module.scss";

const Header = () => {
  const router = useRouter();

  const getActiveClass = (path) => {
    return router.pathname === path ? styles.active : "";
  }

  return (
    <div className={styles.appHeader}>
      <Link href="/" className={getActiveClass("/")}>
        Resume
      </Link>
      <Link href="/cover-letter" className={getActiveClass("/cover-letter")}>
        Cover letter
      </Link>
    </div>
  );
};

export default Header;

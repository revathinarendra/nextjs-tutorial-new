import Link from "next/link";
import styles from "../../../styles/Navbar.module.css";
const Navbar = () => {
    return (
        <div className={styles.topnav}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/messages/sub">sub</Link>
  
            
        </div>
    )
}
export default Navbar 
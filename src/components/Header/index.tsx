import Link from 'next/link'
import styles from './header.module.scss'

export default function Header() {
	return(
		<header className={styles.blogHeader} >
			<Link href="/" >
				<a>
					<img src="/Logo.svg" alt="logo" />
				</a>
			</Link> 
		</header>
	); 
}

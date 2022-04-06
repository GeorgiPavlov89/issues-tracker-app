import styles from "../styles/Home.module.scss"
import { useEffect, useState } from 'react'



export default function SearchBar({ handleClick, userRef, repoRef }) {
    const [user, setUser] = useState('')
    const [repo, setRepo] = useState('')

    function handleChangeUser(e) {
        setUser(e.target.value)
        localStorage.setItem('user', e.target.value)

    }
    function handleChangeRepo(e) {
        setRepo(e.target.value)
        localStorage.setItem('repo', e.target.value)
    }
    useEffect(() => {
        setUser(localStorage.getItem('user'))
        setRepo(localStorage.getItem('repo'))
    }, [])
    return (
        <form className={styles.searchField}>

            <div className={styles.searchContainer}>
                <input className={styles.inputs}
                    ref={userRef}
                    placeholder="GitHub Username....."
                    onChange={handleChangeUser}
                    value={user}
                />
                <input className={styles.inputs}
                    ref={repoRef}
                    placeholder="GitHub Repo....."
                    onChange={handleChangeRepo}
                    value={repo}
                />
                <button className={styles.button}
                    onClick={handleClick}>
                    Search
                </button>
            </div>




        </form>
    )
}
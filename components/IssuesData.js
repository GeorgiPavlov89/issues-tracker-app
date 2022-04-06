import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import Image from 'next/image'
const IssuesData = ({ data }) => {
    console.log(data);

    return (
        <div className={styles.grid}>
            {

                data && data.map((item, index) => {
                    return (

                        <li key={index} className={styles.card}>
                            <Link href={{
                                pathname: `/issue/[comment]`,
                                query: {
                                    title: item.title,
                                    comments_url: item.comments_url
                                },
                            }}
                                as={`/issue/${index}`}>
                                <a>
                                    <h3>Title:<span> {item.title}</span></h3>
                                    <p>Assignee:<span>{item.user.login}</span></p>
                                    <Image width="50px" height="50px" src={item.user.avatar_url} alt="" />
                                    <p>Comments: <span>{item.comments}</span></p>
                                </a>
                            </Link>
                        </li>
                    )
                })
            }
        </div>
    )
}


export default IssuesData

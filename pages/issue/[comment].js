import Head from 'next/head'
import Image from 'next/image'
import React from 'react';
import { useRouter } from "next/router"
import styles from "../../styles/Home.module.scss";
import { useEffect, useState } from 'react'




export default function Comments() {
    const [comments, setComments] = useState([])
    const router = useRouter()
    const { title, comments_url } = router.query


    useEffect(() => {
        fetch(comments_url, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((data) => {
                setComments(data)
            })
    }, [comments_url])

    console.log(comments);
    return (
        <div >
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main >
                <h1>
                    <p>{title}</p>
                </h1>

                {
                    comments && comments.map((comment, index) => {
                        return (
                            <div className={styles.card} key={index}>
                                <div className={styles.commentInfo}>
                                    <h3>{comment.user.login}</h3>
                                    <Image src={comment.user.avatar_url} alt="" width="50px" height="50px" />
                                </div>
                                <p >{comment.body}</p>
                            </div>
                        )
                    })
                }


            </main>

        </div>
    )
}




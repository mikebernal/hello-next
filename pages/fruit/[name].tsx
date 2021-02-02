import { GetStaticPaths, GetStaticProps } from "next"
import { useRouter } from 'next/router'

export default function MyFruit(props) {
    const router = useRouter()

    console.log(router.query)

    if (router.isFallback) {
        return (
            <div>Loading.....</div>
        )
    }

    return (
        <div>
            Hello {props.myFavNum}
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    // const paths = 

    return {
        paths: [
            { params: { name: 'hello' } },
            { params: { name: 'world' } },
        ],
        fallback: true
    }
}


export const getStaticProps: GetStaticProps = async (ctx) => {
    const fs  = require('fs')

    return {
        props: {
            myFavNum: Math.floor(Math.random() * 10)
        },
        revalidate: 10
    }
}


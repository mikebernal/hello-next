import { GetStaticProps } from "next"
import path from 'path'

export default function Dynamic(props) {
    return (
        <div>
            <h1>My fav number: {props.myFavNum}</h1>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async (ctx) => {

    const fs  = require('fs')
    const txt = fs.readFileSync(path.join(process.cwd(), 'public/robots.txt'), 'utf8')

    return {
        props: {
            myFavNum: txt
        },
        revalidate: 10
    }
}

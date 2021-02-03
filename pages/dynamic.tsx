import { GetServerSideProps } from "next"
import path from 'path'

export default function Dynamic(props) {
    return (
        <div>
            <h1>My fav number: {props.myFavNum}</h1>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    return {
        props: {

        }
    }
}

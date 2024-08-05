import { useEffect } from "react";

const About = () => {
    useEffect(() => {
        
            //throw new Error('you really broke it')
        }
    )
    return (
        <>
        <h1>Hello About Page routing</h1>
        </>
    )
}
export const getStaticProps = (context) => {
    return {
        props: {},
        realidate: 10
    }
}
export default  About;
import Error from "next/error"

const Sub = ({errorcode,message}) => {
    if (errorcode){
        return <Error statusCode={errorcode} title={message} />
    }
    return (
        <>
        <h1> {message} Hello About Page routing welcome</h1>
        </>
    )
}
export const getServerSideProps = () => {
    try{
        return { props:{message:'subbbbbbbbb'},
             //notFound: object ? false:true
             //redirect:{
             //destination:'/'
             //permanent:true}

    }
    

    }catch(error){
        return{props:{errorcode:403,message:'broken'}
    }
    }

    
}
export default  Sub;
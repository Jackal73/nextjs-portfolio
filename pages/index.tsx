import {GetServerSidePropsContext, GetStaticPropsContext} from 'next'
import {services} from '../data'

const index = ({services}) => {
    return (
        <div className="p-4" >
            about page
        </div>
    )
}

export default index

// export const getServerSideProps = async (
//     context:getServerSidePropsContext
// ) => {
//
//     // Calculation
//     const res = await fetch('http://localhost:3000/api/services')
//     const data = await res.json()
//
//     console.log('SERVER', services)
//
//     return {
//         props:{
//             services: data.services,
//         },
//     }
// }
//
// export const getStaticProps = async (context: getStaticPropsContext) => {

    // Calculation
//     const res = await fetch('http://localhost:3000/api/services')
//     const data = await res.json()
//
//     console.log('SERVER', services)
//
//     return {
//         props:{
//             services: data.services,
//         },
//     }
// }

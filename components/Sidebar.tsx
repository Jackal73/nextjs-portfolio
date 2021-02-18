import {AiFillGithub, AiFillLinkedin, AiFillInstagram} from 'react-icons/ai'
import {GiTie} from 'react-icons/gi'
import {GoLocation} from 'react-icons/go'

const Sidebar = () => {

    return (
        <>
            <img src="https://kbldesigners.com/images/Shawn_profile.jpg"
                 alt="User Avatar"
                 className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
                <span className="text-green">Shawn </span>
                Kebel
            </h3>
            <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">
                Web Developer
            </p>
            <a className="px-2 py-1 my-3 bg-gray-200 rounded-full flex items-center justify-center"
                href=""
                download="name">
                <GiTie className="w-6 h-6" />
                Download Resume
            </a>

            {/* //Social icon */}
            <div className="flex justify-around my-5 text-green w-9/12 md:w-full mx-auto">
                <a href="#" >
                    <AiFillGithub className="w-8 h-8 cursor-pointer"/>
                </a>
                <a href="#">
                    <AiFillLinkedin className="w-8 h-8 cursor-pointer"/>
                </a>
                <a href="#">
                    <AiFillInstagram className="w-8 h-8 cursor-pointer"/>
                </a>
            </div>

            {/* address */}
            <div className="py-4 my-5 bg-gray-200" style={{marginLeft:"-1rem", marginRight:"-1rem"}}>
                <div className="flex items-center justify-center space-x-2">
                    <GoLocation />
                    <span>St. Louis, MO</span>
                </div>
                <p className="my-2">skebel@kblDevelopers.com</p>
                <p className="my-2">618-960-8989</p>
            </div>

            {/*Email button */}
            <button
                className="bg-gradient-to-r from-green to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2 focus:outline-none"
                onClick={() => window.open('mailto:skebel@www.kblDevelopers.com')}>
                Email Me
            </button>
            <button className="bg-gradient-to-r from-green to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2">Toggle Theme</button>
        </>
    )
}

export default Sidebar

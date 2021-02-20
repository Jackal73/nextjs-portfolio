import {IService, ISkill} from './type';
import {RiComputerLine} from 'react-icons/ri'
import {FaServer} from 'react-icons/fa'
import {AiOutlineAntDesign, AiOutlineApi} from 'react-icons/ai'
import {MdDeveloperMode} from 'react-icons/md'
import {DiJavascript1, DiReact, DiAngularSimple, DiBootstrap, DiJqueryLogo, DiPhotoshop, DiIllustrator} from 'react-icons/di'
import {CgFigma, CgFramer} from 'react-icons/cg'
import {SiMaterialUi, SiTailwindcss, SiNextDotJs} from 'react-icons/si'

export const services: IService[] = [
    {
        Icon: RiComputerLine,
        title:"Frontend Development",
        about:
            "I can build a beautiful and scalable SPA using <b>HTML</b>, <b>CSS</b>, and <b>React.js</b>",
    },
    {
        Icon: FaServer,
        title:"Backend Development",
        about:
            "Handle databases, servers, and API's using <b>Express</b> & other popular frameworks",
    },
    {
        Icon: AiOutlineApi,
        title:"API Development",
        about:
            "I can develop robust REST API using <b>Django-rest-api</b> and <b>Node API</b>",
    },
    {
        Icon: MdDeveloperMode,
        title:"Competitive Coder",
        about:
            "A daily problem solver in <b>HackerRank</b> and <b>Leet Code</b>",
    },
    {
        Icon: AiOutlineAntDesign,
        title:"UI/UX Designer",
        about:
            "Stunning user interface designer using <b>Figma</b> and <b>Framer</b>",
    },
    {
        Icon: RiComputerLine,
        title:"Whatever",
        about:
            "drffg erftggybv deessdr sccj ffnngj ffm,ngngjjm jgghhf. Any <b>questions</b>?",
    },
]

export const languages:ISkill[] = [
    {
        Icon:DiJavascript1,
        name:'JavaScript',
        level:'75%',
    },
    {
        Icon:DiReact,
        name:'React',
        level:'55%',
    },
    {
        Icon:DiAngularSimple,
        name:'Angular',
        level:'40%',
    },
    {
        Icon:SiNextDotJs,
        name:'Next',
        level:'60%',
    },
    {
        Icon:DiBootstrap,
        name:'Bootstrap',
        level:'80%',
    },
    {
        Icon:SiMaterialUi,
        name:'Material-UI',
        level:'65%',
    },
    {
        Icon:SiTailwindcss,
        name:'Tailwind CSS',
        level:'80%',
    },
]

export const tools: ISkill[] = [
    {
        Icon:CgFigma,
        name:'Figma',
        level:'60%',
    },
    {
        Icon:DiPhotoshop,
        name:'Photoshop',
        level:'60%',
    },
    {
        Icon:CgFramer,
        name:'Framer',
        level:'65%',
    },
    {
        Icon:DiIllustrator,
        name:'Illustrator',
        level:'40%',
    },
]

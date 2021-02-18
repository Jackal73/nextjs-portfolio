import {IService} from './type';
import {RiComputerLine} from 'react-icons/ri'
import {FaServer} from 'react-icons/fa'
import {AiOutlineAntDesign} from 'react-icons/ai'
import {AiOutlineApi} from 'react-icons/ai'
import {MdDeveloperMode} from 'react-icons/md'

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
            "drffg erftggybv deessdr sccj ffnngj ffm,ngngjjm jgghhf.",
    },
]

import {IProject, IService, ISkill} from './type';
import {RiComputerLine} from 'react-icons/ri'
import {FaServer} from 'react-icons/fa'
import {AiOutlineAntDesign, AiOutlineApi} from 'react-icons/ai'
import {MdDeveloperMode} from 'react-icons/md'
import {DiJavascript1, DiReact, DiAngularSimple, DiBootstrap, DiPhotoshop, DiIllustrator} from 'react-icons/di'
import {CgFigma, CgFramer} from 'react-icons/cg'
import {SiMaterialUi, SiTailwindcss, SiNextDotJs} from 'react-icons/si'


export const services: IService[] = [
    {
        Icon: RiComputerLine,
        title:"Frontend Development",
        about:
            "I can build a beautiful and scalable SPA using <b><em>HTML</em></b>, <b><em>CSS</em></b>, and <b><em>React.js</em></b>",
    },
    {
        Icon: FaServer,
        title:"Backend Development",
        about:
            "Handle databases, servers, and API's using <b><em>Express</em></b> & other popular frameworks",
    },
    {
        Icon: AiOutlineApi,
        title:"API Development",
        about:
            "I can develop robust REST API using <b><em>Django-rest-api</em></b> and <b><em>API</em></b>",
    },
    {
        Icon: MdDeveloperMode,
        title:"Competitive Coder",
        about:
            "A daily problem solver in <b><em>HackerRank</em></b> and <b><em>Leet Code</em></b>",
    },
    {
        Icon: AiOutlineAntDesign,
        title:"UI/UX Designer",
        about:
            "Stunning user interface designs using <b><em>Figma</em></b> and <b><em>Framer</em></b>",
    },
    {
        Icon: RiComputerLine,
        title:"Whatever",
        about:
            "drffg erftggybv deessdr sccj ffnngj ffm,ngngjjm jgghhf. Any <b><em>questions</em></b>?",
    },
]

export const languages:ISkill[] = [
    {
        Icon:DiJavascript1,
        name:'JavaScript ES6+',
        level:'80%',
    },
    {
        Icon:DiReact,
        name:'ReactJS',
        level:'70%',
    },
    {
        Icon:DiAngularSimple,
        name:'Angular',
        level:'50%',
    },
    {
        Icon:SiNextDotJs,
        name:'NextJS',
        level:'70%',
    },
    {
        Icon:DiBootstrap,
        name:'Bootstrap 4/5',
        level:'85%',
    },
    {
        Icon:SiMaterialUi,
        name:'Material-UI',
        level:'80%',
    },
    {
        Icon:SiTailwindcss,
        name:'Tailwind CSS',
        level:'85%',
    },
]

export const tools: ISkill[] = [
    {
        Icon:CgFigma,
        name:'Figma',
        level:'70%',
    },
    {
        Icon:DiPhotoshop,
        name:'Photoshop',
        level:'65%',
    },
    {
        Icon:CgFramer,
        name:'Framer',
        level:'70%',
    },
    {
        Icon:DiIllustrator,
        name:'Illustrator',
        level:'55%',
    },
]

export const projects: IProject[] = [
    {
        id: 0,
        name: "COVID Tracker",
        description:
            "This app shows a statistical view about corona virus over the world",
        image_path: "/images/covid.jpg",
        deployed_url: "https://covid-19-tracker-by-sumit.web.app/",
        github_url: "https://github.com/Dey-Sumit/covid-19-tracker",
        category: ["react"],
        key_techs: ["React", "Chart.js", "Material UI"],
    },
    {
        id: 7,
        name: "Algorithm Visualizer",
        description: "A web app which shows how an algorithm (path finding or sorting) works with cool animation",
        image_path: "/images/algoVisual.png",
        deployed_url: "https://visual-algorithm.web.app/",
        github_url: "https://github.com/Dey-Sumit/algorithm-visualizer",
        category: ["react"],
        key_techs: ["React", "firebase", "Framer Motion"],
    },

    {
        id: 1,
        name: "Dev Talks",
        image_path: "/images/dev.jpg",
        deployed_url: "https://dev-talks.herokuapp.com/",
        github_url: "https://github.com/Dey-Sumit/Dev-talks",
        category: ["node", "mongo", "react"],
        description:
            "Social Media app for developers who can share project,create posts,etc...",
        key_techs: [
            "React",
            "Redux",
            "Node",
            "Express",
            "Mongo",
            "REST API",
            "Bootstrap",
        ],
    },

    {
        id: 2,
        name: "Realtime Chat App",
        image_path: "/images/chatapp.jpg",
        deployed_url: "https://sumit-chat.netlify.app/",
        github_url: "https://github.com/Dey-Sumit/chat-app-socket.io-react-node",
        //TODO type on category
        category: ["node", "react"],
        description:
            "Basic Realtime Chat App where one can create a room can talk to each other",
        key_techs: ["React", "Node", "Express", "Socket", "Bootstrap"],
    },

    {
        id: 3,
        name: "Tweeter Clone",
        image_path: "/images/tweetme.jpg",
        deployed_url: "http://sumaxtweetme.pythonanywhere.com/",
        github_url: "https://github.com/Dey-Sumit/tweetme",
        category: ["django", "react"],
        description:
            "First Django Project :) | Typical Social Media App where one can post,like ,comment etc",
        key_techs: ["React", "Django", "Django REST API"],
    },
    {
        id: 4,
        name: "Dev Portfolio",
        image_path: "/images/portfolio.jpg",
        deployed_url: "http://suprateem.herokuapp.com/",
        category: ["vanilla"],
        github_url: "https://github.com/Dey-Sumit/tweetme",
        description: "Hey, You are seeing this project now...Enjoy",
        key_techs: ["Next.js", "Framer Motion", "TypeScript", "Tailwind"],
    },

    {
        id: 5,
        name: "Color Classification using tf.js",
        image_path: "/images/color.jpg",
        deployed_url: "!#",
        github_url: "https://github.com/Dey-Sumit/color-classification",
        category: ["express", "ml"],
        description:
            "Tried ML with JS :) | this app classifies a color using CNN algorithm in browser",
        key_techs: ["Express", "TensorFlow.js", "Vanilla js"],
    },
    {
        id: 6,
        name: "YouTube using YouTube ",
        image_path: "/images/youtubeClone.png",
        deployed_url: "https://not-utube.web.app/",
        github_url: "https://github.com/Dey-Sumit/youtube-clone-tutorial-up",
        category: ["express", "ml"],
        description:
            'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
        key_techs: [
            "React",
            "Redux",
            "Firebase Auth",
            "YouTube API",
            "Sass",
            "Bootstrap",
        ],
    },
    {
        id: 9,
        name: "Football App",
        //TODO add image,github,dep url
        image_path: "/images/football.png",
        deployed_url: "https://o-my-goal.web.app/",
        github_url: "https://github.com/Dey-Sumit/football-app",
        category: ["react"],
        description:
            "o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ",
        key_techs: ["React", "Redux", "Firebase Auth", "API", "Sass", "Bootstrap"],
    },
];

import {useEffect, useState, FunctionComponent} from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'

const NavItem:FunctionComponent<{
    activeItem:string,
    setActiveItem:Function,
    name:string,
    route:string
}> = ({activeItem, setActiveItem, name, route}) => {
    return (
        activeItem !== name ? (
            <Link href={route}>
                <a>
                    <span
                        onClick={() => setActiveItem(name)}
                        className="hover:text-green mx-2 cursor-pointer hover:border-b-2 border-green">{name}
                    </span>
                </a>
            </Link>
        ):null
    )
}

const Navbar = () => {
    const {pathname} = useRouter()
    const [activeItem, setActiveItem] = useState<string>('')

    // later
    useEffect(() => {
        if (pathname === '/') setActiveItem('About')
        else if (pathname === '/projects') setActiveItem('Projects')
        else if (pathname === '/resume') setActiveItem('Resume')
    }, [])

    return (
        <div className="flex items-center justify-between px-5 py-3 my-3">
            <span className="font-bold text-xl border-b-4 border-green md:text-2xl">{activeItem}</span>
            <div className="text-lg flex space-x-5">
                <NavItem
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                    name="About"
                    route="/"
                />
                <NavItem
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                    name="Projects"
                    route="/projects"
                />
                <NavItem
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                    name="Resume"
                    route="/resume"
                />
            </div>
        </div>
    )
}

export default Navbar

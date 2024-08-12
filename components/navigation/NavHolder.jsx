"use client"
import { usePathname } from 'next/navigation'

const NavHolder = ({children}) => {
    const path = usePathname();
    if(path.includes("/dashboard")) return;
    return children
}

export default NavHolder
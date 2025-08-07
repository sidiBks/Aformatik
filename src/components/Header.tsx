import { NavLink } from "react-router-dom"

function Header() {
    return (
        <div className="w-full border-b-2 border-b-gray-200 mb-5 md:mb-10">
            <header className="container w-full mx-auto my-3">
                <div className="mx-5 flex justify-between">
                    <div>
                        <NavLink to='/' className='text-lg font-bold'>
                            <span className="text-red-700">A</span>
                            formatik
                        </NavLink>
                    </div>
                    <nav>
                        <ul className="flex gap-5 md:gap-10">
                            <li>
                                <NavLink
                                    to='/ci1'
                                    className='font-semibold'
                                >
                                    CI-1
                                </NavLink>
                            </li>
                            {/* <li>
                                <NavLink
                                    to='/ci2'
                                    className='font-semibold'
                                >
                                    CI-2
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/ci3'
                                    className='font-semibold'
                                >
                                    CI-3
                                </NavLink>
                            </li> */}
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Header

import { Button } from "@/components/ui/button"
import { NavLink, Outlet } from "react-router-dom"

function FirstYear() {
  return (
    <div className="flex flex-col items-center gap-10">
      <nav className="flex gap-5">
        <NavLink to='/ci1/s5_old'>
          <Button variant='outline'>
            s5 - old
          </Button>
        </NavLink>
        <NavLink to='/ci1/s6_old'>
          <Button variant='outline'>
            s6 - old
          </Button>
        </NavLink>
      </nav>
      <div className="w-full mx-5">
        <div className="max-w-lg mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default FirstYear

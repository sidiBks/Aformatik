import { Button } from "@/components/ui/button"
import { MoveRight } from "lucide-react"
import { NavLink } from "react-router-dom"

function Home() {
  return (
    <div className="h-full flex justify-center items-center">
      <NavLink to='/ci1'>
        <Button>
          Get started <MoveRight />
        </Button>
      </NavLink>
    </div>
  )
}

export default Home

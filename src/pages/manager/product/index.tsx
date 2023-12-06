import { Button } from "@/components/ui/button"
import List from "@/features/product/_components/List"
import { Outlet } from "react-router-dom"


const ManagerDashboardPage = () => {
  return (
    <div> 
        <Outlet />
    </div>
  )
}

export default ManagerDashboardPage
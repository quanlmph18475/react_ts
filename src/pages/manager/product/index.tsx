import { Button } from "@/components/ui/button"
import List from "@/features/product/_components/List"
import { Link } from "react-router-dom"


const ManagerDashboardPage = () => {
  return (
    <div>
                <Button className="flex justify-between items-center mb-4" type="submit" >
                    <Link to="/admin/products/add">Thêm sản phẩm</Link>
                </Button>
        <List />
    </div>
  )
}

export default ManagerDashboardPage
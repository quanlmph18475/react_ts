import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom"

const Header_base = () => {
    
  return (
    <>
        <div className="flex bg-blue-300 justify-between">
                    <Link to="/"><img className="w-[70px] p-2 ml-5" src="../../../src/assets/image/logo.png"/></Link>
                    <div className="ml-auto flex items-center">
                        <Link to="signin"><button  className="flex items-center justify-center px-4 border-l">Đăng Nhập</button></Link>
                        <Link to="signup"><button className="flex items-center justify-center px-4 border-l">Đăng Ký</button></Link>
                    <div className="flex items-center justify-center">
                    
                    
                        <div className="flex border-2 rounded">
                            <Input type="text" className="px-4 py-2 w-80" placeholder="Search..."/>
                            <button className="flex items-center justify-center px-4 border-l">
                                <svg className="w-6 h-6 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                {/* <!-- Cart --> */}
                    <div className="ml-4 flow-root lg:ml-6">
                    <Link to="#" className="group m-1 p-2 flex items-center">
                        {/* <!-- Heroicon name: outline/shopping-bag --> */}
                        <svg className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        <span className=" text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                        <span className="sr-only">items in cart, view bag</span>
                    </Link>
                    
                    </div>
                    
                </div>
                
                </div>
    </>
    
  )
}
    


export default Header_base
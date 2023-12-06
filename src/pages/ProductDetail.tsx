import { useProductQuery } from '@/hooks/useProductQuery'
import { useParams } from 'react-router-dom'

const ProductDetailPage = () => {
    const { id } = useParams()
    const { data } = useProductQuery(id)
    return (
        <>
            <div className="bg-white">
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
                    {/* <!-- Image gallery --> */}
                    <div className="flex flex-col-reverse">
                    {/* <!-- Image selector --> */}
                    <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
                        <div className="grid grid-cols-4 gap-6" aria-orientation="horizontal" role="tablist">
                        <button id="tabs-1-tab-1" className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50" aria-controls="tabs-1-panel-1" role="tab" type="button">
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                            <img src={data?.image} width="70%" height="100%" alt="" className=" object-center object-cover"/>
                            </span>
                        </button>

                        <button id="tabs-1-tab-1" className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50" aria-controls="tabs-1-panel-1" role="tab" type="button">
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                            <img src={data?.image} width="70%" height="100%" alt="" className=" object-center object-cover"/>
                            </span>
                        </button>
                        
                        <button id="tabs-1-tab-1" className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50" aria-controls="tabs-1-panel-1" role="tab" type="button">
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                            <img src={data?.image} width="70%" height="100%" alt="" className=" object-center object-cover"/>
                            </span>
                        </button>
            
                        </div>
                    </div>
            
                    <div className="w-full aspect-w-1 aspect-h-1">
                        {/* <!-- Tab panel, show/hide based on tab state. --> */}
                        <div id="tabs-1-panel-1" aria-labelledby="tabs-1-tab-1" role="tabpanel" >
                        <img src={data?.image} width="70%" height="100%" alt="Angled front view with bag zipped and handles upright." className=" object-center object-cover sm:rounded-lg"/>
                        </div>
                        {/* <!-- More images... --> */}
                    </div>
                    </div>
            
                    {/* <!-- Product info --> */}
                    <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
                    <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{data?.name}</h1>
            
                    <div className="mt-3">
                        <p className="text-3xl text-red-600">{data?.price}đ</p>
                    </div>
                    <div className="mt-6">
                        <h3 className="font-bold ...">Description</h3> 
                        <div className="text-base text-gray-700 space-y-6">
                        <p>{data?.description}</p>
                        </div>
                    </div>
                        <div className="mt-40 flex sm:flex-col1">
                        <button type="submit" className="max-w-xs flex-1 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full">Add to bag</button>
                        </div>
                    
                    </div>
                </div>
                </div>
            </div>

            <div className="product ">
                <h1 className="ml-20 mt-10 text-lg ">SẢN PHẨM LIÊN QUAN</h1>
                <div className="grid grid-cols-5 gap-6 m-10">
                <div>
                    <img src={data?.image} width="180px" height="50px" className="mb-2" alt=""/>
                    <p className="mb-2">iPhone 11 64GB I Chính hãng VNA</p>
                    <label className="text-red-700 pr-4">10.790.000 ₫</label><label className="text-gray-400">18.000.000 ₫</label>
                    <p className="bg-gray-100 p-3 mt-2">[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ</p>
                </div>
                <div>
                    <img src={data?.image} width="180px" height="50px" className="mb-2" alt=""/>
                    <p className="mb-2">iPhone 11 64GB I Chính hãng VNA</p>
                    <label className="text-red-700 pr-4">10.790.000 ₫</label><label className="text-gray-400">18.000.000 ₫</label>
                    <p className="bg-gray-100 p-3 mt-2">[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ</p>
                </div>
                <div>
                    <img src={data?.image} width="180px" height="50px" className="mb-2" alt=""/>
                    <p className="mb-2">iPhone 11 64GB I Chính hãng VNA</p>
                    <label className="text-red-700 pr-4">10.790.000 ₫</label><label className="text-gray-400">18.000.000 ₫</label>
                    <p className="bg-gray-100 p-3 mt-2">[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ</p>
                </div>
                <div>
                    <img src={data?.image} width="180px" height="50px" className="mb-2" alt=""/>
                    <p className="mb-2">iPhone 11 64GB I Chính hãng VNA</p>
                    <label className="text-red-700 pr-4">10.790.000 ₫</label><label className="text-gray-400">18.000.000 ₫</label>
                    <p className="bg-gray-100 p-3 mt-2">[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ</p>
                </div>
                <div>
                    <img src={data?.image} width="180px" height="50px" className="mb-2" alt=""/>
                    <p className="mb-2">iPhone 11 64GB I Chính hãng VNA</p>
                    <label className="text-red-700 pr-4">10.790.000 ₫</label><label className="text-gray-400">18.000.000 ₫</label>
                    <p className="bg-gray-100 p-3 mt-2">[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ</p>
                </div>
            </div>
            </div>
        </>
    )
}


export default ProductDetailPage


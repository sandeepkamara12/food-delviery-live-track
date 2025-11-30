import { Pencil } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const ShopCard = ({ shop }) => {
    const navigate = useNavigate();
    return (
        <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
            <div className="h-52 flex flex-col justify-center items-center bg-blue-600 rounded-t-xl overflow-hidden">
                <img className="w-full rounded-xl" src={shop?.image} alt="Hero Image" />
            </div>
            <div className="p-4 md:p-6">
                <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
                    {shop?.city}, {shop?.state}, {shop?.address}
                </span>
                <h3 className="capitalize text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                    {shop?.name}
                </h3>
                <p className="mt-3 text-gray-500 dark:text-neutral-500">
                    A software that develops products for software developers and developments.
                </p>
                <div className="mt-4 flex items-center gap-4">
                    <figure className="w-20 h-20 rounded-full overflow-hidden">
                        <img src={shop?.owner?.image} alt={shop?.owner?.name} width="100" height="100" className='object-cover ' />
                    </figure>
                    <p className="mt-3 text-gray-500 dark:text-neutral-500">
                        {shop?.owner?.name}<br />
                        {shop?.owner?.email}<br />
                        {shop?.owner?.mobile}
                    </p>
                </div>
            </div>
            <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
                <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="#">
                    View sample
                </a>
                <button onClick={() => navigate(`/shop-items/${shop?._id}`)} className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="#">
                    View Products
                </button>
            </div>
        </div>
    )
}

export default ShopCard
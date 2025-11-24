import { useNavigate } from 'react-router-dom';
import useShop from '../hooks/useShop';
import { ChefHat, Hamburger, Pencil } from 'lucide-react';

const OwnerDashboard = () => {
  const { shop } = useShop();
  const navigate = useNavigate();
  console.log(shop);
  return (
    <>
      {
        !shop ?
        <div className='flex flex-wrap items-center justify-center flex-col gap-4 h-[calc(100vh-160px)] bg-blue-100'>
          <ChefHat />
          Please create a shop to get an order! <br />
          <button onClick={() => navigate('/create-shop')} type="button" className="capitalize py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
            get started
          </button>
        </div>
        :
        <>
          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group col-start-2 col-end-4 flex flex-col h-full bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
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
                </div>
                <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
                  <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="#">
                    View sample
                  </a>
                  <button onClick={() => navigate('/create-shop')} className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="#">
                    <Pencil /> Update Shop
                  </button>
                </div>
              </div>
            </div>
          </div>


          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group col-start-2 col-end-4 flex flex-col h-full bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                <div className="p-4 md:p-6">
                  <h3 className="capitalize text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                    Add Your Food Item
                  </h3>
                  <p className="mt-3 text-gray-500 dark:text-neutral-500">
                    A software that develops products for software developers and developments.
                  </p>
                </div>
                <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">

                  <button onClick={() => navigate('/create-item')} className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="#">
                    <Hamburger /> Add Food
                  </button>
                </div>
              </div>
            </div>
          </div>

        </>
      }
    </>
  )
}

export default OwnerDashboard

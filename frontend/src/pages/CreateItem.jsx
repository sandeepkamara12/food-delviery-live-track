import { ArrowLeft, Trash } from 'lucide-react'
import React, { useState } from 'react'
import { useFormik } from 'formik';
// import * as yup from 'yup';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useShop } from '../hooks/useShop';

const CreateItem = () => {
    const { createItem } = useShop();
    const navigate = useNavigate();
    const [shopImage, setShopImage] = useState(null);

    const categories = [
        "Snacks", "Burgers"
    ];
    const types = [
        "veg", "non veg"
    ];

    const formik = useFormik({
        initialValues: {
            name: "",
            category: '',
            price: '',
            food_type: '',
            image: null
        },
        enableReinitialize: true,
        onSubmit: async values => {
            console.log(values);
            const formData = new FormData();
            formData.append('name', values.name);
            formData.append('category', values.category);
            formData.append('price', values.price);
            formData.append('food_type', values.food_type);
            formData.append('image', values.image);
            // formData.append('shop',shop?._id);

            const result = await createItem(formData);
            if (result?.success) {
                toast.success(result?.message);
                formik.resetForm();
                setShopImage(null);
                navigate('/owner');
            }
            else {
                toast.error(result?.message);
            }
        }
    });
    const handleShopImage = (file) => {
        if (!file) return;
        formik.setFieldValue('image', file);
        setShopImage(URL.createObjectURL(file))
    }
    return (
        <div>
            <ArrowLeft onClick={() => navigate('/owner')} />
            <h2>Add Item</h2>
            <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <form onSubmit={formik.handleSubmit}>
                    <div className="bg-white rounded-xl shadow-xs dark:bg-neutral-900">
                        <div className={`relative h-40 rounded-xl overflow-hidden`}>
                            {
                                shopImage ?
                                    <>
                                        <img src={shopImage} alt="" className='h-full w-full object-cover object-center rounded-xl' />
                                        <div className="absolute top-0 end-0 p-4">
                                            <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg text-gray-800 hover:text-red-500 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                                                <Trash className='shrink-0 size-4' />
                                            </button>
                                        </div>
                                    </>
                                    :
                                    <img src="https://preline.co/assets/svg/examples/abstract-bg-1.svg" alt="" className='h-full w-full object-cover object-center rounded-xl' />
                            }
                        </div>

                        <div className="pt-0 p-4 sm:pt-0 sm:p-7">
                            <div className="space-y-4 sm:space-y-6">

                                <div className="space-y-2">
                                    <label htmlFor="af-submit-app-shop-name" className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200">
                                        Item name
                                    </label>

                                    <input name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} id="af-submit-app-shop-name" type="text" className="py-1.5 sm:py-2 px-3 pe-11 block w-full border border-gray-200 shadow-2xs rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Enter shop name" />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="af-submit-app-item-price" className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200">
                                        Item price
                                    </label>

                                    <input name="price" value={formik.values.price} onChange={formik.handleChange} onBlur={formik.handleBlur} id="af-submit-app-shop-price" type="text" className="py-1.5 sm:py-2 px-3 pe-11 block w-full border border-gray-200 shadow-2xs rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Enter item price" />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="af-submit-app-category" className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200">
                                        Category
                                    </label>

                                    <select name="category" id="af-submit-app-category" value={formik.values.category} onChange={formik.handleChange} onBlur={formik.handleBlur} className="py-1.5 sm:py-2 px-3 pe-9 block w-full border border-gray-200 shadow-2xs rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                                         <option value="">Select Category</option>
                                        {
                                            categories?.length > 0 && categories?.map((category, index) => {
                                                return (<option value={category} key={index}>{category}</option>)
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="food_type" className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200">
                                        Food Type
                                    </label>

                                    <select id="food_type" name="food_type"
                                        value={formik.values.food_type}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur} className="py-1.5 sm:py-2 px-3 pe-9 block w-full border border-gray-200 shadow-2xs rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                                        <option value="">Select Food Type</option>
                                        {
                                            types?.length > 0 && types?.map((type, index) => {
                                                return (<option value={type} key={index}>{type}</option>)
                                            })
                                        }
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="shop-image" className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200">
                                        Item image
                                    </label>

                                    <label htmlFor="shop-image" className="group p-4 sm:p-7 block cursor-pointer text-center border-2 border-dashed border-gray-200 rounded-lg focus-within:outline-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 dark:border-neutral-700">
                                        <input onChange={(e) => handleShopImage(e.target.files[0])} id="shop-image" name="image" type="file" className="sr-only" accept='image/*' />
                                        <svg className="size-10 mx-auto text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z" />
                                            <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                                        </svg>
                                        <span className="mt-2 block text-sm text-gray-800 dark:text-neutral-200">
                                            Browse your device or <span className="group-hover:text-blue-700 text-blue-600">drag 'n drop'</span>
                                        </span>
                                        <span className="mt-1 block text-xs text-gray-500 dark:text-neutral-500">
                                            Maximum file size is 2 MB
                                        </span>
                                    </label>
                                </div>


                            </div>

                            <div className="mt-5 flex justify-center gap-x-2">
                                <button type="submit" className="w-full py-3 px-4 inline-flex items-center justify-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                                    Create Item
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateItem

import { ArrowLeft } from 'lucide-react'
import { useState } from 'react'
import { useFormik } from 'formik';
import useGetCity from '../hooks/useGetCity';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useEffect } from 'react';
import { useShop } from '../hooks/useShop';
import Spinner from '../components/common/Spinner';

const CreateEditShop = () => {
    const navigate = useNavigate();

    const [imagePreview, setImagePreview] = useState(null);
    const [imageFile, setImageFile] = useState(null);

    const { shop, createUpdateShop } = useShop();
    const { city, state, address } = useGetCity();
    const { user } = useAuth();

    useEffect(() => {
        if (shop?.image) {
            setImagePreview(shop?.image); // Cloudinary URL
            setImageFile(null); // clear old file
        }
    }, [shop]);

    const formik = useFormik({
        initialValues: {
            name: shop?.name ? shop?.name : "",
            city: shop?.city ? shop?.city : city,
            state: shop?.state ? shop?.state : state,
            address: shop?.address ? shop?.address : address,
            image: null
        },
        validationSchema: yup.object({
            name: yup.string().required("Name is required"),
            city: yup.string().required("City is required"),
            state: yup.string().required("State is required"),
            address: yup.string().required("Address is required"),
        }),
        enableReinitialize: true,
        onSubmit: async values => {
            const formData = new FormData();
            formData.append('name', values.name);
            formData.append('city', values.city);
            formData.append('state', values.state);
            formData.append('owner', user?._id);
            formData.append('address', values.address);

            if (imageFile) {
                formData.append("image", imageFile);
            }

            const result = await createUpdateShop(formData);
            if (result?.success) {
                toast.success(result?.message);
                formik.resetForm();
                navigate('/owner');
            }
            else {
                toast.error(result?.message);
            }
        }
    });
    const handleShopImage = (file) => {
        if (!file) return;
        setImageFile(file); // store actual file
        setImagePreview(URL.createObjectURL(file)); // store preview
        formik.setFieldValue("image", file); // important
    };

    const isDisabled = (!formik.isValid && formik.submitCount > 0) || formik.isSubmitting;
    const buttonText = shop ? 'Update Shop' : 'Create Shop';

    console.log(formik, 'fomrik');

    return (
        <div>
            <ArrowLeft onClick={() => navigate('/owner')} />
            <h2>
                {
                    shop ? 'Edit Shop' : 'Add Shop'
                }
            </h2>
            <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <form onSubmit={formik.handleSubmit}>
                    <div className="bg-white rounded-xl shadow-xs dark:bg-neutral-900">
                        <div className={`relative h-40 rounded-xl overflow-hidden`}>
                            {
                                imagePreview ?
                                    <>
                                        <img src={imagePreview} alt="" className='h-full w-full object-cover object-center rounded-xl' />
                                    </>
                                    :
                                    <img src="https://preline.co/assets/svg/examples/abstract-bg-1.svg" alt="" className='h-full w-full object-cover object-center rounded-xl' />
                            }
                        </div>

                        <div className="pt-0 p-4 sm:pt-0 sm:p-7">
                            <div className="space-y-4 sm:space-y-6">

                                <div className="space-y-2">
                                    <label htmlFor="af-submit-app-shop-name" className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200">
                                        Shop name
                                    </label>

                                    <input name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} id="af-submit-app-shop-name" type="text" className="py-1.5 sm:py-2 px-3 pe-11 block w-full border border-gray-200 shadow-2xs rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Enter shop name" />
                                    {
                                        formik.touched.name && formik.errors.name &&
                                        <p class="text-sm text-red-600 mt-2" id="hs-validation-name-error-helper">{formik.errors.name}</p>
                                    }
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="city" className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200">
                                        City
                                    </label>

                                    <input name="city" value={formik.values.city} onChange={formik.handleChange} onBlur={formik.handleBlur} id="city" type="text" className="py-1.5 sm:py-2 px-3 pe-11 block w-full border border-gray-200 shadow-2xs sm:text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Enter city" />
                                    {
                                        formik.touched.city && formik.errors.city &&
                                        <p class="text-sm text-red-600 mt-2" id="hs-validation-city-error-helper">{formik.errors.city}</p>
                                    }
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="state" className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200">
                                        State
                                    </label>

                                    <input name="state" value={formik.values.state} onChange={formik.handleChange} onBlur={formik.handleBlur} id="state" type="text" className="py-1.5 sm:py-2 px-3 pe-11 block w-full border border-gray-200 shadow-2xs sm:text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Enter state" />
                                    {
                                        formik.touched.state && formik.errors.state &&
                                        <p class="text-sm text-red-600 mt-2" id="hs-validation-state-error-helper">{formik.errors.state}</p>
                                    }
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="address" className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200">
                                        Shop Address
                                    </label>

                                    <input name="address" value={formik.values.address} onChange={formik.handleChange} onBlur={formik.handleBlur} id="address" type="text" className="py-1.5 sm:py-2 px-3 pe-11 block w-full border border-gray-200 shadow-2xs sm:text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Enter shop address" />
                                    {
                                        formik.touched.address && formik.errors.address &&
                                        <p class="text-sm text-red-600 mt-2" id="hs-validation-address-error-helper">{formik.errors.address}</p>
                                    }
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="shop-image" className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200">
                                        Shop image
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
                                <button disabled={isDisabled} type="submit" className="w-full py-3 px-4 inline-flex items-center justify-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                                    {formik.isSubmitting ? <Spinner type="inner" /> : buttonText}
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateEditShop

import React, { useState } from 'react'
import ErrorMessage from '../common/ErrorMessage'
import { Eye, EyeOff } from 'lucide-react'

const Password = ({ label, name, value, onChange, onBlur, error, touched }) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div>
            <label htmlFor={name} className="block text-sm mb-2 dark:text-white">{label}</label>
            <div className="relative">
                <input type={showPassword ? 'text' : 'password'} id={name} name={name} value={value} onChange={onChange} onBlur={onBlur} className="py-2.5 sm:py-3 px-4 block w-full border border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" />
                {
                    showPassword ?
                    <EyeOff className='absolute right-3.5 top-3.5 size-4 cursor-pointer' onClick={()=>setShowPassword(false)} />
                    :
                    <Eye className='absolute right-3.5 top-3.5 size-4 cursor-pointer'  onClick={()=>setShowPassword(true)} />
                }
            </div>
           <ErrorMessage error={error} touched={touched} />
        </div>
    )
}

export default Password

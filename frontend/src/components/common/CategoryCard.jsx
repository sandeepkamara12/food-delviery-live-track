import React from 'react'
import { categories } from '../../category'

const CategoryCard = () => {
    return (
        <>
            {
                categories && categories.map((cat, index) => (
                    <div key={index}>
                        <div className="size-20 rounded-full bg-gray-100 flex items-center justify-center">
                            <img src={cat.image} alt={cat.category} className="size-12 object-cover rounded-full" />
                        </div>
                        <span className="text-sm text-gray-700">{cat.category}</span>
                    </div>
                ))
            }
            </>
    )
}

export default CategoryCard

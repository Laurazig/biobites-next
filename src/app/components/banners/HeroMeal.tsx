'use client'
import Image from 'next/image'
import wraps from '../../../../public/assets/hero/heroMeal.jpg'

export default function HeroMeal() {
    return (
        <div>
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h[700px]">
                <Image
                    src={wraps}
                    alt='cabage raw wraps'
                    layout='fill'
                    objectFit='cover' />
            </div>
        </div>
    );
}
'use client'
import Image from 'next/image'
import hands from '../../../../public/assets/hero/heroSust.jpg'

export default function HeroHome() {
    return (
        <div>
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h[700px]">
                <Image
                    src={hands}
                    alt='tasty vegan skewered tofu'
                    layout='fill'
                    objectFit='cover' />
            </div>
        </div>
    );
}
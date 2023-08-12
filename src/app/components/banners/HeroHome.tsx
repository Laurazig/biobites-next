'use client'
import Image from 'next/image'
import skewers from '../../../../public/assets/hero/heroHome.jpg'

export default function HeroHome() {
    return (
        <div>
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h[700px]">
                <Image
                    src={skewers}
                    alt='tasty vegan skewered tofu'
                    layout='fill'
                    objectFit='cover' />
            </div>
        </div>
    );
}
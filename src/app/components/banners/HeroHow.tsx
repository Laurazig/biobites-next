'use client'
import Image from 'next/image'
import delivery from '../../../../public/assets/hero/heroHow.jpg'

export default function HeroHow() {
    return (
        <div>
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h[700px]">
                <Image
                    src={delivery}
                    alt='delivery doorstep'
                    layout='fill'
                    objectFit='cover' />
            </div>
        </div>
    );
}
'use client'
import Image from 'next/image'
import couscous from '../../../../public/assets/hero/heroCart.jpg'

export default function HeroCart() {
    return (
        <div>
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h[700px]">
                <Image
                    src={couscous}
                    alt='cabage raw wraps'
                    layout='fill'
                    objectFit='cover' />
            </div>
        </div>
    );
}
'use client'
import Image from 'next/image'
import skewers from '../../../../public/assets/hero/heroHome.jpg'

export default function HeroHome() {
    return (
        <div>
            <div className="relative">
                <div className="inset-0 h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h[700px]">
            {/* <div className="relative">
                <div className="absolute inset-0 h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h[700px]"> */}
                    <Image
                        src={skewers}
                        alt='banner image - tasty vegan skewered tofu'
                        layout='fill'
                        objectFit='cover'
                        className='z-0'
                    />
                </div>
                {/* <div className="relative z-10 flex flex-col justify-center h-fit">
                    <h1 className="text-2xl">bio cooking</h1>
                    <p className="text-white">Made easy</p>  
                </div> */}
                {/* </Image>  */}
            </div>
        </div>
    );
}
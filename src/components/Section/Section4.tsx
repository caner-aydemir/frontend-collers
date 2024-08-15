import React, { useRef } from 'react'
import Carousel from "react-multi-carousel";

import prevSvg from "../icons/prev.svg"
import nextSvg from "../icons/next.svg"
import zoomerIcon from "../icons/zoomer.svg"
import shellsIcon from "../icons/shellsIcon.svg"
import artvenueIcon from "../icons/artvenue.svg"
import warefallIcon from "../icons/warefall.svg"
import "react-multi-carousel/lib/styles.css";


const responsive = {
    xl: {
        breakpoint: { max: 3000, min: 1900 },
        items: 5,
        slidesToSlide: 4
    },
    lg: {
        breakpoint: { max: 1899, min: 1200 },
        items: 4,
        slidesToSlide: 3
    },
    md: {
        breakpoint: { max: 1199, min: 898 },
        items: 2,
        slidesToSlide: 2
    },
    xs: {
        breakpoint: { max: 897, min: 0 },
        items: 1,
        slidesToSlide: 1
    }
};



const sliderItem = [
    {
        icon: zoomerIcon,
        title: "Zoomer",
        text: "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
        userPhoto: "https://s3-alpha-sig.figma.com/img/558c/b79e/f83fbd49cdf87134bb331c6a7d3a9eaa?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U9QvUDCKwd070poQYmXxNOKPHV6HCN85kXPELkhQaTv-bxwrVKXvi25YeRK9XCJtC9n0H7fnLjSC2cibiJZczLlXNDaP8W6KqFDhrElqB4-ZZ0VOsQ4fMuTlhV~euu5kSRxXPcsaKCMHMmkHLkgM5KvQ9N3VW7SFgo8ZSBOej2JW0nQgA5l4EG9RhyrykmGMcfu4OwIcyKnujkFZCTcHbDlpImBTFasgPKjRTsV2roBtH0MJOFBWkCuO0ApySwkgqYHMDkEyglTTMHi-WrWUKgRF8lSFtVb7yTvkVEE8wYkupT4bDDPiaC1EN6ahbLMQ4PsO0yIYxZCoZAle~EQHdQ__",
        userName: "Hellen Jummy",
        userRole: "Team Lead"
    },
    {
        icon: shellsIcon,
        title: "Shells",
        text: "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
        userPhoto: "https://s3-alpha-sig.figma.com/img/4968/5ac7/b81e766e223bcb38bd406643740bb4b1?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P0-Ym91gzFNO56UWUnIO0zZP~YAYE3DjrzVWdCfw1TUBWFNA0mMvj~9-IuUYZS-L0tn8I4cpDPDgRcT9j4Ub3fcf6MdaOAPH5WdazuaAwNprJKWzRQeO0~sTiFhA5IUdO5Qek0afgqhqbeFBr2KMYMHMMhGRltPBwEccpTsvGIJ2XjGLnBkEEbH0hDE6MT2trt1-cMPIJsCIxW764p1oGfCmg8Xb9kqowblkVUnzTSkn0soBsoNO4mDK-DIg-fLABZ7AqBjB5PgsgLVQj1PpBWENP7iRpXzmhAsN0fk~bOYcRaHM4QbzlYRBGnkhgHv-3Tf9vogm9c-1UP1fccY13w__",
        userName: "Hellena John",
        userRole: "Co-founder"
    },
    {
        icon: artvenueIcon,
        title: "ArtVenue",
        text: "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
        userPhoto: "https://s3-alpha-sig.figma.com/img/845c/0a7e/76a09dd9880480e7c59f7385cde7161f?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OUcdKYHuBdHesm3Z-EeBUoO-YakQx6oBw0GlkrjG0LmMptOJHGcOyanL4ttJlT21rmYITVcjZU6BMuh5TULkBD-XpS2bffArUf2pJL6iZzlKDavHSqCuswCcWj7y2pl4UrI25PanJukOVx8WY0FWA4r6Axha5dsG4fxu5gUKEyCWEK7sbKxqYBkQ6RsVgabzw6yOJyA0jja6-LtKck9RWoJl-F4VZvCA4YkfPcTcp4WnCQ-Z-fk1Z2olXJkeeswU0j~dSxTHiOTC4HBNh3dWjSHDkWoEKVa7HefInJlZThIUUvHQbPyIA5K6j7GTR2Xyt74fmdEBY5SPXldUFO~fYw__",
        userName: "David Oshodi",
        userRole: "Manager"
    },
    {
        icon: warefallIcon,
        title: "Warefall",
        text: "Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.",
        userPhoto: "https://s3-alpha-sig.figma.com/img/3ecb/1e9a/a85b510d3d1428b1c489a04f38d17d22?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fhWlWJqIkSKG6RDG38ZyaOSy-HE-~fpmAovsf6Jn7DoCm9R3Hj-z4Uz8OsgpW8-ALJ7hziM9novcgr5I5NmJWkm7sS1xDUqsye8Adm1Ge11SKDX0dysx5uZkIaB~vjVhFunk2j~jFfBEL~SiH63khrIbSZSiEsIEIxIfcUpCBnWabTdujuWwFafTfl7CKyskaAhzmNN7xQKPrgtU9eiKuBwCVdnSJhUKAImR4n4KUN7MUt6iqvR2-CjSBhU789LHlfLJpi-7ibcm~Te9dtZ9al3OQb~NxqMg0uI3hTlTCQrahlBUkVB8HgraOfm77hH-89pt-OpnMP5DwwXUGsFVwA__",
        userName: "Emma Bole",
        userRole: "Ceo"
    },
    {
        icon: artvenueIcon,
        title: "ArtVenue",
        text: "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
        userPhoto: "https://s3-alpha-sig.figma.com/img/845c/0a7e/76a09dd9880480e7c59f7385cde7161f?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OUcdKYHuBdHesm3Z-EeBUoO-YakQx6oBw0GlkrjG0LmMptOJHGcOyanL4ttJlT21rmYITVcjZU6BMuh5TULkBD-XpS2bffArUf2pJL6iZzlKDavHSqCuswCcWj7y2pl4UrI25PanJukOVx8WY0FWA4r6Axha5dsG4fxu5gUKEyCWEK7sbKxqYBkQ6RsVgabzw6yOJyA0jja6-LtKck9RWoJl-F4VZvCA4YkfPcTcp4WnCQ-Z-fk1Z2olXJkeeswU0j~dSxTHiOTC4HBNh3dWjSHDkWoEKVa7HefInJlZThIUUvHQbPyIA5K6j7GTR2Xyt74fmdEBY5SPXldUFO~fYw__",
        userName: "David Oshodi",
        userRole: "Manager"
    },
    {
        icon: warefallIcon,
        title: "Warefall",
        text: "Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.",
        userPhoto: "https://s3-alpha-sig.figma.com/img/3ecb/1e9a/a85b510d3d1428b1c489a04f38d17d22?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fhWlWJqIkSKG6RDG38ZyaOSy-HE-~fpmAovsf6Jn7DoCm9R3Hj-z4Uz8OsgpW8-ALJ7hziM9novcgr5I5NmJWkm7sS1xDUqsye8Adm1Ge11SKDX0dysx5uZkIaB~vjVhFunk2j~jFfBEL~SiH63khrIbSZSiEsIEIxIfcUpCBnWabTdujuWwFafTfl7CKyskaAhzmNN7xQKPrgtU9eiKuBwCVdnSJhUKAImR4n4KUN7MUt6iqvR2-CjSBhU789LHlfLJpi-7ibcm~Te9dtZ9al3OQb~NxqMg0uI3hTlTCQrahlBUkVB8HgraOfm77hH-89pt-OpnMP5DwwXUGsFVwA__",
        userName: "Emma Bole",
        userRole: "Ceo"
    },
]

const Section4 = () => {
    const carouselRef = useRef<any>(null);

    const handleNext = () => {
        if (carouselRef.current) {
            carouselRef.current.next();
        }
    };

    const handlePrevious = () => {
        if (carouselRef.current) {
            carouselRef.current.previous();
        }
    };
    return (
        <div className=' flex flex-col bg-[#FFFBEB] gap-y-10    '>
            <div className='flex justify-between items-center px-20 xs:px-5 '>
                <p className='text-5xl xs:text-3xl xs:mx-auto font-extrabold'>Because they love us</p>
                <div className=' flex items-center gap-x-4 xs:hidden'>
                    <button onClick={handlePrevious} ><img src={nextSvg} alt="" /></button>
                    <button onClick={handleNext}><img className='rotate-180' src={nextSvg} alt="" /></button>
                </div>
            </div>
            <div className='flex w-full mx-auto  gap-x-4  h-[421px] xs:h-[277px] z-10 '>
                <div className=' bg-[#FDE68A] w-full  '>
                    <div className=' w-full z-10  gap-x-5 mx-auto'>
                        <Carousel
                            ref={carouselRef}
                            responsive={responsive}
                            autoPlay={true}
                            swipeable={true}
                            draggable={true}
                            autoPlaySpeed={2000}
                            infinite={true}
                            partialVisible={false}
                            renderButtonGroupOutside={true}
                            renderArrowsWhenDisabled={false}
                            arrows={false}
                        >
                            {sliderItem.map((item, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="flex flex-col hover:cursor-pointer bg-white border gap-y-5 w-[384px] h-[430px]  
                                        xs:w-[319px] xs:h-[296px] xs:mx-auto
                                        justify-between  my-10 rounded-[20px] px-5 py-8"
                                    >
                                        <div className="flex gap-x-1">
                                            <img src={item.icon} alt="" />
                                            <p className="text-2xl font-bold text-[#475569]">{item.title}</p>
                                        </div>
                                        <div>
                                            <p className="text-base font-normal">{item.text}</p>
                                        </div>
                                        <div className="flex items-center gap-x-5">
                                            <img
                                                className="w-16 h-16 rounded-full object-cover"
                                                src={item.userPhoto}
                                                alt=""
                                            />
                                            <div className="flex flex-col">
                                                <p className="text-lg font-normal">{item.userName}</p>
                                                <p className="text-[#475569] text-base font-normal">
                                                    {item.userRole}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                );
                            })}
                        </Carousel>
                    </div>
                </div>



            </div>

        </div>
    )
}

export default Section4
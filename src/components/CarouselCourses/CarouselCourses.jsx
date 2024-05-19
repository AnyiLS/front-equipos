import React from "react";
import Slider from "react-slick";
/** Local Modules */
import useControllers from "controllers";
import ModalVidas from "../../screens/ModalVidas/ModalVidas"


const CarouselCourses = () => {
    /** Controllers */
    const { useComponentsHooks } = useControllers();
    const { useCarouselCourses } = useComponentsHooks();
    const { courses } = useCarouselCourses();

    const [openVidasModal, setOpenVidasModal] = React.useState(false)
    const [filterCourse, setFilterCourse] = React.useState([])

    React.useEffect(() => {
        setFilterCourse(courses.filter((item) => item.id !== 6 && item.id !== 7))
    },[courses])
    

    return (
        <React.Fragment>
            <ModalVidas open={openVidasModal} onClick={() => setOpenVidasModal(false)}></ModalVidas>
            <h2 className="mb-6">NUESTROS CURSOS</h2>
            {filterCourse.length > 3 ? (
                <Slider
                    slidesToShow={filterCourse.length > 3 ? 4 : filterCourse.length}
                    slidesToScroll={1}
                    dots={false}
                    arrows={false}
                    autoplaySpeed={10000}
                    autoplay
                    speed={3000}
                    responsive={[
                        {
                            breakpoint: 1100,
                            settings: {
                                slidesToShow:
                                filterCourse.length > 2 ? 3 : filterCourse.length,
                            },
                        },
                        {
                            breakpoint: 767,
                            settings: {
                                slidesToShow:
                                filterCourse.length > 1 ? 2 : filterCourse.length,
                            },
                        },
                        {
                            breakpoint: 500,
                            settings: {
                                slidesToShow: 1,
                            },
                        },
                    ]}
                >
                    {filterCourse.map((item, index) => (
                        <div className="px-[5px] mb-[20px]" key={index}>
                            <div className="group relative shadow-md max-w-[350px] w-full">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-tl-[10px] rounded-tr-[10px] bg-white lg:aspect-none group-hover:opacity-75">
                                    <img
                                        src={item.image_reference}
                                        alt="Reference"
                                        className="w-full object-cover object-center h-[244px] lg:w-full"
                                    />
                                </div>
                                <div className="p-4  flex justify-between bg-white">
                                    <div>
                                        <h3 className="text-2xl text-[#00427f]">
                                            <a href={`/cursos/${item.slug}`}>
                                                {item.name}
                                            </a>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">
                                            7 modulos
                                        </p>
                                    </div>
                                </div>

                                <div
                                    className="buttom"
                                    onClick={() => {
                                        if(index === 3) {
                                            setOpenVidasModal(true)
                                        } else {
                                            (window.location.href = `/cursos-forma/${item.slug}`)
                                        }
                                    }
                                        
                                    }
                                >
                                    Adquirir
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            ) : (
                <div className="grid grid-cols-4 max-582:grid-cols-1 max-900:grid-cols-2 max-1200:grid-cols-3 max-375:grid-cols-1 gap-[10px]">
                    {filterCourse.map((item, index) => (
                        <div className="px-[5px]" key={index}>
                            <div className="group relative rounded-md shadow-md max-w-[300px] max-375:max-w-full h-full w-full">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-tl-[10px] rounded-tr-[10px] bg-white lg:aspect-none group-hover:opacity-75">
                                    <img
                                        src={item.image_reference}
                                        alt="Reference"
                                        className="h-[244px] w-full object-cover object-center lg:w-full"
                                    />
                                </div>
                                <div className="p-4  flex justify-between bg-white">
                                    <div>
                                        <h3 className="text-2xl text-[#00427f]">
                                            <a href={`/cursos-forma/${item.slug}`}>
                                                {item.name}
                                            </a>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">
                                            7 modulos
                                        </p>
                                    </div>
                                </div>

                                <div
                                    className="buttom"
                                    onClick={() =>
                                        (window.location.href = `/cursos-forma/${item.slug}`)
                                    }
                                >
                                    Adquirir
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </React.Fragment>
    );
};

export default CarouselCourses;

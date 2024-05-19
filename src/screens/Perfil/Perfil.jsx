import React from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header";
import { HeaderContainer, StyledSlider } from "./Perfil.styles";
/** Local Modules */
import useControllers from "controllers";
import EditProfile from "./EditProfile";

const Perfil = () => {
  /** Controllers */
  const {useScreenHooks} = useControllers();
  const {useProfile} = useScreenHooks();
  const {user, changeImage, handleEditInfo, openEdit, openEditModal, closeEditModal, logout} = useProfile();

  console.log(user);

  return (
      <HeaderContainer>
        <EditProfile data={user} open={openEdit} onClose={closeEditModal} onEdit={handleEditInfo} />
        <Header></Header>
        <div className="p-20 only-mobile:p-[30px] bg-[#dcdddd3d]">
          <nav
              className="flex bg-white shadow-md text-[#00427f] border border-gray-200 py-3 px-5 rounded-lg dark:bg-gray-800 dark:border-gray-700"
              aria-label="Breadcrumb"
          >
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <a
                href="#"
                className="max-w-[200px] text-sm text-gray-700 hover:text-gray-900 inline-flex items-center dark:text-gray-400 dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
                Perfil de usuario
              </a>
            </li>
          </ol>
        </nav>
        <div className="contenedor-perfil">
          <div>
            <div className="container-cartas ">
              <div className="rounded-t-lg h-32 overflow-hidden">
                <img
                  className="object-cover object-center w-full"
                  src="/images/portada.png"
                  alt="Mountain"
                />
              </div>
              <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                <input type="file" onChange={changeImage} className="hidden" id="inputFile" accept="image/jpg, image/png"/>
                <label htmlFor="inputFile">
                  <svg
                    width={50}
                    height={50}
                    viewBox="0 0 85 85"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 right-0 left-0 bottom-0 m-auto"
                  >
                    <path
                      d="M54.0398 84.6032H30.4824C9.16291 84.6032 0.0540466 75.4944 0.0540466 54.1749V30.6175C0.0540466 9.29805 9.16291 0.189186 30.4824 0.189186H54.0398C75.3592 0.189186 84.4681 9.29805 84.4681 30.6175V54.1749C84.4681 75.4944 75.3592 84.6032 54.0398 84.6032ZM30.4824 6.07854C12.3824 6.07854 5.9434 12.5176 5.9434 30.6175V54.1749C5.9434 72.2749 12.3824 78.7139 30.4824 78.7139H54.0398C72.1397 78.7139 78.5788 72.2749 78.5788 54.1749V30.6175C78.5788 12.5176 72.1397 6.07854 54.0398 6.07854H30.4824Z"
                      fill="white"
                    />
                    <path
                      d="M42.2611 59.0827C33.0737 59.0827 25.5746 51.5836 25.5746 42.3962C25.5746 33.2088 33.0737 25.7097 42.2611 25.7097C51.4485 25.7097 58.9476 33.2088 58.9476 42.3962C58.9476 51.5836 51.4485 59.0827 42.2611 59.0827ZM42.2611 31.5991C36.2932 31.5991 31.4639 36.4283 31.4639 42.3962C31.4639 48.3641 36.2932 53.1934 42.2611 53.1934C48.2289 53.1934 53.0582 48.3641 53.0582 42.3962C53.0582 36.4283 48.2289 31.5991 42.2611 31.5991Z"
                      fill="white"
                    />
                    <path
                      d="M61.8922 24.7277C61.3818 24.7277 60.8714 24.61 60.4003 24.4136C59.9291 24.2173 59.4972 23.9425 59.1046 23.5891C58.7513 23.1965 58.4372 22.7646 58.2408 22.2935C58.0445 21.8223 57.966 21.3119 57.966 20.8015C57.966 20.2911 58.0445 19.7807 58.2408 19.3095C58.4764 18.7991 58.7513 18.4065 59.1046 18.0139C59.3009 17.8568 59.4972 17.6605 59.6935 17.5427C59.9291 17.3857 60.1647 17.2679 60.4003 17.1894C60.6358 17.0716 60.8714 16.9931 61.1463 16.9538C62.4026 16.679 63.7376 17.1109 64.6799 18.0139C65.0332 18.4065 65.3081 18.7991 65.5044 19.3095C65.7007 19.7807 65.8185 20.2911 65.8185 20.8015C65.8185 21.3119 65.7007 21.8223 65.5044 22.2935C65.3081 22.7646 65.0332 23.1965 64.6799 23.5891C64.2872 23.9425 63.8554 24.2173 63.3842 24.4136C62.9131 24.61 62.4026 24.7277 61.8922 24.7277Z"
                      fill="white"
                    />
                  </svg>
                </label>
                <img
                  className="object-cover object-center h-32"
                  src={user.image_profile ?? "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"}
                  alt="Woman looking front"
                />
              </div>
              <div className="text-center mt-2">
                <h2 className="font-semibold">{user.name}</h2>
                <p className="text-gray-500">{user.job_location}</p>
              </div>
              <ul className="py-4 mt-2 text-gray-700 flex flex-col ">
                {/* <li className="flex pl-[30px] gap-3 items-center justify-start">
                  <img
                    src="images/user.png"
                    alt=""
                    width={25}
                    className="rounded-[100%]"
                  />
                  <div>{user.email}</div>
                </li> */}

                <li className="flex mt-3 pl-[30px] gap-3 items-center justify-start">
                  <img src="images/document.avif" alt="" width={20} />
                  <div>{user.document}</div>
                </li>

                <li className="flex mt-3 pl-[30px] gap-3 items-center justify-start">
                  <img src="images/phone.svg" alt="" width={20} />
                  <div>{user.phone}</div>
                </li>

                <li className="flex mt-3 pl-[30px] gap-3 items-center justify-start">
                  <img src="images/correo.svg" alt="" width={20} />
                  <div>{user.email}</div>
                </li>

                <li className="flex mt-3 pl-[30px] gap-3 items-center justify-start">
                  <img src="images/itu.svg" alt="" width={20} />
                  <div>{user.home_location}</div>
                </li>
              </ul>

              <div className="p-4 border-t mx-8 mt-2">
                <button 
                  className="w-1/2 block mx-auto rounded-full bg-[#003d7c] hover:shadow-lg font-semibold text-white px-6 py-2"
                  onClick={openEditModal}
                >
                  Editar
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center pl-[30px] vector only-mobile:pl-0 w-[90%] max-1366:w-full">
            <h2 className="border-b-2 mb-6 border-b-[#6184ad] border-solid max-w-[200px] text-[20px] text-[#00427f] font-bold">
              Cursos Realizados
            </h2>
            <StyledSlider slidesToShow={(user.complete_courses && user.complete_courses.length === 1) ? 1 : (user.complete_courses && user.complete_courses.length === 2) ? 2 : 3} responsive={[
              {
                breakpoint: 1050,
                settings: {
                  slidesToShow: (user.complete_courses && user.complete_courses.length === 1) ? 1 : 2
                }
              },
              {
                breakpoint: 767,
                settings: {
                  slidesToShow: 1
                }
              }
            ]}>
              {
                  user.complete_courses && user.complete_courses.map((item, index) => (
                      <div className="group relative shadow-lg max-w-[280px] min-w-[280px] max-767:max-w-full" key={index}>
                        <div
                            className="aspect-h-1 aspect-w-1 w-full mx-auto overflow-hidden rounded-tl-[10px] rounded-tr-[10px] bg-white lg:aspect-none group-hover:opacity-75">
                          <img
                              src={item.course.image_reference}
                              alt="Course"
                              className="w-full object-cover object-center lg:w-full"
                          />
                        </div>
                        <div className="p-4 flex justify-between bg-white">
                          <div>
                            <h3 className="text-xl text-[#00427f]">
                              <a href={`/cursos-forma/${item.course.slug}`}>{item.course.name}</a>
                            </h3>
                          </div>
                        </div>

                        <div className="buttom ">Finalizado</div>
                      </div>
                  ))
              }

            </StyledSlider>
          </div>
        </div>
      </div>

        <button className="shadow-lg bg-red-500 rounded-[100%] fixed top-[90%] right-[20px] p-[15px]" onClick={logout}>
          <svg
              width={30}
              height={29}
              viewBox="0 0 301 302"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path
                d="M197.693 301.041H195.787C130.713 301.041 99.3487 275.393 93.9258 217.94C93.3396 211.931 97.7365 206.508 103.892 205.922C109.755 205.336 115.324 209.879 115.91 215.888C120.161 261.909 141.852 279.057 195.934 279.057H197.839C257.491 279.057 278.596 257.952 278.596 198.3V102.741C278.596 43.0896 257.491 21.9845 197.839 21.9845H195.934C141.559 21.9845 119.868 39.4255 115.91 86.3258C115.178 92.3349 110.048 96.8784 103.892 96.2921C97.7365 95.8524 93.3396 90.4296 93.7793 84.4205C98.7624 26.0883 130.274 0 195.787 0H197.693C269.655 0 300.434 30.7783 300.434 102.741V198.3C300.434 270.263 269.655 301.041 197.693 301.041Z"
                fill="white"
            />
            <path
                d="M194.155 161.513H27.3661C21.357 161.513 16.3739 156.53 16.3739 150.521C16.3739 144.512 21.357 139.529 27.3661 139.529H194.155C200.164 139.529 205.147 144.512 205.147 150.521C205.147 156.53 200.164 161.513 194.155 161.513Z"
                fill="white"
            />
            <path
                d="M60.0543 210.613C57.2696 210.613 54.4849 209.587 52.2865 207.389L3.18775 158.29C-1.06258 154.04 -1.06258 147.005 3.18775 142.754L52.2865 93.6555C56.5368 89.4052 63.5718 89.4052 67.8222 93.6555C72.0725 97.9059 72.0725 104.941 67.8222 109.191L26.4913 150.522L67.8222 191.853C72.0725 196.103 72.0725 203.138 67.8222 207.389C65.7703 209.587 62.839 210.613 60.0543 210.613Z"
                fill="white"
            />
          </svg>
        </button>

      <Footer></Footer>
    </HeaderContainer>
  );
};

export default Perfil;

"use client"

import WhiteButtonPrimary from "./components/WhiteButtonPrimary";
import WhiteButtonSecondary from "./components/WhiteButtonSecondary";
import BlackButtonPrimary from "./components/BlackButtonPrimary";
import BlackButtonSecondary from "./components/BlackButtonSecondary";
import { useState, useEffect } from 'react';





export default function Home() {


  const bannerParts = [
    <div key="part1" className="relative h-[470px] text-left text-[2rem] text-white font-montserrat" style={{ maxWidth: 'calc(100% - 60px)', margin: '0 auto' }}>
      <div className="absolute h-[95.74%] w-full top-[0%] right-[0%] bottom-[4.26%] left-[0%]">
        <img className="absolute h-full w-[66.67%] top-[0%] right-[0%] bottom-[0%] left-[33.33%] max-w-full overflow-hidden max-h-full object-cover transform transition-transform duration-300 ease-in-out hover:translate-y-2" alt="" src="Group 61.png" />
        <img className="absolute h-full w-[31.88%] top-[0%] right-[68.12%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover transform transition-transform duration-300 ease-in-out hover:translate-y-2" alt="" src="Mask group.png" />
        <div className="absolute h-full w-[66.67%] top-[0%] right-[0%] bottom-[0%] left-[33.33%] [background:linear-gradient(-90deg,_rgba(0,_0,_0,_0.56),_rgba(124,_34,_56,_0))]" />
        <div className="absolute h-[35.56%] w-[44.64%] top-[52%] right-[3.48%] bottom-[12.44%] left-[51.88%] flex flex-col items-start justify-start gap-[36px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
            <div className="relative h-[40px] leading-[40px] font-semibold">A New Era of Ethical Brilliance</div>
            <div className="relative h-[28px] text-[18px] leading-[28px] font-semibold text-gray-100">Lab-Grown Diamonds That Reflect Your Value.</div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start gap-[8px] text-base text-gray-200">
            <WhiteButtonPrimary>Shop Engagement Rings</WhiteButtonPrimary>
            <WhiteButtonSecondary>Shop Wedding Bands</WhiteButtonSecondary>
          </div>
        </div>
      </div>
    </div>,
    <div key="part2" className="relative h-[470px] text-left text-[2rem] text-white font-montserrat" style={{ maxWidth: 'calc(100% - 60px)', margin: '0 auto' }}>
      <div className="absolute h-[95.74%] w-full top-[0%] right-[0%] bottom-[4.26%] left-[0%]">
        <img className="absolute h-full w-[66.67%] top-[0%] right-[0%] bottom-[0%] left-[33.33%] max-w-full overflow-hidden max-h-full object-cover transform transition-transform duration-300 ease-in-out hover:translate-y-2" alt="" src="Group 62.png" />
        <img className="absolute h-full w-[31.88%] top-[0%] right-[68.12%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover transform transition-transform duration-300 ease-in-out hover:translate-y-2" alt="" src="Mask group 2.png" />
        <div className="absolute h-full w-[66.67%] top-[0%] right-[0%] bottom-[0%] left-[33.33%] [background:linear-gradient(-90deg,_rgba(0,_0,_0,_0.56),_rgba(124,_34,_56,_0))]" />
        <div className="absolute h-[42.55%] w-[21.91%] top-[43%] bottom-[12.44%] left-[72.5%] flex flex-col items-start justify-start gap-[36px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[45px]">
            <div className="relative h-[40px] leading-[2rem] font-semibold">Begin Your Forever Today</div>
            <div className="relative h-[28px] text-[1rem] leading-[1.4rem] font-semibold text-gray-100">Ring as Timeless as Your Love</div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start gap-[8px] text-base text-gray-200">
            <WhiteButtonPrimary>Shop Engagement Rings</WhiteButtonPrimary>
          </div>
        </div>
      </div>
    </div>,
    <div key="part3" className="relative h-[470px] text-left text-[1.75rem] text-white font-montserrat" style={{ maxWidth: 'calc(100% - 60px)', margin: '0 auto' }}>
      <div className="absolute h-[95.74%] w-full top-[0%] right-[0%] bottom-[4.26%] left-[0%]">
        <img className="absolute h-full w-[66.67%] top-[0%] right-[0%] bottom-[0%] left-[33.33%] max-w-full overflow-hidden max-h-full object-cover transform transition-transform duration-300 ease-in-out hover:translate-y-2" alt="" src="Group 63.png" />
        <img className="absolute h-full w-[31.88%] top-[0%] right-[68.12%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover transform transition-transform duration-300 ease-in-out hover:translate-y-2" alt="" src="Mask group 3.png" />
        <div className="absolute h-full w-[66.67%] top-[0%] right-[0%] bottom-[0%] left-[33.33%] [background:linear-gradient(-90deg,_rgba(0,_0,_0,_0.56),_rgba(124,_34,_56,_0))]" />
        <div className="absolute h-[42.55%] w-[25.91%] top-[43%] bottom-[12.44%] left-[72.5%] flex flex-col items-start justify-start gap-[36px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[45px]">
            <div className="relative h-[40px] leading-[1.2] font-semibold">Elegance With a Purpose</div>
            <div className="relative h-[28px] text-[15px] leading-[28px] font-semibold text-gray-100">Sustainable Sparkle, Everyday Shine</div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start gap-[8px] text-base text-gray-200">
            <WhiteButtonPrimary>Shop Engagement Rings</WhiteButtonPrimary>
          </div>
        </div>
      </div>
    </div>,
    <div key="part4" className="relative h-[470px] text-left text-[36px] text-white font-montserrat" style={{ maxWidth: 'calc(100% - 60px)', margin: '0 auto' }}>
      <div className="absolute h-[95.74%] w-full top-[0%] right-[0%] bottom-[4.26%] left-[0%]">
        <img className="absolute h-full w-[66.67%] top-[0%] right-[0%] bottom-[0%] left-[33.33%] max-w-full overflow-hidden max-h-full object-cover transform transition-transform duration-300 ease-in-out hover:translate-y-2" alt="" src="Group 64.png" />
        <img className="absolute h-full w-[31.88%] top-[0%] right-[68.12%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover transform transition-transform duration-300 ease-in-out hover:translate-y-2" alt="" src="Mask group 4.png" />
        <div className="absolute h-full w-[66.67%] top-[0%] right-[0%] bottom-[0%] left-[33.33%] [background:linear-gradient(-90deg,_rgba(0,_0,_0,_0.56),_rgba(124,_34,_56,_0))]" />
        <div className="absolute h-[35.56%] w-[44.64%] top-[52%] right-[3.48%] bottom-[12.44%] left-[51.88%] flex flex-col items-start justify-start gap-[36px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
            <div className="relative h-[40px] leading-[40px] font-semibold">Design Your Dream Piece</div>
            <div className="relative h-[28px] text-[18px] leading-[28px] font-semibold text-gray-100">Tailored to Your Vision</div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start gap-[10px] text-base text-gray-200">
            <WhiteButtonPrimary>Shop Now</WhiteButtonPrimary>
            <WhiteButtonSecondary>Know More</WhiteButtonSecondary>
          </div>
        </div>
      </div>
    </div>,
    <div key="part5" className="relative h-[470px] text-left text-[1.75rem] text-black font-montserrat" style={{ maxWidth: 'calc(100% - 60px)', margin: '0 auto' }}>
      <div className="absolute h-[95.74%] w-full top-[0%] right-[0%] bottom-[4.26%] left-[0%]">

        {/* <!-- Adjusted First Image with Rotation --> */}
        <img
          className="absolute w-[35.17%] h-[53.56%] top-[9.23%] right-[37.83%] bottom-[65.23%] left-[35%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="Group 65.png"
        />

        {/* <!-- Second Image (Unchanged) --> */}
        <img
          className="absolute h-full w-[31.88%] top-[0%] right-[68.12%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover transform transition-transform duration-300 ease-in-out hover:translate-y-2"
          alt=""
          src="Mask group 5.png"
        />

        {/* <!-- Gradient Overlay --> */}
        <div className="absolute h-full w-[66.67%] top-[0%] right-[0%] bottom-[0%] left-[33.33%]" />

        {/* <!-- Adjusted Text and Button Container --> */}
        <div className="absolute h-[35.56%] w-[46.64%] top-[52%] right-[3.48%] bottom-[12.44%] left-[51.88%] flex flex-col items-start justify-start gap-[36px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
            <div className="relative h-[40px] leading-[40px] font-semibold">Bold. Redefined. Distinctly Yours.</div>
            <div className="relative h-[28px] text-[18px] leading-[28px] font-medium text-black">Crafted for the Modern Man</div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start gap-[8px] text-base text-white">
            <BlackButtonPrimary>Shop Now</BlackButtonPrimary>
            <BlackButtonSecondary>Know More</BlackButtonSecondary>
          </div>
        </div>
      </div>
    </div>

    // Add more banner parts similarly...
  ];

  <style jsx>{`
   @media (min-width: 1280px) {
    .text-[36px] {
      font-size: 2rem; /* Adjusting font size for larger screens */
    }

    .leading-[40px] {
      line-height: 1.2; /* Adjusting line height */
    }

    .leading-[28px] {
      line-height: 1.4;
    }

    .gap-[36px] {
      gap: 24px; /* Reduce gap between elements for larger screens */
    }

    .h-[470px] {
      height: auto; /* Allow the height to be flexible */
    }
  }

  @media (max-width: 1280px) {
    .text-[36px] {
      font-size: 1.75rem; /* Smaller text for smaller screens */
    }

    .leading-[40px] {
      line-height: 1.2; /* Adjust line height */
    }

    .leading-[28px] {
      line-height: 1.4;
    }

    .gap-[36px] {
      gap: 16px; /* Reduce gap further for smaller screens */
    }

    .h-[470px] {
      height: auto; /* Allow the height to be flexible */
    }
  }
    
    
    `}</style>

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);


  useEffect(() => {
    if (isTransitioning) return; // Prevent automatic transition if a manual transition is in progress

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerParts.length);
    }, 4000); // Transition every 4 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [isTransitioning, bannerParts.length]);

  const handleClick = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerParts.length);
      setIsTransitioning(false);
    }, 500); // Match this duration with your CSS transition duration
  };

  let scrollPosition = 0;
  const scrollImages = (direction) => {
    const imageRow = document.getElementById("image-row");
    const imageWidth = 373 + 20; // Image width + gap

    if (direction === "right") {
      scrollPosition -= imageWidth;
      document.getElementById("chevron-left").classList.remove("hidden"); // Show left chevron
      document.getElementById("chevron-right").classList.add("hidden"); // Hide right chevron
    } else if (direction === "left") {
      scrollPosition = 0;
      document.getElementById("chevron-left").classList.add("hidden"); // Hide left chevron
      document.getElementById("chevron-right").classList.remove("hidden"); // Show right chevron
    }

    imageRow.style.transform = `translateX(${scrollPosition}px)`;
  };



  const [carouselOffset, setCarouselOffset] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [isAtStart, setIsAtStart] = useState(true)
  const imageWidth = 320; // Width of each image
  const gap = 16; // Gap between images
  const totalImages = 7; // Total number of images

  useEffect(() => {
    // Update container width
    const updateContainerWidth = () => {
      const container = document.getElementById("carousel-container");
      if (container) {
        setContainerWidth(container.offsetWidth);
      }
    };

    updateContainerWidth();

    // Handle window resize
    window.addEventListener('resize', updateContainerWidth);
    return () => window.removeEventListener('resize', updateContainerWidth);
  }, []);

  useEffect(() => {
    const totalWidth = (imageWidth + gap) * totalImages - gap;
    setIsAtEnd(Math.abs(carouselOffset) >= totalWidth - containerWidth);
    setIsAtStart(carouselOffset === 0);
  }, [carouselOffset, containerWidth]);



  const handleScroll = (direction) => {
    // const imageCarousel = document.getElementById("image-carousel");

    const totalWidth = (imageWidth + gap) * totalImages - gap; // Total width of all images minus the gap at the end
    const padding = 32

    let newOffset = carouselOffset;


    if (direction === "right") {
      const maxOffset = -(totalWidth - containerWidth + padding);
      newOffset = Math.max(maxOffset, carouselOffset - containerWidth + gap);

      if (Math.abs(newOffset) + containerWidth > totalWidth) {
        newOffset = maxOffset;
      }
    } else if (direction === "left") {
      newOffset = Math.min(0, carouselOffset + containerWidth - gap);
    }

    // const imageCarousel = document.getElementById("image-carousel");
    // if (imageCarousel) {
    //   imageCarousel.style.transform = `translateX(${newOffset}px)`;
    // }

    setCarouselOffset(newOffset);

  };

  useEffect(() => {
    if (isAtEnd) {
      const timer = setTimeout(() => {
        handleScroll("left");
      }, 2000); // Scroll back after 2 seconds

      return () => clearTimeout(timer); // Clean up timer on component unmount
    }
  }, [isAtEnd]);






  return (
    <>

      {/* Frame 28036 */}

      {/* <div className="w-full relative bg-palevioletred h-8 flex flex-row items-center justify-center py-[10px] px-[529px] h-[32px] gap-[10px] box-border text-left text-[12px] text-white font-montserrat">
        <div className="flex flex-row items-center justify-center py-0 px-[492.5px] w-[1395px] h-[15px] gap-[10px]">
          <div className="relative uppercase w-[410px] h-[15px] leading-[14.63px]">
            <b>ENDS SOON!</b>
            <span className="font-medium"> Free Diamond Jewellery With All Purchases. </span>
          </div>
        </div>
      </div> */}

      <div className="w-full relative bg-palevioletred h-8 flex flex-row items-center justify-center py-[10px] gap-[10px] box-border text-left text-white font-montserrat
    sm:h-[32px] sm:py-[10px] sm:gap-[2vw] text-[12px]"style={{ overflow: "hidden" }}>
        <div className="flex flex-row items-center justify-center w-full h-[15px] md:h-auto gap-[10px] px-[5vw] md:max-w-screen-xl">
          <div className="relative uppercase w-[273px] h-[10px] sm:w-[410px] sm:h-[15px] leading-[9.75px] sm:leading-[14.63px] text-[8px] sm:text-[12px]">
            <b>ENDS SOON!</b>
            <span className="font-medium"> Free Diamond Jewellery With All Purchases. </span>
          </div>
        </div>
      </div>

      {/* Frame 28037 */}

      {/* <div className="w-full relative bg-maroon flex flex-col items-start justify-start py-[16px] px-[80px] gap-[10px] box-border text-left text-[12px] text-white font-josefin-sans">
        <div className="w-[1280.2px] relative h-[56px]">
          <div className="absolute top-[0px] left-[0px] flex flex-row items-center justify-start gap-[302px] ">
            <div className="w-[720.17px] h-[56px] flex flex-row items-center justify-between">
              <div className="w-[72px] h-[24px] flex flex-row items-center justify-between">
                <img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src="Frame.png" />
                <img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src="Instagram.svg" />
              </div>
              <img className="w-[160.2px] relative h-[56px] object-cover" alt="" src="assests_teamcoachingAsset 1@4x.png" />
            </div>
            <div className="w-[258px] h-[24px] flex flex-row items-center justify-start gap-[30px]">
              <div className="w-[156px] h-[24px] flex flex-row items-center justify-start gap-[20px]">
                <img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src="search-md.svg" />
                <img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src="user-03.svg" />
                <img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src="heart.svg" />
                <img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src="shopping-bag-02.svg" />
              </div>
              <div className="w-[72px] h-[24px] flex flex-row items-center justify-start gap-[4px]">
                <div className="w-[56px] h-[24px] flex flex-row items-center justify-start gap-[6px]">
                  <img className="w-6 relative h-6" alt="" src="Mask group.svg" />
                  <div className="w-[26px] h-[18px] relative leading-[18px] uppercase font-normal">AED</div>
                </div>
                <img className="w-3 relative h-3 overflow-hidden shrink-0" alt="" src="Chevron down.svg" />
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="w-full relative bg-maroon flex flex-col items-start justify-start py-[16px] px-[20px] 2xl:px-[80px] xl:px-[67px] gap-[10px] box-border text-left text-[12px] text-white font-josefin-sans" style={{ overflow: "hidden" }}>
        <div className="w-full relative h-[35px] md:h-[56px]">
          <div className="absolute top-[0px] left-[0px] flex flex-row items-center justify-between w-full max-w-[1340px]">

            {/* First part: Icons for mobile and desktop */}
            <div className="flex flex-row items-center justify-between gap-[10px] md:gap-[30px]">
              {/* Hamburger menu only on mobile */}
              <img className="w-6 h-6 md:hidden" alt="Hamburger Menu" src="menu-01.svg" />
              {/* Frame icon (visible on both mobile and desktop) */}
              <img className="w-6 h-6" alt="Frame" src="Frame.png" />
              {/* Instagram icon (visible only on larger screens) */}
              <img className="w-6 h-6 hidden md:block" alt="Instagram" src="Instagram.svg" />
            </div>

            {/* Site logo with auto margins for equal spacing on mobile */}
            <div className="flex-1 flex items-center justify-center md:justify-between">
              <img
                className="h-[38px] w-[110px] md:h-[56px] md:w-[160.2px] object-cover mx-auto 2xl:mr-[302px] xl:mr-[225px]"
                alt="Site Logo"
                src="assests_teamcoachingAsset 1@4x.png"
              />
            </div>
            {/* Third part: Icons for user and shopping bag on mobile, all icons on desktop */}
            <div className="flex flex-row items-center justify-between gap-[10px] md:gap-[25px]">
              {/* Only user and shopping bag on mobile */}
              <div className="flex md:hidden flex-row items-center justify-between gap-[10px]">
                <img className="w-6 h-6" alt="User" src="user-03.svg" />
                <img className="w-6 h-6" alt="Shopping Bag" src="shopping-bag-02.svg" />
              </div>

              <div className="hidden md:flex flex-row items-center justify-between gap-[25px]">
                <img className="w-6 h-6" alt="Search" src="search-md.svg" />
                <img className="w-6 h-6" alt="User" src="user-03.svg" />
                <img className="w-6 h-6" alt="Heart" src="heart.svg" />
                <img className="w-6 h-6" alt="Shopping Bag" src="shopping-bag-02.svg" />
              </div>
              {/* Currency and Dropdown (Only for Larger Screens) */}
              <div className="hidden md:flex flex-row items-center justify-start gap-[4px]">
                <div className="flex flex-row items-center justify-start gap-[6px]">
                  <img className="w-6 h-6" alt="Currency Icon" src="Mask group.svg" />
                  <div className="w-[26px] h-[18px] leading-[18px] uppercase font-normal">AED</div>
                </div>
                <img className="w-3 h-3" alt="Dropdown" src="Chevron down.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>




      <div>
        {/* Mobile View Component */}
        <div className="w-full flex md:hidden justify-center mt-[18px] text-gray-300">
          <div className="w-[calc(100%-40px)] h-[36px] px-[6px] border-gray-300 border-[0.5px] border-solid bg-white flex items-center">
            <div className="flex-grow font-montserrat text-[12px] leading-[18px]">
              Search
            </div>

            <img className="w-[24px] h-[24px]" alt="Search Icon" src="search-md1.svg" />

          </div>
        </div>

        {/*Mobile design image in place of larger screens*/}

        <div className="w-full flex md:hidden justify-center mt-[12px]">
          <img
            className="w-full h-auto max-w-[414px] max-h-[915px] object-cover"
            alt="Displayed Image"
            src="Group 61 mobile.png"  // Replace with the actual path to your image
          />
        </div>


        {/* Navbar Component for larger screens */}


        {/* Larger Screen Component (For Laptops and Desktops) */}
        <div className="hidden md:block w-full relative h-[10vh] text-left text-sm text-black font-montserrat" style={{ overflow: 'hidden' }}>
          <div className="w-full h-full flex flex-col justify-between items-center 2xl:px-[259px] pt-[20px] xl:px-[131px]">
            <div className="w-full max-w-[1536px] flex flex-row items-center justify-start gap-[48px]">
              <div className="leading-[1.25rem] uppercase font-medium whitespace-nowrap">Engagement Rings</div>
              <div className="leading-[1.25rem] uppercase font-medium whitespace-nowrap">Wedding Bands</div>
              <div className="leading-[1.25rem] uppercase font-medium whitespace-nowrap">Diamonds</div>
              <div className="leading-[1.25rem] uppercase font-medium whitespace-nowrap">Customize</div>
              <div className="leading-[1.25rem] uppercase font-medium whitespace-nowrap">Jewellery</div>
              <div className="leading-[1.25rem] uppercase font-medium whitespace-nowrap">Gifts</div>
              <div className="leading-[1.25rem] uppercase font-medium whitespace-nowrap">About Us</div>
            </div>
            {/* Bottom gap */}
            <div className="h-[20px]" />
          </div>
        </div>


      </div>


      {/* Home Banner for Larger Screens*/}

      {/* <div className="relative h-[470px] text-left text-[36px] text-white font-montserrat" style={{ maxWidth: 'calc(100% - 60px)', margin: '0 auto' }}>
        <div className="absolute h-[95.74%] w-full top-[0%] right-[0%] bottom-[4.26%] left-[0%]">
          <img className="absolute h-full w-[66.67%] top-[0%] right-[0%] bottom-[0%] left-[33.33%] max-w-full overflow-hidden max-h-full object-cover transform transition-transform duration-300 ease-in-out hover:translate-y-2" alt="" src="Group 61.png"/>
          <img className="absolute h-full w-[31.88%] top-[0%] right-[68.12%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover transform transition-transform duration-300 ease-in-out hover:translate-y-2" alt="" src="Mask group.png" />
          <div className="absolute h-full w-[66.67%] top-[0%] right-[0%] bottom-[0%] left-[33.33%] [background:linear-gradient(-90deg,_rgba(0,_0,_0,_0.56),_rgba(124,_34,_56,_0))]" />
          <div className="absolute h-[35.56%] w-[44.64%] top-[52%] right-[3.48%] bottom-[12.44%] left-[51.88%] flex flex-col items-start justify-start gap-[36px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
              <div className="relative h-[40px] leading-[40px] font-semibold">A New Era of Ethical Brilliance</div>
              <div className="relative h-[28px] text-[18px] leading-[28px] font-semibold text-gray-100">Lab-Grown Diamonds That Reflect Your Value.</div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[8px] text-base text-gray-200">
              <WhiteButtonPrimary>Shop Engagement Rings</WhiteButtonPrimary>
              <WhiteButtonSecondary>Shop Wedding Bands</WhiteButtonSecondary>
            </div>
          </div>
        </div>
        <div className="absolute h-[8px] w-[52px] top-[462px] left-[50%] transform -translate-x-[50%] flex flex-row items-center justify-start gap-[3px]">
          <div className="w-[8px] relative rounded-full bg-gray-300 border-gray-300 border-[1px] border-solid box-border h-[8px]" />
          <div className="w-[8px] relative rounded-full bg-gray-100 border-gray-300 border-[1px] border-solid box-border h-[8px]" />
          <div className="w-[8px] relative rounded-full bg-gray-100 border-gray-300 border-[1px] border-solid box-border h-[8px]" />
          <div className="w-[8px] relative rounded-full bg-gray-100 border-gray-300 border-[1px] border-solid box-border h-[8px]" />
          <div className="w-[8px] relative rounded-full bg-gray-100 border-gray-300 border-[1px] border-solid box-border h-[8px]" />
        </div>
      </div> */}

      <div
        className="hidden md:block relative h-[470px] text-left text-[36px] text-white font-montserrat"
        style={{ maxWidth: 'calc(100% - 60px)', margin: '0 auto' }}
        onClick={handleClick}
      >
        <div className="relative w-full h-full">
          {bannerParts.map((part, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-opacity duration-500 ease-in-out ${index === currentIndex ? 'opacity-100 z-20' : 'opacity-0 z-10'}`}
            >
              {part}
            </div>
          ))}
        </div>
        <div className="absolute h-[8px] w-[52px] top-[462px] left-[50%] transform -translate-x-[50%] flex flex-row items-center justify-start gap-[3px]">
          {bannerParts.map((_, index) => (
            <div
              key={index}
              className={`w-[8px] relative rounded-full border-gray-300 border-[1px] border-solid box-border h-[8px] ${index === currentIndex ? 'bg-gray-300' : 'bg-gray-100'}`}
            />
          ))}
        </div>
      </div>

      {/* Mobile Design Frame 59 */}

      <div className="w-full md:hidden max-w-[414px] h-auto mx-auto mt-[24px] flex flex-col items-center gap-[24px] text-center font-montserrat px-5">
        {/* Part 1 */}
        <div className="w-[calc(100%-40px)] flex flex-col items-center gap-[12px]">
          {/* Part 1.1 - Heading */}
          <div className="text-[24px] leading-[30px] font-semibold text-black">
            <p className="m-0">A New Era of</p>
            <p className="m-0">Ethical Brilliance</p>
          </div>
          {/* Part 1.2 - Subheading */}
          <div className="text-[11.5px] leading-[18px] font-semibold text-gray-200">
            <p className="m-0">Lab Grown Diamonds That Reflect Your Value.</p>
          </div>
        </div>

        {/* Part 2 */}
        <div className="w-full flex flex-col items-center gap-[12px]">
          {/* Part 2.1 - Button 1 */}
          <button className="w-[calc(100%-40px)] h-[45px] bg-palevioletred hover:bg-fadedpalevioletred active:bg-fadedpalevioletred transition ease-in-out duration-200 flex items-center justify-center text-white text-[14px] font-semibold font-montserrat">
            Shop Engagement Rings
          </button>
          {/* Part 2.2 - Button 2 */}
          <button className="w-[calc(100%-40px)] h-[45px] border border-black hover:bg-black active:bg-black active:text-white transition ease-in-out duration-200 hover:text-white flex items-center justify-center text-black text-[14px] font-semibold font-montserrat mb-[20px]">
            Shop Wedding Rings
          </button>
        </div>
      </div>



      {/* Shop Diamonds by Shape Component for larger screens*/}

      <div className="hidden w-full md:flex justify-center mt-[80px]">
        <div className="relative w-[1280px] h-[214px] px-[80px] flex flex-col items-start gap-[36px] text-center text-[36px] text-gray font-montserrat">

          <div className="self-stretch relative leading-[40px] font-semibold">
            Shop Diamonds by Shape
          </div>


          <div className="w-full flex flex-row items-center justify-between py-5 text-base">

            <div className="flex flex-col items-center justify-start gap-[14px] group">
              {/* Image Container with shadow on hover */}
              <div className="relative w-[60.2px] h-[60px] overflow-hidden rounded-full transform transition-transform duration-300 ease-in-out group-hover:scale-110">
                {/* Round Diamond Image with shadow effect */}
                <img
                  className="w-full h-full object-cover group-hover:shadow-[0_8px_15px_rgba(0,0,0,0.6)] transition-shadow duration-300 ease-in-out"
                  alt="Round"
                  src="diamond-podium-generative-ai 1.png"
                />
              </div>
              {/* Text that darkens on hover */}
              <div className="w-[100px] leading-[24px] font-medium transition-colors duration-300 ease-in-out group-hover:text-black text-gray-200">
                Round
              </div>
            </div>


            <div className="w-[128px] h-[98px] flex flex-col items-center justify-start gap-[14px] relative group">
              {/* Image Container */}
              <div className="relative w-[60px] h-[60px] flex items-center justify-center overflow-hidden rounded-full transform transition-transform duration-300 ease-in-out group-hover:scale-110">
                {/* Oval Diamond Image with shadow effect */}
                <img
                  src="oval-diamond_final_1_optimized.png"
                  alt="Oval diamond"
                  className="w-full h-full object-cover group-hover:shadow-[0_8px_15px_rgba(0,0,0,0.6)] transition-shadow duration-300 ease-in-out"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                    filter: 'drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.3))', // Optional: use filter for a more natural shadow
                  }}
                />
              </div>

              {/* Text below the image */}
              <div className="text-black leading-[24px] font-medium transition-colors duration-300 ease-in-out group-hover:text-black text-gray-200">
                Oval
              </div>
            </div>

            <div className="w-[128px] h-[98px] flex flex-col items-center justify-start gap-[14px] relative group">
              {/* Image Container */}
              <div className="relative w-[42.1px] h-[60px] flex items-center justify-center overflow-hidden rounded-full transform transition-transform duration-300 ease-in-out group-hover:scale-110">
                {/* Emerald Image with shadow effect */}
                <img
                  src="Screenshot 1946-05-01 at 17.31.42 1.png"
                  alt="Emerald"
                  className="w-full h-full object-cover group-hover:shadow-[0_8px_15px_rgba(0,0,0,0.6)] transition-shadow duration-300 ease-in-out"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                    // Optional: use filter for a more natural shadow
                  }}
                />
              </div>

              {/* Text below the image */}
              <div className="text-black leading-[24px] font-medium transition-colors duration-300 ease-in-out group-hover:text-black text-gray-200">
                Emerald
              </div>
            </div>

            <div className="w-[128px] h-[98px] flex flex-col items-center justify-start gap-[14px] relative group">
              {/* Image Container */}
              <div className="relative w-[56.8px] h-[60px] flex items-center justify-center overflow-hidden rounded-full transform transition-transform duration-300 ease-in-out group-hover:scale-110">
                {/* Cushion Image with shadow effect */}
                <img
                  src="cushion-removebg-preview.png"
                  alt="Cushion"
                  className="w-full h-full object-cover group-hover:shadow-[0_8px_15px_rgba(0,0,0,0.6)] transition-shadow duration-300 ease-in-out"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                    filter: 'drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.3))', // Optional: use filter for a more natural shadow
                  }}
                />
              </div>

              {/* Text below the image */}
              <div className="w-[100px] leading-[24px] font-medium transition-colors duration-300 ease-in-out group-hover:text-black text-gray-200">
                Cushion
              </div>
            </div>


            <div className="w-[128px] h-[98px] flex flex-col items-center justify-start gap-[14px] relative group">
              {/* Image Container */}
              <div className="relative w-[38px] h-[60px] flex items-center justify-center overflow-hidden transform transition-transform duration-300 ease-in-out group-hover:scale-105">
                {/* Pear Image with shadow effect */}
                <img
                  src="pear-removebg-preview.png"
                  alt="Pear"
                  className="w-full h-full object-cover group-hover:shadow-[0_8px_15px_rgba(0,0,0,0.6)] transition-shadow duration-300 ease-in-out"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                    // Optional: use filter for a more natural shadow
                  }}
                />
              </div>

              {/* Text below the image */}
              <div className="w-[100px] leading-[24px] font-medium transition-colors duration-300 ease-in-out group-hover:text-black text-gray-200">
                Pear
              </div>
            </div>


            <div className="w-[128px] h-[98px] flex flex-col items-center justify-start gap-[14px] relative group">
              {/* Image Container */}
              <div className="relative w-[44.6px] h-[60px] flex items-center justify-center overflow-hidden transform transition-transform duration-300 ease-in-out group-hover:scale-110">
                {/* Radiant Image with shadow effect */}
                <img
                  src="Screenshot 1946-05-01 at 17.29.23 1.png"
                  alt="Radiant"
                  className="w-full h-full object-cover group-hover:shadow-[0_8px_15px_rgba(0,0,0,0.6)] transition-shadow duration-300 ease-in-out"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                    // Optional: use filter for a more natural shadow
                  }}
                />
              </div>

              {/* Text below the image */}
              <div className="w-[100px] leading-[24px] font-medium transition-colors duration-300 ease-in-out group-hover:text-black text-gray-200">
                Radiant
              </div>
            </div>


            <div className="w-[128px] h-[98px] flex flex-col items-center justify-start gap-[14px] relative group">
              {/* Image Container */}
              <div className="relative w-[54.5px] h-[60px] flex items-center justify-center overflow-hidden transform transition-transform duration-300 ease-in-out group-hover:scale-105">
                {/* Princess Image with shadow effect */}
                <img
                  src="Screenshot 1946-05-01 at 17.33.17 1.png"
                  alt="Princess"
                  className="w-full h-full object-cover group-hover:shadow-[0_8px_15px_rgba(0,0,0,0.6)] transition-shadow duration-300 ease-in-out"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                    // Optional: use filter for a more natural shadow
                  }}
                />
              </div>

              {/* Text below the image */}
              <div className="w-[100px] leading-[24px] font-medium transition-colors duration-300 ease-in-out group-hover:text-black text-gray-200">
                Princess
              </div>
            </div>


            <div className="w-[128px] h-[98px] flex flex-col items-center justify-start gap-[14px] relative group">
              {/* Image Container */}
              <div className="relative w-[34.7px] h-[60px] flex items-center justify-center overflow-hidden transform transition-transform duration-300 ease-in-out group-hover:scale-110">
                {/* Marquise Image with shadow effect */}
                <img
                  src="marquise-removebg-preview.png"
                  alt="Marquise"
                  className="w-full h-full object-cover group-hover:shadow-[0_8px_15px_rgba(0,0,0,0.6)] transition-shadow duration-300 ease-in-out"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                    // Optional: natural shadow effect
                  }}
                />
              </div>

              {/* Text below the image */}
              <div className="w-[100px] leading-[24px] font-medium transition-colors duration-300 ease-in-out group-hover:text-black text-gray-200">
                Marquise
              </div>
            </div>


            <div className="w-[128px] h-[98px] flex flex-col items-center justify-start gap-[14px] relative group">
              {/* Image Container */}
              <div className="relative w-[60.5px] h-[60px] flex items-center justify-center overflow-hidden transform transition-transform duration-300 ease-in-out group-hover:scale-110">
                {/* Asscher Image with shadow effect */}
                <img
                  src="Asscher-removebg-preview.png"
                  alt="Asscher"
                  className="w-full h-full object-cover group-hover:shadow-[0_8px_15px_rgba(0,0,0,0.6)] transition-shadow duration-300 ease-in-out"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                    filter: 'drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.3))', // Optional: natural shadow effect
                  }}
                />
              </div>

              {/* Text below the image */}
              <div className="w-[100px] leading-[24px] font-medium transition-colors duration-300 ease-in-out group-hover:text-black text-gray-200">
                Asscher
              </div>
            </div>


            <div className="w-[128px] h-[98px] flex flex-col items-center justify-start gap-[14px] relative group">
              {/* Image Container */}
              <div className="relative w-[60px] h-[60px] flex items-center justify-center overflow-hidden transform transition-transform duration-300 ease-in-out group-hover:scale-110">
                {/* Heart Image with shadow effect */}
                <img
                  src="heart-removebg-preview.png"
                  alt="Heart"
                  className="w-full h-full object-cover group-hover:shadow-[0_8px_15px_rgba(0,0,0,0.6)] transition-shadow duration-300 ease-in-out"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                    filter: 'drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.3))', // Optional: natural shadow effect
                  }}
                />
              </div>

              {/* Text below the image */}
              <div className="w-[100px] leading-[24px] font-medium transition-colors duration-300 ease-in-out group-hover:text-black text-gray-200">
                Heart
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Shop Diamonds by shape component for Mobile Phone */}

      <div className="w-full h-[147px] md:hidden">
        <div className="relative flex items-center h-full px-4 text-center font-montserrat">
          {/* Title */}
          <div className="absolute w-[calc(100%-40px)] mt-[-55px] left-[20px] text-[22px] leading-[30px] text-center font-semibold mb-[20px]">
            Shop Diamonds by Shape
          </div>


          <div className="flex items-center gap-6 animate-scroll">

            <div className="flex flex-col items-center group">
              <div className="relative w-[50.15px] h-[50px] mt-[70px] overflow-hidden rounded-full transform transition-transform duration-300 ease-in-out group-hover:scale-110">
                <img
                  src="diamond-podium-generative-ai 1.png"
                  alt="Round"
                  className="w-full h-full object-cover group-hover:shadow-[0_8px_15px_rgba(0,0,0,0.6)] transition-shadow duration-300 ease-in-out"
                />
              </div>
              <div className="w-[100px] leading-[21px] mt-[8px] text-sm transition-colors duration-300 ease-in-out group-hover:text-black text-gray-200">
                Round
              </div>
            </div>




            <div className="flex flex-col items-center group">
              <div className="relative w-[36px] h-[50px] mt-[70px] overflow-hidden rounded-full transform transition-transform duration-300 ease-in-out group-hover:scale-110">
                <img
                  src="oval-diamond_final_1_optimized.png"
                  alt="Oval"
                  className="w-full h-full object-cover group-hover:shadow-[0_8px_15px_rgba(0,0,0,0.6)] transition-shadow duration-300 ease-in-out"
                />
              </div>
              <div className="w-[100px] leading-[21px] mt-[8px] text-sm transition-colors duration-300 ease-in-out group-hover:text-black text-gray-200">
                Oval
              </div>
            </div>


            <div className="flex flex-col items-center group">
              <div className="relative w-[35.05px] h-[50px] mt-[70px] overflow-hidden rounded-full transform transition-transform duration-300 ease-in-out group-hover:scale-110">
                <img
                  src="Screenshot 1946-05-01 at 17.31.42 1.png"
                  alt="Emerald"
                  className="w-full h-full object-cover group-hover:shadow-[0_8px_15px_rgba(0,0,0,0.6)] transition-shadow duration-300 ease-in-out"
                />
              </div>
              <div className="w-[100px] leading-[21px] mt-[8px] text-sm transition-colors duration-300 ease-in-out group-hover:text-black text-gray-200">
                Emerald
              </div>
            </div>


            <div className="flex flex-col items-center group">
              <div className="relative w-[47.34px] h-[50px] mt-[70px] overflow-hidden rounded-full transform transition-transform duration-300 ease-in-out group-hover:scale-110">
                <img
                  src="cushion-removebg-preview.png"
                  alt="Cushion"
                  className="w-full h-full object-cover group-hover:shadow-[0_8px_15px_rgba(0,0,0,0.6)] transition-shadow duration-300 ease-in-out"
                />
              </div>
              <div className="w-[100px] leading-[21px] mt-[8px] text-sm transition-colors duration-300 ease-in-out group-hover:text-black text-gray-200">
                Cushion
              </div>
            </div>


            <div className="flex flex-col items-center group">
              <div className="relative w-[31.68px] h-[50px] mt-[70px] overflow-hidden rounded-full transform transition-transform duration-300 ease-in-out group-hover:scale-110">
                <img
                  src="pear-removebg-preview.png"
                  alt="Pear"
                  className="w-full h-full object-cover group-hover:shadow-[0_8px_15px_rgba(0,0,0,0.6)] transition-shadow duration-300 ease-in-out"
                />
              </div>
              <div className="w-[100px] leading-[21px] mt-[8px] text-sm transition-colors duration-300 ease-in-out group-hover:text-black text-gray-200">
                Pear
              </div>
            </div>


            <div className="flex flex-col items-center group">
              <div className="relative w-[37.19px] h-[50px] mt-[70px] overflow-hidden rounded-full transform transition-transform duration-300 ease-in-out group-hover:scale-110">
                <img
                  src="Screenshot 1946-05-01 at 17.29.23 1.png"
                  alt="Radiant"
                  className="w-full h-full object-cover group-hover:shadow-[0_8px_15px_rgba(0,0,0,0.6)] transition-shadow duration-300 ease-in-out"
                />
              </div>
              <div className="w-[100px] leading-[21px] mt-[8px] text-sm transition-colors duration-300 ease-in-out group-hover:text-black text-gray-200">
                Radiant
              </div>
            </div>


            <div className="flex flex-col items-center group">
              <div className="relative w-[45.45px] h-[50px] mt-[70px] overflow-hidden rounded-full transform transition-transform duration-300 ease-in-out group-hover:scale-110">
                <img
                  src="Screenshot 1946-05-01 at 17.33.17 1.png"
                  alt="Princess"
                  className="w-full h-full object-cover group-hover:shadow-[0_8px_15px_rgba(0,0,0,0.6)] transition-shadow duration-300 ease-in-out"
                />
              </div>
              <div className="w-[100px] leading-[21px] mt-[8px] text-sm transition-colors duration-300 ease-in-out group-hover:text-black text-gray-200">
                Princess
              </div>
            </div>


            <div className="flex flex-col items-center group">
              <div className="relative w-[28.91px] h-[50px] mt-[70px] overflow-hidden rounded-full transform transition-transform duration-300 ease-in-out group-hover:scale-110">
                <img
                  src="marquise-removebg-preview.png"
                  alt="Marquise"
                  className="w-full h-full object-cover group-hover:shadow-[0_8px_15px_rgba(0,0,0,0.6)] transition-shadow duration-300 ease-in-out"
                />
              </div>
              <div className="w-[100px] leading-[21px] mt-[8px] text-sm transition-colors duration-300 ease-in-out group-hover:text-black text-gray-200">
                Marquise
              </div>
            </div>


            <div className="flex flex-col items-center group">
              <div className="relative w-[50.43px] h-[50px] mt-[70px] overflow-hidden rounded-full transform transition-transform duration-300 ease-in-out group-hover:scale-110">
                <img
                  src="Asscher-removebg-preview.png"
                  alt="Asscher"
                  className="w-full h-full object-cover group-hover:shadow-[0_8px_15px_rgba(0,0,0,0.6)] transition-shadow duration-300 ease-in-out"
                />
              </div>
              <div className="w-[100px] leading-[21px] mt-[8px] text-sm transition-colors duration-300 ease-in-out group-hover:text-black text-gray-200">
                Asscher
              </div>
            </div>


            <div className="flex flex-col items-center group">
              <div className="relative w-[50px] h-[50px] mt-[70px] overflow-hidden rounded-full transform transition-transform duration-300 ease-in-out group-hover:scale-110">
                <img
                  src="heart-removebg-preview.png"
                  alt="Heart"
                  className="w-full h-full object-cover group-hover:shadow-[0_8px_15px_rgba(0,0,0,0.6)] transition-shadow duration-300 ease-in-out"
                />
              </div>
              <div className="w-[100px] leading-[21px] mt-[8px] text-sm transition-colors duration-300 ease-in-out group-hover:text-black text-gray-200">
                Heart
              </div>
            </div>


          </div>
        </div>
      </div>

      {/* Shop Diamonds by category for Larger Screens */}

      <div className="w-full hidden max-w-[1280px] h-[40px] mt-[70px] mx-auto md:flex items-center justify-center font-montserrat text-[36px] font-semibold text-center">
        Shop by Category
      </div>

      <div className="w-full hidden md:block dynamic-px mt-[35px]">
        <div className="flex gap-[20px] xl:max-w-[calc(447px*3+20px*2)] mx-auto">

          <div className="w-[447px]">
            <img src="engagement rings.png" alt="Image 1" className="w-full h-[358px] object-cover" />
            <div className="w-full h-[28px] mt-[18px] uppercase flex items-center justify-center font-montserrat text-[20px] font-normal text-center text-maroon">
              Engagement Rings
            </div>
          </div>

          <div className="w-[447px]">
            <img src="wedding bands.png" alt="Image 2" className="w-full h-[358px] object-cover" />
            <div className="w-full h-[28px] mt-[18px] uppercase flex items-center justify-center font-montserrat text-[20px] font-normal text-center text-maroon">
              Wedding Bands
            </div>
          </div>

          <div className="w-[447px] dynamic-mr">
            <img src="men_s jewellery.png" alt="Image 3" className="w-full h-[358px] object-cover" />
            <div className="w-full h-[28px] mt-[18px] uppercase flex items-center justify-center font-montserrat text-[20px] font-normal text-center text-maroon">
              Men's Jewellery
            </div>
          </div>

        </div>
      </div>

      <div className="w-full hidden md:block dynamic-px mt-[32px]">
        <div className="flex gap-[20px] xl:max-w-[calc(447px*3+20px*2)] mx-auto">

          <div className="w-[447px]">
            <img src="jewellery.png" alt="Image 4" className="w-full h-[358px] object-cover" />
            <div className="w-full h-[28px] mt-[18px] uppercase flex items-center justify-center font-montserrat text-[20px] font-normal text-center text-maroon">
              Jewellery
            </div>
          </div>

          <div className="w-[447px]">
            <img src="gifts.png" alt="Image 5" className="w-full h-[358px] object-cover" />
            <div className="w-full h-[28px] mt-[18px] uppercase flex items-center justify-center font-montserrat text-[20px] font-normal text-center text-maroon">
              Gifts
            </div>
          </div>

          <div className="w-[447px] dynamic-mr">
            <img src="baby bling.png" alt="Image 6" className="w-full h-[358px] object-cover" />
            <div className="w-full h-[28px] mt-[18px] uppercase flex items-center justify-center font-montserrat text-[20px] font-normal text-center text-maroon">
              Baby Bling
            </div>
          </div>

        </div>
      </div>



      {/* Shop Diamonds by category for Mobile Screens */}

      <div className="mt-[44px] block md:hidden mx-[20px] max-w-[414px]">
        {/* Shop by Category Title */}
        <div className="w-[320px] h-[30px] mb-[32px]">
          <p className="font-montserrat font-semibold text-[24px] leading-[30px] text-center">
            Shop by Category
          </p>
        </div>

        {/* Container with Flexbox and Gap for Spacing */}
        <div className="flex flex-col gap-y-[50px]">
          {/* First Row */}
          <div className="flex justify-between gap-[10px]">
            {/* First Image */}
            <div className="w-[154px] h-[150px]">
              <img
                src="engagement rings mobile.png"
                alt="Category 1"
                className="w-full h-full"
              />
              <div className="w-[154px] h-[21px] mt-[8px]">
                <p className="font-montserrat uppercase font-normal text-[12px] leading-[21px] text-center text-[#4A1521]">
                  Engagement Rings
                </p>
              </div>
            </div>

            {/* Second Image */}
            <div className="w-[154px] h-[150px]">
              <img
                src="wedding bands mobile.png"
                alt="Category 2"
                className="w-full h-full"
              />
              <div className="w-[154px] h-[21px] mt-[8px]">
                <p className="font-montserrat uppercase font-normal text-[12px] leading-[21px] text-center text-[#4A1521]">
                  Wedding Bands
                </p>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="flex justify-between gap-[12px]">
            {/* Third Image */}
            <div className="w-[154px] h-[150px]">
              <img
                src="men's jewellery mobile.png"
                alt="Category 3"
                className="w-full h-full"
              />
              <div className="w-[154px] h-[21px] mt-[8px]">
                <p className="font-montserrat uppercase font-normal text-[12px] leading-[21px] text-center text-[#4A1521]">
                  Men's Jewellery
                </p>
              </div>
            </div>

            {/* Fourth Image */}
            <div className="w-[154px] h-[150px]">
              <img
                src="jewellery mobile.png"
                alt="Category 4"
                className="w-full h-full"
              />
              <div className="w-[154px] h-[21px] mt-[8px]">
                <p className="font-montserrat uppercase font-normal text-[12px] leading-[21px] text-center text-[#4A1521]">
                  Jewellery
                </p>
              </div>
            </div>
          </div>

          {/* Third Row */}
          <div className="flex justify-between gap-[12px]">
            {/* Fifth Image */}
            <div className="w-[154px] h-[150px]">
              <img src="gifts mobile.png" alt="Category 5" className="w-full h-full" />
              <div className="w-[154px] h-[21px] mt-[8px]">
                <p className="font-montserrat uppercase font-normal text-[12px] leading-[21px] text-center text-[#4A1521]">
                  Gifts
                </p>
              </div>
            </div>

            {/* Video Block */}
            <div className="w-[154px] h-[179px] bg-[#4A1521]">
              <video
                alt="Category 6 Video"
                className="w-[138px] h-[97px] mx-[8px]"
                autoPlay
                muted
                loop
              >
                <source src="design your own unique diamond jewellery mobile.mp4" type="video/mp4" />
              </video>
              <div className="w-[138px] h-[54px] mb-[14.5px] mx-[8px] text-white font-montserrat font-normal text-[12px] leading-[8px]">
                <p>Design Your Own</p>
                <p>Unique Diamond</p>
                <p>Jewellery</p>
              </div>
            </div>
          </div>
        </div>
      </div>














      {/* Design your Own Unique Jewellery for larger screens */}

      <div className="w-full hidden md:flex 2xl:max-w-[1330px] xl:max-w-[1220px] h-[400px] mt-[96px] xl:mx-[30px] 2xl:mx-[35px] 2xl:px-[30px] relative">
        <img src="design your own unique jewellery.png" alt="Background Image" className="absolute inset-0 w-full h-full object-cover" />

        <div className="absolute top-[104px] xl:left-[35px] 2xl:left-[66px]">
          <div className="w-[448px] h-[80px] font-semibold text-[36px] leading-[40px] text-black font-montserrat">
            <p className="m-0">Design Your Own </p>
            <p className="m-0">Unique Jewellery</p>
          </div>
          <div className="w-[448px] h-[48px] font-medium text-[16px] leading-[24px] text-black font-montserrat mt-[24px] mb-[48px]">

            <p className="m-0">Krayr designs feature textural details, unique petal</p>
            <p className="m-0">motifs, and delicate diamond leaves.</p>
          </div>
          <button className="w-[316px] h-[48px] font-semibold text-[16px] font-montserrat leading-[24px] text-black bg-white hover:text-white hover:bg-black">

            Create My Unique Piece
          </button>
        </div>
      </div>


      {/* Featured Collection Lab Grown Component for Larger Screens */}

      <div className="w-full hidden max-w-[1380px] h-[40px] mt-[96px] xl:mx-[30px] 2xl:mx-[60px] md:flex font-montserrat text-[36px] font-semibold" style={{ overflow: 'hidden' }}>
        Featured Collection: Our Lab Grown
      </div>

      <div className="relative hidden md:flex max-w-[1380px] mt-[36px] xl:mx-[30px] 2xl:mx-[60px]" style={{ overflow: 'hidden' }}>
        {/* Image Row */}
        <div className="flex overflow-hidden">
          <div className="flex gap-[20px] transition-transform duration-500 ease-in-out" id="image-row">
            <div className="w-[373px] overflow-hidden">
              <img src="engagement rings lab grown 1.png" alt="Image 1" className="w-full h-[430px] object-cover zoom-in" />
              <div className="mt-[20px] uppercase text-center w-[373px] h-[28.05px] font-montserrat text-[20px] leading-[28px] text-maroon font-normal">
                Engagement Rings
              </div>
            </div>
            <div className="w-[373px] overflow-hidden">
              <img src="women's wedding bands lab grown.png" alt="Image 2" className="w-full object-cover h-[430px] zoom-in" />
              <div className="mt-[20px] uppercase text-center w-[373px] h-[28.05px] font-montserrat text-[20px] leading-[28px] text-maroon font-normal">
                Women's Wedding Bands
              </div>
            </div>
            <div className="w-[373px] overflow-hidden">
              <img src="men's wedding bands lab grown.png" alt="Image 3" className="w-full h-[430px] object-cover zoom-in" />
              <div className="mt-[20px] uppercase text-center w-[373px] h-[28.05px] font-montserrat text-[20px] leading-[28px] text-maroon font-normal">
                Men's Wedding Bands
              </div>
            </div>
            <div className="w-[373px] overflow-hidden">
              <img src="engagement rings lab grown 4.png" alt="Image 4" className="w-full h-[430px] object-cover zoom-in" />
              <div className="mt-[20px] uppercase text-center w-[373px] h-[28.05px] font-montserrat text-[20px] leading-[28px] text-maroon font-normal">
                Colored Diamonds
              </div>
            </div>
          </div>
        </div>

        {/* Chevron Right Button */}
        <button
          className="absolute right-[30px] top-[50%] transform -translate-y-[50%] text-white rounded-full p-0 w-[44px] h-[44px] flex items-center justify-center"
          id="chevron-right"
          onClick={() => scrollImages('right')}
        >
          <img src="Ellipse 11.svg" alt="Ellipse" className="w-full h-full" />
          <img src="Chevron right.svg" alt="Chevron Right" className="absolute w-[24px] h-[24px]" />
        </button>


        {/* Chevron Left Button */}
        <button
          className="absolute left-[30px] top-[50%] transform -translate-y-[50%] text-white rounded-full p-0 w-[44px] h-[44px] hidden items-center justify-center"
          id="chevron-left"
          onClick={() => scrollImages("left")}
        >
          <img src="Ellipse 11.svg" alt="Ellipse" className="w-full h-full" />
          <img src="Chevron left.svg" alt="Chevron Left" className="absolute w-[24px] h-[24px] top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]" />
        </button>

      </div>

      {/* Diamonds that Embody both sustainability and style for larger screens */}

      <div className="relative hidden md:flex max-w-[1380px] h-[422px] mt-[96px] xl:mx-[30px] 2xl:mx-[66px] 2xl:px-[30px] bg-cover" style={{ backgroundImage: `url('/diamonds that embody both sustainability and style.png')` }}>

        <div className="absolute top-[115px] left-[64px] w-[546px] h-[96px]">
          <div className="font-montserrat font-semibold text-[34px] leading-[48px] text-white mb-[48px]">
            <p className="m-0">Diamonds that Embody both</p>
            <p className="m-0">Sustainability and Style</p>
          </div>
          <WhiteButtonPrimary className="w-[316px] h-[48px] text-black">Know More</WhiteButtonPrimary>
        </div>


        <img className="absolute 2xl:top-[136.37px] xl:top-[156.37px] 2xl:left-[573.49px] xl:left-[470.49px] w-[336.81px] h-[215.64px] transform rotate-[4.61deg]" src="dazzling-diamond-white-background-3d-render 1.png" alt="Middle Image" />


        <div className="absolute top-[115px] 2xl:right-[64px] xl:right-[30px] flex flex-col gap-[8px]">
          <div className="flex items-center gap-[12px]">
            <div className="relative w-[44px] h-[44px]">
              <img className="w-full h-full" src="common layer.svg" alt="Common Layer Logo 1" />
              {/* 2nd layer specific to the 1st logo */}
              <img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[26px] h-[26px]" src="Layer_1.png" alt="Specific Layer Logo 1" />
            </div>
            <span className="font-montserrat font-medium text-[18px] leading-[28px] w-[300px] h-[28px] text-white">Conflict-Free</span>
          </div>
          <div className="flex items-center gap-[12px]">
            <div className="relative w-[44px] h-[44px]">
              <img className="w-full h-full" src="common layer.svg" alt="Common Layer Logo 1" />
              {/* 2nd layer specific to the 1st logo */}
              <img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[20px] h-[20px]" src="Capa_1.svg" alt="Specific Layer Logo 1" />
            </div>
            <span className="font-montserrat font-medium text-[18px] leading-[28px] w-[300px] h-[28px] text-white">Fair Labor Practices</span>
          </div>
          <div className="flex items-center gap-[12px]">
            <div className="relative w-[44px] h-[44px]">
              <img className="w-full h-full" src="common layer.svg" alt="Common Layer Logo 1" />
              {/* 2nd layer specific to the 1st logo */}
              <img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[20px] h-[20px]" src="Frame (1).svg" alt="Specific Layer Logo 1" />
            </div>
            <span className="font-montserrat font-medium text-[18px] leading-[28px] w-[300px] h-[28px] text-white">No Environmental Impact</span>
          </div>
          <div className="flex items-center gap-[12px]">
            <div className="relative w-[44px] h-[44px]">
              <img className="w-full h-full" src="common layer.svg" alt="Common Layer Logo 1" />
              {/* 2nd layer specific to the 1st logo */}
              <img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[22px] h-[22px]" src="Bold.svg" alt="Specific Layer Logo 1" />
            </div>
            <span className="font-montserrat font-medium text-[18px] leading-[28px] w-[300px] h-[28px] text-white">Certified Sustainability</span>
          </div>
        </div>
      </div>

      {/* The Hoop Shop and Essential Edit for Larger Screens */}

      <div className="flex-col hidden md:flex xl:flex-row xl:justify-center gap-[20px] mt-[96px] xl:px-[30px] 2xl:px-[30px]">
        {/* First Container */}
        <div className="w-full max-w-[680px] h-[620px]">
          {/* Image */}
          <img className="w-full h-[450px]" src="the hoop shop-08.png" alt="Container 1 Image" />

          {/* Text containers */}
          <div className="mt-[24px] text-center">
            <p className="font-montserrat font-semibold text-[36px] leading-[40px]">
              The Hoop Shop
            </p>
            <p className="mt-[10px] font-montserrat font-medium text-[16px] leading-[24px]">
              Your one-stop-shop for perfectly proportioned pairs.
            </p>
          </div>

          {/* Button */}
          <div className="mt-[24px] flex justify-center">
            <button className="w-[316px] h-[48px] bg-palevioletred hover:bg-fadedpalevioletred active:bg-fadedpalevioletred transition ease-in-out duration-200 text-white font-montserrat font-semibold">
              Shop Now
            </button>
          </div>
        </div>

        {/* Second Container */}
        <div className="w-full max-w-[680px] h-[620px]">
          {/* Image */}
          <img className="w-full h-[450px]" src="the essential edit-09.png" alt="Container 2 Image" />

          {/* Text containers */}
          <div className="mt-[24px] text-center">
            <p className="font-montserrat font-semibold text-[36px] leading-[40px]">
              The Essentials Edit
            </p>
            <p className="mt-[10px] font-montserrat font-medium text-[16px] leading-[24px]">
              Signature pieces to swear by. Your jewellery capsule starts here.
            </p>
          </div>

          {/* Button */}
          <div className="mt-[24px] flex justify-center">
            <button className="w-[316px] h-[48px] bg-palevioletred hover:bg-fadedpalevioletred active:bg-fadedpalevioletred transition ease-in-out duration-200 text-white font-montserrat font-semibold">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Krayr Collection for larger screens */}

      <div className="w-full hidden md:flex 2xl:max-w-[1330px] mt-[126px] xl:max-w-[1220px] h-[400px] xl:mx-[30px] 2xl:mx-[35px] 2xl:px-[30px] relative">
        <img src="krayr collection.png" alt="Background Image" className="absolute inset-0 w-full h-full object-cover" />

        <div className="absolute top-[104px] xl:left-[35px] 2xl:left-[66px]">
          <div className="w-[448px] h-[48px] font-semibold text-[36px] leading-[40px] text-black font-montserrat">
            <p className="m-0">Krayr Collection</p>
          </div>
          <div className="w-[448px] h-[48px] font-medium text-[16px] leading-[24px] text-black font-montserrat mt-[24px] mb-[48px]">

            <p className="m-0">Krayr designs feature textural details, unique petal</p>
            <p className="m-0">motifs, and delicate diamond leaves.</p>
          </div>
          <button className="w-[316px] h-[48px] font-semibold text-[16px] font-montserrat leading-[24px] text-black bg-white hover:text-white hover:bg-black">

            Shop Krayr Collection Now
          </button>
        </div>
      </div>

      {/* Krayr Love Notes Component for Larger Screens */}


      <div className="mx-auto hidden md:block mt-[96px] max-w-[1380] 2xl:w-[1380px] xl:px-[30px] 2xl:px-[30px] h-[810px]">
        {/* First Text Container */}
        <div className="w-[640px] h-[40px] mx-auto text-center">
          <p className="font-montserrat font-semibold text-[36px] leading-[40px]">
            Krayr Love Notes
          </p>
        </div>

        {/* Second Text Container */}
        <div className="w-[512px] h-[48px] mx-auto mt-[14px] text-center">
          <p className="font-montserrat font-medium text-[16px] leading-[24px]">
            Craft custom jewellery that reflects your style and personality. We'll help you create a truly special piece.
          </p>
        </div>

        {/* Row of Three Images */}
        <div className="mt-[48px] flex justify-center gap-[30px]">
          {/* Image 1 */}
          <div className="w-[440px]">
            <img className="w-full h-auto" src="krayr love notes 1.png" alt="Image 1" />
            {/* First Text Container Below Image */}
            <div className="mt-[18px] w-full h-[120px]">
              <p className="font-montserrat font-medium text-[16px] leading-[24px]">
                "Finding the perfect diamond was effortless with
                Krayr. Their extensive selection, from classic styles to
                vibrant colored lab diamonds, provides endless options."
              </p>
            </div>
            {/* Second Text Container Below Image */}
            <div className="mt-[18px] w-full h-[20px]">
              <p className="font-montserrat font-medium text-[14px] leading-[20px]">
                - Amir Mansour
              </p>
            </div>
          </div>

          {/* Image 2 */}
          <div className="w-[440px]">
            <img className="w-full h-auto" src="krayr love notes 2.png" alt="Image 2" />
            {/* First Text Container Below Image */}
            <div className="mt-[18px] w-full h-[120px]">
              <p className="font-montserrat font-medium text-[16px] leading-[24px]">
                "Krayr stands out with its vast array of diamond options.
                With numerous styles, carat sizes, cuts, and
                colors to choose from, their Lab Diamonds and Lab
                Created Colored Diamonds are the best I've seen
                in the market."
              </p>
            </div>
            {/* Second Text Container Below Image */}
            <div className="mt-[18px] w-full h-[20px]">
              <p className="font-montserrat font-medium text-[14px] leading-[20px]">
                - Amanda Rose
              </p>
            </div>
          </div>

          {/* Image 3 */}
          <div className="w-[440px]">
            <img className="w-full h-auto" src="krayr love notes 3.png" alt="Image 3" />
            {/* First Text Container Below Image */}
            <div className="mt-[18px] w-full h-[120px]">
              <p className="font-montserrat font-medium text-[16px] leading-[24px]">
                “Krayr's collection of diamonds is truly impressive.
                They offer a diverse range of styles, carats, cuts, and
                colors. The variety and quality of their Lab Diamonds
                and Lab Created Colored Diamonds are unparalleled."
              </p>
            </div>
            {/* Second Text Container Below Image */}
            <div className="mt-[18px] w-full h-[20px]">
              <p className="font-montserrat font-medium text-[14px] leading-[20px]">
                - Fatima Ahmed
              </p>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="mt-[36px] flex justify-center">
          <button className="w-[316px] h-[48px] bg-palevioletred hover:bg-fadedpalevioletred active:bg-fadedpalevioletred transition ease-in-out duration-200 text-white font-montserrat font-semibold text-[16px] leading-[24px]">
            View All Reviews
          </button>
        </div>
      </div>

      {/* Get Inspired and shop Instagram component for Larger screens */}


      <div className="relative hidden md:block xl:mx-[20px] 2xl:px-[30px] xl:px-[20px] 2xl:mx-[65px] mt-[96px] max-w-full xl:max-w-[1200px] 2xl:max-w-[1380px] h-[468px] bg-maroon overflow-hidden px-[32px]" >
        <div id="carousel-container" className="relative mx-auto mt-[10px] w-full xl:w-[1200px]w-[1316px] h-[372px]">
          <div className="flex items-center justify-between relative">
            <div className="w-auto">
              <p className="font-montserrat font-semibold text-[30px] text-white leading-[15px]">Get Inspired</p>
            </div>
            <div className="w-auto xl:absolute xl:right-[10px]">
              <p className="font-montserrat font-semibold text-[16px] leading-[28px] underline text-white whitespace-nowrap">Shop Instagram</p>
            </div>
          </div>

          <div
            className="flex space-x-[16px] mt-[26px] transition-transform duration-500"
            id="image-carousel"
            style={{ transform: `translateX(${carouselOffset}px)` }}
          >
            {/* <button
              className={`absolute left-[30px] top-[50%] transform -translate-y-[50%] text-white rounded-full p-0 w-[44px] h-[44px] items-center justify-center z-20 ${isAtStart ? 'hidden' : ''}`}
              id="chevron-left"
              onClick={() => handleScroll("left")}
            >
              <img src="Ellipse 11.svg" alt="Ellipse" className="w-full h-full" />
              <img src="Chevron left.svg" alt="Chevron Left" className="absolute w-[24px] h-[24px] top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]" />
            </button> */}

            <div className="flex space-x-[16px]">
              <div className="relative w-[320px] h-[310px] group bg-cover bg-center" style={{ backgroundImage: `url('get inspired 1.png')` }}>
                {/* Hover Overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-20">
                  <p className="text-white font-montserrat text-[20px] underline">Shop Now</p>
                </div>

                {/* Shadow on Hover */}
                <div className="absolute top-0 left-0 w-full h-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-10"></div>
              </div>


              <img src="get inspired 2.png" alt="Image 2" className="w-[320px] h-[310px]" />
              <img src="get inspired 3.png" alt="Image 3" className="w-[320px] h-[310px]" />
              <img src="get inspired 4.png" alt="Image 4" className="w-[320px] h-[310px]" />
              <img src="get inspired 1.png" alt="Image 5" className="w-[320px] h-[310px]" />
              <img src="get inspired 2.png" alt="Image 6" className="w-[320px] h-[310px]" />
              <img src="get inspired 3.png" alt="Image 7" className="w-[320px] h-[310px]" />
            </div>

            <button
              className={`absolute right-[20px] 2xl:mx-[10px] xl:right-[0.5px] top-[50%] transform -translate-y-[50%] text-white rounded-full p-0 w-[44px] h-[44px] flex items-center justify-center ${isAtEnd ? 'hidden' : ''}`}
              id="chevron-right"
              onClick={() => handleScroll('right')}
            >
              <img src="Ellipse 11.svg" alt="Ellipse" className="w-full h-full" />
              <img src="Chevron right.svg" alt="Chevron Right" className="absolute w-[24px] h-[24px]" />
            </button>
          </div>
        </div>
      </div>

      {/* Krayr collection 2 for larger screens */}

      <div className="w-full hidden md:flex  mt-[126px] h-[400px] relative">
        <img src="krayr-collection 2.jpg" alt="Background Image" className="absolute inset-0 w-full h-full object-cover" />

        <div className="absolute top-[104px] xl:left-[35px] 2xl:left-[66px]">
          <div className="w-[448px] h-[48px] font-semibold text-[36px] leading-[40px] text-white font-montserrat">
            <p className="m-0">Krayr Collection</p>
          </div>
          <div className="w-[448px] h-[48px] font-medium text-[16px] leading-[24px] text-white font-montserrat mt-[24px] mb-[48px]">

            <p className="m-0">Krayr designs feature textural details, unique petal</p>
            <p className="m-0">motifs, and delicate diamond leaves.</p>
          </div>
          <WhiteButtonPrimary className="w-[316px] h-[48px] text-black">Shop Krayr Collection Now</WhiteButtonPrimary>
        </div>
      </div>

      {/* Join the Krayr Universe component for Larger Screens */}

      <div className="absolute hidden md:block mt-[96px] left-[208px] right-[784px] w-[448px] h-[112px]">
        {/* First Text Container */}
        <div className="w-[435px] h-[40px]">
          <p className="font-montserrat font-semibold text-[30px] text-black leading-[40px]">
            {/* Your text content for the first container */}
            Join The Krayr Universe
          </p>
        </div>

        {/* Gap of 24px between text containers */}
        <div className="mt-[24px] w-[446px] h-[48px]">
          {/* Second Text Container */}
          <p className="font-montserrat font-medium text-[16px] text-gray-200 leading-[24px]">
            {/* Your text content for the second container */}
            Discover its magnificent icons, personalised services and unique experiences
          </p>
        </div>
      </div>

      {/* Learn More button for Larger Screens */}

      <div className="absolute mt-[160px] hidden md:block 2xl:left-[956px] xl:left-[850px] xl:right-[160px] 2xl:right-[120px] w-[316px] h-[48px]">
        <button
          className="w-full h-full bg-palevioletred hover:bg-fadedpalevioletred active:bg-fadedpalevioletred transition ease-in-out duration-200 text-white font-montserrat font-semibold text-[16px] leading-[24px]"
        >
          Learn More
        </button>
      </div>

      {/* Footer Component for larger screens  */}


      {/* Top-level Footer Container */}
      <div className="w-full h-[665px] mt-[300px] hidden md:block">
        {/* First Inner Container (Background) */}
        <div className="h-[610px] bg-whitesmoke relative">
          {/* Vector Logo */}
          <img
            src="Path 652.png"
            alt="Vector Logo"
            className="absolute top-0 left-0 w-[479px] h-[623px] z-10"
          />

          <div className="flex justify-center mb-[56px]">
            <img
              src="krayr logo white.svg"
              alt="Brand Logo"
              className="w-[196px] h-[56px]"
            />
          </div>

          {/* Footer Content - Fourth Container */}
          <div className="w-[1280px] h-[528px] mt-[64px] mb-[18px] mx-[80px] relative z-20">
            {/* Brand Logo */}


            {/* Footer Navigation (6 Containers) */}
            <div className="2xl:w-[1280px] xl:w-[1000px] h-[416px] grid grid-cols-3 gap-x-[20px] 2xl:gap-x-[103px] xl:gap-x-[120px] gap-y-[48px]">
              {/* Container 1 */}
              <div>
                <p className="font-montserrat uppercase font-semibold text-[14px] leading-[20px] text-black">
                  About
                </p>
                <div className="mt-[14px] w-[358px] h-[176px]">
                  <div className="font-montserrat font-medium text-[14px] text-gray-200 leading-[15px]">
                    <p>Our Story</p>
                    <p>Our Mission</p>
                    <p>Responsible Sourcing</p>
                    <p>Sustainability Goals</p>
                    <p>How We Give Back</p>
                    <p>Our People</p>
                    <p>Krayr Reviews</p>
                  </div>
                </div>
              </div>

              {/* Container 2 */}
              <div>
                <p className="font-montserrat uppercase font-semibold text-[14px] leading-[20px] text-black">
                  Orders
                </p>
                <div className="mt-[14px] w-[358px] h-[124px]">
                  <div className="font-montserrat font-medium text-[14px] text-gray-200 leading-[15px]">
                    <p>My Account</p>
                    <p>Wishlist</p>
                    <p>Track My Order</p>
                    <p>Shipping Information</p>
                    <p>Warranty</p>
                  </div>
                </div>
              </div>

              {/* Container 3 */}
              <div>
                <p className="font-montserrat uppercase font-semibold text-[14px] leading-[20px] text-black">
                  contact us
                </p>
                <div className="mt-[14px] w-[358px] h-[98px]">
                  <div className="font-montserrat font-medium text-[14px] text-gray-200 leading-[15px]">
                    <p>Book Appointment</p>
                    <p>+971 123 456 7890</p>
                    <p>Email Us</p>
                    <p>Chat</p>
                  </div>
                </div>
              </div>

              {/* Container 4 */}
              <div className="mt-[35px]">
                <p className="font-montserrat uppercase font-semibold text-[14px] leading-[20px] text-black">
                  education
                </p>
                <div className="mt-[14px] w-[176px] h-[124px]">
                  <div className="font-montserrat font-medium text-[14px] text-gray-200 leading-[15px]">
                    <p>Diamond Buying Guide</p>
                    <p>Lab Grown Diamonds</p>
                    <p>Moissanite vs. Diamonds</p>
                    <p>Ring Size Chart</p>
                    <p>Bracelet Size Chart</p>
                  </div>
                </div>
              </div>

              {/* Container 5 */}
              <div className="mt-[35px]">
                <p className="font-montserrat uppercase font-semibold text-[14px] leading-[20px] text-black">
                  Customer service
                </p>
                <div className="mt-[14px] w-[358px] h-[46px]">
                  <div className="font-montserrat font-medium text-[14px] text-gray-200 leading-[15px]">
                    <p>FAQs</p>
                    <p>Refer a Friend</p>
                  </div>
                </div>
              </div>

              {/* Container 6 - Email Section */}
              <div className="mt-[35px]">
                <p className="font-montserrat uppercase font-semibold text-[14px] leading-[20px] text-black">
                  sign up for email
                </p>
                <div className="mt-[14px] w-[358px] h-[20px]">
                  <p className="font-montserrat font-medium text-[14px] text-gray-200 leading-[15px]">
                    Send me Krayr news, updates and offers.
                  </p>
                </div>
                <div className="mt-[8px] flex items-center">
                  <input
                    type="text"
                    placeholder="Your Email Address"
                    className="border border-gray-300 w-[358px] h-[auto] pl-[12px] py-[14px] text-montserrat font-medium text-[12px] text-gray-200 leading-[18px]"
                  />
                  <button className="bg-palevioletred w-[48px] h-[48px] flex justify-center items-center">
                    {/* Icon */}
                    <svg className="w-[6px] h-[12px] mx-[auto]" viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg">
                      <path id="Icon" d="M1 13L7 7L1 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  </button>
                </div>
                <div className="mt-[20px] flex space-x-[10px]">
                  <img src="Instagram.png" alt="Logo 1" className="w-[20px] h-[20px]" />
                  <img
                    src="Group.svg"
                    alt="Logo 2"
                    className="w-[14.47px] h-[auto]"
                  />
                  <img src="Facebook.png" alt="Logo 3" className="w-[20px] h-[20px]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Text Container */}
        <div className="w-full h-[18px] mt-[42px] mb-[20px] text-center font-montserrat text-[12px] text-gray-200 font-medium leading-[18px] flex justify-center">
          ©2024 Krayr Diamonds | Terms and Conditions | Privacy Policy
        </div>

      </div>


































    </>

  );
}

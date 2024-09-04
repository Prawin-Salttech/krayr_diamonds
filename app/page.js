"use client"

import WhiteButtonPrimary from "./components/WhiteButtonPrimary";
import WhiteButtonSecondary from "./components/WhiteButtonSecondary";
import BlackButtonPrimary from "./components/BlackButtonPrimary";
import BlackButtonSecondary from "./components/BlackButtonSecondary";
import { useState } from 'react';




export default function Home() {


  const bannerParts = [
    <div key="part1" className="relative h-[470px] text-left text-[36px] text-white font-montserrat" style={{ maxWidth: 'calc(100% - 60px)', margin: '0 auto' }}>
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
    <div key="part2" className="relative h-[470px] text-left text-[36px] text-white font-montserrat" style={{ maxWidth: 'calc(100% - 60px)', margin: '0 auto' }}>
      <div className="absolute h-[95.74%] w-full top-[0%] right-[0%] bottom-[4.26%] left-[0%]">
        <img className="absolute h-full w-[66.67%] top-[0%] right-[0%] bottom-[0%] left-[33.33%] max-w-full overflow-hidden max-h-full object-cover transform transition-transform duration-300 ease-in-out hover:translate-y-2" alt="" src="Group 62.png" />
        <img className="absolute h-full w-[31.88%] top-[0%] right-[68.12%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover transform transition-transform duration-300 ease-in-out hover:translate-y-2" alt="" src="Mask group 2.png" />
        <div className="absolute h-full w-[66.67%] top-[0%] right-[0%] bottom-[0%] left-[33.33%] [background:linear-gradient(-90deg,_rgba(0,_0,_0,_0.56),_rgba(124,_34,_56,_0))]" />
        <div className="absolute h-[42.55%] w-[21.91%] top-[43%] bottom-[12.44%] left-[72.5%] flex flex-col items-start justify-start gap-[36px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[45px]">
            <div className="relative h-[40px] leading-[40px] font-semibold">Begin Your Forever Today</div>
            <div className="relative h-[28px] text-[18px] leading-[28px] font-semibold text-gray-100">Ring as Timeless as Your Love</div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start gap-[8px] text-base text-gray-200">
            <WhiteButtonPrimary>Shop Engagement Rings</WhiteButtonPrimary>
          </div>
        </div>
      </div>
    </div>,
    <div key="part3" className="relative h-[470px] text-left text-[36px] text-white font-montserrat" style={{ maxWidth: 'calc(100% - 60px)', margin: '0 auto' }}>
      <div className="absolute h-[95.74%] w-full top-[0%] right-[0%] bottom-[4.26%] left-[0%]">
        <img className="absolute h-full w-[66.67%] top-[0%] right-[0%] bottom-[0%] left-[33.33%] max-w-full overflow-hidden max-h-full object-cover transform transition-transform duration-300 ease-in-out hover:translate-y-2" alt="" src="Group 63.png" />
        <img className="absolute h-full w-[31.88%] top-[0%] right-[68.12%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover transform transition-transform duration-300 ease-in-out hover:translate-y-2" alt="" src="Mask group 3.png" />
        <div className="absolute h-full w-[66.67%] top-[0%] right-[0%] bottom-[0%] left-[33.33%] [background:linear-gradient(-90deg,_rgba(0,_0,_0,_0.56),_rgba(124,_34,_56,_0))]" />
        <div className="absolute h-[42.55%] w-[25.91%] top-[43%] bottom-[12.44%] left-[72.5%] flex flex-col items-start justify-start gap-[36px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[45px]">
            <div className="relative h-[40px] leading-[40px] font-semibold">Elegance With a Purpose</div>
            <div className="relative h-[28px] text-[18px] leading-[28px] font-semibold text-gray-100">Sustainable Sparkle, Everyday Shine</div>
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
    <div key="part5" className="relative h-[470px] text-left text-[36px] text-black font-montserrat" style={{ maxWidth: 'calc(100% - 60px)', margin: '0 auto' }}>
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
        <div className="absolute h-[35.56%] w-[44.64%] top-[52%] right-[3.48%] bottom-[12.44%] left-[51.88%] flex flex-col items-start justify-start gap-[36px]">
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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleClick = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerParts.length);
      setIsTransitioning(false);
    }, 300); // Match this duration with your CSS transition duration
  };

  return (
    <>

      {/* Frame 28036 */}
      <div className="w-full relative bg-palevioletred h-8 flex flex-row items-center justify-center py-[10px] px-[529px] h-[32px] gap-[10px] box-border text-left text-[12px] text-white font-montserrat">
        <div className="flex flex-row items-center justify-center py-0 px-[492.5px] w-[1395px] h-[15px] gap-[10px]">
          <div className="relative uppercase w-[410px] h-[15px] leading-[14.63px]">
            <b>ENDS SOON!</b>
            <span className="font-medium"> Free Diamond Jewellery With All Purchases. </span>
          </div>
        </div>
      </div>

      {/* Frame 28037 */}

      <div className="w-full relative bg-maroon flex flex-col items-start justify-start py-[16px] px-[80px] gap-[10px] box-border text-left text-[12px] text-white font-josefin-sans">
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
      </div>

      {/* Dropdown Component */}

      <div className="w-full relative h-[60px] text-left text-sm text-black font-montserrat">
        <div className="absolute top-[20px] left-[calc(50%_-_720px)] w-[1440px] h-[20px]">
          <div className="absolute top-[0px] left-[calc(50%_-_720px)] w-[1440px] flex flex-row items-center justify-start py-0 px-[259px] box-border gap-[48px]">
            <div className="w-[155px] h-[20px] relative leading-[20px] uppercase font-medium whitespace-nowrap">Engagement Rings</div>
            <div className="w-[132px] h-[20px] relative leading-[20px] uppercase font-medium whitespace-nowrap">Wedding Bands</div>
            <div className="w-[84px] h-[20px] relative leading-[20px] uppercase font-medium whitespace-nowrap">Diamonds</div>
            <div className="w-[87px] h-[20px] relative leading-[20px] uppercase font-medium whitespace-nowrap">Customize</div>
            <div className="w-[88px] h-[20px] relative leading-[20px] uppercase font-medium whitespace-nowrap">Jewellery</div>
            <div className="w-[42px] h-[20px] relative leading-[20px] uppercase font-medium whitespace-nowrap">Gifts</div>
            <div className="w-[76px] h-[20px] relative leading-[20px] uppercase font-medium whitespace-nowrap">About Us</div>
          </div>
        </div>
      </div>

      {/* Home Banner */}

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
        className="relative h-[470px] text-left text-[36px] text-white font-montserrat"
        style={{ maxWidth: 'calc(100% - 60px)', margin: '0 auto' }}
        onClick={handleClick}
      >
        <div className="relative w-full h-full">
          {bannerParts.map((part, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-opacity duration-300 ease-in-out ${index === currentIndex ? 'opacity-100 z-20' : 'opacity-0 z-10'}`}
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






    </>

  );
}

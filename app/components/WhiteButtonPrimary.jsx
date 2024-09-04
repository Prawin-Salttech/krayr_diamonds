const WhiteButtonPrimary = ({ children }) => {
    return (
      <button
        className="w-[300px] h-[48px] relative bg-white outline-none flex flex-row items-center justify-center py-3 px-0 text-left text-[16px] text-gray font-montserrat font-semibold hover:bg-opacity-0 hover:bg-transparent hover:text-white transition-all duration-300 border hover:border-white"
        type="button" // or "submit" if it's in a form
        style={{
            border: '1px solid white',
        }}
      >
        <span className="relative leading-[24px]">
          {children}
        </span>
      </button>
    );
  };
  
  export default WhiteButtonPrimary;
  
const BlackButtonPrimary = ({ children }) => {
    return (
      <button
        className="w-[300px] h-[48px] relative bg-black text-white outline-none flex flex-row items-center justify-center py-3 px-0 text-left text-[16px] font-montserrat font-semibold hover:bg-white hover:text-black transition-all duration-300 border hover:border-black"
        type="button" // or "submit" if it's in a form
        style={{
            border: '1px solid black',
        }}
      >
        <span className="relative leading-[24px]">
          {children}
        </span>
      </button>
    );
  };
  
  export default BlackButtonPrimary;
  
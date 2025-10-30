const ScrollContainer = ({ children }) => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex gap-4 pb-4 min-w-max">
        {children}
      </div>
    </div>
  );
};

export default ScrollContainer;

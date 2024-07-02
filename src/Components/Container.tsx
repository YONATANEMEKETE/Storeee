type ContainerProps = {
  children: React.ReactNode;
  className: string;
};

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={`${className} max-w-[1100px] mx-auto border-x`}>
      {children}
    </div>
  );
};

export default Container;

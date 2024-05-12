type HeadingProps = {
  heading: string;
};
const Heading = ({ heading }: HeadingProps) => {
  return (
    <div className="recommended mt-10">
      <p className="text-xl">{heading}</p>
    </div>
  );
};

export default Heading;

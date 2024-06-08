const Slider = ({ image, i }) => {
  // console.log(object)
  return (
    <div>
      <img src={image} />
      <p className="legend">Image {i + 1}</p>
    </div>
  );
};

export default Slider;

import bgImg from "../../assets/images/Background-stars.png";
import Header from "../../Components/__Molecules/Header/Header";
import sun from "../../assets/sun.png";
function MainPage() {
  return (
    <>
      <div
        className="bg-cover min-h-[100vh] bg-[#070724;]"
        style={{ backgroundImage: `url(${bgImg})` }}>
        <Header />
        <h1 className=" my-10 text-[40px]  text-center text-white" >Solar System</h1>
        <div className=" w-full flex gap-10 justify-between items-center px-[165px] py-[45px]">
            <div className="w-full flex justify-center ">
          <img src={sun} alt="" className="max-w-[450px] w-full object-cover" />
          </div>
        <div className="max-w-[550px] w-full flex flex-col text-white gap-7  ">
          <h1 className="text-[40px]">Welcome to the Wonders of the Universe!</h1>
          <p>
            Discover the fascinating worlds of our solar system and beyond. From
            the scorching surface of Mercury to the icy mysteries of Neptune,
            each planet holds secrets waiting to be explored. Join us on a
            journey through the stars and uncover the beauty of the cosmos. The
            universe is vast—let's explore it together!
          </p>
        </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;

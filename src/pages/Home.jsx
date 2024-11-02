import Books from "../Components/Books";
import Hero from "../Default/Hero";


const Home = () => {
    return (
        <div >
          <div className="pt-10">
          <Hero></Hero>
          </div>
<Books></Books>

        </div>
    );
};

export default Home;
// This is a static page mocking an "About Me"
import RenderImages from "../components/UI/Project/RenderImages";
import myAvatar from '../assets/myAvatar.jpg'

export default function AboutMePage() {
  return (
      <div className="container pt-4">
        <div className="row">

           <div className="col-xl-6">
               <RenderImages src={myAvatar} alt="A happy old man picture from Free Pick, Thanks" classtype="col-xl-8" />
            </div>

            <div className="col-xl-6">
               <h2>My name is Flavio Castorena</h2>
               <h2>I live in México</h2>
               <h2>I'm a Computer Systems Engineer</h2>
               <h2>Graduate of TEC DE MONTERREY</h2>
               <h2>I know REACT </h2>
            </div>

        </div>
     </div>
  );
}

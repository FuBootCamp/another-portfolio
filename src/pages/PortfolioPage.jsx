// Profile  
import LinkImage from "../components/UI/Project/LinkImage";
import taskboard from '../assets/taskboard.jpg'
import cooldictionary from '../assets/cooldictionary.jpg'
import firstblog from '../assets/firstblog.jpg'
import payroll from '../assets/payroll.jpg'
import blog from '../assets/blog.jpg'
import notes from '../assets/notes.jpg'

export default function PortfolioPage() {
    return (
      <div className="container pt-2">

        <div className="row">
          <h3>Click on image to link</h3>
          <div className = "col-xl-6">
              <h2>TECH BLOG</h2>
              <LinkImage 
                image={blog} 
                url="https://mvc-blog-k261.onrender.com" 
                alt="Tech Blog deploy in Render" 
              />
          </div>
          <div className = "col-xl-6">
              <h2>NOTES TAKER</h2>
              <LinkImage 
                image={notes} 
                url="https://express-notes-bbp8.onrender.com" 
                alt="Notes Taker deploy in Render " 
              />
          </div>
        </div>

        <div className="row">
          <div className = "col-xl-6">
              <h2>TASK BOARD</h2>
              <LinkImage 
                image={taskboard} 
                url="https://fubootcamp.github.io/task-board/" 
                alt="Task Board deploy in GituHub" 
              />
          </div>
          <div className = "col-xl-6">
              <h2>COOL DICTIONARY</h2>
              <LinkImage 
                image={cooldictionary} 
                url="https://el-bicho7.github.io/the-cool-dictionary/" 
                alt="Cool Dictionary deploy in GituHub" 
              />
          </div>
        </div>

        <div className="row">
          <div className = "col-xl-6">
              <h2>MY FIRST BLOG</h2>
              <LinkImage 
                image={firstblog} 
                url="https://fubootcamp.github.io/blogging-DOMpower/" 
                alt="My first blog deploy in GituHub" 
              />
          </div>
          <div className = "col-xl-6">
              <h2>PAYROLL MANAGER</h2>
              <LinkImage 
                image={payroll} 
                url="https://fubootcamp.github.io/js-payroll-manager" 
                alt="Payroll manager deploy in GituHub" 
              />
          </div>
        </div>
      </div>
    );
  }
  
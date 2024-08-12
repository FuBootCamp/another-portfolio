// This is a static page for "Resume"
import myResume from '../assets/RESUME.pdf'

export default function DownloadButton() {
  return (
    <div>
        <h3>Download a RESUME</h3>
        <p></p>
        <a href={myResume} download="RESUME.pdf">
            <button className="btn btn-primary">Download</button>
        </a>
    </div>
  );
}

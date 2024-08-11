// this function is for displaying images into the portfolio page

export default function RenderImages({ src, alt, classtype}) {
    return (
        <div>
            <img src={src} alt={alt} className={classtype} />
            <p> {alt} </p>
        </div>
    );
  }
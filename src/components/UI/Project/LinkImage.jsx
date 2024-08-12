
export default function LinkImage ({ image, url, alt })  {
    console.log(image,url,alt);
    return (
        <div>
            <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={image} alt={alt} style={{ width: '100%', cursor: 'pointer' }} />
            </a>  
        </div>
      
    );
  };

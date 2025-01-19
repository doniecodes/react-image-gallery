import React from 'react'

const Image = ({ image }) => {

  console.log(image)

  return (
    <>
    <div className="card">
            <img src={image.webformatURL} alt="" />
            <div className="details">
                <div className="owner">Photo by {image.user}</div>
                <p><span>Views: </span>{image.views}</p>
                <p><span>Likes:</span>{image.likes}</p>
                <p><span>Downloads:</span>{image.downloads}</p>
                <div className="hashtags">
                    {image.tags.split(',').slice(0, 3).map((tag)=> {
                        return <span key={crypto.randomUUID()}>#{tag}</span>
                    })}
                </div>
            </div>
        </div>
    </>
  )
}

export default Image
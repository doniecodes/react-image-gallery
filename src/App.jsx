import { useState } from 'react'
import './index.css'
import React from 'react'
import Header from '../components/Header'
import Image from '../components/Image'


const App = () => {

  const [images, setImages] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [term, setTerm] = React.useState('');

    const imageElements = images.map((image)=> {
        return <Image key={image.id} image={image} />
    })

    /* fetch images */
    React.useEffect(()=> {
        fetch(`https://pixabay.com/api/?key=${import.meta.env.VITE_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
        .then (res=> res.json())
        .then ((data)=> {
            setImages(data.hits);
            setLoading(false);
        })
    }, [term])
    
    const handleSearch = (event)=> {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const inputSearch = formData.get('searchInput');
        setTerm(inputSearch);
        event.currentTarget.reset();
      }

      let footer = images.length === 0 ? "hidden" : '';

  return (
    <>
    <Header handleSearch={handleSearch}/>
    <div className="container">
    <main>
        {loading && <h2 className='loading'>Loading...</h2>}
        <section className='gallery'>
            {images && imageElements}   
        </section>
    </main>
    </div>
    {images.length !== 0 &&
    <footer className={footer}>
    <div className="attribution">
      <p>&copy; 2025 coded by <a href="https://github.com/doniecodes" target='_blank'> Donald Zar | @doniecode</a></p>

      <img src="../images/github.png" alt="" />
    </div>
  </footer>}
    </>
  )
}

export default App
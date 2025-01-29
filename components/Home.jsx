import React from 'react'
import Image from "../components/Image"
import Header from "../components/Header"
import { useRef } from 'react'
import { getImages } from '../data/apis'
import ErrorComponent from "../components/ErrorComponent"

const Home = () => {
  const [images, setImages] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [term, setTerm] = React.useState('');
    const [count, setCount] = React.useState(1);
    const [error, setError] = React.useState(null);

    const imageElements = images.map((image)=> {
        return <Image key={image.id} image={image} />
    })

    /* Fetch Images */
    React.useEffect(()=> {
        const loadImages = async ()=> {
            setLoading(true)
            try{
                const data = await getImages(`https://pixabay.com/api/?key=${import.meta.env.VITE_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true&page=${count}`);
                setImages(data)
            } catch(err){
                setError(err)
            } finally{
                setLoading(false)
            }
        }

        loadImages();
    }, [term, count])
    
    const handleSearch = (event)=> {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const inputSearch = formData.get('searchInput');
        setTerm(inputSearch);
        event.currentTarget.reset();
      }

      let footer = images.length === 0 ? "hidden" : '';

      const galleryRef = useRef(null);
      const changePage = (text)=> {
        if(text === "Prev" && count > 1){
            setCount(count - 1)
            galleryRef.current.scrollIntoView({
                behavior: "smooth"
            })
        } else if(text === 'Next'){
            setCount(count + 1)
            galleryRef.current.scrollIntoView({
                behavior: "smooth"
            })
        }
      }

  return (
    <>
    <Header handleSearch={handleSearch}/>
    <div className="container" ref={galleryRef}>
    <main>
        {loading && <h2 className='loading'>Loading...</h2>}
        <section className='gallery'>
            {images && imageElements}   
        </section>

        { images.length !== 0 && 
            <div className="page-buttons">
            <button className='page-btn' onClick={(e)=> changePage(e.target.innerText)}>Prev</button>
            <button className='page-btn' onClick={(e)=> changePage(e.target.innerText)}>Next</button>
        </div> }
    </main>
    </div>

    {error !== null && <ErrorComponent error={error} />}

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

export default Home
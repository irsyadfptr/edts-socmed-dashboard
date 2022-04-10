import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ModalPhoto from '../components/modal/ModalPhoto'
import { loadPhotoAlbums, setPhotoUrl, setTitle } from '../redux/features/Albumlist'

function Photo() {
    // let { id } = useParams()
    const photos = useSelector(state => state.photoAlbums.data.photos)?.filter(fil => fil.albumId === 1)
    const photo = useSelector(state => state.photoAlbums.photoUrl)
    const title = useSelector(state => state.photoAlbums.title)
    const albumName = useSelector(state => state.photoAlbums.data.albums)[0]?.title

    const [toggle, setToggle] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadPhotoAlbums());
    }, [dispatch])

    const  cardClick = (title, url) => {
        setToggle(true)
        dispatch(setTitle(title))
        dispatch(setPhotoUrl(url))
    }

    const closeClick = () => {
        setToggle(false)
    }
  return (
    <>
    <div className='mt-10'>
        <h1 className='text-3xl font-semibold'>{albumName?.toUpperCase()}</h1>
        <div className="flex flex-wrap p-2 justify-center items-center">
            {photos?.map((photo, index) => (
                <button key={index} className='m-3 flex flex-col hover:scale-105' type="button"  onClick={() => cardClick(photo.title, photo.url)} >
                    <img src={`${photo.thumbnailUrl}`} alt="crash" className='rounded'/>
                    {/* <div className='py-3 '>
                    <h1 className='object-contain'>{photo.title}</h1>
                    </div> */}
                </button>
            ))}
            {toggle ? <ModalPhoto onClick={closeClick} title={title} photo={photo}/> : <></>}
        </div>
    </div>
    </>
  )
}

export default Photo;
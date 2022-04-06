import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ModalPhoto from '../components/ModalPhoto'
import { setPhotoUrl, setTitle } from '../redux/features/Albumlist'

function AlbumDetaill() {
    let { id } = useParams()
    const photos = useSelector(state => state.photoAlbums.data.photos).filter(fil => fil.albumId == id)
    const photo = useSelector(state => state.photoAlbums.photoUrl)
    const title = useSelector(state => state.photoAlbums.title)
    const albumName = useSelector(state => state.photoAlbums.data.albums)[id].title

    const [toggle, setToggle] = useState(false)
    const dispatch = useDispatch()

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
    <div className='my-5'>
        <h1 className='text-3xl font-semibold'>{albumName.toUpperCase()}</h1>
        <div className="flex flex-wrap p-2 justify-center items-center">
            {photos.map((photo, index) => (
                <button key={index} className='m-3 flex flex-col hover:scale-105' type="button"  onClick={() => cardClick(photo.title, photo.url)} >
                    <img src={`${photo.thumbnailUrl}`} alt="image" className='rounded'/>
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

export default AlbumDetaill
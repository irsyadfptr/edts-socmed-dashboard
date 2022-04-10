import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import ModalPhoto from '../components/modal/ModalPhoto'
import { loadPhotoAlbums, setPhotoUrl, setTitle } from '../redux/features/Albumlist'
import { IoMdAlbums } from "react-icons/io";
import { FaUser } from "react-icons/fa";



function Photo() {
    let { id, albumId } = useParams()
    const photos = useSelector(state => state.photoAlbums.data.photos)?.filter(fil => fil.albumId === parseInt(albumId))
    const photo = useSelector(state => state.photoAlbums.photoUrl)
    const title = useSelector(state => state.photoAlbums.title)
    const albumName = useSelector(state => state.photoAlbums.data.albums)?.filter(fil => fil.id === parseInt(albumId))

    console.log(albumName)

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
        <div className='flex ml-10 mb-10 mt-2'>
            <Link to={`/${id}/`}>
            <button className='flex bg-white text-xl font-semibold p-3 rounded-xl shadow hover:text-white hover:bg-gray-900 items-center'>
                <FaUser/> <h1 className='px-2'>Profile</h1>
            </button>
            </Link>
            <Link to={`/${id}/albums`}>
            <button className='flex bg-white text-xl font-semibold p-3 ml-4 rounded-xl shadow hover:text-white hover:bg-gray-900 items-center'>
                <IoMdAlbums/> <h1 className='px-2'>Albums</h1>
            </button>
            </Link>
        </div>
        <h1 className='text-3xl font-semibold uppercase'>{albumName[0].title}</h1>
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
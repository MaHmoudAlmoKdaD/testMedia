import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import { useParams } from "react-router-dom"
import DetailsProduct from './DetailsProduct';
import { Carousel } from 'react-carousel-minimal';

const BodyContent = () => {
    const navigate = useNavigate();
    const [data, setData] = useState<any>(null)
    const [images, setImages] = useState([])

    const params = useParams()
    const { id } = params

    useEffect(() => {
        const getData = () => {
            axios.get(`https://course-api.com/react-store-single-product?id=${id}`)
                .then(res => {
                    setData(res?.data)
                })
                .catch(err => console.log(err))
        }
        getData()
    }, [])

    useEffect(() => {
        if (data) {
            const imgs = data?.images.map((d: any) => {
                return { image: d.url }
            })
            setImages(imgs)
        }
    }, [data])

    return (
        <div className='container mx-auto px-4'>
            <div className='mt-7'>
                <button
                    onClick={() => navigate(-1)}
                    className='rounded-lg bg-stone-500 p-2 text-white'
                >Back to products</button>

                <div className='lg:flex w-full'>
                    <div className='w-full lg:w-1/2 lg:pr-20'>
                        {
                            images && images.length > 0 &&
                            <Carousel
                                data={images}
                                time={2000}
                                width="850px"
                                height="500px"
                                radius="10px"
                                slideNumber={true}
                                captionPosition="bottom"
                                dots={true}
                                pauseIconColor="white"
                                pauseIconSize="40px"
                                slideBackgroundColor="darkgrey"
                                slideImageFit="cover"
                                thumbnails={true}
                                thumbnailWidth="100px"
                                style={{
                                    textAlign: "center",
                                    maxWidth: "850px",
                                    maxHeight: "500px",
                                    margin: "40px auto",
                                }}
                            />
                        }


                    </div>

                    {
                        data && <DetailsProduct data={data} />
                    }

                </div>
            </div>
        </div>
    )
}

export default BodyContent
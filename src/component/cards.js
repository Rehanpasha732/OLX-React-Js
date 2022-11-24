import React from 'react'  
import { HeartOutlined } from '@ant-design/icons';


function Cards() {
    let data = [{
        img: "https://images.olx.com.pk/thumbnails/274680028-240x180.webp",
        paragraph: "10 maria Residental Plot for sale in Behria Town Phase 8-....",
        price: "Rs 12,000,000",
        icons: "55",

    },

    {
        img: "https://images.olx.com.pk/thumbnails/262347721-240x180.webp",
        paragraph: "10 maria Residental Plot for sale in Behria Town Phase 8-.... ",
        price: "Rs 18,000,0",
        icons: "55",

    },
    {
        img: "https://images.olx.com.pk/thumbnails/271731707-240x180.webp",
        paragraph: "10 maria Residental Plot for sale in Behria Town Phase 8-.... ",
        price: "Rs 178,000,000",
        icons: "55",

    },
    {
        img: "https://images.olx.com.pk/thumbnails/270674984-240x180.webp",
        paragraph: "10 maria Residental Plot for sale in Behria Town Phase 8-.... ",
        price: "Rs 12,00",
        icons: "55",

    },
    {
        img: "https://images.olx.com.pk/thumbnails/272138716-240x180.webp",
        paragraph: "10 maria Residental Plot for sale in Behria Town Phase 8-.... ",
        price: "Rs 82,00",
        icons: "55",

    },
    {
        img: "https://images.olx.com.pk/thumbnails/268376879-240x180.webp",
        paragraph: "10 maria Residental Plot for sale in Behria Town Phase 8-.... ",
        price: "Rs 192,000",
        icons: "55",

    },
    {
        img: "https://images.olx.com.pk/thumbnails/274443661-240x180.webp",
        paragraph: "10 maria Residental Plot for sale in Behria Town Phase 8-.... ",
        price: "Rs 67,000,00",
        icons: "55",

    },
    {
        img: "https://images.olx.com.pk/thumbnails/186517267-240x180.webp",
        paragraph: "10 maria Residental Plot for sale in Behria Town Phase 8-.... ",
        price: "Rs 989",
        icons: "55",

    },
    {
        img: "https://images.olx.com.pk/thumbnails/268495663-240x180.webp",
        paragraph: "10 maria Residental Plot for sale in Behria Town Phase 8-.... ",
        price: "Rs 127,000,900",
        icons: "55",

    }, {
        img: "https://images.olx.com.pk/thumbnails/274443638-240x180.webp",
        paragraph: "10 maria Residental Plot for sale in Behria Town Phase 8-.... ",
        price: "Rs 129,78",
        icons: "55",

    }, {
        img: "https://images.olx.com.pk/thumbnails/258284020-240x180.webp",
        paragraph: "10 maria Residental Plot for sale in Behria Town Phase 8-.... ",
        price: "Rs 78,90",
        icons: "55",

    },
    {
        img: "https://images.olx.com.pk/thumbnails/198478867-400x300.webp",
        paragraph: "10 maria Residental Plot for sale in Behria Town Phase 8-.... ",
        price: "Rs 87,000",
        icons: "55",

    },
    {
        img: "https://images.olx.com.pk/thumbnails/190055396-400x300.webp",
        paragraph: "10 maria Residental Plot for sale in Behria Town Phase 8-.... ",
        price: "Rs 16,00",
        icons: "55",

    },
    {
        img: "https://images.olx.com.pk/thumbnails/269412537-400x300.webp",
        paragraph: "10 maria Residental Plot for sale in Behria Town Phase 8-.... ",
        price: "Rs 92,000",
        icons: "55",

    },
    {
        img: "https://images.olx.com.pk/thumbnails/268153088-400x300.webp",
        paragraph: "10 maria Residental Plot for sale in Behria Town Phase 8-.... ",
        price: "Rs 1200,00",
        icons: "55",

    },
    {
        img: "https://images.olx.com.pk/thumbnails/270388583-240x180.webp",
        paragraph: "10 maria Residental Plot for sale in Behria Town Phase 8-.... ",
        price: "Rs 78,000,000",
        icons: "55",

    },
    {
        img: "https://images.olx.com.pk/thumbnails/274756235-400x300.webp",
        paragraph: "10 maria Residental Plot for sale in Behria Town Phase 8-.... ",
        price: "Rs 12,000,000",
        icons: "55",

    },]
    return (
        <>
            {
                data.map((v, i) => {
                    return (
                        <div className="cards">
                            <div className="cards_box">
                                <div className="black_part">

                                    <img className='card_img' src={v.img} />
                                </div>
                                <div className="box_text">
                                    <p className='paragraph'>{v.paragraph}<HeartOutlined className='heart' style={{marginLeft:"140px"}} /></p>
                                    <b className='price'>{v.price}</b>
                                </div>
                            </div>

                        </div>
                    )



                })



            }
        </>
    )
}

export default Cards

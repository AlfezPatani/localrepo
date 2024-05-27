import { useParams, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import style from './style.module.css'
import { useState } from 'react';

function Product() {

    const { t, i18n } = useTranslation();
    const [selectedImage, setSelectedImage] = useState(null);
    const params = useParams()
    console.log(params);
    const product = t("allPhotos")
    const targetedProduct = product.find((elem) => elem.key === params.key)
    return (
        <div className={style.Container}>
                {targetedProduct ? targetedProduct?.detail?.map((elem) => {
                    return (
                        <img
                            className={style.ProducImage}
                            key={elem}
                            src={elem}
                            onClick={() => setSelectedImage(elem)}

                        />
                    )
                })
                    : <h1> sorry coulden't product found</h1>}
                <div
                    className={`${style.FullImage} ${!selectedImage ? style.Hide : ''}`}
                    onClick={() => setSelectedImage(null)}
                >
                    <img src={`${selectedImage ? selectedImage : ''}`} />
                </div>
            </div>
    )
}
export default Product
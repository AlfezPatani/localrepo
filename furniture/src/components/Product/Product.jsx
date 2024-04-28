import {useParams,useLocation} from 'react-router-dom'
import {useTranslation} from 'react-i18next'

function Product(){
    const {t,i18n}=useTranslation()
    const a=useParams()
    const product=t("allPhotos")
    const targetedProduct=product.find((elem) => elem.key===a.key)
    return(
        <div style={{marginTop:"100px"}}>
            <>
            <button onClick={() => {
                window.location.href=`https://wa.me/${8160221309}`
            }}>click</button>
            {targetedProduct?targetedProduct?.detail?.map((elem) =><img key={elem} src={elem} />):<h1> sorry coulden't product found</h1>}
            </>
            
        </div>
    )
}
export default Product
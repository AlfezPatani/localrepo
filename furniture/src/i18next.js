import i8next from 'i18next'
import {initReactI18next} from 'react-i18next'
import { contact,allPhotos,bussinessVertical,heroPosters} from './data/data'
i8next.use(initReactI18next).init({
    lng:'en',
    fallbackLng:'en',
    returnObjects:true,
    resources:{
        en:{
           translation:{
            header:[
                {item:"Home",path:"/"},
                {item:"contact",path:"contact"},
                {item:"FAQS",path:"FAQS"},
                
            ],
            footer:{
                headline:"Design For Living",
                copyright:"© Copyright 2024-2028 spart furniture All Rights Reserved."
            },
            heroPosters,
            contact,
            bussinessVertical,
            allPhotos  
           }
        },
        hi:{
            translation:{
                header:[
                    {item:"होम",path:"/"},
                    {item:"संपर्क करें",path:"contact"},
                    {item:"सामान्य प्रश्नोत्तर",path:"FAQS"}
                ],
                footer:{
                    headline:"जीवन जीने के लिए डिज़ाइन",
                    copyright:"© कॉपीराइट 2024-2028 स्पार्ट फर्नीचर सर्वाधिकार सुरक्षित।"
               },
               heroPosters,
               contact,
               bussinessVertical,
               allPhotos
               
            }
        },
        gu:{
            translation:{
                header:[
                    {item:"હોમ",path:"/"},
                    {item:"અમારો સંપર્ક કરો",path:"contact"},
                    {item:"પ્રશ્નો",path:"FAQS"}
                ],
                footer:{
                    headline:"જીવન માટે ડિઝાઇન",
                    copyright:"© કૉપિરાઇટ 2024-2028 સ્પાર્ટ ફર્નિચર સર્વાધિકાર સુરક્ષિત."
               },
               heroPosters,
               contact,
               bussinessVertical,
               allPhotos
               
            }
        }
        
    }

})
import React from 'react'
import Item from './utils/Item'
import TopItem from './TopItem'
import Title from './utils/Title' 


const TopSales = ({ isTop,ifExists ,TopProducts }) => {



return (
<>
    <div className={ isTop ? 'p-3 rounded-xl mt-1  h-auto  shadow-md drop-shadow-2xl  bg-[#fff] lg:h-[400px] md:h-auto ': 
    'p-3 pb-4 rounded-xl  bg-[#fff]   '}>
        <Title title='Top Featchers Products' />
        <div className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-1 ${ifExists ? 'grid-cols-3 xl:grid-cols-2 sm:grid-cols-1'
        :'grid-cols-4 xl:grid-cols-3 md:grid-cols-1 sm:grid-cols-1'}`}>

        {
        TopProducts?.map((item) => (
            <TopItem item={item} key={item.id} ifExists={ifExists} isTop={isTop} />
        ))
        }
        
        </div>
    </div>
</>
)
}

export default TopSales;
import React from 'react'
import Item from './utils/Item'
import Title from './utils/Title' 

const Sales = ({ isTop,ifExists, products }) => {
  // console.log(endpoint)
  return (
   <>
      <div className={ isTop ? 'p-4 rounded-xl mt-10  h-auto border-[1px] border-orange-400  bg-slate-600 lg:h-[400px] md:h-auto ': 
    'p-7 rounded-xl  bg-slate-600   '}>
        <Title title='Top Featchers Products' />
        <div className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-4 ${ifExists ? 'grid-cols-3 xl:grid-cols-2 sm:grid-cols-1' : 'grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'}`}>
          {products?.map((item) => (
            <Item item={item} key={item.id} ifExists={ifExists} isTop={isTop} />
          ))}
        </div>
      </div>
   </>
  )
}

export default Sales
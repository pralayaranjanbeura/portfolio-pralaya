import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data';

const Grid = () => {
  return (
    <section className='about'>
        <BentoGrid className='w-full py-20'>
        {gridItems.map(({id,title,description,className,img,imgClassName,titleClassName,spareImg}) => (
          <BentoGridItem
            id={id}
            key={id}
            title={title}
            description={description}
            // remove icon prop
            // remove original classname condition
            className={className}
            img={img}
            imgClassName={imgClassName}
            titleClassName={titleClassName}
            spareImg={spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};


export default Grid
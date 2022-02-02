import React from 'react'

import * as style from './post-preview.module.scss'

// this is just Parcel stuff dont worry abt this
const imageUrl = new URL(
  '../resources/swap.jpeg?as=webp&width=704',
  import.meta.url
)

// nicely organized class names as variables!
const PostPreview = ({ title, description }) => (
  <article className={style.container}>
    <img
      src={imageUrl}
      alt="Swapneel"
      width={350}
      height={230}
      className={style.image}
    />
    <h3>{title}</h3>
    <p>{description}</p>
    <a href="#more" className={style.link}>
      Read More
    </a>
  </article>
)

// try inspect element and see what the class names end up as!
// notice how we stop class name collision!

// ------------------------------------------------------------

// tailwind!!

// inline styles but... concise?
// const PostPreview = ({ title, description }) => (
//   <article className="p-4 shadow-lg rounded-xl w-[400px]">
//     <img
//       src={imageUrl}
//       alt="Swapneel"
//       width={350}
//       width={230}
//       className="w-full rounded mb-4"
//     />
//     <h3 className="text-2xl mb-3">{title}</h3>
//     <p className="mb-1">{description}</p>
//     <a href="#more" className="text-gray-500 hover:underline">
//       Read More
//     </a>
//   </article>
// )

export default PostPreview

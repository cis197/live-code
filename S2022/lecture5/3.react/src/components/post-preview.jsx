import React from 'react'
// import styled from 'styled-components'

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

// styled-components!!

// const PostPreviewContainer = styled.article`
//   max-width: 400px;
//   padding: 24px;

//   border-radius: 6px;
//   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);

//   h3 {
//     font-size: 1.8rem;
//     margin: 12px 0 16px;
//   }

//   p {
//     margin: 12px 0;
//   }
// `

// we could even factor these out into their own files...

// and this one uses props..?

// const PostPreviewImage = styled.img`
//   width: 100%;
//   height: auto;
//   border-radius: 4px;
//   filter: ${(props) => props.censored && 'blur(20px)'};
// `

// const PostAnchor = styled.a`
//   color: gray;

//   &:visited {
//     color: gray;
//   }
// `

// our markup is much more legible and concise!

// const PostPreview = ({ title, description }) => (
//   <PostPreviewContainer>
//     <PostPreviewImage src={imageUrl} alt="Swapneel" width={350} height={230} />
//     <h3>{title}</h3>
//     <p>{description}</p>
//     <PostAnchor href="#more">Read More</PostAnchor>
//   </PostPreviewContainer>
// )

// ------------------------------------------------------------

// tailwind!!

// inline styles but... concise like bootstrap?
// and this is all the code we need..!

// const PostPreview = ({ title, description }) => (
//   <article className="p-4 shadow-lg rounded-xl w-[400px]">
//     <img
//       src={imageUrl}
//       alt="Swapneel"
//       width={350}
//       height={230}
//       className="w-full rounded mb-4"
//     />
//     <h3 className="text-2xl font-bold mb-3">{title}</h3>
//     <p className="mb-1">{description}</p>
//     {/* hover condition! */}
//     <a href="#more" className="text-gray-500 hover:underline">
//       Read More
//     </a>
//   </article>
// )

export default PostPreview

import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return <main>
    <PageHero title='about'></PageHero>
    <Wrapper className='page section section-center'>
      <img src={aboutImg} alt="nice desk" />
      <article>
        <div className='title'>
          <h2>our story</h2>
          <div className=''><p>Duis nulla sint ipsum ullamco dolore sunt eiusmod velit eiusmod.Amet reprehenderit aute sit Lorem velit ex sit ipsum. Aute sit occaecat commodo duis. Consectetur occaecat non minim velit reprehenderit laboris sint dolore consequat do aliquip aliquip officia. Ipsum ad consectetur esse culpa sit pariatur ut incididunt excepteur. Cillum sunt ex anim consectetur aute incididunt. Proident excepteur ad aute magna. Dolor laboris anim aute aliqua magna id eu velit et.</p> </div>
        </div>
      </article>
    </Wrapper>
  </main>
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage

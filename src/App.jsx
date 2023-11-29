import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/AndriuszzZ.png',
      name: 'André Lima',
      role: 'Developer'
    },
    content: [
      { type: 'paragrath', content: 'Caros colegas e conexões,'},
      { type: 'paragrath', content: 'Estou animado em compartilhar com vocês a minha jornada profissional e as emocionantes novidades que estão por vir! 🌟'},
      { type: 'paragrath', content: 'Após dedicados anos aprimorando minhas habilidades e conquistando desafios, estou pronto para um novo capítulo. Estou aberto a oportunidades emocionantes no campo da tecnologia e ansioso para contribuir com meu conhecimento e paixão.'},
      {type: 'link', content: 'LinkedIn'},
    ],
    publishedAt: new Date('2023-11-27 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/IPonzu.png',
      name: 'João Castro',
      role: 'Developer'
    },
    content: [
      { type: 'paragrath', content: 'Fala galeraa 👋'},
      { type: 'paragrath', content: 'É com grande entusiasmo que compartilho um emocionante momento de transição em minha carreira! 👔✨ Após uma jornada gratificante na empresa Type e Undr, estou pronto para abraçar novos desafios e ampliar horizontes.'},
      {type: 'link', content: 'LinkedIn'},
    ],
    publishedAt: new Date('2023-11-28 10:00:00'),
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/gaturama.png',
      name: 'Gabriel Oliveira',
      role: 'Developer'
    },
    content: [
      { type: 'paragrath', content: 'Caros colegas'},
      { type: 'paragrath', content: 'Compartilho com entusiasmo minha jornada profissional, marcada por desafios superados e aprendizados constantes. Minha paixão pela excelência e inovação me impulsiona a encontrar soluções criativas em TI.'},
      {type: 'link', content: 'LinkedIn'},
    ],
    publishedAt: new Date('2023-11-29 10:00:00'),
  },
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>

       <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
      </main>
      </div>
    </div>
    
  )
}


import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contacts'
import Main from '../components/Main'
import Projects from '../components/Projectcs'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Aqsa | Software Developer</title>
        <meta name="description" content="I’m a Software developer specializing in building  exceptional digital experiences." />
        <link rel="icon" href="/whitelogo.png" />
      </Head>
    <Main />
    <About />
    <Skills />
    <Projects />
    <Contact />
    </div>
  )
}


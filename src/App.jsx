import Navbar from "./Task1/Navbar/navbar"
import Header1 from './Task1/Header/head'
import About from "./Task1/Main/about"
import Skills from "./Task1/Section/skill"
import Footer1 from "./Task1/Footer/footer"

function app (){
  return(
    <article>
    <Navbar/>
    <Header1/>
    <About/>
    <Skills/>
    <Footer1/>
    </article>
  )
}
export default app

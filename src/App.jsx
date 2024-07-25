import './App.css'
import NewsCard from './NewsCard'
import news1 from './assets/bbcMorgan.png'
import news2 from './assets/bbcPandemic.png'
import news3 from './assets/bbcPay.png'
import news4 from './assets/bbcUnilever.png'

const App = () => {

  return (
  <div className="container">
      <h1>BBC News</h1>
      <div className="wrapper" >
      <NewsCard newsImage={news1} newsHeadline="BIG NEWS" newsStory="silly man starts a fight again" />
      <NewsCard newsImage={news2} newsHeadline="COVID" newsStory="Its's still here" />
      <NewsCard newsImage={news3} newsHeadline="NHS PROBLEMS" newsStory="Something something money something" />
      <NewsCard newsImage={news4} newsHeadline="New skincare routine" newsStory="using bricks to clean your face" />
      </div>


  </div>
  )
}

export default App;

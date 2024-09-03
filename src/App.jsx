import React, {useState, useEffect} from "react"
import './dashboard.css'


const App = () => {
  const [htmlContent, setHtmlContent] = useState('')

  useEffect(()=>{
    fetch('/src/dashboard.html')
      .then(response => response.text())
      .then(data => setHtmlContent(data))
  }, []);

  return(
    <div dangerouslySetInnerHTML={{__html: htmlContent}}/>
  )
}

export default App
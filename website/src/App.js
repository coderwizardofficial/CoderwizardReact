import Button from './Button'
const App = () => {
  return <div>
    <h1>My Website</h1>
    <h3>Which website do you want to open?</h3>
    <Button name="Coderwizard Inc." link="https://coderwizard.com/" />
    <Button name="Coderwizard Facebook" link="https://www.facebook.com/coderwizard/" />
    <Button name="Google" link="https://google.com/" />
    <Button name="Facebook" link="https://facebook.com/" />
    <br></br>
    <Button name="Youtube" link="https://youtube.com" />
    <Button name="SEO" link="https://google.com/seo" />
  </div>
}

export default App;
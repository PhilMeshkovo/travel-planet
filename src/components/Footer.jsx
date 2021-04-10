import  Clipboard  from 'expo-clipboard'

export function Footer () {
    return <footer className="page-footer light-blue lighten-2">
    <div className="footer-copyright">
      <div className="container white-text">
      <h6 className="white-text left"  onClick={() => Clipboard.setString('+79997776655')}>тел: +79997776655 &nbsp;  <i className="material-icons secondary-content white-text">content_copy</i></h6><h6 className="white-text right"> © {new Date().getFullYear()} Copyright Text</h6> 
      </div>
    </div>
  </footer> 
}

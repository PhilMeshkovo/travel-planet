import { Text, Clipboard } from 'react-native'
export function Footer () {
    return <footer className="page-footer light-blue lighten-2">
    <div className="footer-copyright">
      <div className="container white-text">
      <text className="white-text left"  onClick={() => Clipboard.setString('+79997776655')}>тел: +79997776655   <i className="material-icons secondary-content white-text">content_copy</i></text><text className="white-text right"> © {new Date().getFullYear()} Copyright Text</text> 
      </div>
    </div>
  </footer> 
}

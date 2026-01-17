import { useSearchParams } from "react-router-dom"
import { yt_html } from "../assets/assets";


const TyPreview = () => {
  const [searchParams] = useSearchParams();

  const thumbnailUrl = searchParams.get('thumbnail_url');
  const title = searchParams.get('title');

  const new_html = yt_html.replace("%%THUMBNAIL_URL%%", thumbnailUrl!).replace("%%TITLE%%", title!);
  return (
    <div className="fixed inset-0 z-100 bg-black">
     <iframe srcDoc={new_html} width="100%" height="100%" frameBorder="0" allowFullScreen></iframe>
    </div>
  )
}

export default TyPreview;
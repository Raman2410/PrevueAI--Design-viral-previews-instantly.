import { DownloadIcon, ImageIcon, Loader2Icon } from "lucide-react";
import { useState } from "react";

// Mock types for the artifact
type AspectRatio = '16:9' | '1:1' | '9:16';
interface IThumbnail {
  image_url: string;
  title: string;
}

const PreviewPanel = ({thumbnail, isLoading, aspectRatio}: {thumbnail: IThumbnail | null, isLoading: boolean, aspectRatio: AspectRatio}) => {
  const aspectClasses = {
    '16:9': 'aspect-video',
    '1:1': 'aspect-square',
    '9:16': 'aspect-[9/16]',
  } as Record<AspectRatio, string>;
  
  const onDownload = () => {
    if(!thumbnail?.image_url) return;
    window.open(thumbnail.image_url, '_blank');
  };
  
  return (
    <div className="relative mx-auto w-full max-w-2xl">
      <div className={`relative overflow-hidden ${aspectClasses[aspectRatio]} rounded-lg`}>
        {/* Loading State */}
        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/25">
            <Loader2Icon className="size-8 animate-spin text-zinc-400"/>
            <div className="text-center">
              <p className="text-sm font-medium text-zinc-200">AI is Generating your thumbnail...</p>
              <p className="mt-1 text-xs text-zinc-400">This may take 10-20 seconds...</p>
            </div>
          </div>
        )}
        
        {/* Image Preview */}
        {!isLoading && thumbnail?.image_url && (
          <div className="group relative h-full w-full">
            <img src={thumbnail?.image_url} alt={thumbnail.title} className="w-full h-full object-cover" />
            
            {/* Download Button Overlay - Shows on Hover */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/40 group-hover:opacity-100">
              <button 
                onClick={onDownload} 
                type="button" 
                className="flex items-center gap-2 rounded-md px-5 py-2.5 text-xs font-medium transition bg-white/30 ring-2 ring-white/40 backdrop-blur hover:scale-105 active:scale-95"
              >
                <DownloadIcon className="size-4"/>
                Download Thumbnail
              </button>
            </div>
          </div>
        )}
        
        {/* Empty state */}
        {!isLoading && !thumbnail?.image_url && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/25 border border-dashed border-white/20 rounded-lg">
            <div className="max-sm:hidden flex size-20 items-center justify-center rounded-full bg-white/10">
              <ImageIcon className="size-10 text-white opacity-50"/>
            </div>
            <div className="text-center px-4">
              <p className="text-sm font-medium text-zinc-200">Your generated thumbnail will appear here.</p>
              <p className="mt-1 text-xs text-zinc-400">Start by providing details and clicking generate.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Demo component
export default function App() {
  const [aspectRatio] = useState<AspectRatio>('16:9');
  const [thumbnail] = useState<IThumbnail>({
    image_url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=450&fit=crop',
    title: 'Sample Thumbnail'
  });
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 to-zinc-800 p-8">
      <div className="mb-4 text-center">
        <p className="text-sm text-zinc-400">Hover over the image to see the download button</p>
      </div>
      <PreviewPanel 
        thumbnail={thumbnail}
        isLoading={false}
        aspectRatio={aspectRatio}
      />
    </div>
  );
}
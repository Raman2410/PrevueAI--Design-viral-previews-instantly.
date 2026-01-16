import { CpuIcon, PenToolIcon,  Image, SparkleIcon, SquareIcon, ChevronDownCircle } from "lucide-react";
import { thumbnailStyles, type ThumbnailStyle } from "../assets/assets";
import { button, div } from "motion/react-client";


const StyleSelector = ({value,onChange,isOpen,setIsOpen}:{value:ThumbnailStyle;onChange:(style:ThumbnailStyle)=>void;isOpen:boolean;setIsOpen:(isOpen:boolean)=>void}) => {

    const styleDescription : Record<ThumbnailStyle,string> = {
        "Bold & Graphic": "Vibrant colors, strong contrasts, and clear typography for maximum impact.",
        "Minimalist": "Clean design with ample white space, focusing on simplicity and clarity.",
        "Photorealistic": "High-quality images that look like real photographs, ideal for realism.",
         'Illustrated': 'illustrated thumbnail, custom digital illustration, stylized characters, bold outlines, vibrant colors, creative cartoon or vector art style',
        "Tech/Futuristic": "Sleek designs with modern elements, neon colors, and tech-inspired graphics."
    }
    const styleIcon : Record<ThumbnailStyle,React.ReactNode> = {
        "Bold & Graphic": <SparkleIcon className="h-6 w-6"/>,
        "Minimalist": <SquareIcon className="h-6 w-6"/>,
        "Photorealistic":<Image className="h-6 w-6"/>,
        "Illustrated": <PenToolIcon className="h-6 w-6"/>,
        "Tech/Futuristic": <CpuIcon className="h-6 w-6"/>
    }
  return (
    <div className="relative space-y-3 dark">
        <label  className="block text-sm font-medium text-zinc-200">Thumbnail Style</label>

        <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3.5 rounded-lg border border-white/10 bg-black/20 text-zinc-100 text-left focus:outline-none focus:ring-2 focus:ring-pink-500 flex items-center justify-between"
        >
            <div className="space-y-1">
                <div className="flex items-center gap-2 font-medium">
                    {styleIcon[value]}
                    <span>{value}</span>
                </div>
                <p className="text-xs text-zinc-400">{styleDescription[value]}</p>
            </div>
            <ChevronDownCircle className={['h-5 w-5 text-zinc-400 transparent-tranform',isOpen && 'rotate-180'].join(' ')}/>
        </button>
        {isOpen && (
            <div className="absolute bottom-0 z-50 mt-1 w-full rounded-md border border-white/12 bg-black/20 backdrop-blur-3xl shadow-lg">
                 {
                    thumbnailStyles.map((style)=>(
                        <button key={style} onClick={() => {onChange(style); setIsOpen(false);}} className="w-full px-4 py-3.5 rounded-lg border border-white/10 bg-black/20 text-zinc-100 text-left focus:outline-none focus:ring-2 focus:ring-pink-500 flex items-center gap-2">
                           <div className="mt-0.5">{styleIcon[style]}</div> 
                           <div>
                            <p className="font-medium">{style}</p>
                            <p className="text-xs text-zinc-400">{styleDescription[style]}</p>
                           </div>
                        </button>
                    ))}
                
            </div>
        )}
    </div>
  )
}

export default StyleSelector
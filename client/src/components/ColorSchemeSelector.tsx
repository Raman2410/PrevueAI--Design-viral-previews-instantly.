import { colorSchemes } from "../assets/assets";


const ColorSchemeSelector = ({value, onChange}:{value:string; onChange: (color: string) => void}) => {

  return (
    <div className="space-y-3">
        <label className="block text-sm font-medium text-zinc-200">Color Scheme</label>
        <div className="grid grid-cols-6 gap-3">
            {colorSchemes.map((scheme)=>(
                <button key={scheme.id} onClick={() => onChange(scheme.id)} type="button" className={`w-full h-10 rounded-lg border  ${value === scheme.id ? 'border-pink-500 bg-pink-500/10':'border-white/10 hover:border-pink-500'} cursor-pointer transition`} style={{backgroundColor: scheme.colors[0]}}title={scheme.name}>
                    <div className="flex h-10 rounded-lg overflow-hidden">
                        {scheme.colors.map((color,idx)=>(<div key={idx} className="w-1/2 h-full flex-1" style={{backgroundColor: color}}></div>))}
                    </div>
                </button>
            ))}
        </div>
        <p className="text-xs text-zinc-100">Selected:{colorSchemes.find((scheme)=>scheme.id === value)?.name ?? "None"}</p>
    </div>
  )
}

export default ColorSchemeSelector
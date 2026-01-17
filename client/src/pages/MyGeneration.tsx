import { useEffect, useState } from 'react'
import SoftBackdrop from '../components/SoftBackdrop'
import { dummyThumbnails, type IThumbnail } from '../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowUpRightIcon } from 'lucide-react';


const MyGeneration = () => {

  const navigate = useNavigate();
  const aspectRatioClassMap: Record<string, string> = {
    '16:9': 'aspect-video',
    '1:1': 'aspect-square',
    '9:16': 'aspect-[9/16]',
  }
  const [loading, setLoading] = useState(false);
  const [thumbnails, setThumbnails] = useState<IThumbnail[]>([]);

  const fetchThumbnails = async () => {
    setThumbnails(dummyThumbnails as unknown as IThumbnail[]);
    setLoading(false);
  }

  const handleDownload = (image_url: string) => {
    window.open(image_url, '_blank');
  }

  const handleDelete = (id: string) => {
    console.log('Deleting thumbnail:', id);
    // TODO: Implement delete functionality
    // setThumbnails(thumbnails.filter(thumb => thumb._id !== id));
  };

  useEffect(() => {
    fetchThumbnails();
  }, []);

  return (
    <>
      <SoftBackdrop />
      <div className="mt-32 min-h-screen px-6 md:px-16 lg:px-24 xl:px-32 pb-16">
        {/* Header */}
        <div className='mb-8'>
          <h1 className="text-2xl font-bold text-zinc-200">My Generation</h1>
          <p className='text-sm text-zinc-400 mt-1'>View and manage all your AI-generated thumbnails.</p>
        </div>

        {/* Loading state */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className='rounded-2xl bg-white/6 border border-white/10 animate-pulse h-[260px]' />
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && thumbnails.length === 0 && (
          <div className='text-center py-24'>
            <h3 className='text-lg font-semibold text-zinc-200'>No thumbnails yet.</h3>
            <p className='text-sm text-zinc-400 mt-2'>Generate your first thumbnail to see it here</p>
          </div>
        )}

        {/* Grid */}
        {!loading && thumbnails.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {thumbnails.map((thumb: IThumbnail) => {
              const aspectClass = aspectRatioClassMap[thumb.aspect_ratio || '16:9'];
              return (
                <div key={thumb._id} className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/8 transition-all duration-300">

                  {/* IMAGE */}
                  <div
                    onClick={() => navigate(`/generate/${thumb._id}`)}
                    className={`relative overflow-hidden cursor-pointer ${aspectClass} bg-black`}
                  >
                    {thumb.image_url ? (
                      <img src={thumb.image_url} alt={thumb.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    ) : (
                      <div className="flex items-center justify-center w-full h-full text-zinc-400">
                        {thumb.isGenerating ? 'Generating...' : 'No Image Available'}
                      </div>
                    )}

                    {thumb.isGenerating && (
                      <div className='absolute inset-0 bg-black/50 flex items-center justify-center text-sm font-medium text-white'>
                        Generating...
                      </div>
                    )}
                  </div>

                  {/* Details & Actions */}
                  <div className="p-4 space-y-3">
                    <div>
                      <h3 className="font-semibold text-zinc-100 line-clamp-1">{thumb.title}</h3>
                      <p className="text-xs text-zinc-400 mt-1">
                        {thumb.aspect_ratio} • {thumb.style}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <Link target="_blank" to={`/preview?thumbnail_url=${thumb.image_url}&title=${thumb.title}`}> <ArrowUpRightIcon className='size-10 bg-black/50 p-1 rounded hover:bg-pink transition-all'/> </Link>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (thumb.image_url) {
                            handleDownload(thumb.image_url);
                          }
                        }}
                        disabled={!thumb.image_url}
                        className="flex-1 px-3 py-2 text-sm font-medium bg-pink-500/20 hover:bg-pink-500/30 text-pink-400 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Download
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(thumb._id);
                        }}
                        className="px-3 py-2 text-sm font-medium bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </>
  )
}

export default MyGeneration
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';
import { useState } from 'react';

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const videos = [
    {
      id: 'dQw4w9WgXcQ',
      title: 'Modern Kitchen Design - Ajinkyatara Associates',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      description: 'Stunning modern kitchen interior design with contemporary finishes'
    },
    {
      id: 'J---aiyznGQ',
      title: 'Luxury Living Room Transformation',
      thumbnail: 'https://img.youtube.com/vi/J---aiyznGQ/maxresdefault.jpg',
      description: 'Complete living room makeover with elegant furniture and lighting'
    },
    {
      id: '0dsfo1dH-7c',
      title: 'Complete Home Interior Project',
      thumbnail: 'https://img.youtube.com/vi/0dsfo1dH-7c/maxresdefault.jpg',
      description: 'Full home interior design from concept to completion'
    },
    {
      id: 'lp-EO5I60KA',
      title: 'Office Interior Design Solutions',
      thumbnail: 'https://img.youtube.com/vi/lp-EO5I60KA/maxresdefault.jpg',
      description: 'Professional office space design for productivity and aesthetics'
    }
  ];

  const openVideo = (videoId: string) => {
    setSelectedVideo(videoId);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Our Work in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Watch our interior design projects come to life through detailed walkthroughs and client testimonials
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {videos.map((video) => (
            <Card key={video.id} className="overflow-hidden group cursor-pointer shadow-elegant hover:shadow-glow transition-all duration-300">
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    onClick={() => openVideo(video.id)}
                    size="lg"
                    className="bg-primary hover:bg-primary-dark text-white rounded-full p-4 shadow-strong"
                  >
                    <Play className="h-8 w-8 ml-1" />
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {video.title}
                </h3>
                <p className="text-muted-foreground">
                  {video.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={() => window.open('https://www.youtube.com/@ajinkyataraassociates', '_blank')}
            variant="outline"
            size="lg"
            className="text-primary border-primary hover:bg-primary hover:text-white"
          >
            View All Videos on YouTube
          </Button>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-4xl bg-white rounded-lg overflow-hidden">
            <button
              onClick={closeVideo}
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 z-10"
            >
              ✕
            </button>
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoGallery;
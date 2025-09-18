import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Download, Play } from "lucide-react";

interface LessonCardProps {
  title: string;
  videoId: string;
  description: string;
  linkUrl: string;
  materialsUrl: string;
}

export const LessonCard = ({ title, videoId, description, linkUrl, materialsUrl }: LessonCardProps) => {
  return (
    <Card className="group overflow-hidden bg-card shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in">
      <div className="relative aspect-video overflow-hidden">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
          title={title}
          className="h-full w-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-black/50 backdrop-blur-sm rounded-full p-2">
            <Play className="h-4 w-4 text-white" />
          </div>
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
        
        <div className="flex gap-3 pt-2">
          <Button 
            variant="default" 
            size="sm" 
            className="flex-1 bg-primary hover:bg-primary-hover"
            onClick={() => window.open(linkUrl, '_blank')}
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Ver Mais
          </Button>
          
          <Button 
            variant="secondary" 
            size="sm" 
            className="flex-1 hover:bg-secondary-hover"
            onClick={() => window.open(materialsUrl, '_blank')}
          >
            <Download className="mr-2 h-4 w-4" />
            Materiais
          </Button>
        </div>
      </div>
    </Card>
  );
};
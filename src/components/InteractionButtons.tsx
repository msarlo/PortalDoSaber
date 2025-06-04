"use client";
import { useState } from "react";
import InteractiveButton from "./InteractiveButton";

interface InteractionButtonsProps {
  initialLikes?: number;
  initialDislikes?: number;
}

export default function InteractionButtons({
  initialLikes = 0,
  initialDislikes = 0
}: InteractionButtonsProps) {
  const [likeCount, setLikeCount] = useState(initialLikes);
  const [dislikeCount, setDislikeCount] = useState(initialDislikes);
  const [activeButton, setActiveButton] = useState<'like' | 'dislike' | null>(null);

  const handleInteraction = (type: 'like' | 'dislike') => {
    if (activeButton === type) {
      // Remover interação atual
      setActiveButton(null);
      if (type === 'like') {
        setLikeCount(prev => prev - 1);
      } else {
        setDislikeCount(prev => prev - 1);
      }
    } else {
      // Remover interação anterior se existir
      if (activeButton === 'like' && type === 'dislike') {
        setLikeCount(prev => prev - 1);
      } else if (activeButton === 'dislike' && type === 'like') {
        setDislikeCount(prev => prev - 1);
      }
      
      // Adicionar nova interação
      setActiveButton(type);
      if (type === 'like') {
        setLikeCount(prev => prev + 1);
      } else {
        setDislikeCount(prev => prev + 1);
      }
    }
  };

  return (
    <div className="flex gap-4">
      <InteractiveButton
        type="like"
        initialCount={likeCount}
        isActive={activeButton === 'like'}
        onInteraction={() => handleInteraction('like')}
      />
      <InteractiveButton
        type="dislike"
        initialCount={dislikeCount}
        isActive={activeButton === 'dislike'}
        onInteraction={() => handleInteraction('dislike')}
      />
    </div>
  );
}
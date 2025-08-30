import { LevelEnum } from "src/app/blog/enum/level.enum";
import { BlogDescription } from "../blog/interface/blog.description";

export const blogDescriptionData: BlogDescription[] = [
  {
    level: LevelEnum.Beginner,
    features: [
      'Quick Read: 2 minute article.',
      'Cover easy-to-understand concepts.',
      'Quick to implement &amp; demonstrate.',
      'Will focus on no more than 2 technologies.'
    ],
    anchor: 'beginner'
  },
  {
    level: LevelEnum.Intermediate,
    features: [
      'Quick Read: 2 minute article.',
      'Cover concepts which might need prior experience to understand.',
      'Will require a little time to implement &amp; demonstrate.',
      'Will focus on more than 2 technologies, or will require a deeper understanding of those technologies.'
    ],
    anchor: 'intermediate'
  },
  {
    level: LevelEnum.Experienced,
    features: [
      'Longer Read: 3 minute or longer article.',
      'Cover concepts which will need experience to understand.',
      'Will require time to implement &amp; demonstrate.',
      'Will focus on more than 2 technologies, or will require a deep understanding of those technologies.'
    ],
    anchor: 'experienced'
  },
]
import { AnimationTriggerMetadata, trigger, transition, animate, keyframes } from "@angular/animations";
import { skillsStyle } from "./skills-styles";

export function skillsHighlightAnimation(): AnimationTriggerMetadata {
    return trigger('filteredSkill', [
        transition('* => true', [
            animate(
                '4000ms',
                keyframes(skillsStyle),
            ),
        ]),
    ]);
}
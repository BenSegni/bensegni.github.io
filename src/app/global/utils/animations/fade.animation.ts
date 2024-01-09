import { AnimationTriggerMetadata, animate, style, transition, trigger } from "@angular/animations";

export function FadeInNavigation(): AnimationTriggerMetadata {
    return trigger('fade', [
        transition('void => *', [
            style({ opacity: 0, transform: 'scaleY(0)', transformOrigin: 'top center' }),
            animate(700, style({ opacity: 1, transform: 'scaleY(100%)', transformOrigin: 'top center' }))
        ]),
        transition('* => void', [
            style({ opacity: 1, transform: 'scaleY(100%)',  transformOrigin: 'top center' }),
            animate(700, style({ opacity: 0, transform: 'scaleY(0)', transformOrigin: 'top center' }))
        ])
    ]);
}

export function FadeInButton(): AnimationTriggerMetadata {
    return trigger('fade', [
        transition('* => *', [
            style({ opacity: 0 }),
            animate(1000, style({ opacity: 1 }))
        ])
    ]);
}
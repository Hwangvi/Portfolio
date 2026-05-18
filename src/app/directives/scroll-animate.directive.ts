import {Directive, ElementRef, Input, OnInit, OnDestroy} from '@angular/core';

@Directive({ selector: '[scrollAnimate]' })
export class ScrollAnimateDirective implements OnInit, OnDestroy {

  @Input() scrollAnimate: string = 'fade-up';
  @Input() animDelay: number = 0;

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const el = this.el.nativeElement as HTMLElement;

    this.setInitialState(el);

    if (this.animDelay) {
      el.style.transitionDelay = `${this.animDelay}ms`;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('anim-visible');
          this.observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    this.observer.observe(el);
  }

  private setInitialState(el: HTMLElement) {
    el.classList.add('anim-base', `anim-${this.scrollAnimate}`);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}

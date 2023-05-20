import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-overflow-menu',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="mt-10 mx-auto max-w-xl h-80 resize-x overflow-x-auto shadow-2xl"
      style="min-width: 17em"
    >
      <div class="w-full h-full bg-black/30 rounded-lg overflow-clip">
        <div
          class="w-full space-x-3 flex relative overflow-x-clip bg-black/30 px-3 py-2"
          #overflowContainer
        >
          <button
            *ngFor="let item of items"
            #overflowItem
            class="rounded-md hover:bg-white/10 px-2 py-1 text-center text-sm font-semibold text-slate-400 hover:text-slate-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
          >
            {{ item }}
          </button>

          <div
            class="absolute right-2 ml-2 inline-block flex-shrink-0 text-left"
          >
            <button
              type="button"
              class="group relative inline-flex h-8 w-8 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              id="options-menu-0-button"
              aria-expanded="false"
              aria-haspopup="true"
            >
              <span class="sr-only">Open options menu</span>
              <span
                class="flex h-full w-full items-center justify-center rounded-full"
              >
                <svg
                  class="h-5 w-5 text-gray-400 group-hover:text-gray-300"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z"
                  />
                </svg>
              </span>
            </button>

            <div
              class="absolute right-0 top-11 w-48 origin-top-right rounded-md bg-slate-800 shadow-lg"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu-0-button"
              tabindex="-1"
            >
              <div class="py-1" role="none">
                <a
                  *ngFor="let item of items"
                  #overflowMenuItem
                  class="text-slate-400 hover:text-slate-300 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="options-menu-0-item-0"
                  >{{ item }}</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverflowMenuComponent implements AfterViewInit, OnDestroy {
  items = [
    'First',
    'Second',
    'Third',
    'Fourth',
    'Fifth',
    'Sixth',
    'Seventh',
    'Eighth',
    'Ninth',
    'Tenth',
  ];

  @ViewChild('overflowContainer') overflowContainer!: ElementRef;
  @ViewChildren('overflowItem') overflowItems!: QueryList<ElementRef>;
  @ViewChildren('overflowMenuItem') overflowMenuItems!: QueryList<ElementRef>;

  observer = new ResizeObserver(() => this.update());

  ngAfterViewInit() {
    this.update();
    this.overflowItems.changes.subscribe(() => this.update());
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }

  update() {
    this.observer.disconnect();
    this.overflowItems.forEach((item, index) => {
      this.observer.observe(item.nativeElement);
      const offsetWidth =
        this.overflowContainer.nativeElement.offsetWidth - 100;
      const offsetLeft = item.nativeElement.offsetLeft;
      item.nativeElement.style.visibility =
        offsetLeft > offsetWidth ? 'hidden' : 'visible';
      this.overflowMenuItems.get(index)!.nativeElement.style.display =
        offsetLeft > offsetWidth ? 'block' : 'none';
    });
  }
}

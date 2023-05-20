import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  inject,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule, ViewportScroller } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, fromEvent } from 'rxjs';

@Component({
  selector: 'app-table-of-contents',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="mx-auto flex w-full max-w-7xl items-start gap-x-8 px-4 py-10 sm:px-6 lg:px-8"
    >
      <aside
        class="sticky top-10 hidden w-50 shrink-0 lg:block leading-10 text-sm"
      >
        <nav>
          <ol>
            <li class="mb-4">
              <a class="text-slate-400 font-semibold hover:text-slate-200"
                >Introduction</a
              >
              <ol class="border-l border-white/10 pl-4 leading-8">
                <li>
                  <a class="text-blue-300 font-semibold">Getting started</a>
                </li>
                <li>
                  <a class="text-slate-400 hover:text-slate-200"
                    >Installation</a
                  >
                </li>
              </ol>
            </li>
            <li>
              <a class="text-slate-400 font-semibold hover:text-slate-200"
                >Core concepts</a
              >
              <ol class="border-l border-white/10 pl-4 leading-8">
                <li>
                  <a class="text-slate-400 hover:text-slate-200"
                    >Understanding caching</a
                  >
                </li>
                <li>
                  <a class="text-slate-400 hover:text-slate-200"
                    >Predicting user behavior</a
                  >
                </li>
                <li>
                  <a class="text-slate-400 hover:text-slate-200"
                    >Basics of time-travel</a
                  >
                </li>
                <li>
                  <a class="text-slate-400 hover:text-slate-200"
                    >Introduction to string theory</a
                  >
                </li>
                <li>
                  <a class="text-slate-400 hover:text-slate-200"
                    >The butterfly effect</a
                  >
                </li>
              </ol>
            </li>
          </ol>
        </nav>
      </aside>

      <main class="flex-1 leading-loose text-base text-slate-400">
        <article #article>
          <div class="relative">
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="w-full border-t border-white/10"></div>
            </div>
            <div class="relative flex justify-center">
              <h1
                class="bg-slate-900 text-3xl font-extrabold text-blue-300 px-6"
              >
                Getting started
              </h1>
            </div>
          </div>

          <h2 class="text-2xl font-bold text-slate-200 mt-16 mb-8">
            Quick start
          </h2>
          <p class="mb-6">
            Sit commodi iste iure molestias qui amet voluptatem sed quaerat.
            Nostrum aut pariatur. Sint ipsa praesentium dolor error cumque velit
            tenetur.
          </p>

          <h3 class="text-xl font-semibold text-slate-200 mt-12 mb-8">
            Installing dependencies
          </h3>
          <p class="mb-6">
            Sit commodi iste iure molestias qui amet voluptatem sed quaerat.
            Nostrum aut pariatur. Sint ipsa praesentium dolor error cumque velit
            tenetur quaerat exercitationem. Consequatur et cum atque mollitia
            qui quia necessitatibus.
          </p>

          <pre
            class=" my-6 p-4 bg-slate-800 rounded-md"
          ><code>npm install @tailwindlabs/cache-advance</code></pre>

          <p class="mb-6">
            Possimus saepe veritatis sint nobis et quam eos. Architecto
            consequatur odit perferendis fuga eveniet possimus rerum cumque. Ea
            deleniti voluptatum deserunt voluptatibus ut non iste. Provident nam
            asperiores vel laboriosam omnis ducimus enim nesciunt quaerat. Minus
            tempora cupiditate est quod.
          </p>

          <div class="rounded-md bg-red-900/20 p-4 my-6">
            <div class="flex">
              <div class="flex-shrink-0">
                <svg
                  class="h-8 w-8 text-red-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="ml-3">
                <p class="font-semibold text-red-400">
                  Oh no! Something bad happened!
                </p>
                <div class="mt-2 text-red-200">
                  <p>
                    This is what a disclaimer message looks like. You might want
                    to include inline code in it. Or maybe you'll want to
                    include a link in it. I don't think we should get too
                    carried away with other scenarios like lists or tables —
                    that would be silly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h3 class="text-xl font-semibold text-slate-200  mt-12 mb-8">
            Configuring the library
          </h3>
          <p class="mb-6">
            Sit commodi iste iure molestias qui amet voluptatem sed quaerat.
            Nostrum aut pariatur. Sint ipsa praesentium dolor error cumque velit
            tenetur quaerat exercitationem. Consequatur et cum atque mollitia
            qui quia necessitatibus.
          </p>

          <pre
            class=" my-6 p-4 bg-slate-800 rounded-md"
          ><code>// cache-advance.config.js
export default {{"{"}}
  strategy: 'predictive',
  engine: {{"{"}}
    cpus: 12,
    backups: ['./storage/cache.wtf'],
  {{"}"}},
{{"}"}}
</code></pre>

          <p class="mb-6">
            Possimus saepe veritatis sint nobis et quam eos. Architecto
            consequatur odit perferendis fuga eveniet possimus rerum cumque. Ea
            deleniti voluptatum deserunt voluptatibus ut non iste. Provident nam
            asperiores vel laboriosam omnis ducimus enim nesciunt quaerat. Minus
            tempora cupiditate est quod.
          </p>

          <div class="rounded-md bg-blue-900/10 p-4 my-6">
            <div class="flex">
              <div class="flex-shrink-0">
                <svg
                  class="h-8 w-8 text-blue-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="ml-3">
                <p class="font-semibold text-blue-400">You should know!</p>
                <div class="mt-2 text-blue-200">
                  <p>
                    This is what a disclaimer message looks like. You might want
                    to include inline code in it. Or maybe you'll want to
                    include a link in it. I don't think we should get too
                    carried away with other scenarios like lists or tables —
                    that would be silly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            class="w-full border-t border-white/10 my-16"
            aria-hidden="true"
          ></div>

          <h2 class="text-2xl font-bold text-slate-200 mb-8">Basic usage</h2>
          <p class="mb-6">
            Praesentium laudantium magni. Consequatur reiciendis aliquid nihil
            iusto ut in et. Quisquam ut et aliquid occaecati. Culpa veniam aut
            et voluptates amet perspiciatis. Qui exercitationem in qui. Vel qui
            dignissimos sit quae distinctio.
          </p>

          <h3 class="text-xl font-semibold text-slate-200 mt-12 mb-8">
            Your first cache
          </h3>
          <p class="mb-6">
            Minima vel non iste debitis. Consequatur repudiandae et quod
            accusamus sit molestias consequatur aperiam. Et sequi ipsa eum
            voluptatibus ipsam. Et quisquam ut.
          </p>

          <p class="mb-6">
            Qui quae esse aspernatur fugit possimus. Quam sed molestiae
            temporibus. Eum perferendis dignissimos provident ea et. Et
            repudiandae quasi accusamus consequatur dolore nobis. Quia
            reiciendis necessitatibus a blanditiis iste quia. Ut quis et amet
            praesentium sapiente.
          </p>

          <p class="mb-6">
            Atque eos laudantium. Optio odit aspernatur consequuntur corporis
            soluta quidem sunt aut doloribus. Laudantium assumenda commodi.
          </p>

          <h3 class="text-xl font-semibold text-slate-200 mt-12 mb-8">
            Clearing the cache
          </h3>
          <p class="mb-6">
            Vel aut velit sit dolor aut suscipit at veritatis voluptas.
            Laudantium tempore praesentium. Qui ut voluptatem.
          </p>

          <p class="mb-6">
            Ea est autem fugiat velit esse a alias earum. Dolore non amet soluta
            eos libero est. Consequatur qui aliquam qui odit eligendi ut impedit
            illo dignissimos.
          </p>

          <p class="mb-6">
            Ut dolore qui aut nam. Natus temporibus nisi voluptatum labore est
            ex error vel officia. Vero repellendus ut. Suscipit voluptate et
            placeat. Eius quo corporis ab et consequatur quisquam. Nihil officia
            facere dolorem occaecati alias deleniti deleniti in.
          </p>

          <h3 class="text-xl font-semibold text-slate-200 mt-12 mb-8">
            Adding middleware
          </h3>
          <p class="mb-6">
            Officia nobis tempora maiores id iusto magni reprehenderit velit.
            Quae dolores inventore molestiae perspiciatis aut. Quis sequi
            officia quasi rem officiis officiis. Nesciunt ut cupiditate. Sunt
            aliquid explicabo enim ipsa eum recusandae. Vitae sunt eligendi et
            non beatae minima aut.
          </p>

          <p class="mb-6">
            Harum perferendis aut qui quibusdam tempore laboriosam voluptatum
            qui sed. Amet error amet totam exercitationem aut corporis
            accusantium dolorum. Perspiciatis aut animi et. Sed unde error ut
            aut rerum.
          </p>

          <p class="mb-6">
            Ut quo libero aperiam mollitia est repudiandae quaerat corrupti
            explicabo. Voluptas accusantium sed et doloribus voluptatem fugiat a
            mollitia. Numquam est magnam dolorem asperiores fugiat. Soluta et
            fuga amet alias temporibus quasi velit. Laudantium voluptatum
            perspiciatis doloribus quasi facere. Eveniet deleniti veniam et quia
            veritatis minus veniam perspiciatis.
          </p>

          <div
            class="w-full border-t border-white/10 my-16"
            aria-hidden="true"
          ></div>

          <h2 class="text-2xl font-bold text-slate-200 mb-8">Getting help</h2>
          <p class="mb-6">
            Consequuntur et aut quisquam et qui consequatur eligendi.
            Necessitatibus dolorem sit. Excepturi cumque quibusdam soluta ullam
            rerum voluptatibus. Porro illo sequi consequatur nisi numquam nisi
            autem. Ut necessitatibus aut. Veniam ipsa voluptatem sed.
          </p>

          <h3 class="text-xl font-semibold text-slate-200 mt-12 mb-8">
            Submit an issue
          </h3>
          <p class="mb-6">
            Inventore et aut minus ut voluptatem nihil commodi doloribus
            consequatur. Facilis perferendis nihil sit aut aspernatur iure ut
            dolores et. Aspernatur odit dignissimos. Aut qui est sint sint.
          </p>

          <p class="mb-6">
            Facere aliquam qui. Dolorem officia ipsam adipisci qui molestiae.
            Error voluptatem reprehenderit ex.
          </p>

          <p class="mb-6">
            Consequatur enim quia maiores aperiam et ipsum dicta. Quam ut sit
            facere sit quae. Eligendi veritatis aut ut veritatis iste ut
            adipisci illo.
          </p>

          <h3 class="text-xl font-semibold text-slate-200 mt-12 mb-8">
            Join the community
          </h3>
          <p class="mb-6">
            Praesentium facilis iste aliquid quo quia a excepturi. Fuga
            reprehenderit illo sequi voluptatem voluptatem omnis. Id quia
            consequatur rerum consectetur eligendi et omnis. Voluptates iusto
            labore possimus provident praesentium id vel harum quisquam.
            Voluptatem provident corrupti.
          </p>

          <p class="mb-6">
            Eum et ut. Qui facilis est ipsa. Non facere quia sequi commodi
            autem. Dicta autem sit sequi omnis impedit. Eligendi amet dolorum
            magnam repudiandae in a.
          </p>

          <p class="mb-6">
            Molestiae iusto ut exercitationem dolorem unde iusto tempora atque
            nihil. Voluptatem velit facere laboriosam nobis ea. Consequatur
            rerum velit ipsum ipsam. Et qui saepe consequatur minima laborum
            tempore voluptatum et. Quia eveniet eaque sequi consequatur nihil
            eos.
          </p>
        </article>
      </main>

      <aside
        class="py-4 px-6 bg-black/10 rounded-md sticky top-10 hidden w-64 shrink-0 xl:block text-slate-400 leading-7 text-sm"
      >
        <p class="text-blue-300 font-extrabold mb-2">On this page</p>
        <nav>
          <ol>
            <li
              *ngFor="let toc of tocList"
              class="toc-level-{{ toc.level }}"
              [class.font-semibold]="toc.active"
              [class.text-slate-200]="toc.active"
            >
              <a [href]="toc.href">{{ toc.title }}</a>
            </li>
          </ol>
        </nav>
      </aside>
    </div>
  `,
  styles: [
    `
      @for $level from 2 to 6 {
        .toc-level-h#{$level} {
          margin-left: #{($level - 2) * 1em};
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableOfContentsComponent implements AfterViewInit {
  changeDetectorRef = inject(ChangeDetectorRef);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  viewportScroller = inject(ViewportScroller);

  tocList: {
    id: string;
    href: string;
    title: string;
    level: string;
    active: boolean;
    top: number;
  }[] = [];

  @ViewChild('article') article!: ElementRef<HTMLElement>;

  constructor() {
    fromEvent(window, 'scroll')
      .pipe(takeUntilDestroyed(), debounceTime(10))
      .subscribe(() => {
        const scrollOffset = window.scrollY + this.tocList[0]?.top ?? 0;
        for (let i = 0; i < this.tocList.length; i++) {
          const currentToc = this.tocList[i];
          const nextToc = this.tocList[i + 1];
          const isActive =
            scrollOffset >= currentToc.top &&
            (!nextToc || nextToc.top >= scrollOffset);
          currentToc.active = isActive;
        }
        this.changeDetectorRef.detectChanges();
      });
  }

  ngAfterViewInit() {
    const article = this.article.nativeElement;
    const headings = Array.from(article.querySelectorAll('h2, h3, h4, h5, h6'));

    headings.forEach((heading) => {
      const id = `${heading.textContent
        ?.trim()
        .replaceAll(/\W+/g, '-')
        .toLowerCase()}`;
      const href = `${this.router.url.split('#')[0]}#${id}`;

      this.tocList.push({
        id,
        href,
        title: heading.textContent ?? '',
        level: heading.localName,
        active: false,
        top: heading.getBoundingClientRect().top,
      });

      const anchor = document.createElement('a');
      anchor.href = href;
      anchor.textContent = '🔗';
      anchor.classList.add('toc-anchor');
      heading.appendChild(anchor);
      heading.id = id;
    });

    this.activatedRoute.fragment.subscribe((fragment) => {
      if (!fragment) return;
      setTimeout(() => this.viewportScroller.scrollToAnchor(fragment), 100);
    });

    this.changeDetectorRef.detectChanges();
  }
}

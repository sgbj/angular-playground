import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="flex min-h-screen flex-col bg-slate-900 ring-1 ring-white/10">
      <nav class="bg-black/30">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div class="relative flex h-16 items-center space-x-4">
            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company"
            />
            <a
              routerLink="/table-of-contents"
              class="text-slate-300 hover:bg-slate-800 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              routerLinkActive="bg-slate-900 text-white"
              >Table of contents</a
            >
            <a
              routerLink="/overflow-menu"
              class="text-slate-300 hover:bg-slate-800 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              routerLinkActive="bg-slate-900 text-white"
              >Overflow menu</a
            >
          </div>
        </div>
      </nav>

      <router-outlet></router-outlet>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'angular-playground';
}

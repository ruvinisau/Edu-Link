import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/core/helpers/routes/routes';

@Component({
  selector: 'app-footer-page',
  standalone: false,
  templateUrl: './footer-page.component.html',
  styleUrl: './footer-page.component.scss'
})
export class FooterPageComponent {
  public routes = routes;
  constructor(private router: Router) {}
  navigation() {
    this.router.navigate([routes.freelancer_project]);
  }
}

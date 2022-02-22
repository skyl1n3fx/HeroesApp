import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from "rxjs/operators";
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';
import { empty } from 'rxjs';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  constructor
    (
      private heroesService: HeroesService,
      private activatedRoute: ActivatedRoute,
      private router: Router,
      private _snackBar: MatSnackBar,
      public dialog: MatDialog
    ) { }

  publishers = [
    {
      id: 'DC Comics',
      desc: 'Dc Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }

  ];

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: ''
  };

  ngOnInit(): void {

    // Para saber si estoy en editar
    if (!this.router.url.includes('editar')) {
      return;
    }

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.heroesService.getHeroeFindId(id))
      )
      .subscribe(heroe => this.heroe = heroe);
  }

  guardar() {

    if (this.heroe.superhero.trim().length === 0) return;

    if (this.heroe.id) {
      // Actualizar
      this.heroesService.modificarHeroe(this.heroe)
        .subscribe(heroe => this.mostrarSnackBar('¡Registro actualizado!'));
    } else {
      //Guardar
      this.heroesService.agregarHeroe(this.heroe).subscribe(heroe => {
        this.router.navigate(['/heroes/editar', heroe.id]);
        this.mostrarSnackBar('¡Registro creado!')
      });
    }

  }

  borrarHeroe() {

    const dialog = this.dialog.open(ConfirmarComponent, {
      width: '550px',
      data: { ...this.heroe } // Mandar una copia del objeto
    });

    dialog.afterClosed().pipe(
      switchMap(valida => valida ? this.heroesService.eliminarHeroe(this.heroe.id!) : empty())
    ).subscribe(result => this.router.navigate(['/heroes/listado']));


  }

  mostrarSnackBar(mensaje: string) {
    this._snackBar.open(mensaje, 'Ok!', {
      duration: 2500
    });
  }


}

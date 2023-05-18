import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerService } from 'src/app/services/player.service';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Player } from 'src/app/commons/interfaces/player.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
 _playerService = inject(PlayerService);
 players$!: Observable<Player[]>
 searcher = new FormControl('');
_router = inject(Router);


 ngOnInit(){
 //this._playerService.getPlayer().subscribe((res)=> console.log(res));
 this.searcher.valueChanges.subscribe(search =>{
  if(search){
    this.players$ = this._playerService.getPlayer(search)
  }else{
    this.players$ = this._playerService.getPlayer();
  }
 });
 }
 editPlayer(player: Player){
this._router.navigateByUrl('users/edit');
 }
 deletePlayer(player: Player){
  if(confirm(`Seguro de borrar a ${player.name}`)){
    
  }
 }

}

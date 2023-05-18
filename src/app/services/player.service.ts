import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore, query, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Player } from '../commons/interfaces/player.interface';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private firestore : Firestore) { }

  addPlayer(player: Player){
    const playerRef = collection(this.firestore, 'players');
    return addDoc(playerRef, player);
  }

  getPlayer(filter=''){
    const playerRef = collection(this.firestore, 'players');
    let q = query(playerRef);
    if(filter){
      q = query(playerRef, where('name','==', filter));
    }
    return collectionData(q) as unknown as Observable<Player[]>;

  }

}

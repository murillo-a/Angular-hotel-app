import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  // property
  private reservations: Reservation[] = [];

  constructor() {
    
  }

  // CRUD

  getReservations(): Reservation[] {
    return this.reservations;
  }

  // undefined bc there may not be a reservation for the id we input (return an undefined value = value doesn't exist)
  getReservation(id: string): Reservation | undefined {
    // take each reservation, and search for the one with the id that matches the param ID
    return this.reservations.find(res => res.id === id);
  }

  // returns nothing
  addReservation(reservation: Reservation): void {
    this.reservations.push(reservation);
    localStorage.setItem("reservations", JSON.stringify(this.reservations));
  }

  deleteReservation(id: string): void {
    let index = this.reservations.findIndex(res => res.id === id);
    this.reservations.splice(index, 1);
    localStorage.setItem("reservations", JSON.stringify(this.reservations));
  }

  updateReservation(updatedReservation: Reservation): void {
    let index = this.reservations.findIndex(res => res.id === updatedReservation.id);
    this.reservations[index] = updatedReservation;
    localStorage.setItem("reservations", JSON.stringify(this.reservations));
  }
}

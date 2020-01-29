import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
    name: string;
    code: number;
    phone_number: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
    { name: 'Fred Albona', code: 12121, phone_number: 45654565665},
    { name: 'cliff Tomas', code: 14334, phone_number: 45654565665},
    { name: 'Albert Einstein', code: 34094, phone_number: 45654565665},
    { name: 'Antonio Taboura', code: 34974, phone_number: 45654565665},
    { name: 'Angelina Romer', code: 44334, phone_number: 45654565665},
    { name: 'Hakim fejji', code: 14334, phone_number: 45654565665},
    { name: 'Fred Albona', code: 12121, phone_number: 45654565665},
    { name: 'cliff Tomas', code: 14334, phone_number: 45654565665},
    { name: 'Albert Einstein', code: 34094, phone_number: 45654565665},
    { name: 'Antonio Taboura', code: 34974, phone_number: 45654565665},
    { name: 'Angelina Romer', code: 44334, phone_number: 45654565665},
    { name: 'Hakim fejji', code: 14334, phone_number: 45654565665},
    { name: 'Fred Albona', code: 12121, phone_number: 45654565665},
    { name: 'cliff Tomas', code: 14334, phone_number: 45654565665},
    { name: 'Albert Einstein', code: 34094, phone_number: 45654565665},
    { name: 'Antonio Taboura', code: 34974, phone_number: 45654565665},
    { name: 'Angelina Romer', code: 44334, phone_number: 45654565665},
    { name: 'Hakim fejji', code: 14334, phone_number: 45654565665},
];

@Component({
    selector: 'app-welcome-page',
    templateUrl: './welcome-page.component.html',
    styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent {
    displayedColumns: string[] = [ 'name', 'code'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}

